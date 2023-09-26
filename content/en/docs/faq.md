---
title: FAQs  
permalink: "/de/docs/faq/"
lang: de
sections:
- about
weight: 60
---


Here you will find answers to the most frequently asked questions about GOAT.

### 1. Data
#### What data is included in GOAT?

GOAT contains a variety of data sets, including population, buildings, transport networks (walking and cycling, public transportation, car), timetable data, administrative boundaries, as well as Points-of-Interest (POI) related to education, gastronomy, mobility, health, service facilities, shopping and leisure.

#### Where does the data come from?

A good data basis is a basic requirement for any analysis. Various spatial and non-spatial data sets are integrated in GOAT. The data originates from various Open Data portals, the Federal Agency for Cartography and Geodesy, the Land Surveying Offices, OpenStreetMap and the Census. In addition, we selectively collect own data sets and commercial data is purchased if required. Further data sets can be integrated flexibly.

#### How often is the data updated in GOAT?

We ensure that the data in our applications is up to date by updating it at least once a year. If needed, more frequent updates are also possible, especially for rapidly changing Points-of-Interests (POI) or public transportation timetables. 

#### Can I upload my own data?

Yes, additional datasets and data sources can be flexibly integrated as needed. GOAT supports common formats such as Shapefiles, GeoJSON and WMS layer.

#### Where is my data stored?

Data security is our top priority, which is why all data is stored on a secure server in Germany in compliance with GDPR regulations.


You can find further information about the data [here](/en/docs/data/ "further information on the data").

### 2. Application & Functionalities

#### For what purposes do municipalities or planning offices apply GOAT?

GOAT is used, among other things, for the creation of local mobility concepts, public transport planning, cycling infrastructure planning, urban development concepts and retail concepts, or to secure basic services. The software is typically obtained through a SaaS subscription. However, we also offer reports to address specific planning questions. You can find specific use cases in our [sample report](/en/reports/ "sample report") and in the [references](/references/ "visit references").

#### Is GOAT a transport model?

No, GOAT cannot model traffic generation or modal shift. Instead, our analyses are based on the accessibility approach. This enables the implementation of urban planning concepts such as the 'city of short distances' or the '15-minute city.' According to this approach, the most essential facilities should be within close proximity to all city residents. This is the fundamental requirement for choosing active modes of transportation, such as walking and cycling. In addition, good public transportation accessibility is essential to enable longer trips with sustainable modes of transportation.

In contrast to transport models that depict traffic flows, our accessibility analyses demonstrate how well the population can potentially reach various destinations (e.g., shopping, education) using sustainable modes of transportation. Therefore, we address the core issue rather than the resulting traffic impacts.


#### Which infrastructural properties are taken into account during routing?

The routing algorithm is a basic function of GOAT that is used to calculate travel times for the [isochrones](/en/docs/isochrone/ "documentation on isochrones") and [heatmaps](/en/docs/heatmap/ "dokumentation on heatmaps"), among others.

**Cycling:** We take into account the effects of gradients and surface conditions of the path on the travel speed. We also assume an average delay at intersections.

**Walking:** Due to low data availability, no infrastructural characteristics are taken into account here by default, except for path availability.

**Public transport:** Routing is based on GTFS target timetable data and reacts dynamically to the time window selected by the user. 

**Car:** We use travel speeds based on historical speed profiles for cars on working days.

More information on routing can be found [here](https://www.sciencedirect.com/science/article/pii/S0966692321001332?via%3Dihub "scientific publication").


#### Does GOAT stop at city borders, or are data integrated beyond territorial boundaries?

No, GOAT does not end at the city borders. Data is also integrated beyond the city borders, and we perform all calculations up to 30 minutes beyond the boundaries to avoid cut-off effects. Thus, for example, population and Points-of-Interest in the neighbouring municipality are also considered.


#### Can development plans be integrated into GOAT?

Yes, components from the building and land use data (POIs) of development plans can be integrated into GOAT in common geo-vector formats. Through a scenario, for instance, it can be analyzed how well the new population has access to key destinations (e.g., education).


### 3. SaaS-Abo

#### What is required from us as a customer to obtain GOAT?

We already have the necessary data available throughout Germany, and in some cases beyond. Nothing specific is therefore required from you.
If you have specific local data sets that you would like to use in GOAT, it is possible to integrate these as well.


#### Can the analyses also be shared with citizens?

Yes, the analysis results can be shared as a web map with external parties, such as the public. Additionally, the results can be exported. 
In live applications during citizen workshops, GOAT also has significant potential to model proposed measures and dynamically showcase their effects.

As a supplement, we offer the application [Map4Citizens](/en/posts/2022-12-31-map4citizens/ "What is Map4Citizens?"), which presents the data and analyses of GOAT in a simplified way in a web tool specially designed for citizens. Map4Citizens revolves around the concept of the 15-minute city. Citizens can, among other things, design their ideal 15-minute city and analyze how well different urban areas meet their needs. Additionally, they can explore sustainable mobility options and facilities in the neighborhood.


#### How long does the setup take?

Depending on the desired area and functionalities, GOAT can be made available immediately or within a few weeks after conclusion of the contract.

#### Is there a demo version?

Yes, you can register for a [30-day demo version](/register "register here"). With the trial version, you can conduct analyses for the Munich study area. We also offer the creation of planning-question-specific reports. [Here](/en/reports/ "sample report") you can get an insight into our sample report. 


#### What does a GOAT subscription cost?

The prices depend on the number of inhabitants in the study area, the desired functions and the number of users. Please [contact us](/en/contact/ "Contact us") and we will be happy to make you a suitable offer.