<script>
  import { page } from "$app/stores"
  import { componentsDocsLinks } from '$lib/stores/site/Util';
  // @ts-ignore
  import { navLeftLinks, navRightLinks } from '$stores/site/Util.js'
</script>

<div id="side-nav" uk-offcanvas="overlay: true; mode: push">
  <div class="uk-offcanvas-bar">
    <div class="uk-width-1-1">
      <ul class="uk-nav-default uk-nav-parent-icon" uk-nav>
        <li class="uk-nav-header">GENERAL</li>
        <li class="uk-nav-divider"></li>

        {#each $navLeftLinks as link}
          {#if link?.hasSubMenu === true}
            <li class="uk-parent">
              <a href="{link?.path}">{link?.title}</a>
              <ul class="uk-nav-sub">
                {#each link?.subLinks as link}
                  <li>
                    <a 
                      href="{link?.path}" 
                      target="{link?.external === true ? '_blank' : ''}" 
                      rel="{link?.external === true ? 'noopener noreferrer' : ''}">
                      {link?.title}
                    </a>
                  </li>
                {/each}
              </ul>
            </li>
          {:else}
            <li><a href="{link?.path}">{link?.title}</a></li>
          {/if}
        {/each}
        <li class="uk-nav-divider uk-margin-top"></li>
        {#each $navRightLinks as link}
          <li>
            <a href="{link?.path}">{link?.title}</a>
          </li>
        {/each}
      </ul>

      {#if $componentsDocsLinks && $page.url.pathname.includes("docs") } 
      <!-- Check if "docs" is in the path name of our url and renders the nav for documentation page in the mobile off canvas menu -->
        <ul class="uk-nav uk-nav-default uk-margin-top">
          <li class="uk-nav-header">COMPONENTS</li>
          <li class="uk-nav-divider"></li>
          {#each $componentsDocsLinks as item}
            <li 
              class:uk-active={item?.path === $page.url.pathname}>
              <a 
                href="{item?.path}">
                {item?.title}
              </a>
            </li>
          {/each}
        </ul>
      {/if}
    </div>
  </div>
</div>