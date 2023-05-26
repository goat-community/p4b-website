---
title: Glossary   
permalink: "/docs/glossary/"
sections:
- about
weight: 30
---


#### Accessibility
In general, accessibility is an important consideration in GIS and planning, as it can have a significant impact on the quality of life of residents in a particular area. By measuring and analyzing accessibility, planners can identify areas where there may be gaps in essential services and develop measures to improve access for residents. 

Accessibility is defined first in 1959 as “the potential of opportunities for interaction”, which refers to the ease with which people or goods can reach a particular location (Hansen, 1959). In the context of GIS and urban planning, it refers to the ease with which people can reach essential services, such as healthcare facilities, schools, or supermarkets. 

#### Accessibility Instrument
An Accessibility Instrument is a tool used to measure and analyze the accessibility of a particular location or region. It takes into account factors such as transportation options, distance, and travel time to determine how easily people can access essential services such as healthcare and education. This information is important for planners and policymakers to identify areas with low accessibility and develop strategies to improve them. 

#### Active Mobility
Active mobility refers to the use of human-powered modes of transport, such as walking, and cycling. It is an important part of sustainable transport as it reduces dependence on cars and helps to reduce carbon emissions. Active mobility also has many health benefits, such as reducing the risk of obesity and cardiovascular disease.
 
<p align="center">
<img src="/images/docs/technical_documentation/glossary/active_mobility_freepik.webp" alt="active_mobility" style="max-height:400px;"/>  
<p align="center">
<a href="http://www.freepik.com">Designed by pch.vector / Freepik</a>

#### Area of Interest (AOI)
An Area of Interest (AOI) is a specific geographical region or boundary that is of particular interest or importance to a particular study or analysis. It can be a watershed, a forest, a park or any other geographic area relevant to the study. The AOI is usually defined by a set of coordinates or a polygonal boundary that encompasses the region of interest. Therefore, it is also important for mapping and visualisation purposes, as it helps to provide context for the data being analysed and presented. 

#### Connectivity
Connectivity refers to the ability to establish relationships or connections between geographic features that help inform decision making and optimize spatial analysis. It is also the degree to which features in a spatial dataset are linked or connected.  

For example, in a transport network dataset, connectivity would refer to the ability to travel from one location to another by following a connected network of roads, railways or other transport infrastructure. In this case, network connectivity is critical for route optimization, emergency response planning, and other transportation-related applications.  

In a planning context, connectivity can refer to the degree to which different parts of a city or region are linked by different modes of transport, such as roads, public transport and cycleways. Good connectivity is important to ensure access to services and amenities and to promote sustainable urban development. We are using rivers, big road with only few crossings or railway lines etc. as connectivity barriers within GOAT. 

#### H3 Grid <img src="/images/docs/technical_documentation/glossary/H3_grid_logo.webp" alt="h3_grid_logo" style="max-height:80px;"/>  
The H3 grid is a geospatial indexing system by Uber Technologies that partitions the Earth's surface into a hierarchical grid of hexagonal cells for more efficient and accurate representation and analysis of geospatial data. It uses a hexagonal tiling approach based on an icosahedron, creating a hierarchical structure with multiple levels of resolution. Key features include hierarchical indexing, compact and non-overlapping cells, global coverage, nearest neighbor analysis, and open source. The hexagonal shape allows for equidistant and consistent spatial representation, with different resolutions (the resolution 10 (approx. 75m edge length) is generally used for computing travel-times and resolution 9 (approx. 200m edge length) or higher is used for visualization. Values are aggregated from the higher to lower resolution by computing the mean) used for computing and visualization in GOAT. 
<p align="center">
<img src="/images/docs/technical_documentation/glossary/H3_grid.webp" alt="h3_grid" style="max-height:250px;center"/>  
<p align="center">
Source:https://www.gislounge.com/h3-open-source-geospatial-indexing-system/ 
<p>

