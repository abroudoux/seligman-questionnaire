// Imports
import { Route, Routes } from 'react-router-dom';

// Layout 
import Layout from './layout/Layout';

// Components
import Home from './components/home/Home';
import Questions from './components/questions/Questions';
import Results from './components/results/Results';

// Styles
import './App.scss'


export default function App() {

	const clearStorage = (): void => {
		let session:string | null = sessionStorage.getItem('register');
		if (session == null) {
			localStorage.removeItem('remove');
		}
		sessionStorage.setItem('register', '1');
	}
	window.addEventListener('load', clearStorage);

	return (
    	<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="home" element={<Home />}/>
					<Route path="questions" element={<Questions />}>
						<Route path="questions/results" element={<Results />}></Route>
					</Route>
				</Route>
			</Routes>
		</>
  	)

}
