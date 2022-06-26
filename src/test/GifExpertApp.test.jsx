import { render, screen } from "@testing-library/react";
import GifExpertApp from "../GifExpertApp";



describe('Pruebas en GifExpertApp', () => { 

    test('debe de mostrarse correctamente', () => {  

        const { container } = render(<GifExpertApp />);

        expect(container).toMatchSnapshot();
    });

})