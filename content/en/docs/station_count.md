---
title: Average count of public transport departures 
permalink: "/docs/station_count/"
sections:
- technical
weight: 50

---

#### Definition

This indicator shows the average number of public transport departures per hour for a selected time interval in pie charts. The size of the pie chart represents the number of departures: the larger the pie chart, the more departures. The colours represent the type of service (e.g. bus, metro).

This indicator serves as the foundation for the [ÖV Güteklassen](/en/docs/oev_gueteklasse/ "Indicator documentation for public transport quality classes"), but can also be utilized on its own as a straightforward measure for public transport offer at a station level. It gives a summary of a station's departures during a specific time window and day, providing a valuable overview of the public transport offer in a city.

![Average count of public transport departures](/images/docs/station_count/station_count_indicator_en.webp "Average count of public transport departures")

_Figure 1: GOAT Interface - Average count of public transport departures_

#### What planning questions can be answered?
- Which stations in the city serve as main hubs?
- Which stations have low service rates in comparison to others?
- How does the public transport quality vary over different times of the week or day?
  
#### Calculation

Similar to the ÖV Güteklassen (<i>public transport quality classes</i>), this indicator is calculated on the basis of GTFS data. Based on the selected day and time window, the average number of departures per hour (regardless of direction) is calculated.


#### References

Shkurti, Majk (2022). [Spatio-temporal public transport accessibility analysis and benchmarking in an interactive WebGIS](https://www.researchgate.net/publication/365790691_Spatio-temporal_public_transport_accessibility_analysis_and_benchmarking_in_an_interactive_WebGIS)
