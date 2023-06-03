// Imports
import { Route, Routes } from 'react-router-dom';

// Layout 
import Layout from './layout/Layout';

// Components
import Home from './components/home/Home';
import Questions from './components/questions/Questions';
import Results from './components/results/Results';
import Contact from './components/contact/Contact';

// Pages
import ErrorPage from './pages/ErrorPage/ErrorPage';
import SuccessPage from './pages/SuccessPage/SuccessPage';

// Styles
import './App.scss';


export default function App() {

	const clearStorage = (): void => {
		let session:string | null = sessionStorage.getItem('register');
		if (session == null) {
			sessionStorage.clear();
		}
		sessionStorage.setItem('register', '1');
	};
	window.addEventListener('load', clearStorage);

	return (
    	<>
			<Routes>
				<Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
					<Route path="home" element={<Home />}/>
					<Route path="questions" element={<Questions />}>
						{/* <Route path="results" element={<Results />} /> */}
					</Route>
					<Route path="results" element={<Results />}/>
					<Route path="contact" element={<Contact />}/>
				</Route>
				<Route path="succed" element={<SuccessPage />}/>
			</Routes>
		</>
  	)

}
