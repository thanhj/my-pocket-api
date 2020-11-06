const assets = require('../data/assets.json')

const getAssets = assetId => {
    if (!assetId)
        return assets

    const asset = assets.find((asset) => {
        return asset.id == assetId
    })

    if (asset)
        return asset

    throw new Error('The asset you requested was not found')
};

module.exports = getAssets