# MTNT(Metro Transit NextTrip)

## Steps to install in a local

- Clone the respository into your local machine
- Install the node modules "npm install"
- Run the application by using "npm start"

## Assumptions and Architecture

- The application should be scalable in all variants like Transit(Bus, Train, etc..), Agencies(lametero, lvmetro, etc..), and Deploymnet ENV's(DEV, PROD, etc..)
- Respective configuration files have been created under [src/config]
- Took all the feature into a single View, and maintained route respectively
- Assumed that start location are not availble all the time when using this Web App

## Features

- Divided the whole structure into HOC componenets, and functional components
- HOC include [Layout] as the is the root for all the page routes
- For the respective route from lametro agency the respectives stops and number is deplayed
