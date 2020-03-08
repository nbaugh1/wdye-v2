import React from 'react'
import { FormLabel, Form } from 'react-bootstrap'



const SearchForm = () => {
    const searchYelp = () => {

    }
    const handleSubmit = () => {
        
    }
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
