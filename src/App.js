import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import Booking from './Pages/Booking/Booking/Booking';
import Experts from './Pages/Home/Experts/Experts';
import Home from './Pages/Home/Home/Home';
import Services from './Pages/Home/Services/Services';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import NotFound from './Pages/NotFound/NotFound';
import Header from './Pages/Shared/Header/Header';



function App() {
	return (
		<div className="App">
			<AuthProvider>
				<Router>
					<Header />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="/home">
							<Home />
						</Route>
						<Route path="/services">
							<Services />
						</Route>
						<PrivateRoute path="/booking/:serviceId">
							<Booking />
						</PrivateRoute>
						<Route path="/experts">
							<Experts />
						</Route>
						<Route path="/login">
							<Login />
						</Route>
						<Route path="*">
							<NotFound />
						</Route>
					</Switch>
				</Router>
			</AuthProvider>
		</div>
	);
}

export default App;
