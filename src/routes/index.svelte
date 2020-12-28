<script>
    import { Button } from 'svelte-materialify/src';
    import Resources from '../components/Resources.svelte';
    import Header from '../components/Header.svelte';
    import Social from '../components/Social.svelte';
    import Footer from '../components/Footer.svelte';
</script>

<main>
    <Header>State of PBBG 2021</Header>
    <p>[Mission Statement]</p>
    <Button outlined size="large"
    >Start Survey</Button>
    <Resources />
    <Social />
    <Footer />
</main>

<style>
	main {
		text-align: center;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
    }
  :global(body) {
    background: #202225;
    color: #f1f8ff;
  }
  :root {
    --primary-accent-color: #032f62;
    --primary-text-color: #f1f8ff;
  }
</style>