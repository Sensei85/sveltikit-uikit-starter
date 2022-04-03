<script>
  export let dropdownMode = "hover"
  export let animation = "uk-animation-scale-up uk-transform-origin-top-center"
  export let position = "bottom-right"
  export let menuItems = [] // maximum of 5 itmes in the array to keep grid in the megamenu looking nice
  const menuItemsCount = !menuItems ? '4' : menuItems.length // items count for dynamic grid child width eg: uk-child-width-1-{itmesCount} -> 1, 2, 3, 4, 5
</script>

<div class="uk-navbar-dropdown"
  uk-dropdown="mode: {dropdownMode}; animation: {animation}; pos: {position}"
  uk-drop="animation: {animation}; boundary: !nav; boundary-align: true; pos: bottom-justify;">
  <div class="uk-navbar-dropdown-grid uk-child-width-1-{menuItemsCount}" uk-grid>
    {#each menuItems as childLinks}
      <div>
        <ul class="uk-nav uk-navbar-dropdown-nav">
          {#each childLinks as link}
            {#if link?.isHeader}
              <li class="uk-nav-header uk-text-bold">{link?.title}</li>
            {:else}
              <li class:uk-active={link?.active === true}>
                <a 
                  href="{link?.path}" 
                  target="{link?.external === true ? '_blank' : ''}" 
                  rel="{link?.external === true ? 'noopener noreferrer' : ''}">
                  {link?.title}
                </a>
              </li>
            {/if}
          {/each}
        </ul>
      </div>
    {/each}
  </div>
</div>