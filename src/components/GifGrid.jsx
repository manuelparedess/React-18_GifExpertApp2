import React from 'react'
//import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import PropTypes from 'prop-types';

export const GifGrid = ({ category }) => {

    //El custom hook hace el trabajo pesado asi el componente queda 
    //con un codigo mas corto y limpio 
    const {data:images, loading} = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>

            {loading && <p>Cargando gifs...</p>}

            <div className='card-grid'>

                {
                    images.map((img) =>
                        <GifGridItem
                            key={img.id}
                            {...img} //Para mandar todas las propiedades de img
                        />
                    )
                }

            </div>
        </>
    );
};


GifGrid.propTypes = {
    category: PropTypes.string.isRequired
};