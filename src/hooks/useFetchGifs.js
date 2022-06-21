import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs";


//customHook
export const useFetchGifs = (category) => {
  
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    //Utilizo useEffect para que se vuelva a ejecutar la funcion solo cuando la category cambie
    useEffect(() => {
        getGifs( category ).then( imgs => {
            
            setTimeout(() => {   //obtengo los gifs luego de 3s
                setState({
                    data: imgs,
                    loading: false
                });
            }, 3000);

        });
    }, [ category ]);


    //Utilizo useEffect para que no se vuelva a ejecutar la funcion cuando el estado cambie
    //useEffect(() => {
    //    getGifs();
    //}, []);    


    return state;
}
