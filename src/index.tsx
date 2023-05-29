// Imports
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// App
import App from './App';

// Styles
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<BrowserRouter>
  		<App />
	</BrowserRouter>
)
