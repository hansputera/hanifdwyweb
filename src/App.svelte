<script>
  import { Router, Route, navigate } from 'svelte-navigator';
  // pages
  import Home from './pages/Home.svelte';
  import FourZeroFour from './pages/404.svelte';
  import About from './pages/About.svelte';
  import RedirectTo from './pages/RedirectTo.svelte';

  // components
  import Header from './components/Header.svelte';
  import Footer from './components/Footer.svelte';
</script>

<Router>
  <div>
    <Header routes={[
      {
          path: '/',
          name: 'Home'
      }, {
          path: '/about',
          name: 'About',
      }, {
          path: '/redirect#github',
          name: 'GitHub',
      }, {
          path: '/redirect#twitter',
          name: 'Twitter',
      }
  ]} />
    <section class="min-h-screen bg-light-200">
      <div class="py-4"></div>
      <Route primary path="/">
        <Home />
      </Route>
      <Route path="/about" component={About} />
      <Route path="/redirect" component={RedirectTo} />
      <Route path="*">
        <FourZeroFour />
      </Route>
    </section>
    <Footer />
  </div>
</Router>

<style windi:preflights:global windi:safelist:global>
</style>
