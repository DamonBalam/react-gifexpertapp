import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('Pruebas en el Archivo AddCategory', () => {
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);
    let input;
    const value = 'Hola Mundo';
   
    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
        input = wrapper.find('input');
    });

    test('Debe de mostrarse correctamente el componente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de cambiar la caja de texto', () => {

        input.simulate('change', {
            target: { value },
        });

        expect( wrapper.find('p').text().trim() ).toBe(value);
    });

    test('No debe de postear la información con submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setCategories ).not.toHaveBeenCalled();
    });

    // ** tarea
    test('Debe de llamar el setCategories y limpiar la caja de texto', () => {
        
        // simular inputchange
        input.simulate( 'change', { target: { value } } );
        
        // simular el submit
        wrapper.find('form').simulate('submit', { preventDefault() {} });

        // setCategories debe de haber llamada
        expect(setCategories).toHaveBeenCalled();
        
        // el valor del input debe de estar ''
        expect(wrapper.find('input').prop('value')).toBe('');

    })
    
});
