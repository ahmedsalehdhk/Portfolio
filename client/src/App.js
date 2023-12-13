import './App.css';
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectPage from './components/ProjectPage'

// data imports
import {projects} from './data/data'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          {projects.map((project) => {
            return <Route path={`/projects/${project.id}`} element={<ProjectPage project={project} />}></Route>
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
