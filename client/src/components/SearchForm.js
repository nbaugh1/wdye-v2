import React, { useState } from 'react'
import { FormLabel, Form, Button } from 'react-bootstrap'
import axios from 'axios'

const SearchForm = props => {
  const [searchValue, setSearchValue] = useState('')
  const [restaurantResults, setRestaurantResults] = useState('')

  const handleSearchInputChange = e => {
    setSearchValue(e.target.value)
  }

  const resetSearchInput = () => {
    setSearchValue('')
  }

  const handleSubmit = e => {
    e.preventDefault()
    fetch
      .get('https://api.yelp.com/v3/businesses/{searchValue}')
      .then(response => {
        const restaurants = response.data
        this.setRestaurantResults({ restaurants })
        console.log(restaurants)
      })
    resetSearchInput()
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId='restaurantSearch'>
        <FormLabel>Restaurant Name</FormLabel>
        <Form.Control
          type='text'
          placeholder='Restaurant Name'
          value={searchValue}
          onChange={handleSearchInputChange}
        />
      </Form.Group>
      <Button type='submit'>Search</Button>
    </Form>
  )
}

export default SearchForm
