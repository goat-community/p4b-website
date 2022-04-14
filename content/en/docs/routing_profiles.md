---
title: Routing Profiles
permalink: "/docs/routing_profiles/"
sections:
- technical
weight: 80

---
As GOAT is designed for active mobility, roads that are only designed for cars (e.g. highways) are excluded per default from the routing network.
In addition this can be adjusted when setting up the application. Depending on the data precision in the study area and the purpose of the GOAT version, different routing profiles are available.

When setting up your own GOAT version, the available routing profiles and according default speeds can be adjusted in configuration files when setting up GOAT. However, the speed can be adjusted directly in the user interface.

#### Walking

<b>Standard</b>

Default routing profile for walking, considering all paths accessible by foot.

Default walking speed: 5km/h

<b>Elderly</b>

Same as the standard routing profile, but with a reduced walking speed of 3 km/h.

#### Cycling

<b>Standard</b>

Default routing profile for cycling, considering all paths accessible by bicycle.

Default cycling speed: 15km/h

Depending on the surface, smoothness and slope of the different street segments, the cycling speed is adjusted accordingly.

<b>Pedelec</b>

Same as the standard routing profile, but with an increased cycling speed of 23 km/h.

For Pedelecs, slopes are considered with a lower impedance than for Standard bicycles.

#### Wheelchair

The wheelchair-routing is based on the walking routing, but considers only barrier-free paths and destinations. Stairs, unpaved paths and paths with high slopes are excluded from the routing. POIs that are not barrier-free are visualised with grey icons and are regarded as not accessible if the wheelchair routing profile is selected.

Via the layer "Wheelchair Usability" (to be found in the Street Level Quality layers), the conditions regarding the freedom from barriers of the paths can be displayed.

This routing profile helps to find shortcoming in the barrier-free network of a city. The importance of barrier-free infrastructure gets increasingly important when considering demographic change in many societies. In addition, a high percentage of the population is temporarily mobility impaired (e.g. by pushing a baby carriage or carrying heavy luggage). All these people and needs must be taken into account when planning infrastructure for active mobility.