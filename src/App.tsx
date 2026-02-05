import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./pages/homeScreen";
import MenuScreen from "./pages/menuScreen";
import ContactScreen from "./pages/contactScreen";
import PageTransition from "./components/PageTransition";

function App() {
  return (
    <BrowserRouter>
      <PageTransition>
        <Routes>
          <Route path="/*" element={<HomeScreen />} />
          <Route path="/Menu" element={<MenuScreen />} />
          <Route path="/Contacto" element={<ContactScreen />} />
        </Routes>
      </PageTransition>
    </BrowserRouter>
  );
}

export default App;
