<script>
  import Navbar from "./navbar.svelte";
</script>

<style>
  :global(:root) {
    --color-1: #002642;
    --color-2: #840032;
    --color-3: #E59500;
    --color-4: #E5DADA;
    --color-5: #02040F;


    --sidebar-width: 130px;
    --nav-bg-color: var(--color-1);
    --title-bg-color: var(--color-2);
    --title-text-color: var(--color-4);
    --body-bg-color: var(--color-4);
    --footer-bg-color: var(--color-5);
    --footer-text-color: var(--color-3);
  }

  :global(body) {
    padding: 0;
    margin: 0;
    font-family: 'Cabin', sans-serif;
    background-color: var(--body-bg-color);

  }

  #navbar {
    background-color: var(--nav-bg-color);
    width: var(--sidebar-width);
    position: fixed;
    top: 0px;
    left: 0px;
    min-height: 100%;
  }

  #title {
    margin-left: var(--sidebar-width);
    background-color: var(--title-bg-color);
    color: var(--title-text-color);
    width: 100%;
    padding-top: 1%;
    padding-bottom: .5%;
    padding-left: 1%;
  }

  #footer {
    position: absolute;
    bottom: 0px;
    left: var(--sidebar-width);
    background-color: var(--footer-bg-color);
    color: var(--footer-text-color);
    width: 100%;
    padding: 2%
  }

  #footer > p > a {
    color: var(--footer-text-color)
  }
</style>

<div id="title">
  <h1>martingraham.dev</h1>
</div>
<div id="navbar">
  <Navbar />
</div>

<div>
  <p>Content</p>
</div>

<div id="footer">
    <p>
      Icons courtesy of <a href="icons8.com">icons8</a>
    </p>
</div>