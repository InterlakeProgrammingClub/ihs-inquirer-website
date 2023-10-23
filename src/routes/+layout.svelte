<nav>
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
	<img class="logo" src="logo.png" alt="Logo of Interlake Inquierer" />
</nav>

<slot />

<style>
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
	}

	h1 {
		text-align: center;
		font-size: 2.5em;
		margin-bottom: 10px;
	}

	h2 {
		text-align: center;
	}
</style>
