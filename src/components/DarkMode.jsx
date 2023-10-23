import { useEffect, useState } from "react";

function DarkMode() {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme:dark)").media) {
      return "dark";
    }
    return "light";
  });

  
  useEffect(() => {
    const darkModeIcon = document.getElementById("darkMode");
    const buttonDarkMode = document.getElementById("buttonDarkMode");
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
      darkModeIcon.classList.remove("fa-moon");
      darkModeIcon.classList.add("fa-sun");
      buttonDarkMode.classList.remove("bg-bg-custom-gray");
      buttonDarkMode.classList.add("bg-bg-custom-yellow");
    } else {
      document.querySelector("html").classList.remove("dark");
      darkModeIcon.classList.remove("fa-sun");
      darkModeIcon.classList.add("fa-moon");
      buttonDarkMode.classList.add("bg-bg-custom-gray");
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <div>
      <button
        className="bg-custom-yellow p-2 rounded-full border-0 m-4 text-white fixed z-10 right-0 "
        id='buttonDarkMode'
        onClick={handleChangeTheme}
      >
        <i  id='darkMode' className="fa fa-moon"></i>
      </button>
    </div>
  );
}

export default DarkMode;
