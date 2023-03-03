+++
author = "reynartz"
categories = ["use cases"]
date = 2023-02-28T23:00:00Z
description = "Application Example Urban Planning: GOAT as a Planning Tool for Urban Development Concepts "
draft = true
image = "/images/stadtplanung_900450.webp"
summary = "Application Example Urban Planning: GOAT as a Planning Tool for Urban Development Concepts "
thumbnail = "/images/stadtplanung_600450.webp"
title = "Use Cases GOAT: Urban Development Concepts"
translationKey = "use-cases-development-concepts"

+++
## What is an urban development concept?

An urban development concept seeks to support and develop the characteristics of a city in a future-oriented, sustainable and long-term manner. Interdisciplinary and cross-disciplinary communication as well as the inclusion of current trends is essential (complan Kommunalberatung GmbH, 2017). Currently, both the "city of short distances" and an expansion of local mobility and alternative forms of mobility such as car and bike sharing are of great importance in many cases (complan Kommunalberatung GmbH, 2017). This is intended to strengthen urban and local supply centers.

## What can GOAT contribute to this?

### Visualization of spatial data

GOAT is a WebGIS and contains a variety of spatial data. For example, buildings, population densities, land uses, points-of-interest (POIs), neighborhoods, noise pollution, and much more information can be overlaid (see Figure 1).

![](/images/abb1-en.png)

_Figure 1: Representation of the land use map in GOAT._

### Connectivity and quality of the path network

For pedestrian and bicycle traffic, good connectivity between urban neighborhoods is essential. In GOAT, the existing path network can be mapped for the different modes of transport. With the help of the [connectivity heatmap](/en/docs/heatmap-connectivity/ "documentation about heatmap"), it is possible to analyze how well the networks for pedestrian and bicycle paths are interconnected and thus identify potential for improvement. Scenario creation can also be used to analyze the impact of new trail connections (e.g., bike bridge) on accessibility.

Since not only the availability of paths but also the attractiveness of the paths is crucial, further information such as surface conditions of the paths, gradients and accident statistics are stored. For an overall analysis of the cycling offer, required bicycle infrastructure, such as bicycle facilities and bicycle repair stations, can also be integrated into GOAT.

If locally available, data on the accessibility of footpaths can also be stored in GOAT and thus used for the expansion of accessibility in public spaces.

### Accessibility analysis

In order to achieve the goal of decentralized services of general interest, a fair distribution of important facilities for daily needs across the urban area is essential. To determine whether all citizens can reach all important facilities within a reasonable time (ideally with sustainable modes), accessibility analyses are a suitable method.

Our open source planning software GOAT contains various POIs like sports facilities, supermarkets, kindergartens and parks. These can be visualized and their spatial distribution analyzed with different accessibility indicators and intersected with population data. [Isochrones](/en/tutorials/isochrone/ "tutorials to isochrones") and [heatmaps](/en/docs/heatmap/ "documentation about heatmaps") can be used to find gaps in accessibility, identify opportunities for redensification, and thus address grievances.

A good benchmark for accessibility is the results of [multi-isochrones](/en/tutorials/multiisochrones/ "tutorials to multi-isochrones"). This form of isochrones calculate what proportion of residents:inside a neighborhood have access to a particular daily amenity. Different means of transport as well as travel time can be chosen. Figure 2 shows an exemplary accessibility analysis with isochrones to supermarkets within 10 minutes.

![](/images/abb2-en.png)

_Figure 2: Accessibility isochrones to supermarkets in GOAT._

### Scenarios for location planning

The enhancement and strengthening of pedestrian-friendly urban and local supply centers is considered an important point in the planning of urban development concepts (complan Kommunalberatung GmbH, 2017, p. 43). With GOAT, in addition to analyzing the current state, interactive scenarios can be created for new POIs and buildings and their impact on accessibility can be analyzed. In this video, we show how scenarios can be run in GOAT.

In addition, locations of alternative and sustainable mobility such as carsharing, bikesharing or charging stations for e-cars can be displayed and dynamically changed or additional stations can be added. Thus, ideal new locations can be identified to provide access to these environmentally friendly mobility options to the entire population in the future, if possible.

<iframe src="[https://player.vimeo.com/video/754586552?h=ebea094923](https://player.vimeo.com/video/754586552?h=ebea094923 "https://player.vimeo.com/video/754586552?h=ebea094923")" width="1920" height="1080" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>

## Try GOAT!

Do you also want to perform location planning analyses with GOAT or are you interested in further functions?[ Contact us ](/en/contact/ "Contact Plan4Better here!")or try the [free GOAT demo](/en/request-demo/ "Try GOAT for free!")!

## References

complan Kommunalberatung GmbH, 2017. Stadt Jena. 2030+ - Integriertes Stadtentwicklungskonzept. Stadt Jena, Jena.