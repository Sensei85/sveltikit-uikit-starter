<svelte:head>
  <title>Components | Slider</title>
</svelte:head>

<script>
  import PageHeading from '$lib/components/bites/PageHeading.svelte';
  import { pageNavigation } from '$lib/stores/site/Util';
  
  pageNavigation.set([
    { title: "Link 1", path: "#option-1"},
    { title: "Link 2", path: "#option-2"},
    { title: "Link 3", path: "#option-3"},
  ])
</script>

<main uk-height-viewport="expand: true">
  <div class="uk-container uk-margin-top">
    <PageHeading>
      <h2 slot="heading">Slider</h2>
      <p slot="desc">Blank page...</p>
    </PageHeading>
  </div>
</main>
