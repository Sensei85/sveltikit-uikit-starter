<script>
  export let crumbs = [
    {
      title: 'Home',
      path: '/',
      icon: `` // could be an svg or a class based icon element,
    },
    {
      title: 'Profile',
      path: '/profile',
      icon: `` // could be an svg or a class based icon element,
    },
    {
      title: 'Settings',
      path: '/profile/settings',
      icon: `` // could be an svg or a class based icon element,
    }
  ]
</script>

<section class="uk-section uk-section-xsmall uk-section-muted uk-padding-small">
  <ul class="uk-breadcrumb">
    {#if !crumbs}
      <li><span>Home</span></li>
    {:else}
      {#each crumbs as crumb}
        {#if crumb?.path}
          <li>
            {#if crumb?.icon}
              {@html crumb?.icon}
            {/if}
            <a href="{crumb?.path}">{crumb.title}</a>
          </li>
        {:else}
          <li><span>{crumb?.title}</span></li>
        {/if}
      {/each}
    {/if}
  </ul>
</section>