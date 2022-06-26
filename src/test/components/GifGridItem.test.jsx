const { render, screen } = require("@testing-library/react")
const { GifGridItem } = require("../../components/GifGridItem")


describe('Pruebas en GifGridItem', () => { 
    
    const title = "Real Madrid";
    const url = "https://realmadrid.com/real-madrid.jpg";

    test('Debe mostrarse correctamente', () => {  

        const { container } = render( <GifGridItem title={ title } url={ url } /> );

        expect(container).toMatchSnapshot();
    })

    test('debe tener la imagen igual al url y alt de los props', () => { 

        render( <GifGridItem title={ title } url={ url } /> );
        //screen.debug();

        expect( screen.getByRole('img').src ).toBe(url);
        expect( screen.getByRole('img').alt ).toBe(title);

    })

    test('debe tener un parrafo con el titulo', () => { 

        render( <GifGridItem title={ title } url={ url } /> );

        expect( screen.getByText(title) ).toBeTruthy();

    })

})