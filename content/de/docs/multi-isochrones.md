---
title: Multi-isochrones   
permalink: "/de/docs/multi-isochrones/"
sections:
- technical
weight: 40
---
#### Definition of Multi-isochrones

Multi-isochrones are a combination of multiple [isochrones](/docs/alphashape/ "Documentation on isochrones") to one (or several) larger polygons. The isochrones are calculated around Points-of-Interest (e.g. all supermarkets in the city). Therewith, it can be identified which share of inhabitants has access to important destinations of daily life within a specific travel time. 

#### Implementation of Multi-isochrone Calculation

For the multi-isochrone calculation, the user either defines a study area by drawing a polygon or by picking one or more city districts (Figure 1). Based on the user selection, all Points-of-Interests (POIs) of the currently activated POI categories that are located within or next to this study area are considered. The coordinates of the POIs are taken as starting points. The individual isochrones are united and intersected with the population data disaggregated on the building level. 

<img src="\images\docs\technical_documentation\multi-isochrones\multi-isochrone_1_en.webp" alt="study area" 
style="max-height:300px;"/>
<img src="\images\docs\technical_documentation\multi-isochrones\multi-isochrone_2_en.webp" alt="study area" 
style="max-height:300px;"/>

_Figure 1. For defining the study area, you can draw a polygon (on the left) or select city districts (on the right)._
   
As a result, the multi-isochrones are displayed on the map along with a table listing the population that is situated in the selected study area, and the percentage of them who have access to the selected POIs in both relative and absolute terms (Figure 2).

![Accessibility indicator: Multi-Isochrones](/images/docs/technical_documentation/multi-isochrones/multi-isochrone_3_en.webp "Accessibility indicator: Multi-isochrones")

_Figure 2. Result of the Multi-isochrone calculation._

Equivalent to the calculation of single [isochrones](/docs/alphashape/ "Documentation on isochrones"), multi-isochrones can be generated with all supported routing modes and represent all types of scenario building (network, points of interest, and buildings). The user can adjust travel times and speeds for the different routing modes.