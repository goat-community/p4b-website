---
title: Active Mobility Routing Profiles
permalink: "/docs/routing_profiles/"
sections:
- technical
weight: 80

---
Roads that are only designed for cars (e.g. motorways) are excluded per default from the routing network.
In addition this can be adjusted when setting up the application. Depending on the data precision in the study area and the purpose of the GOAT version, different routing profiles are available.

#### Walking

Default routing profile for walking, considering all paths accessible by foot.

Default walking speed: 5km/h

#### Cycling

<b>Standard</b>

Default routing profile for cycling, considering all paths accessible by bicycle.

Default cycling speed: 15km/h

Depending on the surface, smoothness and slope of the different street segments, the cycling speed is adjusted accordingly.

<b>Pedelec</b>

Same as the standard routing profile, but with an increased cycling speed of 23 km/h.

For Pedelecs, slopes are considered with a lower impedance than for Standard bicycles.

#### Wheelchair

With appropriate data availability, wheelchair analyses can also be included in GOAT.

The wheelchair-routing is based on the walking routing, but considers only barrier-free paths and destinations. Stairs, unpaved paths and paths with high slopes are excluded from the routing. POIs that are not barrier-free are visualised with grey icons and are regarded as not accessible if the wheelchair routing profile is selected.

This routing profile helps to find shortcoming in the barrier-free network of a city. The importance of barrier-free infrastructure gets increasingly important when considering demographic change in many societies. In addition, a high percentage of the population is temporarily mobility impaired (e.g. by pushing a baby carriage or carrying heavy luggage). All these people and needs must be taken into account when planning infrastructure for active mobility.