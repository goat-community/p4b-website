---
title: Heatmap - Local Accessibility
permalink: "/docs/heatmap/"
sections:
- technical
weight: 60

---
GOAT allows you to calculate and visualize gravity-based accessibility measures, which are visualized as heatmaps. Based on pre-calculated travel times the heatmap is computed dynamically based on the selection of the Points-of-Interest (POIs). A hexagonal grid is used for visualization.

![GOAT local accessibility](/images/lokale-erreichbarkeit-1-englisch.webp "GOAT local accessibility")

#### 1. Calculation

The calculation of the heatmap is calculated with the help of gravity-based measures and can be operationalized as:

![Accessibility formula](/images/docs/technical_documentation/heatmap/place-based_accessibility_measures.webp "Accessibility formula")

where the accessibility <b>A</b> of origin <b>i</b> is the sum of all opportunities <b>O</b> available at destinations <b>j</b> weighted by some function of the travel time <b> t<sub>ij</sub></b>  between <b>i</b> and <b>j</b>. GOAT uses the modified gaussian function as an impedance function for the calculation:

![Impedance function](/images/docs/technical_documentation/heatmap/Gaussian_function.webp "Impedance function")

Travel times are computed in seconds. The cut-off value of 20 minutes is used, this means that destination that are further away then 20 minutes are considered as non accessible and thus not considered in the calculation of the accessibility. The sensitivity parameter defines how accessibility changes with increasing travel time. As the sensitivity parameter is decisive when measuring accessibility, GOAT allows you to adjust them. The following graphs show the influence of the sensitivity parameter on accessibility.

![Sensitivity index](/images/docs/technical_documentation/heatmap/sensitivitätsindex_en.webp "Sensitivity index")

Similarly, the weighting can be changed. Thus, for example, one POI type (e.g. hypermarkets) can be assigned a higher accessibility effect than other POI types (e.g. discount supermarkets). 

#### 2. Classification

In order to classify the accessibility levels that were computed for each grid cell, a classification based on quintiles is used.

#### 3. Example of calculation

##### 3.1 Calculation travel times

The following example illustrates how the <i>local accessibility heatmap</i> is computed. The travel times are calculated for each grid cell to the concerning destination on the street network.

![Simplified example](/images/docs/technical_documentation/heatmap/grid_groceries.webp "Simplified example")

For the hexagon shown here, the calculation yields the following results, depending on the sensitivity parameter:

Uniform sensitivity parameter:
![Accessibility calculation](/images/docs/technical_documentation/heatmap/accessiblity_uniform_sensitivity-index.webp "Accessibility calculation")

Varying sensitivity parameter for Hypermarket:
![Accessibility calculation](/images/docs/technical_documentation/heatmap/accessiblity_different_sensitivity-indices.webp "Accessibility calculation")

Applied in GOAT, the following differences arise:

##### 3.2 Calculation with uniform sensitivity parameter

In the first example, the accessibility for grocery shops in 15 min is calculated using a uniform sensitivity parameter (β=300,000) for all shops. The result looks like this: 

![GOAT local accessibility to grocery shops](/images/lokale-erreichbarkeit-4-englisch.webp "GOAT local accessibility to grocery shops")

##### 3.3 Calculation with different sensitivity parameters

In the second example, the accessibility of grocery shops in 15 min is performed using different sensitivity parameters (β=300,000 and β=400,000). This means that the sensitivity parameter depends on the different grocery shop types. For this example, we used β=400,000 for hypermarkets and β=300,000 for discounters and supermarkets. This gives the following result:

![Result with different sensitivity parameters](/images/lokale-erreichbarkeit-5-englisch-png.webp "Result with different sensitivity parameters")

By comparing the two results, some differences can be identified.

#### References

Kwan, Mei-Po. 1998. “Space-Time and Integral Measures of Individual Accessibility: A Comparative Analysis Using a Point-Based Framework.” Geographical Analysis 30 (3): 191–216. [https://doi.org/10.1111/j.1538-4632.1998.tb00396.x](https://doi.org/10.1111/j.1538-4632.1998.tb00396.x).

Vale, D.S., and M. Pereira. 2017. “The Influence of the Impedance Function on Gravity-Based Pedestrian Accessibility Measures: A Comparative Analysis.” Environment and Planning B: Urban Analytics and City Science 44 (4): 740–63. [https://doi.org/10.1177%2F0265813516641685](https://doi.org/10.1177%2F0265813516641685).

Higgins, Christopher D. 2019. “Accessibility Toolbox for R and ArcGIS.” Transport Findings, May. [https://doi.org/10.32866/8416](https://doi.org/10.32866/8416).