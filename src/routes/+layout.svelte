<script>
	import '../app.css';
</script>

<nav>
	<div class="left">
		<a href="/"><img class="logo" id="logo1" src="/logo.png" alt="Logo of Interlake Inquirer" /></a>
		<div class="name">The Interlake Inquirer</div>
		<!-- <h2>The Official Student Newspaper of Interlake High School</h2> -->
	</div>
		<div class="links">
			<a href="/">Latest Issue</a>
			<a href="/about">About</a>
			<a href="/issues">Past Issues</a>
			<a href="/weekly-woof">The Weekly Woof</a>
			<a href="/contact">Contact</a>
		</div>
</nav>
<div class="slot">
	<slot />
</div>

<style>
	:global(body) {
		margin: 0;
		overflow-x: hidden;
	}

	nav {
		background-color: var(--header-color);
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 5px 20px;
		margin: 10px 1em;
	}

	.name {
		font-weight: bold;
		font-size: 26px;
	}

	.logo {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		margin-right: 10px;
	}

	.left {
		display: flex;
		flex-wrap: nowrap;
		align-items: center;
	}

	.links {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
	}

	.links a {
		font-size: 26px;
		color: black;
		text-decoration: none;
	}

	.slot {
		padding: 0 30px;
	}

	@media (max-width: 1200px) {
		.name {
			display: none;
		}
	}
</style>
