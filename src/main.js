import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		year: '2021'
	}
});

export default app;