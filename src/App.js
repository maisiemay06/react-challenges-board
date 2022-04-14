import './App.css';
import birthdayReminder from './images/birthdayreminder.png';
import pages from './pages';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="page-title">React Practice Projects</h1>
      </header>
      <main>
        <div className="card">
          <a href={pages[0].link} className="project-link" target='_blank'>
            <img src={pages[0].image} alt={pages[0].title} className="project-preview" />
          </a>
          <h3 className="project-title">{pages[0].title}</h3>
        </div>
        <div className="card">
          <a href={pages[1].link} className="project-link" target='_blank'>
            <img src={pages[1].image} alt={pages[1].title} className="project-preview" />
          </a>
          <h3 className="project-title">{pages[1].title}</h3>
        </div>
      </main>
    </div>
  );
}

export default App;
