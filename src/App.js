import logo from './logo.svg';
import { Provider } from 'react-redux'
import store from './redux/store'
import './App.css';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import HooksIceCreamContainer from './components/HooksIceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';

function App() {
  return (
    <Provider store={ store }>
      <div className="App">
        <NewCakeContainer />
        <HooksIceCreamContainer />
      </div>
    </Provider>    
  );
}

export default App;
