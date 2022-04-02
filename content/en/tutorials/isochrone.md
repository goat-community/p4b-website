---
title: Isochrones
permalink: "/tutorials/isochrone/"
weight: 10
sections:
- training
description: Possible use cases and step-by-step tutorials for exemplary planning
  cases for the GOAT isochrone feature.


---
#### Description of the feature

Isochrones are isolines connecting all points that can be reached from a specific starting point within a certain time interval. GOAT allows the calculation of isochrones that take factors such as speed, infrastructure network, and traveling time into account. This can be adjusted automatically by choosing between the following modes: walking (standard or elderly), cycling, and wheelchair. Isochrones can be used as an indicator of accessibility in one specific location.

#### Possible use cases (planning questions)

* How many supermarkets can be reached from a certain point in a 10-minute walk?
* How many people can access a public transport station within 5 minutes of cycling?
* What is the comparison of accessibility by foot and by wheelchair?

#### Step-by-step tutorials for exemplary planning tasks

##### 1 Accessibility to supermarkets

###### 1.1 Planning question

How many supermarkets can be reached from a certain point in 10 minutes walking?

###### 1.2 Step-by-Step guide

1. Display all supermarkets by enabling the amenity "Supermarket" in the Thematic Data Filter under the category "Shop".

<img src="/images/training_materials/Isochrone/amenity_supermarket.webp" alt="amenity supermarket" style="max-height:200px;"/>

2. Zoom in into the area where you want to calculate the isochrone.
3. Set the isochrone range to 10 minutes.

<img src="/images/training_materials/Isochrone/isochrone_range_walking.webp"  alt="choose isochrone range" style="max-height:200px;"/>

4. Place the starting point for the isochrone.

<!-- ![](/images/training_materials/Isochrone/starting-point-isochrone.webp) -->
<img src="/images/training_materials/Isochrone/starting-point-isochrone.webp"  alt="set starting point" style="max-height:150px;"/>

5. After the calculation has been carried out, a window with the results opens automatically. From this window you can see the number of supermarkets that can be reached within 10 minutes.

![Reached supermarkets](/images/training_materials/Isochrone/isochrone_supermarkets.webp)

##### 2 Bicycle Routing

###### 2.1 Planning question

How many people can reach the train station within 5 minutes by bike?

###### 2.2 Work steps

1. Change the routing mode to “cycling”.

<!-- ![](/images/training_materials/Isochrone/cycling-mode.webp) -->
<img src="/images/training_materials/Isochrone/cycling-mode.webp"  alt="Routing mode cycling" style="max-height:250px;"/>

2. Set the isochrone range to 5 minutes.

<!-- ![choose isochrone range](/images/training_materials/Isochrone/isochrone-range.webp) -->
<img src="/images/training_materials/Isochrone/isochrone-range.webp"  alt="choose isochrone range" style="max-height:170px;"/>

3. Place the starting point for the isochrone calculation on the station.

<!-- ![](/images/training_materials/Isochrone/starting-point-isochrone.webp) -->
<img src="/images/training_materials/Isochrone/starting-point-isochrone.webp"  alt="set starting point" style="max-height:150px;"/>

4. After the calculation has been carried out, a window with the results opens automatically. From this window you can see the population that can reach the train station within 5 minutes of cycling.

![Reached population](/images/training_materials/Isochrone/isochrone_trainstation.webp)

##### 3 Wheelchair routing

###### 3.1 Planning questions

* How does the 10-minute accessibility of a hospital differ from pedestrian to people with reduced mobility?
* Where are barriers in the network and how could they be improved?

###### 3.2 Work steps

1. Select the routing mode "walking".

<!-- ![](/images/training_materials/Isochrone/walking-mode.webp) -->
<img src="/images/training_materials/Isochrone/walking-mode.webp"  alt="Routing mode walking" style="max-height:250px;"/>

2. Set the isochrone range to 10 minutes.

<!-- ![](/images/training_materials/Isochrone/isochrone_range_walking.webp) -->
<img src="/images/training_materials/Isochrone/isochrone_range_walking.webp"  alt="choose isochrone range" style="max-height:170px;"/>

3. Place the starting point for the isochrone calculation at the entrance of the Hospital.

<!-- ![](/images/training_materials/Isochrone/starting-point-isochrone.webp) -->
<img src="/images/training_materials/Isochrone/starting-point-isochrone.webp"  alt="set starting point" style="max-height:150px;"/>

4. Select the routing mode "wheelchair" and repeat the calculation.

<!-- ![](/images/training_materials/Isochrone/wheelchair-mode.webp) -->
<img src="/images/training_materials/Isochrone/wheelchair-mode.webp"  alt="Routing mode wheelchair" style="max-height:270px;"/>

5. Now it's visible, how accessibility differs when regarding a person with reduced mobility (red isochrone) in comparison to a pedestrian (blue isochrone).

<!-- ![](/images/training_materials/Isochrone/isochrone_wheelchair.webp) -->
<img src="/images/training_materials/Isochrone/isochrone_wheelchair.webp"  alt="isochrone comparison"/>

6. To find the barriers in the network, display the street network used for both isochrones. From this you can see which roads were used for the corresponding routing.

<!-- ![](/images/training_materials/Isochrone/additional-layer.webp) -->
<img src="/images/training_materials/Isochrone/additional-layer.webp"  alt="show additional layer" style="max-height:200px;"/>