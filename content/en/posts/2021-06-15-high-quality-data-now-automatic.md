---
author: ramirez
categories:
- development
- data
date: 2021-06-26T13:00:00.000+00:00
description: ''
image: "/images/blog/high_data_quality/mapillary_banner.webp"
summary: The Mapillary API is the first step towards automating data collection through
  automated image recognition and image segmentation. We use this data in GOAT to
  improve the data basis of our analyses.
thumbnail: "/images/blog/high_data_quality/mapillary_thumbnail.webp"
title: High quality data, now automatic
translationKey: ''

---
## The data challenge

One of the key challenges of building a planning instrument such as GOAT is the availability and the quality of the data used for the calculations. GOAT is largely based on the data from [OpenStreetMap (OSM)](https://www.openstreetmap.org/#map=5/50.151/9.539), which is not available in sufficient detail everywhere.

We utilize, among others, [Mapillary](https://www.mapillary.com/) to fill the data gaps in OSM. Mapillary is a platform through which image sequences of the streetscape can be captured and shared with the open community. From these images, valuable data can be extracted.

E.g., in early 2020, [we completely mapped Fürstenfeldbruck in Mapillary](../2020-04-25-mapillary), a town 10 km west of Munich. We are using the image sequences collected from us and other users to improve the data that is relevant for our analyses. Until last year, all the steps (analysis of the images, object detection, saving the gained information, etc.) were done manually.

As frequent Mapillary users, we follow Mapillary’s Blog, and on 24 august 2020, they posted “[Mapillary map features now available globally in OpenStreetMap](https://blog.mapillary.com/update/2020/08/24/global-map-features-openstreetmap.html)”. After reading the updates, we couldn't wait to try out the new features. With the following example, we would like to show how it had helped us.

## Mapillary plug-in for JOSM

This is an experience report of mapping and updating the pedestrian crossings in Fürstenfeldbruck. First, we got the base layer of crossings from [overpass-turbo](https://www.overpass-turbo.eu). This layer included all crossings mapped in OSM, so the idea was to compare them with the crossings identified by Mapillary’s AI object detection algorithm.

For this analysis, we used [JOSM](https://josm.openstreetmap.de/). It is an extensible OSM editor for the desktop, that allows very easily, and highly scalable, to edit features and attributes of the data. Via the [Mapillary-Plugin](https://help.mapillary.com/hc/en-us/articles/115001739989-Mapillary-JOSM-plugin) it is now possible to display the crosswalks and their location detected from the Mapillary images in JOSM.

In addition, the street view feature helps to verify the physical attributes of the infrastructure and the accuracy of the position of objects (e.g., traffic signs, lane markings). In the case of a crosswalk, we are particularly interested in attributes such as freedom-of-barriers and the type of crossing (traffic light, crosswalk, refuge island, etc.). This information can be derived from the images and accordingly, the OSM tags of the existing infrastructure can be enriched. Likewise, missing objects in OSM can be identified and added after data validation.

![Same signs in different identified in different locations by Mapillary.](/images/blog/high_data_quality/mapillary_fig1.webp "Mapillary locations")_Figure 1: Two sequences identifying the same signs in different locations_

However, sometimes different image sequences can identify the same traffic sign but locate it in completely different positions, as shown in Figure 1. Here, the blue sequence shows the signs located after the right turn (coming from the north-east) when, in fact, they are located before the turn. In this case, the green sequence located them in a more accurate position.

Despite the ongoing requirement for manual review, the Plug-in in JOSM simplified the evaluation of image data.

## Mapillary API: image segmentation and object detection

Soon after trying the JOSM plug-in, another feature was released on 28 August 2020, “[Global access to map data with the Mapillary API](https://blog.mapillary.com/update/2020/08/28/map-data-mapillary-api.html)”. It was the first step into the automation of data gathering.

The API provides 3 ways to access the image data and the information extracted therefrom:

1. [Images API](https://www.mapillary.com/developer/api-documentation/#images): returns the images from a defined area (within a bound box or a point with a radius).
2. [Object detections API](https://help.mapillary.com/hc/en-us/articles/115000967191-Object-detections): returns the segmentation per picture of the identified elements (e.g., vegetation, street, houses).
3. [Map Features API](https://www.mapillary.com/developer/api-documentation/#map-features): returns locations of objects (e.g., traffic lights, bicycle stands, traffic signs) extracted from multiple images as point features on the map.

![Segmentation of Maxvorstadt in Mapillary](/images/blog/high_data_quality/mapillary_fig2.webp "Maxvorstadt")_Figure 2: Segmentation of Maxvorstadt using the Object Detection Algorithm from Mapillary_

One of our first uses of Mapillary’s API was to create a map of Maxvorstadt, Munich, by using different segments from the Object Detections API. In this case, we looked for images showing cars, the sky, vegetation, and sidewalks. Since Mapillary’s algorithm breaks the image into 65 classes of objects as shown in Figure 2, we extracted the images with the highest proportion of the classes of interest.

As shown on the map in Figure 2, it is also possible to identify streets with high vegetation, or dense parking offer. It is interesting to see how multiple streets have a high percentage of “sky”. This may be due to wide streets and large open spaces, such as around the Pinakothek, or simply because most cameras were pointing to the sky.

## Automation algorithm

Regardless, we decided to go even further! We did not want to analyze only one neighborhood in Munich. We wanted to capture the entire city, or even extend to [other cities where GOAT is currently in use](../../references/). Our first challenge was to call the API for larger areas. To overcome it, we developed a function to divide the area into a grid of smaller squares.

The function also incorporates tiny time breaks in between the squares, so we would not overload the servers. Afterwards, we joined the extracted information from all the squares into a single JSON file.

The second challenge was related to the parameter for the API. Depending on the data required, the API needs a different set of parameters that has to be changed manually. To solve it, we filtered our own library of objects from the complete list of the [Mapillary API Documentation](https://www.mapillary.com/developer/api-documentation/).

This filtered library is within a YAML file, which has all the parameters required for the API. Now, in a single run, the script can call multiple objects either from the "Object Detection API" or the "Map Features API".

You can find all our scripts developed for this purpose in our [GitHub repo](https://github.com/goat-community/mapillary-api).

## Making use of the data

And how are we going to use this information? For accessibility and walkability analysis. Currently, we have used the data from Mapillary to obtain a better data basis for the [Walkability Index](/posts/2021-04-06-walkability-index/) and in this course, we have collected more than 10,000 images in the city of Freiburg.

But there are also many other potential applications. Let's assume we are analyzing perceived walking accessibility in a neighborhood at night. In this type of analysis, we are interested in factors that influence the attractiveness of walking. In this case, that would be the lighting. We can retrieve this information, represented by the presence of streetlights, through the Mapillary API, improving the accuracy of the analyses.

Another use case could be the analysis of the parking capacity in a city. With the object detection function it is possible to identify parking cars on the side of streets. Sections of streets with an especially high proportion of parking space can thereby be pointed out and redesigned into more livable spaces.