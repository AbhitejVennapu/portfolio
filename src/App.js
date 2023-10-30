import './App.css';
import LandingPage from './views/LandingPage';
import MUIWrapper from './components/MUIWrapper';

export default function App() {

  return (
    <div className="App">
      <MUIWrapper>
        <LandingPage></LandingPage>
      </MUIWrapper>
    </div>
  );
}
