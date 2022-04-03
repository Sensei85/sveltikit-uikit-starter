<script>
  import NotificationItem from "$components/bites/NotificationItem.svelte"

  export let dropdownMode = "hover"
  export let animation = "uk-animation-scale-up uk-transform-origin-top-center"
  export let position = "bottom-right"

  export let notifications = [
    { 
      title: 'Title 1', 
      unread: true, 
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, ex? Obcaecati atque dicta quae accusamus sapiente tenetur...', 
      slug: '/notifications/:id', 
      meta: 'description...',
      time: '09:23'
    },
    { 
      title: 'Title 2', 
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, ex? Obcaecati atque dicta quae accusamus sapiente tenetur...', 
      slug: '/notifications/:id', 
      meta: 'description...',
      time: '09:23'
    },
    { 
      title: 'Title 3', 
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, ex? Obcaecati atque dicta quae accusamus sapiente tenetur...', 
      slug: '/notifications/:id', 
      meta: 'description...',
      time: '09:23'
    },
    { 
      title: 'Title 4', unread: true, 
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, ex? Obcaecati atque dicta quae accusamus sapiente tenetur...', 
      slug: '/notifications/:id', 
      meta: 'description...',
      time: '09:23'
    },
    { 
      title: 'Title 5', 
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, ex? Obcaecati atque dicta quae accusamus sapiente tenetur...', 
      slug: '/notifications/:id', 
      meta: 'description...',
      time: '09:23'
    },
    { 
      title: 'Title 6', 
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, ex? Obcaecati atque dicta quae accusamus sapiente tenetur...', 
      slug: '/notifications/:id', 
      meta: 'description...',
      time: '09:23'
    },
  ]
</script>

<div class="notification__wrapper uk-navbar-dropdown uk-padding-remove uk-width-large" 
  uk-dropdown="mode: {dropdownMode}; animation: {animation}; pos: {position}">
  <div class="notification__wrapper-header uk-flex uk-flex-between uk-flex-middle uk-padding-small">
    <div class="notification__wrapper-header-title">
      <a href="/user/notifications">Notifications</a>
    </div>
    <div class="notification__wrapper-header-close-button">
      <button type="button" class="uk-dropdown-close" uk-close></button>
    </div>
  </div>
  <div class="notification__wrapper-content">
    {#if !notifications}
      <div class="uk-flex uk-flex-center uk-flex-middle uk-padding">
        <span uk-spinner="ratio: .7"></span>
        <span class="uk-text-medium uk-margin-small-left">Getting you notified...</span>
      </div>
    {:else}
      <div class="uk-panel uk-panel-scrollable uk-padding-remove uk-height-medium">
        <ul class="uk-nav uk-navbar-dropdown-nav">
          {#each notifications as notification}
            <NotificationItem {notification} />
          {/each}
        </ul>
      </div>
    {/if}
  </div>
</div>

<style lang="scss">
  .notification__wrapper {
    &-header {
      background-color: hsl(0, 0%, 22%, 1);
      button[uk-close] {
        color: white;
      }
      &-title {
        a {
          color: white;
        }
      }
    }
    &-content .uk-panel {
      min-height: 20rem;
    }
  }
</style>