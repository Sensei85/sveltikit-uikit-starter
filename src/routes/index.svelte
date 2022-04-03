<svelte:head>
  <title>Home | My App</title>
</svelte:head>

<script>
  import MainFooter from "$components/partials/MainFooter.svelte";
  import HomeSlider from "$components/bites/HomeSlider.svelte"
</script>

<main uk-height-viewport="expand: true">
  <!-- <HomeSlider /> -->

  <div class="uk-container uk-margin-top uk-margin-bottom">
    <h3 class="uk-text-bold">A simple sveltekit uikit starter to help you scarfold a project with <a href="http://getuikit.com" target="_blank" rel="noopener noreferrer">Uikit</a> as a css framework.</h3>
    <hr>
    <div class="uk-grid uk-grid-small uk-child-width-1-2@l uk-child-width-1-1@m" uk-grid>
      <div>
        <p class="uk-text-bold">-- Out of the box nifty components in the components dir: -- </p>
        <ul class="uk-list uk-list-square">
          <li>Nav bar with data driven navigation</li>
          <li>Mobile Nav (not sticky: can easily add)</li>
          <li>Mega Menu (Array data inside component)</li>
          <li>Some basic pages</li>
          <li>MainFooter (Sticky)</li>
          <li>MiniFooter (Sticky)</li>
          <li>Offcanvas menu (Shares nav array links with main nav)</li>
          <li>User Profile Menu Dropdown (Data driven)</li>
          <li>Nav notification dropdown</li>
          <li>Offcanvas extra wide notification drawer</li>
          <li>Breadcrumbs</li>
          <li>Parallex Slider (No images: just add yours and call the component)</li>
        </ul>
      </div>
      <div>
        <p class="uk-text-bold">-- Out of the box supports: --</p>
        <ul class="uk-list uk-list-square">
          <li>SCSS support (files already linked together with some default vars)</li>
          <li>Svelte preprocessor</li>
          <li>Prettier support</li>
          <li>Eslint</li>
        </ul>
      </div>
    </div>

    <h4>Scroll up to see navbar glassmorphic effect. Can be removed in **app.scss** if you don't like it. Cheers.</h4>    

    <p>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
    </p>
    
  </div>

</main>

<MainFooter/>