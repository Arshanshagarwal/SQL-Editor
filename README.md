# SQL-Editor

This is an SQL editor view made with reactJS.

## Project Description:

It is an SQL editor which taken SQL commands as input and provide suitable ouput using the database provided.

## Features

The web App provides many features which are included to make the interaction more fluid and nice. 

1. Run Button - A Run button over the input window helps the user to run the input commands.
2. Delete Button - To make the workflow more friendly, a delete button has been added, which clears the input as well as the output windows.
3. Download Button - Lastly, a download button is there over both the input as well as output windows, which helps download the code in .sql file with the help of a single click.

## Load time

To calculate the loading time of the page i used 2 methods.

## 1. Chrome Dev Tools - 

Chrome Dev Tools provide a lighthouse functionality, which provides with metric report of the web app. It is an inbuilt feature off the dev tools and can provide with a vast amount of data about the webapp.

It provided me with the FCP (first contentful paint) and LCP (largest contentful page) loading times, which were `0.8 s` and `1 s` respectively.

## 2. Pingdom Website - 

Pingdom website provides with free website performace testing service over different different regions, but pingdom has a issue. It is not consistent and provide varying results.
To overcome this, I took 8 tests and took their average to calculate the final result.

The 8 different page loading times were - ` 176ms 209ms 229ms 396ms 196ms 178ms 204ms 194ms`
which results in the average of - `222 ms`
and an average performance score of - 92
