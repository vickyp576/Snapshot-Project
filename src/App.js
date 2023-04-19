
import './App.css';
import AppRouter from './Routes/AppRouter';
import { ContextProvider } from './context/ContextProvider';


function App() {

  return <ContextProvider>
  <AppRouter/>
  </ContextProvider>
}

export default App;
/**
 * 
 * https://farm66.staticflickr.com/65535/36493087974_4df1b792a8.jpg
 */