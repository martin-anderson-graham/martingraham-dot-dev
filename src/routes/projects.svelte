<script>
	import Navbar from './navbar.svelte';
	import About from './about.svelte';
	import Footer from './footer.svelte';
</script>

<Navbar />
<div class="content-container">
	<h1 id="project-header">A sample of my projects</h1>
	<hr />
	<p>
		<a target="_blank" href="https://github.com/martin-anderson-graham/martingraham-dot-dev"
			><h2>martingraham.dev</h2></a
		>
		This website is a <a target="_blank" href="https://kit.svelte.dev/">SvelteKit</a> application
		hosted on a <a target="_blank" href="https://www.linode.com">Linode</a> VPS. I use it as a
		playground for testing new technology and new-to-me techniques - for instance using
		<a
			target="_blank"
			href="https://github.com/martin-anderson-graham/martingraham-dot-dev/blob/main/.github/workflows/update-linode.yml"
			>Github Actions</a
		> to automate deploying and building this site to production.
	</p>
	<hr />
</div>
<Footer />

<style>
	#project-header {
		color: var(--text-emphasis-color);
		font-size: 3vw;
	}

	h2 {
		font-size: 2vw;
	}

  p {
    font-size: 1.5vw;
  }
</style>
