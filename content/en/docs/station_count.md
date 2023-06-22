---
title: Station Count Indicator
permalink: "/docs/station_count/"
sections:
- technical
weight: 50

---

#### Definition

This indicator represents the average number of departures for public transportation per hour. It serves as the foundation for the ÖV Güteklassen, but can also be utilized on its own as a straightforward measure for public transport information at a station level. It offers a summary of a station's performance during a specific time window and day, providing valuable information for planning authorities.

#### Calculation

Similar to [ÖV Güteklassen](/en/docs/oev_gueteklasse/ "Indicator documentation for public transport") , this indicator retrieves data from the GOAT database's GTFS files. 

The calculation involves utilizing tables such as __stop_times__, __stop_times_optimized__, __stops__, and __calendar_dates__. However, it excludes on-demand service lines in the process.

The fundamental logic of this indicator is implemented as a SQL function within the PostgreSQL database. This function is called and executed through the Python API. The endpoint is exposed using FASTAPI, and its details can be seen in the Swagger UI shown in Figure 1. The endpoint accepts multiple query parameters, including __start_time__, __end_time__, __weekday__, __study_area_id__, and __return_type__. These parameters are identical to those used in the ÖV Güteklassen endpoint, with the exception of the station configuration.

By default, the endpoint generates a GeoJSON file as the output, containing features for each station. The file includes information about the number of departures (trips) within the specified time window. The response provides the total number of departures, while the average per hour is calculated during the visualization process by dividing the total by the number of hours.
Additionally, the API endpoint supports the option to return the result in [Geobuf](/en/docs/glossary/#geobuf "Documentation Glossary of geobuf") format. The client decodes the Geobuf response to access the information.


<img src="/images/docs/station_count/station_count.webp" alt="station_count" style="max-height:500px;"/>



_Figure 1: Station Count API - (Swagger)_




#### Visualization 

The indicator is integrated into the indicators section and shares the same controls as ÖV Güteklassen for visibility and transparency settings. When the layer is activated, a time picker component specific to the indicator is displayed on the map. By default, the time picker is set to Monday from 07:00 to 09:00.

For the map style of this layer, pie charts are used as a multivariate map visualization, as shown in Figure 2. Each service type is represented by a different color, based on the configuration of the study area. The size of the pie chart is determined by the total number of departures and is constrained within a range of 5 to 20 pixels.


<img src="/images/docs/station_count/station_count_indicator.webp" alt="station_count_indicator" style="max-height:500px;"/>



_Figure 2: GOAT Interface - Station Count_


#### References



Shkurti, Majk (2022). [Spatio-temporal public transport accessibility analysis and benchmarking in an interactive WebGIS](https://www.researchgate.net/publication/365790691_Spatio-temporal_public_transport_accessibility_analysis_and_benchmarking_in_an_interactive_WebGIS)
