import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../hooks/useFetchGifs"



describe('Pruebas en el hook useFetchGifs', () => {  

    test('debe de retornar el estado inicial', () => {  

        const { result } = renderHook( () => useFetchGifs('Real Madrid') );
        
        const { data, loading } = result.current;

        expect(data).toEqual([]);
        expect(loading).toBe(true);
    })

    test('debe de retornar un array de imgs y el loading en false', async() => {  

        const { result } = renderHook( () => useFetchGifs('Real Madrid') );
        await waitFor(
            () => expect( result.current.data.length ).toBe(10),
            {
                timeout: 5000 //Ya que los gifs aparecen luego de 3s
            }
        );

        const {data, loading} = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    })
})