<script>
  // @ts-ignore
  import { navLeftLinks, navRightLinks } from '$stores/site/Util.js'
</script>

<div id="side-nav" uk-offcanvas="overlay: true">
  <div class="uk-offcanvas-bar">
    <button class="uk-offcanvas-close" type="button" uk-close></button>
    <h3>Online Portal</h3>
    
    <div class="uk-width-1-1">
      <ul class="uk-nav-default uk-list-large uk-nav-parent-icon" uk-nav>
        {#each $navLeftLinks as link}
          {#if link?.hasSubMenu === true}
            <li class="uk-parent">
              <a class="uk-text-bold" href="{link?.path}">{link?.title}</a>
              <ul class="uk-nav-sub uk-list-large">
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
            <li class="uk-text-bold"><a href="{link?.path}">{link?.title}</a></li>
          {/if}
        {/each}
        <li class="uk-nav-divider uk-margin-top"></li>
        {#each $navRightLinks as link}
          <li>
            <a class="uk-text-bold" href="{link?.path}">{link?.title}</a>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</div>