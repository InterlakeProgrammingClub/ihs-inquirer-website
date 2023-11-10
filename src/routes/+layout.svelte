<script>
	import '@fontsource-variable/literata';
	import '@fontsource-variable/aleo';
	import '../app.scss';

	import { page } from '$app/stores';

	let pageClass = '';

	$: {
		if ($page.url.pathname === '/') {
			pageClass = 'home';
		} else if ($page.url.pathname.startsWith('/articles/')) {
			pageClass = 'article';
		} else if ($page.url.pathname.startsWith('/issues/') && $page.url.pathname !== '/issues/') {
			pageClass = 'article';
		} else {
			pageClass = '';
		}
	}
</script>

<div class="layout">
	<header class={pageClass}>
		<h1><a href="/">The <span>I</span>nterlake <span>I</span>nquirer</a></h1>
		<nav>
			<a href="/">Latest Issue</a>
			<a href="/issues">Past Issues</a>
			<a href="/weekly-woof">The Weekly Woof</a>
			<a href="/about">About</a>
			<a href="/contact">Contact</a>
		</nav>
		<div class="hor-divider"></div>
	</header>
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
		font-size: 1.8rem;
		margin: 0.5rem 0 1.5rem 0;
		transition: 0.1s ease-out;
	}

	.hor-divider {
		max-width: 50rem;
		margin: 1.5rem auto 0 auto;
		transition: 0.1s ease-out;
	}

	header {
		text-align: center;
		padding: 1rem 0;
	}

	header.home {
		h1 {
			font-size: 3rem;
			margin: 2.5rem 0 1.5rem 0;
		}

		.hor-divider {
			max-width: 76rem;
			margin: 3rem auto 0 auto;
		}
	}

	header.article {
		.hor-divider {
			max-width: 40rem;
		}
	}

	nav {
		display: flex;
		justify-content: center;
		gap: 2rem;

		a {
			color: var(--text-2);
			font-size: 1.2rem;
			position: relative;

			@include underline;
		}
	}

	a {
		text-decoration: none;
	}

	span {
		color: var(--acc-2);
	}
</style>
