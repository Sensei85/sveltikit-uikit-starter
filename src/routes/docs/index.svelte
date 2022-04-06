<svelte:head>
  <title>Components</title>
</svelte:head>

<script>
  import MiniFooter from "$components/bites/MiniFooter.svelte";
  import Breadcrumbs from "$components/bites/Breadcrumbs.svelte";

  export let crumbs = [
    {
      title: 'Home',
      path: '/',
      icon: `` // could be an svg or a class based icon element,
    },
    {
      title: 'Docs',
      icon: `` // could be an svg or a class based icon element,
    },
  ]
</script>

<main uk-height-viewport="expand: true">
  <Breadcrumbs {crumbs} />

  <div class="uk-container uk-margin-top">
    <h4 class="uk-heading uk-heading-bullet">INTRODUCTION</h4>
  </div>
</main>

<MiniFooter />