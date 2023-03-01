---
title: Isochrones
permalink: "/tutorials/isochrone/"
weight: 20
sections:
- training
description: Possible use cases and step-by-step tutorials for exemplary planning
  cases for the GOAT isochrone feature.


---
![Isochrones in GOAT](/images/tutorials/Tutorial_banners/isochrone_banner.webp "Isochrones in GOAT")

#### Description of the feature

[Isochrones](/docs/alphashape/ "Documentation on isochrones") are isolines connecting all points that can be reached from a specific starting point within a certain time interval. GOAT allows the calculation of isochrones that take factors such as speed, infrastructure network, and traveling time into account. This can be adjusted automatically by choosing between the modes “Walking”, “Bike”, “Pedelec”, “Transit” or “Car”. Isochrones can be used as an indicator of accessibility in one specific location.

#### Possible use cases (planning questions)

* How many supermarkets can be reached from a certain point in a 10-minute walk?
* How many people can access a public transport station within 5 minutes of cycling?
* How many people can access a specific location within 20min by rail-based public transport (tram, underground, train)?

#### Video Tutorial
<iframe class="embed-responsive-item" src="https://player.vimeo.com/video/754209613" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen data-uk-responsive width="1920" height="1080"></iframe>

#### Step-by-step tutorials for exemplary planning tasks

#### 1 Walking accessibility to supermarkets

##### 1.1 Planning question

How many supermarkets can be reached from a certain point in 10 minutes walking?

##### 1.2 Step-by-Step guide

1. Display all supermarkets by enabling the amenity "Supermarket" in the Thematic Data Filter under the category "Shop".

<img src="/images/tutorials/Isochrone/amenity_supermarket_en.webp" alt="amenity supermarket" style="max-height:400px;"/>

2. Zoom in into the area where you want to calculate the isochrone.

3. Select the the routing profile and the desired walking speed.

<img src="/images/tutorials/Isochrone/Isochrone_1.2_select_eng.webp"  alt="choose isochrone range" style="max-height:175px;"/>

4. Place the starting point for the isochrone.

<img src="/images/tutorials/Isochrone/starting_point_isochrone_en.webp"  alt="set starting point" style="max-height:150px;"/>

5. After the calculation has been carried out, a window with the results opens automatically. From this window you can see the number of supermarkets that can be reached within 10 minutes.

<img src="/images/tutorials/Isochrone/results_supermarkets_en.webp"  alt="results"/>

6.	 In the result window that opens, the results can be analyzed by the use of different graphs. Therewith it can be seen how the supermarkets are spacial distributed. 

<img src="/images/tutorials/Isochrone/results_supermarkets_2_en.webp"  alt="results"/>

#### 2 Accessibility by bike

##### 2.1 Planning question

How many people can reach the train station within 5 minutes by bike?

##### 2.2 Step-by-Step guide

1. Change the routing mode to "cycling" and choose the desired speed.
   
<img src="/images/tutorials/Isochrone/Isochrone_2.2_select_eng.webp"  alt="Routing mode cycling" style="max-height:220px;"/>

2. Place the starting point for the isochrone calculation on the station.

<img src="/images/tutorials/Isochrone/starting_point_isochrone_en.webp"  alt="set starting point" style="max-height:150px;"/>

3. After the calculation has been carried out, a window with the results opens automatically. From this window you can see the population that can reach the train station within 10 minutes of cycling.

<img src="/images/tutorials/Isochrone/Isochrone_2.3_10minutes_eng.webp"  alt="result"/>

4. The travel time can interactively be adjusted to 5 minutes by moving the slider. 
   
<img src="/images/tutorials/Isochrone/Isochrone_2.3_5minutes_eng.webp"  alt="result"/>

5. Besides the table, the population count can be visualized in a graph.

<img src="/images/tutorials/Isochrone/Isochrone_2.result_different_graph_Eng.webp"  alt="download" style="max-height:300px;"/>

6. By clicking on the download button you can download the isochrones as GeoJSON, Shapefile or XML and the result table as Excel file.

<img src="/images/tutorials/Isochrone/Isochrone_2.4_export_eng.webp"  alt="download" style="max-height:230px;"/>


#### 3 Accessibility by public transport

##### 3.1 Planning question

How many people can access a specific location within 20min by rail-based public transport (tram, underground, train)?

##### 3.2 Step-by-Step guide

1. Set the routing mode to “Transit” and choose the calculation options (weekday, time, access mode and egress mode) as desired. In the “Transit Modes” section, you can select which public transportation options shall be considered for the calculation. In this example, we focus on rail-based public transport (tram, underground and train). To get some additional information on the public transport network, you can activate the public transport background map. 

<img src="/images/tutorials/Isochrone/isochrone_3.1public_en.webp"  alt="change_routing_mode" style="max-height:400px;"/>

2. Click "Isochrone Single" and zoom in the area where you want to calculate the isochrone.

<img src="/images/tutorials/Isochrone/isochrone_3.2public_en.webp"  alt="choose isochrone" style="max-height:400px;"/>

3. Place the starting point for the isochrone.

<img src="/images/tutorials/Isochrone/isochrone_3.3public_en.webp"  alt="choose starting point" style="max-height:400px;"/>

4. After the calculation has been carried out, a window with the results opens automatically. From this window you can see how many people can access a specific location within 20min by rail-based public transport. You can also change the travel time by using the slider.

<img src="/images/tutorials/Isochrone/isochrone_3.4public_en.webp"  alt="result" style="max-height:400px;"/>

5. You can also view the population graph with travel time by clicking the graph button indicated by the blue box.

<img src="/images/tutorials/Isochrone/isochrone_3.5public_en.webp"  alt="result-graph" style="max-height:400px;"/>















