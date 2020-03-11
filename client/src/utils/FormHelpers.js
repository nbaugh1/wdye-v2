export const handleSearchInputChange = e => {
    setSearchValue(e.target.value)
}

export const resetSearchInput = () => {
    setSearchValue('')
}

export const handleLocationInputChange = e => {
    setLocationValue(e.target.value)
}

export const resetLocationInput = () => {
    setLocationValue('')
}