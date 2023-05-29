// Imports
import { Route, Routes } from 'react-router-dom';

// Components
import HelloWorld from './components/HelloWorld';

// Styles
import './App.scss'


export default function App() {

	return (
    	<>
			<Routes>
				<Route path="/" element={<HelloWorld />}></Route>
			</Routes>
		</>
  	)

}
