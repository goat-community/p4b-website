---
title: Isochronen
permalink: "/de/tutorials/isochrone/"
weight: 10
sections:
- training
description: Schritt-für-Schritt-Anleitung für beispielhafte Planungsfragen unter
  Verwendung  der GOAT Isochronen-Funktion.

---
#### Beschreibung des Features

Isochronen sind Isolinien, die alle Punkte verbinden, die von einem bestimmten Startpunkt aus innerhalb eines bestimmten Zeitintervalls erreicht werden können. Sie sind besonders geeignet, um die Erreichbarkeit an einem spezifischen Ort aufzuzeigen.
GOAT ermöglicht die Berechnung von Isochronen und erlaubt die Anpassung der Reisegeschwindigkeit, der Reisezeit und des Routingprofils. Gegenwärtig kann zwischen den Routingprofilen „Zu Fuß“, „Fahrrad Standard“ und „Fahrrad Pedelec“ ausgewählt werden. Außerdem kann die Anzahl der zu berechnenden Isochronen eingestellt werden.

#### Mögliche Anwendungsfälle (Planungsfragen)

* Wie viele Supermärkte können von einem bestimmten Punkt aus innerhalb von 10 Gehminuten erreicht werden?
* Wie viele Menschen können eine ÖV-Haltestelle innerhalb von 5 Minuten mit dem Fahrrad erreichen?

#### Schritt-für-Schritt-Anleitung für die beispielhaften Planungsaufgaben

#### 1 Erreichbarkeit von Supermärkten

##### 1.1 Planungsfrage

Wie viele Supermärkte können von einem bestimmten Punkt aus innerhalb von 10 Gehminuten erreicht werden?

##### 1.2 Arbeitsschritte

1. Wählen Sie im Menü „Filter Thematische Daten“ die Einrichtung „Supermarkt“ (zu finden in der Kategorie „Einkaufen“).

<img src="/images/training_materials/Isochrone/amenity_supermarket.png" alt="amenity supermarket" style="max-height:300px;"/>

2. Zoomen Sie zu dem Bereich, in dem Sie die Isochrone berechnen möchten.
   
3. Stellen Sie die maximale Reisezeit auf 10 Minuten. Wählen Sie die gewünschte Gehgeschwindigkeit, das Routingprofil und die Anzahl der gewünschten Isochronen aus.

<img src="/images/training_materials/Isochrone/isochrone_settings.png"  alt="choose isochrone range" style="max-height:230px;"/>

4. Platzieren Sie den Startpunkt für die Isochronenberechnung an einem beliebigen Punkt.
   
<img src="/images/training_materials/Isochrone/starting_point_isochrone.png"  alt="set starting point" style="max-height:150px;"/>

5. Nachdem die Berechnung ausgeführt wurde, öffnet sich automatisch ein Fenster mit den Ergebnissen. Diesem können Sie die erreichbaren Supermärkte entnehmen.

<img src="/images/training_materials/Isochrone/results_supermarkets.png"  alt="results"/>

#### 2 Fahrradrouting

##### 2.1 Planungsfrage

Wie viele Menschen können den Bahnhof innerhalb von 5 Minuten mit dem Fahrrad erreichen?

##### 2.2 Arbeitsschritte

1. Ändern Sie den Routingmodi auf „Fahrrad“ und stellen Sie die Isochronen Reichweite auf 5 Minuten.
   
<!-- ![](/images/training_materials/Isochrone/cycling-mode.webp) -->
<img src="/images/training_materials/Isochrone/cycling_mode.png"  alt="Routing mode cycling" style="max-height:220px;"/>

2. Platzieren Sie den Startpunkt für die Isochronenberechnung auf dem Bahnhof.  
   
<!-- ![](/images/training_materials/Isochrone/starting-point-isochrone.webp) -->
<img src="/images/training_materials/Isochrone/starting_point_isochrone.png"  alt="set starting point" style="max-height:150px;"/>

3. Nachdem die Berechnung ausgeführt wurde, erscheint links im Menü ein Fenster mit den Ergebnissen. Diesem können Sie entnehmen, wie viele Menschen den Bahnhof innerhalb von 5 Minuten mit dem Fahrrad erreichen können.

<img src="/images/training_materials/Isochrone/cycling_result.png"  alt="result"/>

4. Durch Klicken auf den Download-Button können Sie die Isochronen als GeoJSON oder Shapefile sowie die Ergebnis-Tabelle als Excel-File herunterladen.

<img src="/images/training_materials/Isochrone/download.png"  alt="download" style="max-height:250px;"/>

5. Über den Slider rechts vom Download-Button kann außerdem das Routing-Netzwerk visualisiert werden.

<img src="/images/training_materials/Isochrone/network.png"  alt="network"/>
   