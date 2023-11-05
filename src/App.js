import './App.css';
import Portfolio from './components/Portfolio/Portfolio';
import datas from './components/Portfolio/datas';

function App() {
  return (
    <Portfolio data={datas} />
  );
}

export default App;
