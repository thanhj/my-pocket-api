const updateAsset = (id, updates) => {
    if (!id && !updates)
        throw new Error('Asset ID and updates object are required for updating the asset')

    return {
        message: `Asset ${id} was successfully updated`
    }
}

module.exports = updateAsset