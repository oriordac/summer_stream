'use strict';
const AWS = require('aws-sdk');

AWS.config.update({ region: "us-east-2"}); // update region to match your AWS account's region

exports.handler = async (event, context) => {
    const documentClient = new AWS.DynamoDB.DocumentClient({ region: "us-east-2"}); // update region to match your AWS account's region

    let statusCode = 0;
    let responseBody = "";
    const { title, poster, services } = JSON.parse(event.body);

    const params = {
        TableName: "movie", // update
        Item: {
            title: title,
            poster: poster,
            services: services
        }
    };

    try {
        const data = await documentClient.put(params).promise();
        responseBody = JSON.stringify(data);
        statusCode = 201;
    } catch (error) {
        responseBody = `Unable to put movie data`;
        statusCode = 403;
    }

    const response = {
        statusCode: statusCode,
        headers: {
            "Content-Type": "application/json"
        },
        body: responseBody
    };

    return response;
};