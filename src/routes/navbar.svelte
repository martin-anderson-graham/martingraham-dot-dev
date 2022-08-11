<div class="nav-container">
	<div id="nav-name">MARTIN GRAHAM</div>
	<div id="nav-links-container">
		<a href="/">home</a>
		<a href="/projects">projects</a>
		<a target="_blank" href="https://github.com/martin-anderson-graham">github</a>
		<a target="_blank" href="https://twitter.com/thecodingmartin">twitter</a>
    <a target="_blank" href="https://dev.to/martinandersongraham">blog</a>
		<a target="_blank" href="mailto:martin.anderson.graham@gmail.com">email</a>
    <a target="_blank" href="/resume.pdf">resume</a>
	</div>
</div>

<style>
	.nav-container {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		color: var(--text-emphasis-color);
	}
  
	#nav-links-container {
    gap: var(--nav-gaps);
    flex-wrap: wrap;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		font-size: var(--nav-font-size);
    max-width: 50%;
	}

	#nav-name {
		font-size: var(--nav-font-size-name);
    max-width: 40%;
	}
</style>
