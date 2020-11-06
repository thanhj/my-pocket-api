'use strict'

const Api = require("claudia-api-builder")
const getAssets = require("./handlers/get-assets")
const createAsset = require("./handlers/create-asset")
const updateAsset = require("./handlers/update-asset")
const deleteAsset = require("./handlers/delete-asset")

const api = new Api()

api.get('/', () => 'Welcome to Pizza API')

api.get('/assets', () => {
  return getAssets()
})

api.get('/assets/{id}', (request) => {
    return getAssets(request.pathParams.id)
}, {
    error: 404
})

api.put('/assets/{id}', (request) => {
    return updateAsset(request.pathParams.id, request.body)
})

api.delete('/assets/{id}', (request) => {
    return deleteAsset(request.pathParams.id)
}, {
    success: 204,
    error: 400
})

api.post('/assets', (request) => {
    return createAsset(request.body)
}, {
    success: 201,
    error: 400
})

module.exports = api
