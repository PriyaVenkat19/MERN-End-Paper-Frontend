import './App.css'


import 'bootstrap/dist/css/bootstrap.min.css'
import{BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import HomeComponent from '../components/HomeComponent/HomeComponent';
import MovieComponent from '../components/MovieComponent/MovieComponent';
function App() {
  return (
    <Router>
    <div className='App'>
       <nav className='navbar navbar-expand-lg navbar-light fixed-top'>
        <div className='container'>
          <Link className='navbar-brand' to={'/'}>
            Movie Recommendation
          </Link>
          <div className='collapse navbar-collapse'id='navbarTogglerDemo02'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item'>
                <Link className='nav-link' to={'/Home'}>Home</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to={'/Movie'}>My List</Link>
              </li>
            </ul>

          </div>
        </div>
       </nav>
       <div className='auth-wrapper'>
        <div className='auth-inner'>
          <Routes>
            <Route path='/Home' element={<HomeComponent/>}/>
            <Route exact path='/Movie'element={<MovieComponent/>}/>
            
          </Routes>
        </div>
       </div>
    </div>
    </Router>
  );
}

export default App
