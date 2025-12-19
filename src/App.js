import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./containers/Main";
import ProjectDetail from "./containers/ProjectDetail/ProjectDetail";
import { StyleProvider } from "./contexts/StyleContext";  // Import it here
import { useLocalStorage } from "./hooks/useLocalStorage";  // Also import this

function App() {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{ isDark, changeTheme }}>
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/project/:projectId" element={<ProjectDetail />} />
          </Routes>
        </Router>
      </StyleProvider>
    </div>
  );
}

export default App;