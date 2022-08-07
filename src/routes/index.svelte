<script>
  import Navbar from "./navbar.svelte";
</script>

<style>
  :global(:root) {
    --color-1: #e4fde1;
    --color-2: #8acb88;
    --color-3: #648381;
    --color-4: #575761;
    --color-5: #ffbf46;


    --nav-bg-color: var(--color-3);
    --sidebar-width: 130px;
    --title-bg-color: var(--color-5);
    --footer-bg-color: var(--color-4);
  }

  :global(body) {
    padding: 0;
    margin: 0;
    font-family: 'Cabin', sans-serif;

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
    color: var(--color-4);
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
    width: 100%;
    padding: 2%
    
  }
</style>

<div id="title">
  <h1>martingraham.dev</h1>
</div>
<div id="navbar">
  <Navbar />
</div>

<div id="footer">
    Icons courtesy of <a href="icons8.com">icons8</a>
</div>