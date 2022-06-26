import { render, screen, fireEvent } from "@testing-library/react";
import { AddCategory } from "../../components/AddCategory";


describe('Pruebas en AddCategoy', () => {  

    test('debe de mostrarse correctamente', () => {  
    
        const { container } = render(<AddCategory onNewCategory={ () => {} } />);
    
        expect(container).toMatchSnapshot();
    });

    test('debe de cambiar el valor de la caja de texto', () => {  
        
        render(<AddCategory onNewCategory={ () => {} } />);

        const input = screen.getByRole('textbox');
        const value = 'Hola Mundo';

        //Ya que handleInputChange recibe e y cambia la caja
        //de texto a e.target.value
        fireEvent.input( input, {
            target: {
                value: value,
            }
        });

        expect( input.value ).toBe(value);

    });

    test('debe de llamar onNewCategory y limpiar la caja de texto', () => {  
        
        const onNewCategory = jest.fn();
        
        render(<AddCategory onNewCategory={ onNewCategory } />);

        const value = 'Hola Mundo';

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, {
            target: {
                value: value,
            }
        });
        
        fireEvent.submit( form, { preventDefault: () => {} } );

        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(value);
        expect( input.value ).toBe('');
    });

    test('no debe de aceptar la busqueda', () => {  

        const onNewCategory = jest.fn();
        
        render(<AddCategory onNewCategory={ onNewCategory } />);

        const form = screen.getByRole('form');
        fireEvent.submit( form, { preventDefault: () => {} } );

        expect(onNewCategory).not.toHaveBeenCalled();
    });

})
