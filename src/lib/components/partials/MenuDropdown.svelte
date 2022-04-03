<script>
  export let dropdownMode = "hover"
  export let animation = "uk-animation-scale-up uk-transform-origin-top-center"
  export let position = "bottom-right"
  /** 
   * Provide icons to your dropdown links as svg or class based html icons like so `<i class="mdi mdi-account"></i>` and they will just render effortlessly 
   * svg icon width and height is set to "12"
  */
 import { userMenuItems } from "$lib/stores/site/Util";

</script>

<div class="uk-navbar-dropdown" 
  uk-dropdown="mode: {dropdownMode}; animation: {animation}; pos: {position}">
  <ul class="uk-nav uk-navbar-dropdown-nav">
    {#each $userMenuItems as item}
      {#if item?.hasHeader}
        <li class="uk-nav-header">
          {#if item?.icon}
            <span class="icon uk-margin-small-right">{@html item?.icon}</span>
          {/if}
          {item?.headerTitle}
        </li>
        {#if item?.children}
          {#each item?.children as child}
            <li class:uk-active={item?.active === true}>
              <a 
                href="{child.path}" 
                target="{child?.external === true ? '_blank' : ''}" 
                rel="{child?.external === true ? 'noopener noreferrer' : ''}">
                {#if child?.icon}
                  <span class="icon uk-margin-small-right">{@html child?.icon}</span>
                {/if}
                {child.title}
              </a>
            </li>  
          {/each}
        {/if}
      {:else}
        <li class:uk-active={item?.active === true}>
          <a 
            href="{item.path}"
            target="{item?.external === true ? '_blank' : ''}" 
            rel="{item?.external === true ? 'noopener noreferrer' : ''}">
            {item.title}
          </a>
        </li>  
      {/if}
    {/each}
  </ul>
</div>

<style lang="scss">
  span.icon {
    margin-top: -.15rem;
  }
  li:not(.uk-nav-header) {
    margin: .5rem 0;
    transition: ease-out 0.3s;
    &:hover {
      border-radius: .3rem;
      background-color: #f3f3f3;
      padding-left: .5rem;
    }
  }
</style>