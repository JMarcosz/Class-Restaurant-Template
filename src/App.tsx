import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import MenuScreen from "./pages/MenuScreen";
import ContactScreen from "./pages/ContactScreen";
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
