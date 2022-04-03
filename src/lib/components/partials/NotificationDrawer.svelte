<div id="notification-drawer" uk-offcanvas="flip: true; mode: push; overlay: true">
  <div class="uk-offcanvas-bar uk-padding-remove">
    <div class="notification__drawer-header">
      <div class="notification__drawer-header-content-left">
        <p>Notifications</p>
      </div>
      <div class="notification__drawer-header-content-right">
        <button class="uk-offcanvas-close" type="button" uk-close></button>
      </div>
    </div>
    
    <div class="notification__drawer-content"></div>

  </div>
</div>

<style lang="scss">
  .uk-offcanvas-bar {
    min-width: calc(100vw - 25%);
  }
  .notification__drawer {
    &-header {
      background: #484848;
      height: 4rem;
      width: 100%;
      padding: .5rem 1rem;
    }
    &-header-content-left {
      margin-top: 1.2rem;
    }
    &-header-content-right > button {
      margin-top: .4rem;
    }
  }
</style>