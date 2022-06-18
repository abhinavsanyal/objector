import Navbar from './components/Navbar/Navbar'
import { Container } from './components/Layout/Container'
import {LayoutWrapper} from "./App.styled"

function App() {
  return (
    <LayoutWrapper>
      <Navbar/>
      <Container />
    </LayoutWrapper>
  );
}

export default App;
