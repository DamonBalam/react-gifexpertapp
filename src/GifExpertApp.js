import React, { Fragment, useState } from 'react';
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
// import PropTypes from 'prop-types';

const GifExpertApp = (props) => {
    const [categories, setCategories] = useState(['One Piece']);

    // const handleAdd = () => {
    //     // setCategories([...categories, 'HunterxHunter']);
    //     setCategories((cats) => [...cats, 'HunterXHunter']);
    // };

    return (
        <Fragment>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            <ol>
                {categories.map((category) => (
                    <GifGrid 
                        key={category} 
                        category={category} 
                    />
                ))}
            </ol>
        </Fragment>
    );
};

// GifExpertApp.propTypes = {};

export default GifExpertApp;
