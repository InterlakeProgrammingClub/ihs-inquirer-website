<script>
	import '@fontsource-variable/literata';
	import '@fontsource-variable/aleo';
	import '../app.scss';

	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	let showSearch = false;
	let query = '';
	let pageClass = '';

	$: {
		if ($page.url.pathname === '/') {
			pageClass = 'home';
		} else if ($page.url.pathname.startsWith('/articles/')) {
			pageClass = 'article';
		} else if ($page.url.pathname.startsWith('/issues/') && $page.url.pathname !== '/issues/') {
			pageClass = 'article';
		} else if ($page.url.pathname.startsWith('/weekly-woof')) {
			pageClass = 'wide';
		} else {
			pageClass = '';
		}
	}

	const search = (event) => {
		event.preventDefault();
		goto(`/search?q=${encodeURIComponent(query)}`);
    
		showSearch = !showSearch;
		query = '';
	};
</script>

<div class="layout">
	<header class={pageClass}>
		<h1><a href="/">The <span>I</span>nterlake <span>I</span>nquirer</a></h1>
		<nav>
			<a href="/">Latest Issue</a>
			<a href="/issues">Past Issues</a>
			<a href="/weekly-woof">The Weekly Woof</a>
			<a href="/about">About</a>
			<div>
				<button on:click={() => (showSearch = !showSearch)}>
					<img src="/search.png" alt="Search" />
				</button>

				{#if showSearch}
					<div>
						<form on:submit={search}>
							<!-- svelte-ignore a11y-autofocus -->
							<input placeholder="Search" bind:value={query} autofocus />
						</form>
					</div>
				{/if}
			</div>
		</nav>
		<div class="hor-divider"></div>
	</header>
	<div class="slot">
		<slot />
	</div>

	<footer class={pageClass}>
		<div class="generalContainer">
			<a href="/">
				<img src="/logo.png" alt="Logo" />
			</a>
			<p>Copyright &copy; 2023 Interlake Inquirer</p>
		</div>

		<div class="linkContainer">
			<div>
				<h1>Links</h1>
				<a href="/">Latest Issue</a>
				<a href="/issues">Past Issues</a>
				<a href="/weekly-woof">Weekly Woof</a>
				<a href="/about">About</a>
			</div>

			<div>
				<h1>Socials</h1>
				<a href="mailto:interlakenewspaperclub@gmail.com">Email</a>
				<a href="https://www.facebook.com/interlakeinquirer">Facebook</a>
				<a href="https://www.instagram.com/theinterlakeinquirer/">Instagram</a>
				<a href="https://issuu.com/interlakeinquirer">Issuu</a>
			</div>
		</div>
	</footer>
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
		font-size: 2.2rem;
		font-weight: 900;
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
		padding: 1rem 0 0 0;
	}

	header.home {
		h1 {
			font-size: 3rem;
			margin: 2.5rem 0 1.5rem 0;
		}

		.hor-divider {
			max-width: 80rem;
			margin: 3rem auto 0 auto;
		}
	}

	header.article {
		.hor-divider {
			max-width: 40rem;
		}
	}

	header.wide {
		.hor-divider {
			max-width: 60rem;
		}
	}

	nav {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 2rem;

		a {
			color: var(--text-2);
			font-size: 1.2rem;
			position: relative;

			@include underline;
		}

		button {
			cursor: pointer;
			background-color: transparent;
			border: 0;
			width: 1.5rem;

			img {
				width: 1.5rem;
				height: auto;
			}
		}

		div {
			position: relative;
		}

		form {
			position: absolute;
			right: 0;
		}
	}

	a {
		text-decoration: none;
	}

	span {
		color: var(--acc-2);
	}

	footer {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin: 5rem auto;
		width: 100%;
		max-width: 50rem;

		&.home {
			max-width: 80rem;
		}

		&.article {
			max-width: 40rem;
		}

		&.wide {
			max-width: 60rem;
		}

		a {
			margin: 0.5rem;

			@include underline;
		}

		.generalContainer {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			margin: 1rem;

			img {
				width: 2rem;
				border-radius: 50%;
			}

			p {
				font-size: x-small;
			}
		}

		.linkContainer {
			display: flex;
			flex-direction: row;
			justify-content: right;

			div {
				display: flex;
				flex-direction: column;
				margin: 1rem;
			}

			h1 {
				text-transform: uppercase;
				font-size: medium;
				margin-left: 0.5rem;
			}
		}
	}
</style>
