import { createContext } from 'react';

const AppContext = createContext();

export default AppContext;

export const { Provider, Consumer } = AppContext;