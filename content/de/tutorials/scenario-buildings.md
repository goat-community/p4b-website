---
title: Szenarien - Gebäude
permalink: "/de/tutorials/scenario-buildings/"
weight: 50
sections:
- training

---
![Scenarios Buildings in GOAT](/images/tutorials/Tutorial_banners/scenario_building_de_banner.webp "Scenarios Buildings in GOAT")

#### Beschreibung des Features

GOAT ermöglicht Veränderungen in der Bebauung, wie z.B. die Errichtung eines neuen Wohngebietes oder das Abreißen eines alten Gebäudes. Das entwickelte Szenario wird zur vorhandenen Siedlungsstruktur hinzugefügt und im Anschluss können Änderungen in der Erreichbarkeit aufgezeigt werden.

#### Mögliche Anwendungsfälle (Planungsfragen)
- Wie verändert die Errichtung eines neuen Wohngebietes die Erreichbarkeit zu Kindergärten in einer bestimmten Nachbarschaft?
- Ist die Bevölkerung in einem neuen Wohngebiet mit den Zielen des täglichen Bedarfs erschlossen?
- Wo bestehen Potenziale für die weitere Siedlungsentwicklung?
#### Video Tutorial
<iframe class="embed-responsive-item" src="https://player.vimeo.com/video/759823759" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen data-uk-responsive width="1920" height="1080"></iframe>

#### Schritt-für-Schritt-Anleitung für eine beispielhafte Planungsaufgabe
#### 1 Szenario zu neuer Wohnbebauung
##### 1.1 Planungsfrage
- Wie viele zusätzliche Bewohner:innen haben innerhalb von 10 Gehminuten Zugang zu einer Grundschule, wenn ein bestehendes Wohngebiet nachverdichtet wird?
##### 1.2 Arbeitsschritte

1. Blenden Sie den Layer „Gebäude” aus der Kategorie „Gebäude und Flächennutzung” ein.

<img src="/images/tutorials/Scenario_buildings/Scenarios_buildings_1.2.1_de.webp" alt="Buildings"/>

2.  Blenden Sie außerdem den Indikator „Bevölkerungsdichte” ein. Diese zeigen alle vorhandenen Gebäude (in rot: Gebäude mit Wohnnutzung, in weiß: Gebäude ohne Wohnnutzung) und die Bevölkerungsdichte an (je dunkler der Hintergrund, desto höher die Bevölkerungsdichte).  

<img src="/images/tutorials/Scenario_buildings/Scenarios_buildings_1.2.2_de.webp" alt="Population"/>

3. Gehen Sie nun in das Fenster zur Szenarienentwicklung und erstellen ein neues Szenario.

<img src="/images/tutorials/Scenario_buildings/Scenarios_buildings_1.2.3_de.webp" alt="New scenario" style="max-height:280px;"/>

4. Geben Sie dem Szenario einen Namen und klicken Sie auf "OK".

<img src="/images/tutorials/Scenario_buildings/Scenarios_buildings_1.2.4_de.webp" alt="Name scenario" style="max-height:200px;"/>

5. Wählen Sie den zu bearbeitenden Layer aus, in diesem Fall den „Gebäude” Layer.

<img src="/images/tutorials/Scenario_buildings/Scenarios_buildings_1.2.5_de.webp" alt="Edit Buildings" style="max-height:250px;"/>

6. Mittels der Bearbeitungstools können Sie neue Gebäude zeichnen und bearbeiten. Bestimmen Sie für neue Gebäude jeweils die Art der Nutzung und die Anzahl der Stockwerke. 

<img src="/images/tutorials/Scenario_buildings/Scenarios_buildings_1.2.6_de.webp" alt="Gebäude zeichnen" />

7. Außerdem muss für jedes Gebäude mindestens ein Eingang gesetzt werden (dargestellt durch lila Punkte). Nachdem dies getan wurde, erscheint das Gebäude in Grün.

<img src="/images/tutorials/Scenario_buildings/Scenarios_buildings_1.2.6_green_de.webp" alt="Eingänge zeichnen" />

8. Lassen Sie sich als Thematische Daten die Kindergärten anzeigen.
   
9. Wechseln Sie zum Isochronen Menü, schalten Sie auf den "Vergleich" Modus, wählen Sie die "Multi" Isochronen Berechnung und die "Ortsteil" Methode aus.

<img src="/images/tutorials/Scenario_buildings/Scenarios_buildings_1.2.8_de.webp" alt="Comparison multi isochrone" style="max-height:400px;"/>

10. Wählen Sie dann in der Karte per Mausklick den Ortsteil, in dem Sie die Nachverdichtung durchgeführt haben.
    
11. Klicken Sie auf „Berechnen“.

<img src="/images/tutorials/Scenario_buildings/Scenarios_buildings_1.2.9and10_de.webp" alt="Berechnen" style="max-height:310px;"/>

12. Die resultierenden Multi-Isochronen zeigen die Einzugsbereiche der Kindergärten (hier für den Modus „Fußgänger“ mit 10 Minuten Einzugsbereichen). In der Karte ist in diesem Beispielfall zu erkennen, dass die neue Bevölkerung gerade an der Grenze des Einzugsbereichs liegt und somit knapp 10 Minuten Fußweg zum nächsten Kindergarten zurücklegen muss.

<img src="/images/tutorials/Scenario_buildings/Scenarios_buildings_1.2.11_result10min_de.webp" alt="Ergebnis" />

13. Der Reisezeit-Slider kann interkativ bewegt werden. Die Multiisochronen passen sich dynamisch an. 

<img src="/images/tutorials/Scenario_buildings/Scenarios_buildings_1.2.11_result5min_de.webp" alt="Ergebnis" />