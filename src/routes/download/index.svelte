<svelte:head>
  <title>Downloads | My App</title>
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
      title: 'Download',
      icon: `` // could be an svg or a class based icon element,
    },
  ]
</script>

<main uk-height-viewport="expand: true">
  <Breadcrumbs {crumbs} />

  <div class="uk-container uk-margin-top">
    <p>this is the downloads page</p>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem iste saepe error quas eligendi. Tempore dolor quibusdam excepturi voluptas ad rem consequatur qui maxime accusamus. Nostrum soluta nulla, nihil debitis, odit quas accusantium, molestiae non omnis voluptatibus ducimus et inventore.</p>
  </div>
</main>

<MiniFooter />