---
title: Scenarios - Location Planning
permalink: "/tutorials/scenario-location/"
weight: 40
sections:
- training

---
![Scenario Location Planning in GOAT](/images/tutorials/Tutorial_banners/scenario_location_planning_banner.webp "Scenario Location Planning in GOAT")

#### Description of the feature

GOAT allows you to develop your own location planning scenarios, for example, add a new supermarket or school and determine the impact on accessibility using heat maps and multi-isochrones.

#### Possible use cases (planning questions)

* How does accessibility to supermarkets in a neighbourhood change when the location of a supermarket is changed?
* How does accessibility to schools change when a new school is added?
* How well are the kindergartens distributed throughout the city? Where would be a good location for a new kindergarten?

#### Video Tutorial

<iframe class="embed-responsive-item" src="https://player.vimeo.com/video/754586552" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen data-uk-responsive width="1920" height="1080"></iframe>

#### Step-by-step tutorial for the exemplary planning task

##### 1 Scenario on accessibility to kindergartens

###### 1.1 Planning questions

* How well are kindergartens currently distributed across the city?
* In which parts of the city are there deficits in pedestrian accessibility?
* And how could these be remedied?
* Where would be a good location for a new kindergarten?

###### 1.2 Step-by-Step guide

1. Select the kindergartens as Thematic Data.

<img src="/images/tutorials/Scenario_POIs/Scenarios_location_planning_1.2.1_select_eng.webp" alt="Amenity kindergarten" style="max-height:300px;"/>

2. Display the indicator "Accessibility and Population Density." This shows how well the walking accessibility to the selected destinations is spatially distributed over the population. The red coloring indicates spaces that are currently undersupplied.

<img src="/images/tutorials/Scenario_POIs/Scenarios_location_planning_1.2.2_eng.webp" alt="Amenity kindergarten"/>
   
3. Now go to the menu for scenario development and create a new scenario.

<img src="/images/tutorials/Scenario_POIs/Scenarios_location_planning_1.2.3_eng.webp"  alt="New scenario" style="max-height:300px;"/>

4. Give the scenario a name and click "OK".

<img src="/images/tutorials/Scenario_POIs/Scenarios_location_planning_1.2.4_eng.webp" alt="Name scenario" style="max-height:170px;"/>

5. Select the layer you want to edit, in this case the "Point of Interest" Layer.

<img src="/images/tutorials/Scenario_POIs/Scenarios_location_planning_1.2.5_eng.webp" alt="Edit POIs" style="max-height:270px;"/>

6. You're now in the scenario mode. To indicate the new mode, the menu color changes from green to dark blue.

7. Edit the kindergartens (move existing kindergartens or add new kindergartens) to cover the neighborhoods with accessibility deficits. 

<img src="/images/tutorials/Scenario_POIs/Scenarios_location_planning_1.2.7_eng.webp" alt="Editing tools" style="max-height:130px;"/>

8. For example, add a new kindergarten.

<img src="/images/tutorials/Scenario_POIs/Scenarios_location_planning_1.2.7_attribute_eng.webp" alt="Add Kindergartens" style="max-height:250px;"/>

9.  The "Comparison of Accessibility and Population Density" heatmap automatically refreshed. The modified kindergartens are now included in the calculation.

<img src="/images/tutorials/Scenario_POIs/Scenarios_location_planning_1.2.8_eng.webp" alt="Scenario View"/>
