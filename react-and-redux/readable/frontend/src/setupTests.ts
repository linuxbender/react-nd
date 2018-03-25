import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

export interface ILocalStorage {
    getItem: () => void;
    setItem: () => void;
    clear: () => void;
    token: string;
}
const localStorageMock: ILocalStorage = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    clear: jest.fn(),
    token: ''
};

export const localStorage = localStorageMock;

configure({ adapter: new Adapter() });