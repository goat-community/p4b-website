---
title: Heatmap - Lokale Erreichbarkeit
permalink: "/de/docs/heatmap/"
lang: de
sections:
- technical
weight: 60

---
GOAT ermöglicht die Berechnung der lokalen Erreichbarkeit zu verschiedenen Zielen. Basierend auf vorberechneten Reisezeiten und der Auswahl der Points-of-Interest (POIs) wird die Heatmap dynamisch berechnet. Die Visualisierung erfolgt als Heatmap auf einem hexagonalen Raster.

![GOAT Lokale Erreichbarkeit](/images/lokale-erreichbarkeit-1-deutsch.webp "GOAT Lokale Erreichbarkeit")

#### 1. Berechnung

Die Berechnung der Heatmap erfolgt mit Hilfe von Potenzialindikatoren und kann operationalisiert werden als:

![Erreichbarkeitsformel](/images/docs/technical_documentation/heatmap/place-based_accessibility_measures.webp "Erreichbarkeitsformel")

wobei die Erreichbarkeit <b>A</b> des Startpunktes <b>i</b> die Summe aller am Zielort <b>j</b> verfügbaren Möglichkeiten (POIs, Bevölkerung, ...) <b>O</b> ist, gewichtet mit einer Funktion der Reisezeit <b> t<sub>ij</sub></b> zwischen <b>i</b> und <b>j</b>. GOAT verwendet die modifizierte Gaußfunktion als Widerstandsfunktion für die Berechnung:

![Widerstandsfunktion](/images/docs/technical_documentation/heatmap/Gaussian_function.webp "Widerstandsfunktion")

Die Reisezeiten werden in Sekunden berechnet. Es wird der Cut-off-Wert 20 Minuten verwendet. Das bedeutet, dass Ziele, die weiter als 20 Minuten entfernt sind, als "nicht erreichbar" angenommen und bei der Berechnung der Erreichbarkeit nicht berücksichtigt werden.  

Der Sensitivitätsparameter definiert, wie sich die Erreichbarkeit mit zunehmender Reisezeit verändert. Da der Sensitivitätsparameter entscheidend für die Quantifizierung der Erreichbarkeit ist, können Sie diese mit GOAT einstellen. Die folgenden Grafiken zeigen den Einfluss des Sensitivitätsparameters auf die Erreichbarkeit.

![Sensitiviätsindex](/images/docs/technical_documentation/heatmap/sensitivitätsindex.webp "Sensitiviätsindex")

Ebenso lässt sich die Gewichtung ändern. Somit kann z.B. einem POI-Typ (z.B. Großmärkten) ein höherer Erreichbarkeitseffekt als anderen POI-Typen (z.B. Discount-Supermärkten) zugewiesen werden. 

#### 2. Klassifizierung

Um die pro Hexagon berechneten Erreichbarkeitswerte zu interpretieren, wird eine Klassifikation basierend auf Quintilen verwendet.

#### 3. Rechenbeispiel

##### 3.1 Berechnung der Reisezeit

Das folgende Beispiel veranschaulicht, wie die <i>lokale Erreichbarkeitsheatmap</i> berechnet wird. Die Reisezeiten werden für jedes Hexagon zum jeweiligen Ziel im Straßennetz berechnet.

![Vereinfachte Beispieldarstellung](/images/docs/technical_documentation/heatmap/grid_groceries.webp "Vereinfachte Beispieldarstellung")

Für das hier dargestellte Hexagon ergibt die Berechnung, je nach Sensititivitätsparameter, die folgenden Ergebnisse:

Einheitlicher Sensitivitätsparameter: ![Berechnung der Erreichbarkeit](/images/docs/technical_documentation/heatmap/accessiblity_uniform_sensitivity-index.webp "Berechnung der Erreichbarkeit")

Variierender Sensitivitätsparameter für Großmärkte: ![Berechnung der Erreichbarkeit](/images/docs/technical_documentation/heatmap/accessiblity_different_sensitivity-indices.webp "Berechnung der Erreichbarkeit")

Angewandt in GOAT ergeben sich die folgenden Unterschiede:

##### 3.2 Berechnung mit einheitlichem Sensitivitätsparameter:

Im ersten Beispiel wird die Erreichbarkeit für Lebensmittel-Geschäfte in 15 Min unter Verwendung eines einheitlichen Sensitivitätsparameters (β=300.000) für alle Geschäfte berechnet. Das Ergebnis sieht so aus: 

![GOAT Lokale Erreichbarkeit zu Supermärkten](/images/lokale-erreichbarkeit-4-deutsch.webp "GOAT Lokale Erreichbarkeit zu Supermärkten")

##### 3.3 Berechnung mit unterschiedlichen Sensitivitätsparametern

Im zweiten Beispiel wird die Erreichbarkeit von Lebensmittel-Geschäften in 15 Min unter Verwendung verschiedener Sensitivitätsparameter (β=300.000 und β=400.000) durchgeführt. Das bedeutet, dass der Sensitivitätsparameter von den verschiedenen Supermarkt-Typen abhängt. Für dieses Beispiel haben wir β=400.000 für Großmärkte und β=300.000 für Discounter und Supermärkte verwendet. Hieraus erigibt sich folgendes Ergebnis:

![Ergebnis bei unterschiedlichen Sensitivitätsparametern](/images/lokale-erreichbarkeit-5-deutsch.webp "Ergebnis bei unterschiedlichen Sensitivitätsparametern")

Durch den Vergleich beider Ergebnisse lassen sich einige Unterschiede feststellen.

#### Referenzen

Kwan, Mei-Po. 1998. “Space-Time and Integral Measures of Individual Accessibility: A Comparative Analysis Using a Point-Based Framework.” Geographical Analysis 30 (3): 191–216. [https://doi.org/10.1111/j.1538-4632.1998.tb00396.x](https://doi.org/10.1111/j.1538-4632.1998.tb00396.x).

Vale, D.S., and M. Pereira. 2017. “The Influence of the Impedance Function on Gravity-Based Pedestrian Accessibility Measures: A Comparative Analysis.” Environment and Planning B: Urban Analytics and City Science 44 (4): 740–63. [https://doi.org/10.1177%2F0265813516641685](https://doi.org/10.1177%2F0265813516641685).

Higgins, Christopher D. 2019. “Accessibility Toolbox for R and ArcGIS.” Transport Findings, May. [https://doi.org/10.32866/8416](https://doi.org/10.32866/8416).