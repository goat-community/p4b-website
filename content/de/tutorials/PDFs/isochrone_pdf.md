---
title: Isochronen
permalink: "/de/tutorials/isochrone/"
weight: 11
sections:
- training
description: Schritt-für-Schritt-Anleitung für beispielhafte Planungsfragen unter
  Verwendung  der GOAT Isochronen-Funktion.

---
# Isochronen
![Isochronen in GOAT](../../../../static/images/tutorials/Tutorial_banners/isochrone_banner.webp "Isochronen in GOAT")

## Beschreibung des Features

[Isochronen](/docs/isochrone/ "Dokumentation zu Isochronen") sind Isolinien, die alle Punkte verbinden, die von einem bestimmten Startpunkt aus innerhalb eines bestimmten Zeitintervalls erreicht werden können. Sie sind besonders geeignet, um die Erreichbarkeit an einem spezifischen Ort aufzuzeigen. GOAT ermöglicht die Berechnung von Isochronen und erlaubt die Anpassung der Reisegeschwindigkeit, der Reisezeit und des Routingprofils. Gegenwärtig kann zwischen den Routingprofilen „Zu Fuß“, „Fahrrad Standard“, „Fahrrad Pedelec“, „ÖPNV“ und „Auto“ ausgewählt werden. Außerdem kann die Anzahl der zu berechnenden Isochronen eingestellt werden. 

## Mögliche Anwendungsfälle (Planungsfragen)

* Wie viele Supermärkte können von einem bestimmten Punkt aus innerhalb von 10 Gehminuten erreicht werden?
* Wie viele Menschen können eine ÖV-Haltestelle innerhalb von 5 Minuten mit dem Fahrrad erreichen?
* Wie viele Personen können einen bestimmten Ort innerhalb von 20 Minuten mit schienengebundenen öffentlichen Verkehrsmitteln (Straßenbahn, U-Bahn, Zug) erreichen?

## Schritt-für-Schritt-Anleitung für die beispielhaften Planungsaufgaben

## 1 Fußläufige Erreichbarkeit von Supermärkten

### 1.1 Planungsfrage

Wie viele Supermärkte können von einem bestimmten Punkt aus innerhalb von 10 Gehminuten erreicht werden?

### 1.2 Arbeitsschritte

1. Wählen Sie im Menü „Filter Thematische Daten“ die Einrichtung „Supermarkt“ (zu finden in der Kategorie „Einkaufen“).

<img src="../../../../static/images/tutorials/Isochrone/amenity_supermarket.webp" alt="amenity supermarket" style="max-height:400px;"/>

2. Zoomen Sie zu dem Bereich, in dem Sie die Isochrone berechnen möchten.
3. Wählen Sie das Routingprofil und die gewünschte Gehgeschwindigkeit aus.

<img src="../../../../static/images/tutorials/Isochrone/Isochrone_1.2_select_de.webp"  alt="choose isochrone range" style="max-height:180px;"/>

4. Platzieren Sie den Startpunkt für die Isochronenberechnung an einem beliebigen Punkt.

<img src="../../../../static/images/tutorials/Isochrone/starting_point_isochrone.webp"  alt="set starting point" style="max-height:150px;"/>

5. Nachdem die Berechnung ausgeführt wurde, öffnet sich automatisch ein Fenster mit den Ergebnissen. Diesem können Sie die erreichbaren Supermärkte entnehmen.

<img src="../../../../static/images/tutorials/Isochrone/results_supermarkets.webp"  alt="results"/>

6. Die Ergebnisse können über verschiedene Graphiken analysiert werden. Somit können Sie u.a. die räumliche Verteilung der Supermärkte sehen.

<img src="../../../../static/images/tutorials/Isochrone/results_supermarkets_2.webp"  alt="results"/>

## 2 Erreichbarkeit mit dem Fahrrad

### 2.1 Planungsfrage

Wie viele Menschen können den Bahnhof innerhalb von 5 Minuten mit dem Fahrrad erreichen?

### 2.2 Arbeitsschritte

1. Ändern Sie den Routingmodi auf „Fahrrad“ und stellen Sie die Isochronen Reichweite auf 5 Minuten.

