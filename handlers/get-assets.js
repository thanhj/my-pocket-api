'use strict'

const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient()

const getAssets = assetId => {
    if (typeof assetId === 'undefined'){
        return docClient.scan({
            TableName: 'pocket-assets'
        }).promise()
            .then(result => result.Items)
    }

    return docClient.get({
        TableName: 'pocket-assets',
        Key: {
            assetId: assetId
        }
    }).promise()
        .then(result => result.Item)
};

module.exports = getAssets