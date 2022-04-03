<script>
  // @ts-ignore
  import { page } from "$app/stores"

  import { navLeftLinks, navRightLinks } from '../../stores/site/Util'
  import MenuDropdown from '$components/partials/MenuDropdown.svelte'
  import MegaMenu from '$components/partials/MegaMenu.svelte'
  import NotificationDropdown from '$components/partials/NotificationDropdown.svelte'
  import NavLinkAvatar from '$components/bites/NavLinkAvatar.svelte'
</script>

<div id="main-nav" class="uk-visible@m">
  <div class="uk-sticky" uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-dark; top: 100">
    <nav class="uk-navbar-container uk-box-shadow-small" uk-navbar>
      <div class="uk-navbar-left uk-margin-left">
        <ul class="uk-navbar-nav">
          {#each $navLeftLinks as link}
            {#if link?.hasSubMenu === true}
              <li>
                <a 
                  class:active-page={link?.path === $page.url.pathname} 
                  class="uk-text-bold" 
                  href="{link?.path}">{link?.title}
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-chevron-down uk-text-bold" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/></svg>
                </a>
                <MenuDropdown position="bottom-left" menuItems={link?.subLinks} />
              </li>
            {:else if link?.isMegaMenu}
              <li>
                <a 
                  class:active-page={link?.path === $page.url.pathname} 
                  class="uk-text-bold" 
                  href="{link?.path}">{link?.title}
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-chevron-down uk-text-bold" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/></svg>
                </a>
                <MegaMenu dropdownMode={"click"} animation={"uk-animation-fade"} position="bottom-left" menuItems={link?.subLinks} />
              </li>
            {:else}
              <li class="uk-text-bold">
                <a
                  class:active-page={link?.path === $page.url.pathname} 
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
      <div class="uk-navbar-right uk-margin-right">
        <ul class="uk-navbar-nav">
          {#each $navRightLinks as link}
            <li>
              <a 
                class:active-page={link?.path === $page.url.pathname}
                class="uk-text-bold" 
                href="{link?.path}">
                {link?.title}
              </a>
            </li>
          {/each}
          <li>
            <!-- Avartar navbar link component -->
            <NavLinkAvatar />
            <MenuDropdown dropdownMode={"click"} />
          </li>
          <li>
            <!-- Notification bell icon and component in header -->
            <!-- svelte-ignore a11y-invalid-attribute -->
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16"><path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/></svg>
            </a>
            <NotificationDropdown dropdownMode={"click"} />
          </li>
        </ul>
      </div>
    </nav>
  </div>
</div>

<style lang="scss">
  .active-page {
    color: #348349;
  }
</style>