import React from 'react';

const SearchResults = ({ results }) => {
    let rests = [results]
    for (let name in rests) {
        console.log()
    }

    return (
        <div>
            <p>{results.businesses}</p>
        </div>
    );
}

export default SearchResults;
