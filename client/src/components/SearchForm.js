import React, { useState } from 'react'
import { FormLabel, Form, Button } from 'react-bootstrap'
import axios from 'axios'

const SearchForm = props => {
  const [searchValue, setSearchValue] = useState('')
  const [restaurantResults, setRestaurantResults] = useState('')
  const yelpApiKey = "y7ByWI2XVyatQlf7sIi3pdhagWQxnjoZ__bq0SDUr7QnHSan26rp-vYtP7FNiRrr8tYoX8NiKY3nl_7DLCxqgp1T9uiNh8NW5ol6GIl19KIlZv68cvEUHz2yUH94XXYx"

  const handleSearchInputChange = e => {
    setSearchValue(e.target.value)
  }

  const resetSearchInput = () => {
    setSearchValue('')
  }

  const handleSubmit = e => {
    e.preventDefault()
    axios
      .get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search`, {
        headers: {
          Authorization: `Bearer ${yelpApiKey}`,
        },
        params: {
          location: '11206',
          term: `${searchValue}`
        }
      })
      .then((res) => {
        const restaurants = res.data
        setRestaurantResults({ restaurants })
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
