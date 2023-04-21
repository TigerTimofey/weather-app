import Header from "./Header";
import Weather from "./Weather";
import Footer from "./Footer";
import Container from "react-bootstrap/Container";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Contact from "./Contact";

function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Weather />}></Route>
        <Route path="/forecast/:listIndex" element={<Weather />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
