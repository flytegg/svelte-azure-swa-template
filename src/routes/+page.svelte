<script lang="ts">
    import type { PageData } from "./$types";
	export let data: PageData
</script>

<svelte:head>
	<title>Demo Application</title>
</svelte:head>

<h1>Welcome to {data.host}</h1>
