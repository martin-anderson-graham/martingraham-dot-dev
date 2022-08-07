<script>
  import Navbar from "./navbar.svelte";
</script>

<style>
  :global(:root) {
    --nav-bg-color: blue;
    --sidebar-width: 130px;
    --title-bg-color: rgb(241, 128, 128);
  }

  :global(body) {
    padding: 0;
    margin: 0;
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
    width: 100%;
    padding-top: 1%;
    padding-bottom: .5%;
    padding-left: 1%;
  }

  #footer {
    position: absolute;
    bottom: 0px;
    left: var(--sidebar-width);
    background-color: gray;
    width: 100%;
    padding: 5%
    
  }
</style>

<div id="title">
  <h1>Welcome to martingraham.dev</h1>
</div>
<div id="navbar">
  <Navbar />
</div>

<div id="footer">
    Icons courtesy of <a href="icons8.com">icons8</a>
</div>