<script>
  import { page } from "$app/stores";
  export let navigation
</script>

<div class="uk-sticky uk-sticky-fixed uk-visible@m" uk-sticky="offset: 100; bottom: ~ .navigation-wrapper">
  <div class="uk-width-auto">
    <ul name="navigation" class="uk-nav uk-nav-default">
      {#each navigation as nav}
        <li class:uk-active={$page.url.href.includes(nav?.path)}>
          <a href="{nav?.path}">{nav?.title}</a>
        </li>
      {/each}
    </ul>
  </div>
</div>