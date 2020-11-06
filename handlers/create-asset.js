const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient()
const uuid = require('uuid')

const createAsset = (request) => {
    if (!request || !request.name || !request.metadata)
        throw new Error('To create an asset please provide asset name and metadata')

    return docClient.put({
        TableName: 'pocket-assets',
        Item: {
            assetId: uuid.v4(),
            name: request.name,
            description: request.description,
            metadata: request.metadata
        }
    }).promise()
        .then((res) => {
            console.log('Asset is saved!', res)
            return res
        })
        .catch((saveError) => {
            console.log(`Oops, asset is not saved :(`, saveError)
            throw saveError
        })
}

module.exports = createAsset