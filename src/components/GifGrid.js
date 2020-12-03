import React, { Fragment, useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';
import PropTypes from 'prop-types';

export const GifGrid = ({ category }) => {
    // creando el state de imagenes
    const [images, setImages] = useState([]);

    // useEffect cada que se agregue una nueva categoria
    useEffect(() => {
        getGifs(category).then( setImages );
    }, [ category ]);

    return (
        <Fragment>
            <h3>{category}</h3>
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
