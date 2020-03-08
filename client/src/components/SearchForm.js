import React, { useState } from 'react'
import { FormLabel, Form, Button } from 'react-bootstrap'

const SearchForm = props => {
  const [searchValue, setSearchValue] = useState('')

  const handleSearchInputChange = e => {
    setSearchValue(e.target.value)
  }

  const resetSearchInput = () => {
    setSearchValue('')
  }

  const handleSubmit = () => {
    e.preventDefault()
    props.search(searchValue)
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
