---
title: Multi-Isochronen
permalink: "/de/tutorials/multiisochrones/"
weight: 20
sections:
- training
description: Anleitung für die Verwendung der Multi-Isochronen-Funktion in GOAT für
  eine beispielhafte Planungsaufgabe.

---
![Multi-Isochronen in GOAT](/images/tutorials/Tutorial_banners/multi_isochrone_banner.webp "Multi-Isochronen in GOAT")

#### Beschreibung des Features

GOAT ermöglicht die Berechnung von Multi-Isochronen. Der wesentliche Unterschied zwischen Multi-Isochronen und Single-Isochronen besteht darin, dass man bei Multi-Isochronen mehrere Ausgangspunkte wählen und die Einzugsgebiete für alle auf einmal berechnen kann. In Verbindung mit den Bevölkerungsdaten kann so der Anteil der Bevölkerung identifiziert werden, der in einer gewissen Reisezeit Zugang zu Einrichtungen wie Supermärkten, Kindergärten, ÖV-Haltestellen etc. hat. 


#### Mögliche Anwendungsfälle (Planungsfragen)

* Wie gut sind die Supermärkte aktuell über die Stadt verteilt? In welchen Stadtteilen gibt es Erreichbarkeitsdefizite?
* Wie viele Bewohner:innen können in einer bestimmten Reisezeit mit dem Fahrrad eine ÖV-Haltestelle erreichen?

#### Video Tutorial
<iframe class="embed-responsive-item" src="https://player.vimeo.com/video/753891610" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen data-uk-responsive width="1920" height="1080"></iframe>

#### Schritt-für-Schritt-Anleitung für eine beispielhafte Planungsaufgabe

#### 1 Erreichbarkeit von Supermärkten

##### 1.1 Planungsfrage

Wie gut sind die Supermärkte aktuell über die Stadt verteilt? In welchen Stadtteilen gibt es Erreichbarkeitsdefizite?

##### 1.2 Arbeitsschritte

1. Wählen Sie im Menü „Filter Thematische Daten“ die Einrichtung „Supermarkt“ (zu finden in der Kategorie „Einkaufen“).

<img src="/images/tutorials/Multiisochrones/Multi_isochrone_1.1_freiburg_de.webp"  alt="choose isochrone range"/>

2. Stellen Sie die Routing-Optionen wie gewünscht ein (z.B. Zu Fuß, 5km/h).

<img src="/images/tutorials/Multiisochrones/Multi_isochrone_1.2.2_select_option_de.webp"  alt="choose isochrone range" style="max-height:180px;"/>

3. Wechseln Sie zum Isochronenberechnungsmodus „Multi“ und wählen die Methode „Ortsteil“ aus; diese wird später alle Ergebnisse nach Ortsteilen differenziert auflisten.

<img src="/images/tutorials/Multiisochrones/Multi_isochrone_1.2.3_select_option_de.webp"  alt="Multi Isochrone" style="max-height:200px;"/>

4. Wählen Sie dann per Mausklick alle gewünschten Ortsteile in der Karte aus.

<img src="/images/tutorials/Multiisochrones/Multi_isochrone_1.2.4_select_studyarea_de.webp"  alt="Select Districts"/>

5. Klicken Sie auf „Berechnen“.

<img src="/images/tutorials/Multiisochrones/Multi_isochrone_1.2.5_calculate_De.webp"  alt="Calculate" style="max-height:205px;"/>

6. Die resultierenden Multi-Isochronen zeigen Ihnen die Einzugsbereiche der Supermärkte (hier für den Modus „Zu Fuß“ mit 10 Minuten Einzugsbereich). Die zugehörige Tabelle zeigt nach Ortsteil sortiert, wie viele Menschen von der Gesamtbevölkerung in 10 Minuten Zufußgehen einen Supermarket erreichen können. Über den Download-Button können Sie die Ergebnisse herunterladen.

<img src="/images/tutorials/Multiisochrones/Multi_isochrone_1.2.6_10minutes_de.webp"  alt="Result 10 Min" />

7. Wie auch bei den Single-Isochronen können die Reisezeiten der Multi-Isochronen dyamisch über den Slider angepasst werden.

<img src="/images/tutorials/Multiisochrones/Multi_isochrone_1.2.6_5minutes_de.webp"  alt="Result 5 Min" />

#### 2 Erreichbarkeit von ÖV-Haltestellen

##### 2.1 Planungsfrage

Wie viele Bewohner:innen können in einer bestimmten Reisezeit mit dem Fahrrad eine ÖV-Haltestelle erreichen?

##### 2.2 Arbeitsschritte

1. Wählen Sie die gewünschten ÖV-Haltestellen (z.B. Bus, Tram) im Menü „Filter Thematische Daten“ aus.

<img src="/images/tutorials/Multiisochrones/Multi_isochrone_2.1.2_select_transportation_de.webp"  alt="Select POIs" />
   
2. Stellen Sie die Routing-Optionen wie gewünscht ein (z.B. Fahrrad, 15km/h).
   
3. Wechseln Sie zum Isochronenberechnugsmodus „Multi“ und wählen die Methode „Ortsteil“ aus und wählen die Ortsteile in der Karte aus oder zeichnen Sie ein beliebiges Gebiet.

<img src="/images/tutorials/Multiisochrones/Multi_isochrone_2.1.3_select_study_area_De.webp"  alt="Select study area" />
   
4. Klicken Sie auf „Berechnen“.
   
5. Die resultierenden Multi-Isochronen zeigen Ihnen die Einzugsbereiche der ÖV-Haltestellen (hier für den Modus „Fahrrad“ mit 10 Minuten Einzugsbereich). Die zugehörige Tabelle zeigt nach Ortsteil sortiert, wie viele Menschen von der Gesamtbevölkerung in 10 Minuten Radfahren eine ÖV-Haltestelle erreichen können.

<img src="/images/tutorials/Multiisochrones/Multi_isochrone_2.1.4_calculation_de.webp"  alt="Result" />
