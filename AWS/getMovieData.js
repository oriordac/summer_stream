'use strict';
const AWS = require('aws-sdk');

AWS.config.update({ region: "us-east-2"}); // update region to match your AWS account's region

exports.handler = async (event, context) => {
    let title ="";
    let urlTitle= "";
    let services = [];
    let poster = "";

    if(event.queryStringParameters && event.queryStringParameters.title) { // update with your own query string parameters
        urlTitle = event.queryStringParameters.title;

        const documentClient = new AWS.DynamoDB.DocumentClient({ region: "us-east-2"}); // update region to match your AWS account's region

        const params = {
            TableName: "movie", // update
            Key: {
                title: urlTitle // update with your primary key
            }
        };

        try {
            const data = await documentClient.get(params).promise();
            //Promise is formatted like so => "Item": {"title": S, "poster": S, "services"" S"}
            title = data.Item.title;
            poster = data.Item.poster;
            services = data.Item.services.split("-");
        } catch (error) {
            console.log(error);
        }

        if(!title) {
            return response(200, "Movie Not Found", null, null, null);
        } else {
            return response(200, "Movie Found", title, poster, services);
        }

    } else {
        return response(400, "Invalid Request", null, null, null);
    }
};

function response(status, message, titleData, posterData, servicesData) {
    let bodyResponse = {
        Status: status,
        Message: message,
        TitleData: titleData,
        PosterData: posterData,
        ServicesData: servicesData
    };
    const response = {
        statusCode: status,
        headers: {
            "Access-Control-Allow-Headers" : "Content-Type",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET"
        },
        body: JSON.stringify(bodyResponse)
    };
    return response;
}