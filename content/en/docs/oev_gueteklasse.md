---
title: Public transport quality classes (ÖV Güteklassen) 
permalink: /en/docs/oev_gueteklasse/
lang: en
sections:
- technical
weight: 45
---

The quality of accessibility is a decisive indicator in public transport and spatial planning. It can be used to highlight deficits in accessibility and to identify well-serviced locations as attractive areas for development. The approach of public transport quality classes (German: _ÖV Güteklassen_) is methodologically superior compared to common catchment areas. In 2011, the Swiss Federal Office for Spatial Development (ARE) used the indicator of _ÖV Güteklassen_ in order to include the attractiveness of public transport services in the assessment of development quality; since then, these have been considered an important instrument in formal planning processes in Switzerland. In addition, the Swiss model served as an inspiration for application in Austria (e.g. Voralberg).  

The institutionalization of the indicator in German-speaking countries, as well as the comprehensible and at the same time differentiated calculation methodology, are important advantages of the _ÖV Güteklassen_. For use in GOAT, the indicator was adapted to the conditions in Germany. At the same time, the calculation period was made more flexible so that the indicator can be calculated for any day of the week and time of day. In the Swiss version of the indicator, the calculation of the quality classes is usually carried out for departures on weekdays between 6 AM and 8 PM. The calculation methodology implemented in GOAT is explained in more detail below.  

![Classification of transport stops](/images/docs/oev_gueteklasse/classification_stations_en.webp "Classification of transport stops")

The calculations are carried out on the basis of GTFS data. First, the number of departures per public transport mode (metro, tram, bus and train) is dynamically calculated for each station. The sum of the departures is divided by two to calculate the frequency, in order to eliminate the outward and return directions. In the next step, the average frequency for the selected time interval is calculated. The higher-value service is selected as the station type in the case of service by several means of transport. For example, in the case of bus and train, this is the train. With the help of the table above, as well as the station type and the frequency, the station category can now be determined. 

![Determination of the "ÖV Güteklassen"](/images/docs/oev_gueteklasse/determination_oev_gueteklasse_en.webp "Determination of public transport quality classes")

Subsequently, buffers of the size shown are calculated for the corresponding station categories. This creates several buffers that are merged. For overlapping buffers, the higher quality class is used. 

# References

Bundesamt für Raumentwicklung ARE, 2022. [ÖV-Güteklassen Berechnungsmethodik ARE (Grundlagenbericht)](https://www.are.admin.ch/are/de/home/medien-und-publikationen/publikationen/verkehr/ov-guteklassen-berechnungsmethodik-are.html "Open Reference").

metron, 2017. [Bedienungsqualität und Erschließungsgüte im Öffentlichen Verkehr](https://vorarlberg.at/documents/302033/472144/1-+Schlussbericht.pdf/81c5f0d7-a0f0-54c7-e951-462cd5cf2831?t=1616147848364 "Open Reference").

Hiess, H., 2017. [Entwicklung eines Umsetzungskonzeptes für österreichweite ÖV-Güteklassen](https://www.oerok.gv.at/fileadmin/user_upload/Bilder/2.Reiter-Raum_u._Region/1.OEREK/OEREK_2011/PS_RO_Verkehr/OeV-G%C3%BCteklassen_Bericht_Final_2017-04-12.pdf "Open Reference").
