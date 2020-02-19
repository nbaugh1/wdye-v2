import React from 'react'
import { FormLabel, Form } from 'react-bootstrap'

const SearchForm = () => {
    return (
        <Form>
            <Form.Group controlId="restaurantSearch">
                <FormLabel>
                    Restaurant Name
                </FormLabel>
                <Form.Control type="text" placeholder="Restaurant Name" />
                
            </Form.Group>
        </Form>
    )
}

export default SearchForm
