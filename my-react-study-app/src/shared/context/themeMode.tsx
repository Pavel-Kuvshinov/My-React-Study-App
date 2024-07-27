/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable import/prefer-default-export */
import { createContext, ReactNode, useContext, useState } from 'react';

interface IThemeContext {
    isDark: boolean;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<IThemeContext | undefined>(undefined);

export const useTheme = () => {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error('context error');
    }

    return context;
};

interface ThemeProviderProps {
    children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
    const [isDark, setIsDark] = useState(false);
    const toggleTheme = () => {
        setIsDark((prev) => !prev);
    };

    return <ThemeContext.Provider value={{ isDark, toggleTheme }}>{children}</ThemeContext.Provider>;
}
