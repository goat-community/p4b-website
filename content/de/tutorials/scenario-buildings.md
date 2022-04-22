---
title: Szenarien - Gebäude
permalink: "/de/tutorials/scenario-buildings/"
weight: 50
sections:
- training

---
#### Beschreibung des Features

GOAT ermöglicht Veränderungen in der Bebauung, wie z.B. die Errichtung eines neuen Wohngebietes oder das Abreißen eines alten Gebäudes. Das entwickelte Szenario wird zur vorhandenen Siedlungsstruktur hinzugefügt und im Anschluss können Änderungen in der Erreichbarkeit aufgezeigt werden.

#### Mögliche Anwendungsfälle (Planungsfragen)
- Wie verändert die Errichtung eines neuen Wohngebietes die Erreichbarkeit zu Schulen in einer bestimmten Nachbarschaft?
- Ist die Bevölkerung in einem neuen Wohngebiet mit den Zielen des täglichen Bedarfs erschlossen?
- Wo bestehen Potenziale für die weitere Siedlungsentwicklung?

#### Schritt-für-Schritt-Anleitung für eine beispielhafte Planungsaufgabe
#### 1 Szenario zu neuer Wohnbebauung
##### 1.1 Planungsfrage
- Wie viele zusätzliche Bewohner haben innerhalb von 10 Gehminuten Zugang zu einer Grundschule, wenn ein bestehendes Wohngebiet nachverdichtet wird?
##### 1.2 Arbeitsschritte

1. Blenden Sie den Layer „Gebäude” aus der Kategorie „Gebäude und Flächennutzung”.

<img src="/images/training_materials/Scenario_buildings/buildings.png" alt="Buildings"/>

2.  Blenden Sie außerdem die Heatmap „Bevölkerung” ein. Diese zeigen alle vorhandenen Gebäude (in rot: Gebäude mit Wohnnutzung, in weiß: Gebäude ohne Wohnnutzung) und die Bevölkerungsdichte an (umso dunkler der Hintergrund, umso höher die Bevölkerungsdichte).  

<img src="/images/training_materials/Scenario_buildings/population.png" alt="Population"/>

3. Gehen Sie nun in das Fenster zur Szenarienentwicklung und erstellen ein neues Szenario.

<img src="/images/training_materials/Scenario_POIs/create_scenario.png" alt="New scenario" style="max-height:250px;"/>

4. Geben Sie dem Szenario einen Namen und klicken Sie auf "OK".

<img src="/images/training_materials/Scenario_buildings/name_scenario.png" alt="Name scenario" style="max-height:200px;"/>

5. Wählen Sie den zu bearbeitenden Layer aus, in diesem Fall den „Gebäude” Layer.

<img src="/images/training_materials/Scenario_buildings/scenario_buildings.png" alt="Edit Buildings" style="max-height:250px;"/>

6. Mittels der Bearbeitungstools können Sie neue Gebäude zeichnen und bearbeiten. Bestimmen Sie für neue Gebäude jeweils die Art der Nutzung und die Anzahl der Stockwerke. Außerdem muss für jedes Gebäude mindestens ein Eingang gesetzt werden. Nachdem dies getan wurde, erscheint das Gebäude in Grün.

![Draw Buildings](/images/training_materials/Scenario_buildings/draw.webp)

7. Wechseln Sie in die Szenario-Ansicht. Die veränderten Gebäude werden nun in die Berechnung mit einbezogen.

![Scenario View](/images/training_materials/Scenario_buildings/scenario_heatmap.webp)

8. Lassen Sie sich als Thematische Daten die Grundschulen anzeigen.
9. Wechseln Sie zum Isochronen Menü, schalten Sie auf den "Vergleich" Modus, wählen Sie die "Multi" Isochronen Berechnung und die "Ortsteil" Methode aus.

<img src="/images/training_materials/Scenario_buildings/multiisochrones.webp" alt="Comparison multi isochrone" style="max-height:250px;"/>

10. Wählen Sie dann in der Karte per Mausklick den Ortsteil, in dem Sie die Nachverdichtung durchgeführt haben.
11. Klicken Sie auf „Berechnen“.

<img src="/images/training_materials/Scenario_buildings/calculate.webp" alt="Calculation" style="max-height:250px;"/>

12. Die resultierenden Multi-Isochronen zeigen die Einzugsbereiche der Grundschulen (hier für den Modus „Fußgänger“ mit 5 Minuten Einzugsbereich in hellgrün und 10 Minuten Einzugsbereich in dunkelgrün). Der zugehörigen Tabelle kann entnommen werden, wie viele zusätzliche Menschen durch die Nachverdichtung nun im 10-minütigen Einzugsbereich der Grundschule wohnen.

![Result](/images/training_materials/Scenario_buildings/result.webp)