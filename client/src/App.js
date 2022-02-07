import './App.css';
import { NavBar } from './components';
import { Profile } from './containers';

function App() {
  return (
    <div className="App">
      <div className='background_container'>
        <NavBar />
        <Profile />

      </div>
    </div>
  );
}

export default App;
