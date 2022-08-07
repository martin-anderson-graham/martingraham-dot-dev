<ul>
  <li class="container">
		<a target="_blank" href="google.com">
			<img class="image" src="/images/projects.png" alt="My Projects" />
			<div class="overlay">
				<div class="text">projects</div>
			</div>
		</a>
	</li>

	<li class="container">
		<a target="_blank" href="https://github.com/martin-anderson-graham">
			<img class="image" src="/images/gh.png" alt="My Github Account" />
			<div class="overlay">
				<div class="text">github</div>
			</div>
		</a>
	</li>

  <li class="container">
		<a target="_blank" href="/resume.pdf">
			<img class="image" src="/images/resume.png" alt="My Resume" />
			<div class="overlay">
				<div class="text">resume</div>
			</div>
		</a>
	</li>

	<li class="container">
		<a target="_blank" href="https://dev.to/martinandersongraham">
			<img class="image" src="/images/blog.png" alt="My dev.to blog" />
			<div class="overlay">
				<div class="text">blog</div>
			</div>
		</a>
	</li>

	<li class="container">
		<a target="_blank" href="https://twitter.com/theCodingMartin">
			<img class="image" src="/images/twitter.png" alt="My Twitter Account" />
			<div class="overlay">
				<div class="text">twitter</div>
			</div>
		</a>
	</li>



</ul>

<style>
	ul {
		list-style-type: none;
    
    width: auto;
		/* margin: 1%; */
		padding-left: 10%;
	}

  li {
    padding: 10%;
  }

	.container {
		position: relative;
		width: 50%;
	}

	.image {
		display: block;
		width: 100%;
		height: auto;
	}

	.overlay {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		height: 100%;
		width: 100%;
		opacity: 0;
		transition: 0.5s ease;
		background-color: var(--nav-bg-color);
	}

	.container:hover .overlay {
		opacity: 1;
	}

	.text {
		color: white;
		font-size: 20px;

	  position: absolute;
    
		top: 50%;
		left: 50%;
		-webkit-transform: translate(-50%, -50%);
		-ms-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
		text-align: center;
	}
</style>
