<script>
	import '@fontsource-variable/literata';
	import '@fontsource-variable/aleo';
	import '../app.scss';

	import { page } from '$app/stores';
</script>

<div class="layout">
	<nav class:home={$page.url.pathname === '/'}>
		<h1><a href="/">The Interlake Inquirer</a></h1>
		<div class="links">
			<a href="/">Latest Issue</a>
			<a href="/issues">Past Issues</a>
			<a href="/weekly-woof">The Weekly Woof</a>
			<a href="/about">About</a>
			<a href="/contact">Contact</a>
		</div>
	</nav>
	<div class="slot">
		<slot />
	</div>
	<footer>Hello World</footer>
</div>

<style lang="scss">
	.layout {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	.slot {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
	}

	h1 {
		font-size: 2rem;
		margin: 0.5rem 0 1rem 0;
		transition: 0.2s ease-out;
	}

	nav {
		text-align: center;
		padding: 1rem 0;
	}

	.links {
		display: flex;
		justify-content: center;
		gap: 2rem;
	}

	nav.home {
		h1 {
			font-size: 3.5rem;
			margin: 2.5rem 0 1.5rem 0;
		}
	}
</style>
