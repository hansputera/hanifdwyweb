<script>
    import { link, useLocation } from 'svelte-navigator';
    const location = useLocation();
    let navToggle = false;

    export let routes = [];
</script>

<section class="sticky top-0">
    <!-- i stole it btw -->
    <nav class="bg-white border-gray-300 shadow-sm px-2 sm:px-4 py-2.5 rounded">
        <div class="container flex flex-wrap justify-between items-center mx-auto">
          <a href="{$location.pathname}" class="flex items-center">
              <p class="self-center text-xl font-semibold whitespace-nowrap">
                  location: {$location.pathname}
              </p>
          </a>
          <button
            class="items-center p-2 ml-3 text-md inline-flex
            text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none
            focus:ring-2 focus:ring-gray-200"
            on:click="{() => navToggle = !navToggle}">
            <span class="sr-only">open nav</span>
            {#if navToggle}
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            {:else}
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            {/if}
          </button>
          <div class="{navToggle ? 'block' : 'hidden'} w-full md:block md:w-auto">
            <ul class="
            flex flex-col mt-4 md:flex-row md:space-x-8
            md:mt-0 md:text-sm md:font-medium">
              {#each routes as route}
                <li>
                    <a href="{route.path}" class="
                    block py-2 pr-4 pl-3 {$location.pathname === route.path ? 'text-white bg-blue-700' : 'text-black'}
                    rounded md:bg-transparent md:text-blue-500 md:p-0" use:link>
                    {$location.pathname === route.path ? '(*) ' : ''}{route.name}
                    </a>
                </li>
              {/each}
            </ul>
          </div>
        </div>
      </nav>
</section>