<img src="../../../../static/images/tutorials/Isochrone/Isochrone_2.2_select_de.webp"  alt="Routing mode cycling" style="max-height:180px;"/>

2. Platzieren Sie den Startpunkt für die Isochronenberechnung auf dem Bahnhof.

<img src="../../../../static/images/tutorials/Isochrone/starting_point_isochrone.webp"  alt="set starting point" style="max-height:150px;"/>

3. Nachdem die Berechnung ausgeführt wurde, erscheint ein Fenster mit den Ergebnissen. Diesem können Sie entnehmen, wie viele Menschen den Bahnhof innerhalb von 10 Minuten mit dem Fahrrad erreichen können.

<img src="../../../../static/images/tutorials/Isochrone/Isochrone_2.3_10minutes_de.webp"  alt="result"/>

4. Durch das Bewegen des Sliders kann die Reisezeit dynamisch auf 5 Minuten geändert werden.

<img src="../../../../static/images/tutorials/Isochrone/Isochrone_2.3_5minutes_de.webp"  alt="result"/>

5. Ergänzeng zur Tabelle können die Bevölkerungszahlen in einer Summenkurve visualisiert werden.

<img src="../../../../static/images/tutorials/Isochrone/Isochrone_2.result_different_graph_Eng.webp"  alt="download" style="max-height:300px;"/>

6. Durch Klicken auf den Download-Button können Sie die Isochronen als GeoJSON, Shapefile oder XML sowie die Ergebnis-Tabelle als Excel-File herunterladen.

<img src="../../../../static/images/tutorials/Isochrone/Isochrone_2.4_export_de.webp"  alt="download" style="max-height:250px;"/>

## 3 Erreichbarkeit mit öffentlichen Verkehrsmitteln

### 3.1 Planungsfrage

Wie viele Personen können einen bestimmten Ort innerhalb von 20 Minuten mit schienengebundenen öffentlichen Verkehrsmitteln (Straßenbahn, U-Bahn, Zug) erreichen?

### 3.2 Arbeitsschritte

1. Stellen Sie den Routingmodus auf "ÖPNV" und wählen Sie die gewünschten Berechnungsoptionen (Wochentag, Uhrzeit, Zugangs- und Abgangsmodus). Im Abschnitt "ÖPNV Verkehrsmittel" können Sie auswählen, welche öffentlichen Verkehrsmittel bei der Berechnung berücksichtigt werden sollen. In diesem Beispiel konzentrieren wir uns auf den schienengebundenen öffentlichen Verkehr (Straßenbahn, U-Bahn und Zug). Um zusätzliche Informationen über das öffentliche Verkehrsnetz zu erhalten, können Sie die Hintergrundkarte des öffentlichen Verkehrs aktivieren. 

<img src="../../../../static/images/tutorials/Isochrone/isochrone_3.1public_de.webp" alt="change_routing_mode" style="max-height:400px;"/>

2. Klicken Sie auf "Isochrone Single" und zoomen Sie zu dem Bereich, in dem Sie die Isochrone berechnen wollen.

<img src="../../../../static/images/tutorials/Isochrone/isochrone_3.2public_de.webp" alt="isochrone auswählen" style="max-height:400px;"/>

3. Platzieren Sie den Startpunkt für die Isochrone.

<img src="../../../../static/images/tutorials/Isochrone/isochrone_3.3public_de.webp" alt="choose starting point" style="max-height:400px;"/>

4. Nachdem die Berechnung durchgeführt wurde, öffnet sich automatisch ein Fenster mit den Ergebnissen. In diesem Fenster können Sie sehen, wie viele Personen diesen Ort innerhalb von 20 Minuten mit dem schienengebundenen öffentlichen Verkehr erreichen können. Sie können die Reisezeit mit dem Schieberegler verändern.

<img src="../../../../static/images/tutorials/Isochrone/isochrone_3.4public_de.webp" alt="result" style="max-height:400px;"/>

5. Außerdem können Sie sich das Summendiagramm zur Bevölkerung im Einzugsbereich anzeigen lassen, indem Sie den "Graph" Icon klicken.

<img src="../../../../static/images/tutorials/Isochrone/isochrone_3.5public_de.webp" alt="result-graph" style="max-height:400px;"/>
