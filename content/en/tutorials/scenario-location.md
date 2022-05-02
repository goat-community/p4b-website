---
title: Scenarios - Location Planning
permalink: "/tutorials/scenario-location/"
weight: 40
sections:
- training

---
#### Description of the feature

GOAT allows you to develop your own location planning scenarios, for example, add a new supermarket or school and determine the impact on accessibility using heat maps and multi-isochrones.

#### Possible use cases (planning questions)

* How does accessibility to supermarkets in a neighbourhood change when the location of a supermarket is changed?
* How does accessibility to schools change when a new school is added?
* How well are the kindergartens distributed throughout the city? Where would be a good location for a new kindergarten?

#### Step-by-step tutorial for the exemplary planning task

##### 1 Scenario on accessibility to kindergartens

###### 1.1 Planning questions

* How well are kindergartens currently distributed across the city?
* In which parts of the city are there deficits in pedestrian accessibility?
* And how could these be remedied?
* Where would be a good location for a new kindergarten?

###### 1.2 Step-by-Step guide

1. Select the kindergartens as Thematic Data.

<img src="/images/training_materials/Scenario_POIs/kindergarten_en.png" alt="Amenity kindergarten" style="max-height:250px;"/>

2. Display the heatmap "Accessibility and Population Density." This shows how well the walking accessibility to the selected destinations is spatially distributed over the population. The red coloring indicates spaces that are currently undersupplied.

<img src="/images/training_materials/Scenario_POIs/accessibility_population_heatmap_en.png" alt="Amenity kindergarten"/>
   
3. Now go to the menu for scenario development and create a new scenario.

<img src="/images/training_materials/Scenario_POIs/create_scenario_en.png"  alt="New scenario" style="max-height:300px;"/>

4. Give the scenario a name and click "OK".

<img src="/images/training_materials/Scenario_POIs/name_scenario_en.png" alt="Name scenario" style="max-height:170px;"/>

5. Select the layer you want to edit, in this case the "Point of Interest" Layer.

<img src="/images/training_materials/Scenario_POIs/poi_en.png" alt="Edit POIs" style="max-height:200px;"/>

6. You're now in the scenario mode. To indicate the new mode, the menu color changes from green to dark blue.

7. Edit the kindergartens (move existing kindergartens or add new kindergartens) to cover the neighborhoods with accessibility deficits. 

<img src="/images/training_materials/Scenario_POIs/edit_tools_en.png" alt="Edit Kindergartens" style="max-height:120px;"/>

8. The "Comparison of Accessibility and Population Density" is heatmap automatically refreshed. The modified kindergartens are now included in the calculation.

<img src="/images/training_materials/Scenario_POIs/new_kindergarten_en.png" alt="Scenario View"/>
