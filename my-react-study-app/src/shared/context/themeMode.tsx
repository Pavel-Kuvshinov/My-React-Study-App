'use client';

import { createContext, ReactNode, useContext, useMemo, useState } from 'react';

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

    const memoValue = useMemo(() => ({ isDark, toggleTheme }), [isDark]);

    return <ThemeContext.Provider value={memoValue}>{children}</ThemeContext.Provider>;
}
