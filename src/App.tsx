// Imports
import { Route, Routes } from 'react-router-dom';

// Layout 
import Layout from './layout/Layout';

// Components
import Home from './components/home/Home';
import Questions from './components/questions/Questions';
import Question from './components/questions/model/Question';

// Styles
import './App.scss'


export default function App() {

	return (
    	<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="home" element={<Home />}/>
					<Route path="questions" element={<Questions />}/>
				</Route>
			</Routes>
		</>
  	)

}
