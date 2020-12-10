import { shallow } from 'enzyme';
// import '@testing-library/jest-dom';

import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas de GifGridItem.js', () => {
    const title = 'Un titulo';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow(<GifGridItem title={title} url={url} />);

    test('Debe mostrar <GifGridItem> Correctamente', () => {
        // console.log(wrapper)
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de tener un parrafo con el title', () => {
        const p = wrapper.find('p');

        expect(p.text().trim()).toBe(title);
    });

    test('Debe tener la imagen al url y alt de los props', () => {
        const img = wrapper.find('img');

        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });

    test('Debe tener animate__fadeInRight', () => {
        const div = wrapper.find('div');

        const className = div.prop('className');

        expect( className.includes('animate__fadeInRight') ).toBe(true);
    });
});
