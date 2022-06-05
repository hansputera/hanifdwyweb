<script>
    import { getPersonAge } from '../utils';

    let age;
    $: {
        age = getPersonAge(2007, 3, 24);
    }
</script>

<svelte:head>
  <title>About</title>
</svelte:head>

<section class="container text-center object-center">
    <input type="image" img src={'/photos/photo.jpg'} class="rounded-full mx-auto w-40" alt='photo' />
    <h1 class="mt-3 font-semibold text-4xl outline-none">
        About
    </h1>

    <p class="font-mono ml-6 mt-3">
        Hello, welcome to this site btw. Let me introduce myself, my name is <span class="font-thin">
            Hanif Dwy Putra S
        </span> who create this sh*t website.<br/>You can call me <span class="font-thin">Hanif</span>.
        I'm {age} years old, and I hate web programming ("whhaat is this?").
        <br /><br />
        I made this website with <a class="text-orange-500" href="https://svelte.dev">SvelteJS</a> and <a class="text-sky-600" href="https://windicss.org">WindiCSS</a>
    </p>
</section>
