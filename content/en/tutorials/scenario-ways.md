---
title: Scenarios - Ways
permalink: "/tutorials/scenario-ways/"
weight: 30
sections:
- training

---
![Scenario Ways in GOAT](/images/tutorials/Tutorial_banners/scenario_ways_banner.webp "Scenario Ways in GOAT")

#### Description of the feature

GOAT allows you to develop your own scenarios, such as network modifications or building a new bridge. The developed scenario can be added to the current network, and changes in accessibility can be evaluated using isochrones.

#### Possible use cases (planning questions)

* How does the construction of a new bicycle bridge across the river change accessibility?
* Which variation of a new bike path provides access to the highest number of residents?

#### Video Tutorial

<iframe class="embed-responsive-item" src="https://player.vimeo.com/video/754212535" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen data-uk-responsive width="1920" height="1080"></iframe>

#### Step-by-step tutorial for the exemplary planning task

##### 1 Scenario for a new bicycle bridge

##### 1.1 Planning question

How does the construction of a new bicycle bridge across the river change accessibility?

##### 1.2 Step-by-Step guide

1. Go to the menu for scenario development and create a new scenario.

<img src="/images/tutorials/Scenario_POIs/Scenarios_location_planning_1.2.3_eng.webp"  alt="Create scenario" style="max-height:300px;"/>

2. Give the scenario a name and click "OK".

<img src="/images/tutorials/Scenario_building/name_scenario_en.webp"  alt="Name scenario" style="max-height:200px;"/>

3. Select the layer you want to edit, in this case the "Ways" Layer.

<img src="/images/tutorials/Scenario_building/scenario_ways_en.webp"  alt="Edit ways" style="max-height:250px;"/>

4. You're now in the scenario mode. To indicate the new mode, the menu color changes from green to dark blue.
   
5. Zoom to the location where you want to build a new bicycle bridge and select the surrounding road network using the circle tool.

<img src="/images/tutorials/Scenario_building/Scenarios_ways_1.2.5_eng.webp"  alt="Circle tool"/>

6. The existing path network will be displayed.

<img src="/images/tutorials/Scenario_building/scenario_ways_7_eng.webp"  alt="Fetched ways"/>

7. Draw a new route connection at the desired location, select "Bridge" as the route type and click "Save". The drawn paths are uploaded automatically into the database and are listed in the table on the bottom right. 

<img src="/images/tutorials/Scenario_building/Scenarios_ways_1.2.6_eng.webp"  alt="Draw"/>

8. Now you can analyze the effect of the new path connection on accessibility by calculating the isochrones for the current state and for the scenario. To do this, select the routing mode "Bike" and set the calculation mode to "Comparison." In the options you can set the travel speed.

<img src="/images/tutorials/Scenario_building/Scenarios_ways_1.2.7_eng.webp"  alt="Comparison" style="max-height:400px;"/>

9. Place the starting point for the isochrone calculation near the new bridge. As a result you will see one isochrone showing the actual state and one isochrone considering the new path connection. The result table shows the respective number of inhabitants within the isochrone.

<img src="/images/tutorials/Scenario_building/Scenarios_ways_1.2.8_eng.webp"  alt="Result" />

10. By activating the poi data, it gets visual how many amenities are accessibility each in the current and the scenario state. 

<img src="/images/tutorials/Scenario_building/Scenario_ways_result_poi_eng.webp"  alt="POIs" />
