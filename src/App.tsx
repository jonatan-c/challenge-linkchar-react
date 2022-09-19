import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
 


const App = () => {


  return (
    <>
      <Router>
        <div className="p-2">
          <NavBar />

          <Home />
        </div>
      </Router>
    </>
  );
}

export default App