import useThemeSwither from 'hooks/useThemeSwither';
import { useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

function Swither() {
  const [colorTheme, setTheme] = useThemeSwither();
  const [isDarkTheme, setIsDarkTheme] = useState(
    colorTheme === 'light' ? true : false
  );

  const toggleTheme = (checked: boolean) => {
    setTheme(colorTheme);
    setIsDarkTheme(checked);
  };
  return (
    <>
      <div>
        <DarkModeSwitch
          checked={isDarkTheme}
          onChange={toggleTheme}
          size={25}
        />
      </div>
    </>
  );
}

export default Swither;
