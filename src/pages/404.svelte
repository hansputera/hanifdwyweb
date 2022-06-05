<script>
  import { useNavigate } from 'svelte-navigator';

  const navigate = useNavigate();
</script>

<svelte:head>
  <title>404 Not Found</title>
</svelte:head>

<section class="lg:py-30 md:py-40 py-60 text-center bg-fixed">
  <h1 class="text-lg text-red-500 uppercase lg:text-size-80px md:text-size-60px text-size-40px outline-none">
    ERR: 404
  </h1>

  <p class="font-mono mt-5">
    The requested resource doesn't exist!
  </p>

  <button
    class="hover:shadow-lg mt-3 uppercase lg:w-50 w-30 shadow-md rounded-md bg-light-500 p-5 hover:outline-none"
    on:click="{() => navigate(-1)}">
      back
    </button>
</section>