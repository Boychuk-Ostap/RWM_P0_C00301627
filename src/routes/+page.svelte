<script lang="ts">
    import { DecrementIfLessThanFirst } from '$lib/filters';
    let raw = $state('4 2 8 3 9 4 10 5 11 6 1');
    let input = $derived(raw.trim().split(/\s+/).filter(Boolean).map(Number));
    let output = $derived(DecrementIfLessThanFirst(input));
</script>

<h1> Sequence filter demo</h1>
<label>
    Input (space-separated integers)
    <input bind:value={raw} placeholder="e.g., 4 3 2 1 0" />
</label>

<h2>Output</h2>
<p>{output.join(' ')}</p>

<style>
    label { display: block; margin: 1rem 0; }
    input {width: 100%; max-width: 30rem; }
</style>