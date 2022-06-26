import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

//Hace el llamado al CustomHook en lugar de que lo haga el componente
jest.mock("../../hooks/useFetchGifs");


describe('Pruebas en GifGrid', () => {

    const category = 'Real Madrid';

    test('debe de mostrar el loading inicialmente', () => {  

        //Hace el llamado al CustomHook en lugar de el componente
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        render(<GifGrid category={ category } />);

        expect( screen.getByText('Cargando gifs...') );
        expect( screen.getByText(category) );

    })

    test('debe de mostrar items cuando se cargan imagenes useFetchGifs', () => {
        
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/madrid.jpg',
            title: 'Real Madrid'
        },{
            id: '123',
            url: 'https://localhost/barca.jpg',
            title: 'Barcelona' 
        }];
        
        //Hace el llamado al CustomHook en lugar de el componente
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        
        render(<GifGrid category={ category } />);

        expect(screen.getAllByRole('img').length).toBe(gifs.length);
    })
})