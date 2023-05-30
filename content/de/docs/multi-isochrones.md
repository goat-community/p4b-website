---
title: Multi-Isochronen  
permalink: "/de/docs/multi-isochrones/"
sections:
- technical
weight: 40
---
#### Definition von Multi-Isochronen

Multi-Isochronen sind eine Kombination aus mehreren [Isochronen](/docs/isochrone/ "Was sind Isochronen?") zu einem (oder mehreren) größeren Polygonen. Die Isochronen werden um Points-of-Interest (z.B. alle Supermärkte in der Stadt) berechnet. Damit lässt sich feststellen, welcher Anteil der Einwohner:innen wichtige Ziele des täglichen Bedarfs innerhalb einer bestimmten Reisezeit erreichen kann. 

#### Berechnung von Multi-Isochronen

Für die Multi-Isochronenberechnung definiert der/die Nutzer:in entweder ein Untersuchungsgebiet durch Einzeichnen eines Polygons oder durch Auswahl eines oder mehrerer Stadtteile (Abbildung 1). Basierend auf der Auswahl des Nutzenden werden alle Points-of-Interests (POIs) der aktuell aktivierten POI-Kategorien berücksichtigt, die sich innerhalb oder in der Nähe dieses Untersuchungsgebietes befinden. Die Koordinaten der POIs werden als Startpunkte genommen. Die einzelnen Isochronen werden vereinigt und mit den auf Gebäudeebene disaggregierten Bevölkerungsdaten verschnitten. 

<img src="\images\docs\technical_documentation\multi-isochrones\multi-isochrone_1_en.webp" alt="study area" 
style="max-height:300px;"/>
<img src="\images\docs\technical_documentation\multi-isochrones\multi-isochrone_2_en.webp" alt="study area" 
style="max-height:300px;"/>

_Abbildung 1: Zur Definition des Untersuchungsgebiets können Sie ein Polygon zeichnen (links) oder Stadtteile auswählen (rechts)._
   
Als Ergebnis werden die Multi-Isochronen auf der Karte zusammen mit einer Ergebnistabelle angezeigt, in der die Bevölkerung im ausgewählten Untersuchungsgebiet und der prozentuale Anteil der Bevölkerung, die innerhalb der gewählten Reisezeit Zugang zu den ausgewählten POIs hat, aufgelistet sind (Abbildung 2).

![Erreichbarkeitsindikator: Multi-Isochronen](/images/docs/technical_documentation/multi-isochrones/multi-isochrone_3_en.webp "Erreichbarkeitsindikator: Multi-Isochronen")

_Abbildung 2: Ergebnis der Multi-Isochronenberechnung._

Multi-Isochronen können für den Fuß- und Radverkehr berechnet werden und alle Arten von Szenarien reflektieren (Netzwerk, Points of Interest und Gebäude). Der Benutzende kann Reisezeiten und Geschwindigkeiten für die verschiedenen Routing-Modi anpassen.