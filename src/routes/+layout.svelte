<script>
	import '@fontsource-variable/rethink-sans';
	import '../app.scss';

	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	export let data;

	let showSearch = false;
	let query = '';
	let pageClass = '';

	$: {
		if ($page.url.pathname === '/') {
			pageClass = 'home';
			// } else if ($page.url.pathname.startsWith('/articles/')) {
			// 	pageClass = 'article';
			// } else if ($page.url.pathname.startsWith('/issues/') && $page.url.pathname !== '/issues/') {
			// 	pageClass = 'article';
			// } else if ($page.url.pathname.startsWith('/weekly-woof')) {
			// 	pageClass = 'wide';
		} else {
			pageClass = '';
		}
	}

	onMount(() => {
		showSearch = false;

		const handleClick = (event) => {
			if (showSearch && !event.target.classList.contains('search-input')) showSearch = false;
		};

		document.addEventListener('click', handleClick);

		return () => {
			document.removeEventListener('click', handleClick);
		};
	});

	const search = (event) => {
		event.preventDefault();
		goto(`/search?q=${encodeURIComponent(query)}`);
		showSearch = false;
		query = '';
	};
</script>

<div class="layout">
	<header class={pageClass}>
		<a href="/"><h1>The <span>I</span>nterlake <span>I</span>nquirer</h1></a>
		<nav>
			<a href="/">Home</a>
			<a href={data.latestIssueSlug}>Latest Issue</a>
			<a href="/issues">Past Issues</a>
			<a href="/weekly-woof">Weekly Woof</a>
			<a href="/about">About</a>
			<div class="search-container">
				{#if showSearch}
					<form on:submit={search}>
						<input
							placeholder="Search Articles"
							class="search-input"
							bind:value={query}
							autofocus
						/>
					</form>
				{:else}
					<button on:focus={() => (showSearch = true)} class="search-button">
						<img src="/search.png" alt="Search" />
					</button>
				{/if}
			</div>
		</nav>
		<!-- <div class="hor-divider"></div> -->
	</header>

	<div class="slot">
		<slot />
	</div>

	<footer class={pageClass}>
		<div class="left">
			<!-- <img src="/logo.png" alt="Logo" /> -->
			<h2>The Interlake Inquirer</h2>
			<div class="description">The Official Student Newspaper of Interlake High School</div>
			<div class="copyright">Copyright &copy; 2023 Interlake Inquirer</div>
		</div>
		<div class="links">
			<h3>Links</h3>
			<a href="/">Home</a>
			<a href="/issues">Issues</a>
			<a href="/weekly-woof">Weekly Woof</a>
			<a href="/about">About</a>
		</div>

		<div class="links">
			<h3>Socials</h3>
			<a href="mailto:interlakenewspaperclub@gmail.com">Email</a>
			<a href="https://www.facebook.com/interlakeinquirer">Facebook</a>
			<a href="https://www.instagram.com/theinterlakeinquirer/">Instagram</a>
			<a href="https://issuu.com/interlakeinquirer">Issuu</a>
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

	header {
		display: flex;
		justify-content: space-between;
		width: 100%;
		max-width: 72rem;
		margin: 2rem auto;
		padding: 0.5rem 1.2rem;
		background: var(--bg-2);

		a {
			text-decoration: none;
		}

		h1 {
			font-size: 2.2rem;
			// transition: font-size 0.1s ease-out;
			margin: 0;
			font-weight: 800;

			span {
				color: var(--acc-2);
			}
		}

		nav {
			display: flex;
			align-items: center;
			gap: 1.5rem;

			a {
				font-size: 1.1rem;
				font-weight: 600;
				text-decoration: none;
				color: var(--text-2);

				@include underline;
			}
		}

		.search-container {
			display: flex;

			.search-button {
				width: 1.4rem;
				height: 1.4rem;

				img {
					width: 1.4rem;
					height: 1.4rem;
				}
			}
		}

		form {
			input {
				font-family: inherit;
				border: 2px solid var(--acc-2);
				background: var(--bg-2);
				height: 1.8rem;
				width: 10rem;
				text-indent: 0.5rem;
			}

			::placeholder {
				font-family: var(--font-family);
				color: var(--text-2);
			}

			:focus {
				outline: none;
			}
		}
	}

	footer {
		background: var(--bg-2);
		display: flex;
		justify-content: space-between;
		padding: 1.2rem;
		margin: 2rem auto;
		width: 100%;
		max-width: 72rem;

		.left {
			display: flex;
			flex-direction: column;
			margin-right: auto;

			h2 {
				margin-top: 0;
			}

			.description {
				color: var(--text-2);
			}

			.copyright {
				margin-top: auto;
			}

			// img {
			// 	width: 3rem;
			// 	margin-bottom: auto;
			// }
		}

		.links {
			display: flex;
			flex-direction: column;
			margin-left: 3rem;

			h3 {
				margin-top: 0;
			}

			a {
				color: var(--text-2);
				margin: 0.3rem 0;
				@include underline;
			}
		}
	}
</style>
