---
title: Multi-Isochronen
permalink: "/de/tutorials/multiisochrones/"
weight: 20
sections:
- training
description: Anleitung für die Verwendung der Multi-Isochronen-Funktion in GOAT für
  eine beispielhafte Planungsaufgabe.

---
#### Beschreibung des Features

GOAT ermöglicht die Berechnung von Multi-Isochronen. In Verbindung mit Bevölkerungsdaten kann so der Anteil der Bevölkerung identifiziert werden, der in einer gewissen Reisezeit Zugang zu Einrichtungen wie Supermärkten, Kindergärten, ÖV-Haltestellen etc. hat. Dies ist besonders nützlich, um verschiedene Stadtteile in ihrer Erreichbarkeit zu vergleichen und so mögliche Erreichbarkeitsdefizite zu identifizieren.

#### Mögliche Anwendungsfälle (Planungsfragen)

* Wie gut sind die Supermärkte aktuell über die Stadt verteilt? In welchen Stadtteilen gibt es Erreichbarkeitsdefizite?
* Wie viele Bewohner können in einer bestimmten Reisezeit mit dem Fahrrad eine ÖV-Haltestelle erreichen?

#### Schritt-für-Schritt-Anleitung für eine beispielhafte Planungsaufgabe

#### 1 Erreichbarkeit von Supermärkten

##### 1.1 Planungsfrage

Wie gut sind die Supermärkte aktuell über die Stadt verteilt? In welchen Stadtteilen gibt es Erreichbarkeitsdefizite?

##### 1.2 Arbeitsschritte

1. Wählen Sie im Menü „Filter Thematische Daten“ die Einrichtung „Supermarkt“ (zu finden in der Kategorie „Einkaufen“).

<img src="/images/training_materials/Isochrone/amenity_supermarket.png" alt="amenity supermarket" style="max-height:400px;"/>

2. Stellen Sie die Routing-Optionen wie gewünscht ein (z.B. Zu Fuß, 5km/h, 10 Min Reisezeit, 2 Isochronen).

<img src="/images/training_materials/Isochrone/isochrone_settings.png"  alt="choose isochrone range" style="max-height:220px;"/>

3. Wechseln Sie zum Isochronenberechnungsmodus „Multi“ und wählen die Methode „Ortsteil“ aus; diese wird später alle Ergebnisse nach Ortsteilen differenziert auflisten.

<img src="/images/training_materials/Multiisochrones/multi.png"  alt="Multi Isochrone" style="max-height:200px;"/>

4. Wählen Sie dann per Mausklick alle gewünschten Ortsteile in der Karte aus.

<img src="/images/training_materials/Multiisochrones/select_study_area.png"  alt="Select Districts"/>

5. Klicken Sie auf „Berechnen“.

<img src="/images/training_materials/Multiisochrones/calculate.png"  alt="Calculate" style="max-height:205px;"/>

6. Die resultierenden Multi-Isochronen zeigen Ihnen die Einzugsbereiche der Supermärkte (hier für den Modus „Zu Fuß“ mit 5 Minuten und 10 Minuten Einzugsbereich). Die zugehörige Tabelle zeigt nach Ortsteil sortiert, wie viele Menschen von der Gesamtbevölkerung in 5 bzw. 10 Minuten Zufußgehen einen Supermarket erreichen können. Über den Download-Button können Sie die Ergebnisse herunterladen.

<img src="/images/training_materials/Multiisochrones/result_multiisochrone.png"  alt="Result" />

#### 2 Erreichbarkeit von ÖV-Haltestellen

##### 2.1 Planungsfrage

Wie viele Bewohner können in einer bestimmten Reisezeit mit dem Fahrrad eine ÖV-Haltestelle erreichen?

##### 2.2 Arbeitsschritte

1. Wählen Sie die gewünschten ÖV-Haltestellen (z.B. Bus, Tram) im Menü „Filter Thematische Daten“ aus.
   
2. Stellen Sie die Routing-Optionen wie gewünscht ein (z.B. Fahrrad, 15km/h, 5 Min Reisezeit, 2 Isochronen).
   
3. Wechseln Sie zum Isochronenberechnugsmodus „Multi“ und wählen die Methode „Ortsteil“ aus und wählen die Ortsteile in der Karte aus oder zeichnen Sie ein beliebiges Gebiet.
   
4. Klicken Sie auf „Berechnen“.
   
5. Die resultierenden Multi-Isochronen zeigen Ihnen die Einzugsbereiche der ÖV-Haltestellen (hier für den Modus „Fahrrad“ mit 5 Minuten Einzugsbereich und 2,5 Minuten Einzugsbereich). Die zugehörige Tabelle zeigt nach Ortsteil sortiert, wie viele Menschen von der Gesamtbevölkerung in 5 bzw. 2,5 Minuten Radfahren eine ÖV-Haltestelle erreichen können.

<img src="/images/training_materials/Multiisochrones/result_multiisochrone_öv.png"  alt="Result" />