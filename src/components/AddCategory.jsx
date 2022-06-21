import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({onNewCategory}) => {
    
    const [inputValue, setinputValue] = useState('');
    
    //Para cambiar lo que esta escrito en el input
    const handleInputChange = (e) => {
        setinputValue(e.target.value);
    }

    //Para manejar el submit del formulario
    const handleSubmit = (e) => {
        e.preventDefault();  //Para prevenir que se recargue la pagina al hacer submit
        
        if (inputValue.trim().length >= 2) {
            //setCategories(cats => [inputValue, ...cats]);  
            //Ya no cambia el estado para que solo lo maneje el componente padre

            onNewCategory( inputValue );
            setinputValue('');
        };
    }

    return (
        //Si hay un elemento que contenga a los demas no hace falta poner el fragment
        <form onSubmit={handleSubmit}>
            <input 
            type='text'
            value={inputValue}
            onChange={ handleInputChange }
            />
        </form>
    )
};


AddCategory.propTypes = {
    //onNewCategory tiene que ser una funcion y mandarse como parametro obligatoriamente
    onNewCategory: PropTypes.func.isRequired
}