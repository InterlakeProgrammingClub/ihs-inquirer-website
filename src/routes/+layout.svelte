<script>
	import '../app.css';
</script>

<body>
	<nav>
		<a href="/"><img class="logo" id="logo1" src="/logo.png" alt="Logo of Interlake Inquirer" /></a>
		<div>
			<div class="links">
				<a href="/">Latest Issue</a>
				<a href="/about">About</a>
				<a href="/issues">Past Issues</a>
				<a href="/weekly-woof">The Weekly Woof</a>
				<a href="/contact">Contact</a>
			</div>
			<hr />
			<h1>THE INTERLAKE INQUIRER</h1>
			<h2>The Official Student Newspaper of Interlake High School</h2>
		</div>
		<a href="/"><img class="logo" id="logo2" src="/logo.png" alt="Logo of Interlake Inquirer" /></a>
	</nav>

	<div class="slot">
		<slot />
	</div>
</body>

<style>
	body {
		margin: 0;
		overflow-x: hidden;
	}

	nav {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: center;
		padding: 20px 0;
	}

	.logo {
		width: 150px;
		height: 150px;
		border-radius: 50%;
	}

	.links {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}

	.links a {
		margin: 10px 1em;
		color: black;
		text-decoration: none;
	}

	hr {
		max-width: 500px;
		border: 0.2px solid black;
	}

	h1 {
		text-align: center;
		font-size: 2.5em;
		margin-bottom: 10px;
	}

	h2 {
		text-align: center;
	}

	.slot {
		margin: 0 30px;
	}

	@media (max-width: 832px) {
		#logo1,
		#logo2 {
			display: none;
		}
	}
</style>
