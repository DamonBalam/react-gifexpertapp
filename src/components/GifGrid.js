import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {
    
    const { data:images, loading } = useFetchGifs(category);

    return (
        <Fragment>
            <h3 className='animate__animated animate__fadeInRight'>{category}</h3>
            {loading && <p>Loading</p>}
            <div className='card-grid'>
                {images.map((img) => (
                    <GifGridItem key={img.id} {...img} />
                ))}
            </div>
        </Fragment>
    );
};

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
};
