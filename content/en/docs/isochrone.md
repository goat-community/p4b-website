---
title: Isochrones
permalink: /docs/isochrone/
sections:
- technical
weight: 40
---

#### Isochrone Definition

An isochrone or catchment area is an indicator that provides users with a clear visualization of how far they can travel in a given time from a selected location. Isochrones can be calculated from one or more starting points for modes such as walking, cycling, car or public transport. Depending on the selected mode, the corresponding routing network is used. Travel speed as well as travel time can be selected by the user.

In GOAT, Isochrone shapes are dynamically created in the front end based on a travel time grid. Therefore, isochrones can be created fast and for different intervals on the fly, which allows to dynamically compute isochrone shapes and boundaries from the routing network for each step in the front end.


#### Routing Modes

Depending on the chosen travel mode GOAT uses different parts of the street network. To keep the platform flexible the street network categories can be adjusted to the local study context when setting up the tool.

Depending on the availability of data in the study area and the planning purpose different routing profiles are available. These are walking, cycling, pedelec and public transport.


#### 1. Walking

Default routing profile for walking, considering all paths accessible by foot.

Default walking speed: 5km/h

<img src="\images\docs\technical_documentation\isochrone\walking_en.webp" alt="walking isochrone" style="max-height:85px;"/>

#### 2. Cycling

#### 2.1 Standard

Default routing profile for cycling, considering all paths accessible by bicycle.

Default cycling speed: 15km/h Depending on the surface, smoothness and slope of the different street segments, the cycling speed is adjusted accordingly.

<img src="\images\docs\technical_documentation\isochrone\standard_en.webp" alt="standard isochrone" style="max-height:88px;"/>

#### 2.2 Pedelec

Same as the standard routing profile, but with an increased cycling speed of 23 km/h.
For Pedelecs, slopes are considered with a lower impedance than for Standard bicycles.

<img src="\images\docs\technical_documentation\isochrone\pedelec_en.webp" alt="pedelec isochrone" style="max-height:80px;"/>


#### 3. Public transport

In this routing mode, users can compute intermodal accessibility centered around public transport.
As you can be seen in the figure users can adjust: 

-	The weekday (Monday to Sunday)
-	Time of the day (0h to 24h)
-	Access Mode (How the user accesses the station, e.g., Walk, Bicycle),
-	Egress Mode (How the user exists the station e.g., Walk, Bicycle) 
-	Transit Modes (Tram, Rail, Bus or Rail).

<img src="\images\docs\technical_documentation\isochrone\transit_en.webp" alt="transit isochrone" style="max-height:300px;"/>


#### What planning questions can be answered?

-   How many points of interest can be reached by public transport within the time frame?
-   How many supermarkets can be reached from a certain point in a 10-minute walk?
-   How many people can access a public transport station within 5 minutes of cycling?
-   How many people can access a specific location within 20min by rail-based public transport (tram, underground, train)?

#### How does the calculation work? 
##### Routing algorithms - Walking and Cycling:

The routing for walking and cycling is based on a custom implementation of the widely used Dijkstra algorithm. In the implementation, the routing network is dynamically created and therefore allows the computation of scenarios. 

While the routing network is saved in the PostgreSQL/PostGIS database, the routing is done in Python using the just-in-time compiler Numba.

##### Routing algorithms - Public Transport:

Since public transport isochrone requires a combination of different data types (sidewalks, bikeways, public transport schedules, etc.) it has more complexity than the other isochrone modes.

The data used is a combination of GTFS and OSM data through the R5 engine(Rapid Realistic Routing on Real-world and Reimagined networks). The routing results are intersected with population and POI’s from the GOAT database. R5 is the routing engine for Conveyal, a web-based system that allows users to create transportation scenarios and evaluate them in terms of cumulative opportunities and accessibility indicators. The figure on the below represents the grid interpolation with travel time cost from the R5 engine:

<img src="\images\docs\technical_documentation\isochrone\r5_en.webp" alt="r5 isochrone" style="max-height:350px;"/>

As a result, the grid will include accessibility information for all the amenities for each minute of the travel-time window.

<img src="\images\docs\technical_documentation\isochrone\grid_en.webp" alt="r5 isochrone" style="max-height:150px;"/>

The resolution of the grid cells depends on the Web Mercator zoom levels. Meanwhile, the resolution is a trade-off between performance and accuracy. Different zoom levels are implemented for walking/cycling and public transport. To consider the fact that walking and cycling is requiring analyses focusing on the local level. Generally speaking, higher resolutions are producing high-resolution results but are paired with longer computation times.

#### Visualization 

The isochrone itself is a shape that is derived from the routing grid using the "Marching square contour line algorithm", a computer graphics algorithm that can generate two-dimensional contour lines from a rectangular array of values (de Queiroz Neto et al. 2016). This algorithm transforms the grid from a 2D array to a shape to visualize or analyzed. An illustration of 2D image processing is shown in the figure. 

<img src="\images\docs\technical_documentation\isochrone\wiki.webp" alt="marching square" style="max-height:350px;"/>


If you want to learn more detailed examples of how the isochrone can be used within GOAT, you can access [the tutorials](../../tutorials/isochrone/) and [video sections](../../videos/) on the website.


#### References

J. F. de Queiroz Neto, E. M. d. Santos, and C. A. Vidal. “MSKDE - Using
Marching Squares to Quickly Make High Quality Crime Hotspot Maps”. en.
In: 2016 29th SIBGRAPI Conference on Graphics, Patterns and Images (SIBGRAPI).
Sao Paulo, Brazil: IEEE, Oct. 2016, pp. 305–312. isbn: 978-1-5090-3568-7. doi:
10.1109/SIBGRAPI.2016.049. url: https://ieeexplore.ieee.org/document/
7813048/

https://fr.wikipedia.org/wiki/Marching_squares#/media/Fichier:Marching_Squares_Isoline.svg

Majk Shkurti, "Spatio-temporal public transport accessibility analysis and benchmarking in an interactive WebGIS", Sep 2022. url: https://www.researchgate.net/publication/365790691_Spatio-temporal_public_transport_accessibility_analysis_and_benchmarking_in_an_interactive_WebGIS

Matthew Wigginton Conway,Andrew Byrd,Marco Van Der Linden. "Evidence-Based Transit and Land Use Sketch Planning Using Interactive Accessibility Methods on Combined Schedule and Headway-Based Networks", 2017. url: https://journals.sagepub.com/doi/10.3141/2653-06

