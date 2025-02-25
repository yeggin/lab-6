import React, { createContext, useContext, useState } from 'react';

export const TitleContext = createContext();

export const TitleProvider = ({ children }) => {
    const [title, setTitle] = useState('CodeCraft Intranet');

    const updateTitle = (name) => {
        setTitle(`Welcome ${name} to CodeCraft Intranet`)
    };

    return (
        <TitleContext.Provider value={{ title, updateTitle }}>
            {children}
        </TitleContext.Provider>
    )
};