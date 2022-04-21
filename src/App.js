import logo from './logo.svg';
import './App.css';
import CounterRedux from './components/CounterRedux';
import Profile from './components/Profile';
import { useSelector } from 'react-redux';

function App() {
  const alias = useSelector(state => state.profile.alias);

  return (
    <div className="App">
      <header className="App-header">
         <h1>Redux Intro</h1>
      </header>
      <h2>Välkommen, {alias}!</h2>

      <Profile />
      <CounterRedux />
      <CounterRedux />
      <CounterRedux />
    </div>
  );
}

export default App;
