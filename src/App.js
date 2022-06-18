import Navbar from "./components/Navbar/Navbar";
import  PageSelector from "./components/Layout/AllPage";
import { LayoutWrapper } from "./App.styled";

function App() {
  return (
    <LayoutWrapper>
      <Navbar />
      <PageSelector />
    </LayoutWrapper>
  );
}

export default App;
