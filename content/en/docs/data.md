---
title: Data   
permalink: "/docs/data/"
sections:
- technical
weight: 30
---

#### Data used in GOAT

Data is generally defined as a set of discrete values that describe the amount, quality, fact, statistics, or other fundamental units of meaning, or simply a series of symbols that may be further understood. Data is the basis for any calculation and our most valuable asset. Therefore, GOAT uses various data sets from different sources as spatial and non-spatial. The aim of Plan4Better is to provide high-quality data with reasonable costs. Thus, the challenge of processing geospatial data, which comes inconsistently from different sources, is managed by developing diverse set of data integration, data disaggregation and data fusion workflow.

#### Data collection and data processing

The process of acquiring and evaluating data from diverse sources is known as data collection. First, the required data sets are identified for GOAT based on assumption that not all data are equally significant for all indicators. 
Second, the data collection method is defined according to the type of the data set (spatial or non-spatial) with different data formats (e.g. Shapefiles, GeoJSON). The data sets used for GOAT implementation are updated at least once a year to provide up-to-date data. Furthermore, more frequent data updates, for instance, for POIs are possible. 
The data sets which are obtained from our own collection and sources public, proprietary and, used to enhance the analysis in GOAT are given in Figure.

<img src="\images\docs\technical_documentation\data\data_en.webp" alt="data-sets" style="max-height:900px;"/>  

- **Point Of Interest:** In order to acquire the amenity data set, a mix of different data sources, many data sets including OpenStreetMap (OSM), Data from Open-Geoportals or commercial sources, and many data fusion techniques are in use. The well-known one, OpenStreetMap, is a free, editable map of the whole world, and being created by volunteers mainly from scratch and distributed under an open-content license. You can access further information about OSM from https://wiki.openstreetmap.org/. Although the OSM data set is good for Germany, the data is checked according to their completeness and correctness which also enables Plan4Better to contribute to OSM.

- **Population and Buildings:** The population is disaggregated on the building level based using Census data and population counts on the district or municipality level, as well as diverse land-use data. The processing is if available supported by 3D city models.

- **Public Transport Network:** For the public transport network and schedule GTFS (General Transit Feed Specification) data is used to provide realistic and temporal dynamic travel time for public transport. 

- **Administrative Boundaries:** The data is used to limit the border of a geographic area under the jurisdiction of some governmental or managerial entities such as counties of Germany.

- **Street Network:** For walking and cycling OSM is mainly used, however, the data for street network is flexible, and thus there are some more data sets in use. For cars, calibrated car routing networks are used from commercial providers to compute travel times including delays in the network.

- **Additional Data:** There are some other data sets which enable users to connect Geoportals and enhance the visualization by changing the base maps. Moreover, elevation models, street noise and accident points data sets are used to improve and vary the analysis conducted by using GOAT. 

Data integration and data fusion steps are applied to combine the different data sets and are customizable to the local context. Moreover, further data processing steps (accuracy, completeness, reliability, relevance, and timeliness) are implemented to acquire an accurate, reliable data set. 