import { h, render } from 'preact';
import App from './components/app/app.jsx';
const functions = require('./docs.json');

window.addEventListener('load', () => {
	render(
		h(App, {functions}),
		document.getElementById('root')
	);
});