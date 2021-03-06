import React, { useState, Component } from 'react'
import { FormLabel, Form, Button } from 'react-bootstrap'
import axios from 'axios'
import SearchResults from './SearchResults'

const SearchForm = () => {
  const [searchValue, setSearchValue] = useState('')
  const [locationValue, setLocationValue] = useState('')
  const [restaurantResults, setRestaurantResults] = useState('')
  const yelpApiKey = "y7ByWI2XVyatQlf7sIi3pdhagWQxnjoZ__bq0SDUr7QnHSan26rp-vYtP7FNiRrr8tYoX8NiKY3nl_7DLCxqgp1T9uiNh8NW5ol6GIl19KIlZv68cvEUHz2yUH94XXYx"

  const handleSearchInputChange = e => {
    setSearchValue(e.target.value)
  }

  const resetSearchInput = () => {
    setSearchValue('')
  }

  const handleLocationInputChange = e => {
    setLocationValue(e.target.value)
  }

  const resetLocationInput = () => {
    setLocationValue('')
  }

  const handleSubmit = e => {
    e.preventDefault()
    axios
      .get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search`, {
        headers: {
          Authorization: `Bearer ${yelpApiKey}`,
        },
        params: {
          location: `${locationValue}`,
          term: `${searchValue}`
        }
      })
      .then((res) => {
        setRestaurantResults(res.data['businesses'])
      })
      .catch((err) => {
        console.log(err)
      })
    resetSearchInput()
    resetLocationInput()
  }

  const searchResComps = () => {

    if (restaurantResults) {
      const resultComponents = restaurantResults.map(rest => (
        <SearchResults restaurants={rest} />
      )
      )
      return resultComponents
    }
  }

  return (
    <div className="container">
      <div className="form-group">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId='restaurantSearch'>
            <FormLabel>Restaurant Name</FormLabel>
            <Form.Control
              type='text'
              placeholder='Restaurant Name'
              value={searchValue}
              onChange={handleSearchInputChange}
              style={{

              }}
            />
            <hr />

            <FormLabel>Location</FormLabel>
            <Form.Control
              type='text'
              placeholder='Zip Code, City, State, etc'
              value={locationValue}
              onChange={handleLocationInputChange}
              style={{

              }}
            />
          </Form.Group>
          <Button type='submit'>Search</Button>
        </Form>
      </div>
      {searchResComps()}
    </div>
  )
}

export default SearchForm
