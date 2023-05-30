import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Header from './Components/Header';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import EditContact from './Components/EditContact';

function App() {
  return (
    <>
    <Router>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>} exact/>
        <Route path='/edit/:id' element={<EditContact/>} />
      </Routes>
    </Router>
   
    
    </>
  );
}

export default App;
