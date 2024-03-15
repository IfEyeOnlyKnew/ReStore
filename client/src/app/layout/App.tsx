import { useState } from "react";
import Catalog from "../../features/catalog/catalog";
import Header from "./header";
import { Container, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { Outlet } from "react-router-dom";

function App() {  
 const [darkMode, setDarkMode] = useState(false);
 const paletteType = darkMode ? 'dark' : 'light';
 const theme = createTheme({
  palette: {
    mode: paletteType,
    background: {
      default: paletteType === 'light' ? '#4b5f6d' : '#121212'
    }
  }
 })

 function handleThemeChange() {
  setDarkMode(!darkMode);
 }

  return (    
   <ThemeProvider theme={theme}>
    <CssBaseline />
    <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
    <Container>
      <Outlet />
    </Container>    
   </ThemeProvider>    
  );
}

export default App
