import { getGifs } from "../../helpers/getGifs";


describe('Pruebas a la funcion getGifs', () => { 

    test('debe de obtener un array con 10 elementos', async() => {  

        const gifs = await getGifs('Real Madrid');

        expect(gifs.length).toBe(10);
        expect(gifs[0]).toEqual({
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String )
        })
    });

    test('debe de obtener un array vacio', async() => {  

        const gifs = await getGifs('');

        expect(gifs.length).toBe(0);
    });
})