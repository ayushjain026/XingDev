import './sass/main.sass';
import LandingPage from './components/LandingPage';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <div><Toaster/></div>
      <LandingPage></LandingPage>
    </>
  );
}

export default App;
