<svelte:head>
  <title>Components | Slider</title>
</svelte:head>

<script>
  import { pageNavigation } from '$lib/stores/site/Util';

  pageNavigation.set([
    { title: "Slider Option 1", path: "#option-1"},
    { title: "Slider Option 2", path: "#option-2"},
    { title: "Slider Option 3", path: "#option-3"},
  ])
</script>

<main uk-height-viewport="expand: true">
  <div class="uk-container uk-margin-top">
    <div class="header uk-margin-medium-bottom">
      <h1>Upload Component</h1>
    </div>
  </div>
</main>