#### Heatmap
A heatmap is a graphical representation of spatial data that uses color to indicate the density of a particular feature or phenomenon. It is a visualisation tool used to identify areas with high or low concentrations of activity.  

Heatmaps are created by analysing the density of point, line or polygon features in a spatial dataset. The features are often represented by points or small polygons, and the density of these features within a specified area, such as a grid cell, is calculated. The resulting density values are then visualised as a color gradient on a map, with high-density areas represented by cool colors (such as green or blue) and low-density areas represented by warm colors (such as red or orange).  

One use case for the heatmaps used in GOAT was to analyse the local accessibility (see [Heatmaps](https://plan4better.de/en/docs/heatmap/)) advice of different amenities, such as cafes, restaurants or supermarkets. The heatmap uses different colours to indicate areas with high concentrations of each type of amenity. This information can then be used to make decisions about aspects of planning. 

#### Indicator
An indicator is a measurable variable or factor that provides insight into a particular phenomenon or trend. It can be also defined as monitoring and assessment of urban conditions, trends, and policies. In planning, indicators can be used to track progress towards specific goals or objectives, such as improving accessibility. 

#### Isochrone
An isochrone or catchment area is an indicator that provides users with a clear visualization of how far they can travel in a given time from a selected location. Isochrones can be calculated from one or more starting points for modes such as walking, cycling, car or public transport. Depending on the selected mode, the corresponding routing network is used. Travel speed as well as travel time can be selected by the user. 

In GOAT, Isochrone shapes are dynamically created in the front end based on a travel time grid. Therefore, isochrones can be created fast and for different intervals on the fly, which allows to dynamically compute isochrone shapes and boundaries from the routing network for each step in the front end. For more information see [Isochrones](https://plan4better.de/en/docs/isochrone/) 


#### Land Use
Land use refers to the way that land is used and developed within a particular area. This can include residential, commercial, industrial, or natural uses, among others. Land use is an important factor in transportation planning, as it can influence travel patterns, accessibility, and environmental impact. For example, mixed-use development can reduce the need for car travel and increase walkability, while preserving natural areas can help to reduce carbon emissions and support biodiversity. 

<p align="center">
<img src="/images/docs/technical_documentation/glossary/landuse.webp" alt="land-use" style="max-height:300px;"/>  
<p align="center">
Source: https://accelerator.chathamhouse.org/article/land-use-challenges 
<p>

#### Local Accessibility
Local accessibility, also known as neighborhood-level accessibility, refers to the ease with which people can access essential services within a specific neighborhood or area (Handy, 1992). This type of accessibility (mostly for the active modes; walking & cycling) is typically measured using metrics such as the distance from a particular location to the nearest service, the number of services within a certain radius, or the travel time, which is used in GOAT, required to reach a service.  

#### Micromobility
Micromobility is a growing trend in urban transportation, involving small, lightweight vehicles like electric scooters and bicycles. These compact modes of transport offer convenient, eco-friendly solutions for short-distance travel. 

One of the key advantages of micromobility is its positive impact on the environment. By replacing traditional modes of transportation with electric scooters and bicycles, micromobility helps reduce air pollution and greenhouse gas emissions. Additionally, it promotes active mobility, contributing to healthier lifestyles and reducing the carbon footprint. 

<p align="center">
<img src="/images/docs/technical_documentation/glossary/micromobility_freepik_2.webp" alt="micromobility" style="max-height:300px;"/>  
<p align="center">
<a href="http://www.freepik.com">Designed by pch.vector / Freepik</a>


#### Open Source <img src="/images/docs/technical_documentation/glossary/open_source.webp" alt="open_source" style="max-height:60px;"/>  
Open source refers to software or other products that are made available to the public with their source code freely accessible and modifiable. This allows individuals and organizations to modify and improve the product as needed, without restrictions on use or distribution. 

#### Planning Support System (PSS)
A Planning Support System is a digital tool used to support the planning and decision-making process for urban and regional development. It uses data and models to provide information on various aspects of planning, such as land use, transportation, and environmental impact. The tool allows planners to explore different scenarios and evaluate the potential outcomes of their decisions. 

#### Point of Interest (POI)
A point of interest (POI) is a specific location or point within a geographical area that is of particular interest or importance to a particular study or analysis. It can be a landmark, a building, an amenity or any other point that is relevant to the study. The POI is usually defined by a set of coordinates or a geographic identifier such as an address or a place name. 

In spatial analysis, the POI is used as a way of identifying and analysing data for a specific location. Therefore, POIs are also important for mapping and visualisation purposes, as they help to identify key locations and features within a geographical area. 

#### Quintile Classification
Quintile classification is a commonly used method in Geographic Information Systems (GIS) to divide data into equal groups based on their values. This method is useful for analyzing and visualizing patterns in data and can help identify trends and patterns that may not be obvious easily. 

In GIS, quintile classification is often used to create choropleth maps, which are maps that use color to represent different values of a variable. For example, a choropleth map of the population density of a city. The map would be divided into five color-coded categories, with each category representing a different range of population densities. 

The accessibility heatmaps in GOAT use quintile classification to determine what is high or low accessible. For the classification, we first assign all zero values which have “no accessibility” and then we sort the data from lowest to highest. We divide the data into 6 equal groups, each containing 20% of the total data. The values in each group are assigned a rank from 0 to 5, with 0 being the lowest (no accessibility) and 5 being the highest (very high accessibility). 

#### Regional Accessibility
Regional accessibility refers to the ease with which people can access essential services across a larger region, such as a city or a county (mostly for the motorized modes; public transport & car). Based on panel data from the national travel survey, regional accessibility is determined by calculating the total number of residents who need access to and from a specific location within generally accepted travel times, such as 30 minutes by car and 45 minutes by public transportation for home-to-work travel and occasional shopping trips (Straatemeier, 2008).  

OR

Regional accessibility is a fundamental aspect of urban and regional planning. It involves the deliberate design and implementation of transportation networks and infrastructure to ensure convenient and efficient travel within and between regions. Effective planning considers factors such as road networks, public transportation systems, pedestrian-friendly design, and digital connectivity to enhance accessibility for all residents. By incorporating regional accessibility into planning concepts, communities can foster equitable access to employment, education, healthcare, and other essential services, ultimately improving the overall livability and sustainability of the region.

#### Routing <img src="/images/docs/technical_documentation/glossary/routing_logo.webp" alt="open_source" style="max-height:80px;"/>  
Routing refers to the process of finding the best or most efficient path from one location to another. This is commonly used in transportation planning and navigation systems to help people get from point A to point B but also finds application in accessibility analysis to route from point A into all directions. 

#### Sustainability <img src="/images/docs/technical_documentation/glossary/sustainability.webp" alt="open_source" style="max-height:80px;"/>  
Sustainability refers to meeting the needs of the present without compromising the ability of future generations to meet their own needs. In the context of urban and regional development, sustainability involves balancing economic, social, and environmental factors to create livable and resilient communities. This includes reducing carbon emissions, promoting active mobility, and preserving natural resources. 

#### Transport Mode
Transport mode refers to the type of transportation used for a particular trip or journey. This can include modes such as transit (bus, train, subway), cycling (pedelec, bike), walking, and driving. The choice of transport mode can have a significant impact on factors such as travel time, cost, and environmental impact. 
















### References
Hansen, W.G. (1959). How accessibility shapes land use. Journal of the American Institue of Planners. 25, 73–76.
https://doi.org/10.1080/01944365908978307 

Handy, S. L. (1992). Regional Versus Local Accessibility: Neo-Traditional Development and its Implications for Non-work Travel. Built Environment (1978-), 18(4), 253–267. http://www.jstor.org/stable/23288518 

Straatemeier, T. (2008). How to plan for regional accessibility?. Transport Policy, 15(2), 127-137. 
https://doi.org/10.1016/j.tranpol.2007.10.002 
