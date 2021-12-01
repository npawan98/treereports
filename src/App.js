import './App.css';
import Sidebar from './Components/Common/SidebarComponent/Sidebar';
import Router from './Router';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <div className="routes">
        <Router/>
      </div>
    </div>
  );
}

export default App;
