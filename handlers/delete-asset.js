const deleteAsset = (id) => {
    if (!id)
        throw new Error('Asset ID is required for deleting the order')

    return {}
}

module.exports = deleteAsset