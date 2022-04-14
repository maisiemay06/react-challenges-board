import './App.css';
import ProjectData from './ProjectData';
import ShowProjects from './ShowProjects'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="page-title">React Practice Projects</h1>
      </header>
      <main>
      <ShowProjects ProjectData={ProjectData} />
      </main>
    </div>
  );
}

export default App;
