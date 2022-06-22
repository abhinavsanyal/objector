import Navbar from "./components/Navbar/Navbar";
import PageSelector from "./components/Layout/PageSelector";
import ManageCategory from "./components/Layout/CategoryManager/ManageCategory";
import { LayoutWrapper } from "./App.styled";
import {Container} from "semantic-ui-react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <LayoutWrapper>
        <Navbar />
        <Container fluid>
          <Routes>
            <Route path="/" element={<PageSelector />} />
            <Route path="/All" element={<PageSelector />} />
            <Route
              path="/category/:name"
              element={<PageSelector filter={true} />}
            />
            <Route path="/ManageCategories" element={<ManageCategory />} />
          </Routes>
        </Container>
      </LayoutWrapper>
    </Router>
  );
}

export default App;
