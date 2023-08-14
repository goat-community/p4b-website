---
title: Heatmap - Konnektivität
permalink: "/de/docs/heatmap-connectivity/"
lang: de
sections:
- technical
weight: 60
---

#### Definition

Es gibt verschiedene Indikatoren, die als Benchmark für die Konnektivität der Verkehrsinfrastruktur dienen können. In GOAT ist eine Heatmap integriert, die anzeigt wie gut die Wege untereinander verbunden sind. Sie kann derzeit für den Fußverkehr berechnet werden und visualisiert die Konnektivität von Fußwegen auf einem sechseckigen Raster. Dies ermöglicht es den Nutzer:innen, Bereiche mit hoher und niedriger Konnektivität im Untersuchungsgebiet zu identifizieren. Das ist besonders wichtig für die Förderung aktiver Verkehrsträger (Gehen und Radfahren), da diese Verkehrsträger empfindlich auf Umwege reagieren.

Die Konnektivitäts-Heatmap basiert auf der [Isochronen](/docs/isochrone/ "Was ist eine Isochrone?")-Berechnung. Vom Mittelpunkt jedes Hexagons aus wird eine Isochrone für den Fußverkehr berechnet. Je nach Größe des Einzugsgebiets wird das Hexagon in <i>sehr niedrige</i> (<span style="color:red">rot</span>) bis <i>sehr hohe Konnektivität</i> (<span style="color:green">grün</span>) eingeteilt. 

![Konnektivitäts-Heatmap](/images/docs/technical_documentation/connectivity/first_impression_connectivity_de.webp "Heatmap Konnektivität")

_Abbildung 1: Beispielhafte Ergebnisse der Konnektivitäts-Heatmap in GOAT_

Typische Bereiche mit niedriger Konnektivität sind Gleisachsen und große Hauptverkehrsstraßen. Hohe Konnektivitätswerte sind oftmals in Wohngebieten mit engmaschigem Wegenetz zu finden. 

#### Welche Planungsfragen können beantwortet werden? 

  - Wie gut ist das Fußwegenetz miteinander verknüpft? 
  - Wo gibt es Konnektivitätslücken? 
  - Wo gibt es Barrieren für den Fußverkehr?

#### Berechungsmethode

In GOAT wird die Konnektivitäts-Heatmap unter Verwendung des [H3-Hexagon-Gitters](/de/docs/glossary/#h-3-grid "Glossar-Eintrag zum H3 Grid") mit einer Kantenlänge von etwa 66 m pro Zelle berechnet. Für jeden Hexagon-Mittelpunkt wird die erreichte Fläche anhand einer Isochrone mit einer maximalen Gehzeit von 20 Minuten (bei 5km/h) berechnet. Diese Berechnung liefert die Reisezeit vom Mittelpunkt zu jeder Rasterzelle der Isochrone (wie in Abbildung 2 unten dargestellt).

![Isochronen Reisezeit](/images/docs/technical_documentation/connectivity/isochrone_de.webp "Reisezeit vom Mittelpunkt zu jeder Rasterzelle der Isochrone")

_Abbildung 2: Reisezeit vom Mittelpunkt zu jeder Rasterzelle der Isochrone_

Der Konnektivitätswert wird berechnet, indem die erreichbare Fläche für jedes Zeitintervall (1 bis 20 Minuten) summiert und die Summe durch die Gesamtzahl der Intervalle (20) geteilt wird:


<img src="\images\docs\technical_documentation\connectivity\formula_de.webp" alt="formula" style="max-height:150px;"/>

_Abbildung 3: Formel zur Berechnung der durchschnittlich erreichbaren Fläche_

Die sich daraus ergebenden Konnektivitätswerte werden [über Quintil-Klassifizierung](/docs/glossary/#quintile-classification "Glossar-Eintrag zur Quintil-Klassifizierung") in sechs Gruppen eingeteilt. Diese relative Klassifizierung hilft bei der Ermittlung von Gebieten mit relativ kleinen oder großen Einzugsgebieten und ermöglicht es, Lücken im Netz zu identifizieren und potenzielle Verbesserungsbereiche zu lokalisieren.

#### Visualisierung

In GOAT wird die Konnektivitäts-Heatmap auf einem sechseckigen Gitter mit einer Kantenlänge von etwa 174 m pro Zelle visualisiert. Dementsprechend ist die Auflösung für die Visualisierung geringer als die für die Berechnung verwendete Auflösung. Die höhere Auflösung für die Berechnung ist notwendig, um eine genauere Analysegrundlage zu gewährleisten. Die niedrigere Auflösung für die Visualisierung wird gewählt, um eine performante Darstellung der Konnektivitäts-Heatmap zu gewährleisten. Die Ergebniswerte der höheren Auflösung werden durch Berechnung der durchschnittlichen Konnektivität auf die niedrigere Auflösung aggregiert.

Die klassifizierten Sechsecke sind von **hoher** (<span style="color:green">grüner</span>) bis **niedriger** (<span style="color:red">roter</span>) Konnektivität eingefärbt und geben dem Benutzer einen schnellen Überblick über die Netzqualität im gesamten Untersuchungsgebiet.

![GOAT Heatmap Konnektivität](/images/docs/technical_documentation/connectivity/connectivity_new_de.webp "GOAT Heatmap Konnektivität")

_Abbildung 4: Konnektivitäts-Heatmap in GOAT_
