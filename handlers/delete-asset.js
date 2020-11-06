'use strict'

const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient()

const deleteAsset = (assetId) => {
    if (!assetId)
        throw new Error('Asset ID is required for deleting the order')

    return docClient.delete({
        TableName: 'pocket-assets',
        Key: {
            assetId: assetId
        }
    }).promise()
        .then((res) => {
            console.log('Asset is deleted!', res)
            return res
        })
        .catch((saveError) => {
            console.log(`Oops, Asset is not deleted :(`, saveError)
            throw saveError
        })
}

module.exports = deleteAsset