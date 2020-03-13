import React from 'react';
import { Container } from 'react-bootstrap'
import SearchForm from './SearchForm'

const Home = () => {
    return (
        <Container
            style={{
                margin: 10,
                padding: 20,
                'border-style': 'solid'

            }}>
            <SearchForm />
        </Container>

    )
}

export default Home
