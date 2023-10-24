import Footer from './components/Footer';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import { StWrapper, StbodyContent } from './components/CommonStyle';

function App() {
  return (
    <StWrapper>
      <Header />
      <StbodyContent>
        <MainPage />
      </StbodyContent>
      <Footer />
    </StWrapper>
  );
}

export default App;
