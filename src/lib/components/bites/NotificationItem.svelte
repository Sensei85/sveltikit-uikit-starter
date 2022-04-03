<script>
  export let notification
</script>

<a href="{notification?.slug}">
  <li>
    <div class="uk-grid-small uk-flex uk-flex-middle" class:unread={notification?.unread}>
      {#if notification?.unread}
        <div>
          <span class="unread-dot"></span>
        </div>
      {/if}
      <div class="uk-flex uk-flex-column">
        <div>
          <div class="uk-flex uk-flex-between uk-padding-remove uk-flex-middle">
            <div>
              <span class="title">{notification?.title}</span>
            </div>
            <div>
              <span class="time">{notification.time}</span>
            </div>
          </div>
        </div>
        <div>
          <span class="body">{notification?.body}</span>
        </div>
      </div>
    </div>
  </li>
</a>

<style lang="scss">
  a {
    color: inherit;
    text-decoration: none;
    li > div {
      transition: ease-out .3s;
      border-bottom: 1px solid #d7d6d6;
      padding: .5rem;
      &.unread {
        background-color: #e3f0ff;
      }
      &:hover {
        padding-left: .7rem;
        background-color: #f2f2f2;
      }
    }
    span.unread-dot {
      height: .4rem;
      width: .4rem;
      background-color: #348349;
      border-radius: 50%;
      display: inline-block;
    }
  }
</style>