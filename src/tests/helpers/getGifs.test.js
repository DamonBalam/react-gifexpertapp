import { getGifs } from '../../helpers/getGifs';

describe('Pruebas en el archivo getGifs', () => {
    test('Debe de traer 10 elementos', async () => {
        const gifs = await getGifs('Sanji');

        expect(gifs.length).toBe(10);
    });


    test('Debe traer un array vacio si no se manda un argumento a getGifs', async () => {
        const gifs = await getGifs('');

        expect(gifs.length).toBe(0);
    });
});

