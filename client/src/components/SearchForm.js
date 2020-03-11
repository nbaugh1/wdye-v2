import React, { useState } from 'react'
import { FormLabel, Form, Button } from 'react-bootstrap'
import axios from 'axios'

const SearchForm = props => {
  const [searchValue, setSearchValue] = useState('')
  const [restaurantResults, setRestaurantResults] = useState('')
  const yelpApiKey = process.env.REACT_APP_API_KEY

  const handleSearchInputChange = e => {
    setSearchValue(e.target.value)
  }

  const resetSearchInput = () => {
    setSearchValue('')
  }

  const handleSubmit = e => {
    e.preventDefault()
    axios
      .get(`https://api.yelp.com/v3/businesses/search`, {
        headers: {
          Authorization: `Bearer ${yelpApiKey}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Origin: 'http://localhost:3000',
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*'
        },
        params: {
          location: '11206',
          term: `${searchValue}`
        }
      })
      .then((res) => {
        const restaurants = res.data
        this.setRestaurantResults({ restaurants })
        console.log(restaurants)
      })
      .catch((err) => {
        console.log(err)
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
