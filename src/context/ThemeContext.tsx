import { createContext, ReactNode, useState } from 'react';

import { Theme, ThemeContextValue } from './types';

export const ThemeContext = createContext<ThemeContextValue | undefined>(
  undefined,
);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () =>
    setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
