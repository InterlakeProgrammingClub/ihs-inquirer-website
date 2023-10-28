<script>
	import '../app.css';
</script>

<div class="layout">
	<nav>
		<div class="left">
			<a href="/"
				><img class="logo" id="logo1" src="/logo.png" alt="Logo of Interlake Inquirer" /></a
			>
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
</div>

<style>
	:global(body) {
		margin: 0;
		overflow-x: hidden;
		background-color: var(--header-color);
		font-family: 'Roboto', sans-serif;
	}

	.layout {
		display: flex;
		flex-direction: column;
	}

	nav {
		background-color: var(--header-color);
		color: var(--header-text);
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 5px 20px;
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
		color: var(--header-text);
		font-size: 18px;
		font-weight: bold;
		text-decoration: none;
	}

	.links > *:not(:first-child) {
		margin-left: 20px;
	}

	.slot {
		padding: 0 30px;
		background-color: var(--background-color);
		min-height: 500px;
	}

	@media (max-width: 950px) {
		.name {
			display: none;
		}
	}
</style>
