import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = ({ defaultCategories = [] }) => {

    //const categories = ['Real Madrid', 'Barcelona', 'Atletico Madrid'];
    
    //const [categories, setCategories] = useState(['Real Madrid']);
    const [categories, setCategories] = useState(defaultCategories);

    //Para Agregar una categoria
    const handleAdd = (newCategory) => {

        if( categories.includes(newCategory) ) return; //Para que no se repitan las categorias

        setCategories([ newCategory, ...categories]);
    };

    return (
        <>
            <h1>Gif Expert App</h1>
            <AddCategory 
                //setCategories={setCategories} 
                onNewCategory={ handleAdd }
                //Para manejar el estado en un solo componente(el padre)
            />
            <hr />



            {
                categories.map(category => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
            }
  
        </>
    );
};

export default GifExpertApp;