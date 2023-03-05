---
title: Multi-Isochrones
permalink: "/tutorials/multiisochrones/"
weight: 20
sections:
- training
description: Step-by-step guide for how to use the multi-isochrones feature in GOAT
  for an exemplary planning task.

---
![Isochrones in GOAT](/images/tutorials/Tutorial_banners/multi_isochrone_banner.webp "Isochrones in GOAT")

#### Description of the feature

GOAT enables the calculation of [multi-isochrones](/en/docs/multi-isochrones/ "Docs about multi-isochrones"), which show how many residents from a certain neighbourhood have access to a facility (e.g. supermarket, kindergarten, public transport stop) in a certain travel time. The significant difference between multi-isochrones and single-isochrones is that multi-isochrones allow you to choose several starting points and compute the catchment areas for all of them at once. 

#### Possible use cases (planning questions)

* How well are the supermarkets currently distributed over the city? In which districts do you have accessibility deficits?
* How many inhabitants can reach a public transport stop by bicycle in a given travel time?

#### Video Tutorial

<iframe class="embed-responsive-item" src="https://player.vimeo.com/video/754227700" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen data-uk-responsive width="1920" height="1080"></iframe>

#### Step-by-step tutorial for an exemplary planning task

#### 1 Accessibility to supermarkets

##### 1.1 Planning question

How well are the supermarkets currently distributed over the city? In which districts do you have accessibility deficits?

##### 1.2 Step-by-Step guide

1. Display the supermarkets as thematic data (can be found in the "shop" category).

<img src="/images/tutorials/Multiisochrones/Multi_isochrone_1.1_freiburg_eng.webp"  alt="choose isochrone range"/>

2. Set the routing options as desired (e.g. walking, 5km/h, 10 min travel time, 2 isochrones).
   
<img src="/images/tutorials/Multiisochrones/Multi_isochrone_1.2.2_select_option_eng.webp"  alt="choose isochrone range" style="max-height:180px;"/>

3. Switch to the "Multiple" isochrone calculation mode and select the "Study Area" method, which later lists all results differentiated by districts.

<img src="/images/tutorials/Multiisochrones/Multi_isochrone_1.2.3_select_option_eng.webp"  alt="Multi Isochrone" style="max-height:200px;"/>

4. Then select all districts that you want to include in the calculation by clicking on the map.

<img src="/images/tutorials/Multiisochrones/Multi_isochrone_1.2.4_select_studyarea_eng.webp"  alt="Select Districts"/>

5. Click on "Calculate."

<img src="/images/tutorials/Multiisochrones/Multi_isochrone_1.2.5_calculate_eng.webp"  alt="Calculate" style="max-height:220px;"/>

6. The resulting multi-isochrones shows the catchment areas of the supermarkets (here for the mode "pedestrian" with 10 minutes catchment area). The corresponding table shows, sorted by district, how many people out of the total population can reach a supermarket in 10 minutes walking distance. Via the "download" button you can download the results.

<img src="/images/tutorials/Multiisochrones/Multi_isochrone_1.2.6_10minutes_eng.webp"  alt="Result 10 Min" />

7. Similar to the single isochrones, the travel times of the multi-isochrones can be adjusted dyamically via the slider.

<img src="/images/tutorials/Multiisochrones/Multi_isochrone_1.2.6_5minutes_eng.webp"  alt="Result 5 Min" />

#### 2 Accessibility to public transport

##### 1.1 Planning question

How many inhabitants can reach a public transport stop by bicycle in a given travel time?

##### 1.2 Step-by-Step guide

1. Select the desired public transport stops (e.g. bus, tram) in the menu "Filter Thematic Data". 

<img src="/images/tutorials/Multiisochrones/Multi_isochrone_2.1.2_select_transportation_eng.webp"  alt="Select POIs" />
   
2. Set the routing options as desired (e.g. bike, 15km/h). 
   
3. Switch to the isochrone calculation mode "Multi" and select the method "District" and select the districts on the map or draw a polygon.

<img src="/images/tutorials/Multiisochrones/Multi_isochrone_2.1.3_select_study_area_eng.webp"  alt="Select study area" />
   
4. Click on "Calculate". 
   
5. The resulting multi-isochrones show you the catchment areas of the public transport stops (here for the mode "bicycle" with 10 minutes catchment area). The corresponding table shows, sorted by district, how many people of the total population can reach a public transport stop in 10 minutes by bike.

<img src="/images/tutorials/Multiisochrones/Multi_isochrone_2.1.4_calculation_eng.webp"  alt="Result" />
