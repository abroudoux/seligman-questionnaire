// Imports
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// App
import App from './App';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<BrowserRouter basename='/'>
  		<App />
	</BrowserRouter>
)
