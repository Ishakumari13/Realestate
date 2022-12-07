import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Homepage/home';
import About from './pages/about/about';
// import SignUp from './pages/signup';
import Location from './pages/location/location';
import State from './pages/location/state';


function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		{/* <Route path='/' exact component={Home} />
		<Route path='/about' component={About} />
		<Route path='/sign-up' component={SignUp} /> */}
		<Route exact path='/' element={< Home />}></Route>
		<Route path='/about' element={< About />}></Route>
		<Route path='/location' element={< Location />}></Route>
		<Route path='/state' element={< State />}></Route>
		{/* <Route path='/signup' element={< SignUp />}></Route> */}
		<Route path="*" element={<PageNotFound />} />
		
	</Routes>
	</Router>
);
}
function PageNotFound() {
	return (
	  <div>
		<h2>404 Page not found</h2>
	  </div>
	);
  }

export default App;