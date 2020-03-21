import React from 'react';
import { Container } from 'react-bootstrap'
import SearchForm from './SearchForm'

const Home = () => {
    return (
        <Container
            style={{
                'max-width': '500px',
                'margin': 'auto',
                'padding': '10px',
            }}>
            <SearchForm />
        </Container>

    )
}

export default Home
