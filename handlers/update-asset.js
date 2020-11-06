'use strict'

const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient()

const updateAsset = (assetId, updates) => {
    if (!assetId && !updates)
        throw new Error('Asset ID and updates object are required for updating the asset')

    docClient.update({
        TableName: 'pocket-assets',
        Key: {
            assetId: assetId
        },
        UpdateExpression: "set name=:name, description=:description, metadata=:metadata",
        ExpressionAttributeValues:{
            ":name":updates.name,
            ":description":updates.description,
            ":metadata":updates.metadata,
        },
        ReturnValues:"ALL_NEW"
    }).promise()
        .then((res) => {
            console.log('Asset is updated!', res)
            return res
        })
        .catch((saveError) => {
            console.log(`Oops, Asset is not updated :(`, saveError)
            throw saveError
        })
}

module.exports = updateAsset