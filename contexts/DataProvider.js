import { useState } from 'react';
import DataContext from './DataContext';

const DataProvider = ({ children, initialData }) => {
    const [data, setData] = useState(initialData);

    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    );
}

export default DataProvider;