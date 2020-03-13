# Sagemaker Deployment

This repository contains materials for the udacity machine learning engineer nanodegree. In particular, my sentiment analysis web app is displayed in the `Project` folder.

# Sentiment Analysis Web App

In this web app, a user enters his personal review on a movie and, based on his review, the app tells him whether it was a *negative* or *positive* review. 

The infrastructure of the Web App is portrayed as follows: 

![AWS Infrastructure for the Web App](Img/aws_structure.png)

Once the user inputs its review text, the web page send an HTTP request to an **API Gateway** which handles the endpoint to which the request is redirectioned. For the sentiment analysis app, it calls a **Lambda Function** which is responsible for extracting the content of the HTTP request (namely the review text) and send it to a model which was developed using **Amazon Sagemaker**.

The model for this project was a *Long-short Term Memory* (LSTM) trained and validated in the IMDB movie review dataset. The train and validation sets were preprocessed using a *bag of words* with a vocabulary size of 500 words. The resulting sets were stored in a **S3** bucket. 

An example of the web app is portrayed below: 

![AWS Infrastructure for the Web App](Img/web_app_visualization.png)

The web app page can be accessed in [this link](https://sagemaker-us-east-1-595380434278.s3.amazonaws.com/index_original.html). However, since the API Gateway and endpoints are cost consuming resources, they are turned off by default. *If you wish to test the web app, send me an email*. 

