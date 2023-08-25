import { useState } from 'react';
import DataContext from './DataContext';

const DataProvider = ({ children, initialData, navbarItems }) => {
    const [data, setData] = useState(initialData);

    return (
        <DataContext.Provider value={{ data: initialData, navbarItems }}>
            {children}
        </DataContext.Provider>
    );
}

export default DataProvider;