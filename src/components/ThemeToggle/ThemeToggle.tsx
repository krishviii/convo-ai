// components/ThemeToggle.tsx
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useEffect, useState } from "react";
 // Import Sun and Moon icons from lucide-react
type Props = {
  isOpen?: boolean,
  setTheme?: any
}

export default function ThemeToggle(props: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.classList.toggle('light', theme !== 'dark');

    setDarkMode(theme === 'dark');

    localStorage.setItem('theme', theme);
  }, [theme, localStorage.getItem('theme')]);


  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    props.setTheme && props.setTheme((prevTheme: any) => (prevTheme === 'light' ? 'dark' : 'light'))
  }
  return (
    <>
      {props?.isOpen && (
        //  <TooltipComponent tooltipText={darkMode?'Change to light mode':'Change to dark mode'} >
        <div
          className={`w-24 h-8 flex  border border-black/50 dark:border-white/50 border-solid items-center rounded-lg gap-2  cursor-pointer transition-colors `}
          onClick={() => { setDarkMode(!darkMode); toggleTheme(); }}
        >
          {!darkMode && <span
            className={`text-sm font-medium pl-3 text-black dark:text-white`}
          >
            {"Light"}
          </span>}
          <div
            className={`h-6 w-6 ${darkMode ? "bg-[#0b1739] ml-2" : "bg-[#0b1739]"
              } rounded-full shadow-md transform transition-transform ${darkMode ? "translate-x-0" : "translate-x-3"
              } flex items-center justify-center`}
          >

            {darkMode ? (
              <IconSun className="h-4 w-4 text-white" />
            ) : (
              <IconMoon className="h-4 w-4 text-white" />
            )}
          </div>
          {darkMode && <span
            className={`text-sm font-medium text-textColor`}
          >
            {'Dark'}
          </span>}
        </div>
        // </TooltipComponent>
      )}
      {!props?.isOpen && (
        // <TooltipComponent tooltipText={darkMode?'Change to light mode':'Change to dark mode'} >
        <div
          className={`h-6 w-6 ${!darkMode ? "bg-gray-400" : "bg-gray-400"
            } rounded-full shadow-md transform transition-transform  flex items-center justify-center`}
          onClick={() => { setDarkMode(!darkMode); toggleTheme(); }}
        >

          {!darkMode ? (
            <IconMoon className="h-4 w-4 text-black" />
          ) : (
            <IconSun className="h-4 w-4 text-black" />
          )}
        </div>


      )}
      {/* </TooltipComponent> */}
    </>

  );
}

