<script>
    import { Button } from 'svelte-materialify/src';
    import Header from '../components/Header.svelte';
    import MissionStatement from '../components/MissionStatement.svelte';
    import Resources from '../components/Resources.svelte';
    import Social from '../components/Social.svelte';
    import BuiltBy from '../components/BuiltBy.svelte';
    import Footer from '../components/Footer.svelte';
</script>

<main>
    <Header />
    <MissionStatement />
    <div class="start-survey">
        <a href="https://forms.gle/36tmV18Uix5X2zos5"><Button block size="x-large" class="white black-text">Start Survey</Button></a>
    </div>
    <Social />
    <Resources />
    <BuiltBy />
    <Footer />
</main>


<svelte:head>
    <link href="https://fonts.googleapis.com/css?family=Muli|Roboto" rel="stylesheet">
</svelte:head>

<style>
	main {
		text-align: center;
		max-width: 240px;
		margin: 0 auto;
        font-family: 'Muli', 'Roboto';
	}

	@media (min-width: 640px) {
		main {
			max-width: 800px;
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

  .start-survey {
      margin-top: 50px;
  }
</style>