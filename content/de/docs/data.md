---
title: Datengrundlage   
permalink: "/de/docs/data/"
sections:
- about
weight: 40
---

#### Daten als wichtige Analysegrundlage 

Gute Daten sind die Grundlage unserer Analysen und damit unser wertvollstes Gut. Um genaue Analysen auf der Grundlage qualitativ hochwertiger Daten zu angemessenen Kosten zu liefern, integrieren wir in unsere Anwendungen [GOAT](/goat/ "Was ist GOAT?") und [Map4Citizens](/posts/2023-01-02-map4citizensde/ "Was ist Map4Citizens?") verschiedene räumliche und nicht-räumliche Datensätze aus unterschiedlichen Quellen. Die Verarbeitung von Geodaten aus verschiedenen Quellen mit unterschiedlichen Genauigkeitsgraden kann eine große Herausforderung darstellen. Um eine nahtlose Datenverarbeitung zu gewährleisten, setzen wir eine Reihe von Techniken und Arbeitsabläufen ein, darunter effiziente Datenintegration, Disaggregation und Datenfusion.

#### Datenerhebung und -aufbereitung

Der Prozess der Datenerhebung umfasst das Sammeln und Auswerten von Informationen aus verschiedenen Quellen, um den spezifischen Anforderungen gerecht zu werden. Zu diesem Zweck werden relevante Datenquellen identifiziert und die Daten, wenn möglich, von Open Data Portalen oder öffentlich zugänglichen Initiativen gesammelt. Je nach Datenquelle können unterschiedliche Datenschemata und Formate wie Shapefiles und GeoJSON verwendet werden. Daher ist es wichtig, die Daten in ein gemeinsames Schema und Format zu konvertieren, um Konsistenz und Vergleichbarkeit zu gewährleisten.

Wir stellen sicher, dass die Daten in unseren Anwendungen auf dem neuesten Stand sind, indem wir sie mindestens einmal jährlich aktualisieren. Bei Bedarf sind jedoch auch häufigere Aktualisierungen möglich, insbesondere bei sich schnell ändernden Points of Interest (POI). Die folgende Abbildung zeigt die verwendeten Kerndatensätze, die unten jeweils ausführlicher beschrieben werden.

<img src="/images/docs/technical_documentation/data/de_cropped.webp" alt="data-sets" style="max-height:900px;"/>  

- **Points Of Interest:** Für POIs wird eine Kombination aus verschiedenen Datenquellen verwendet. Neben [OpenStreetMap (OSM)](https://wiki.openstreetmap.org/) nutzen wir eine Vielzahl weiterer Quellen, darunter Daten von Ministerien und Behörden sowie von Krankenkassen und Handelsunternehmen. Die verschiedenen Datensätze werden mit einer Kombination aus automatisierten und manuellen Verfahren zusammengeführt. Gleichzeitig werden die Daten auf Vollständigkeit und Genauigkeit geprüft. Bei Bedarf werden auch eigene Datenerhebungen vor Ort durchgeführt. 

- **Bevölkerung und Gebäude:** Die Bevölkerung wird auf der Grundlage von Zensusdaten, Stadtteil- oder Gemeindezählungen und verschiedenen Flächennutzungsdaten bis auf Gebäudeebene disaggregiert. Sofern verfügbar, wird die Vearbeitung durch 3D-Stadtmodelle unterstützt.

- **Öffentliches Verkehrsnetz:** Für das öffentliche Verkehrsnetz und die Fahrpläne werden GTFS-Daten (General Transit Feed Specification) verwendet, um realistische und zeitlich dynamische Fahrzeiten für öffentliche Verkehrsmittel zu erhalten. 

- **Verwaltungsgrenzen:** Die Daten werden verwendet, um die Grenzen eines geografischen Gebiets abzugrenzen, das in die Zuständigkeit von Regierungs- oder Verwaltungseinheiten wie Gemeinden, Bezirken oder Landkreisen fällt.

- **Wegenetz:** Für den Fuß- und Radverkehr wird hauptsächlich OSM verwendet, aber die Wegenetzdaten sind flexibel, so dass auch andere Datensätze verwendet werden können. Für den MIV werden kalibrierte Routing-Netzwerke kommerzieller Anbieter verwendet, um Reisezeiten zu berechnen, einschließlich der unterschiedlichen Verkehrsdichte zu verschiedenen Tageszeiten.

- **Weitere Daten:** Eine Reihe weiterer Datensätze (Höhenmodelle, Straßenlärm- und Unfallpunktdatensätze etc.) sind in unseren Anwendungen integriert. Diese werden als Analysegrundlage verwendet und können in der Webkarte visualisiert werden. Darüber hinaus können die Nutzer Geoportale einbinden und die Visualisierung durch verschiedene Hintergrundkarten individualisieren.

Durch Datenintegration und -fusion werden die verschiedenen Datensätze kombiniert und an den lokalen Kontext angepasst. Darüber hinaus werden weitere Datenverarbeitungsschritte durchgeführt, um einen aktuellen und zuverlässigen Datensatz zu erhalten. Weitere Datensätze und Datenquellen können bei Bedarf flexibel integriert werden.