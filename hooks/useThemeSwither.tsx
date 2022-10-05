import { useEffect, useState } from 'react';

function useThemeSwither() {
  const [theme, setTheme] = useState<string>(localStorage.theme);
  const colorTheme = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);

    //save theme to local storage
    localStorage.setItem('theme', theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme] as const;
}

export default useThemeSwither;
