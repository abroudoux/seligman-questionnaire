// Imports
import { Route, Routes } from 'react-router-dom';

// Layout 
import Layout from './layout/Layout';

// Components
import Home from './components/home/Home';
import Questions from './components/questions/Questions';
import QuestionModel from './components/questions/model/QuestionModel';
import Results from './components/results/Results';

// Styles
import './App.scss'


export default function App() {

	return (
    	<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="home" element={<Home />}/>
					<Route path="questions" element={<Questions />}>
						<Route path="results" element={<Results />}></Route>
					</Route>
					{/* <Route path="question" element={
						<>
						<QuestionModel id={1} question={''} number={1} type={'a'} calcul={[5, 4, 3, 2, 1]} />
						<QuestionModel id={2} question={''} number={2} type={'a'} calcul={[5, 4, 3, 2, 1]} />
						</>
					}></Route> */}
				</Route>
			</Routes>
		</>
  	)

}
