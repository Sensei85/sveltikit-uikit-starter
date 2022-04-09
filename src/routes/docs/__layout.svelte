<script>
  import { page } from "$app/stores"
  import { componentsDocsLinks } from "$lib/stores/site/items";
</script>

<main>
  <div class="uk-grid-collapse" uk-grid>
    <div class="uk-width-1-5 uk-width-1-6@xl uk-visible@m">
      <aside class="aside-wrapper uk-position-fixed uk-width-1-5 uk-width-1-6@xl">
        <div class="aside-nav">
          <div class="uk-padding" uk-overflow-auto="selContainer: .aside-wrapper; selContent: .aside-nav">
            <h4>Documentation</h4>
            <ul class="uk-nav uk-nav-default">
              <li class="uk-nav-header">GETTING STARTED</li>
              <li class="uk-nav-divider"></li>

              <li>
                <a href="/docs">Introduction</a>
              </li>

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
          </div>
        </div>
      </aside>
    </div>
    <div class="uk-width-expand" uk-height-viewport="expand: true">
      <slot></slot>
    </div>
  </div>
</main>

<style lang="scss">
  .aside-wrapper {
    border-right: 1px solid #ddd;
    height: calc(100vh - 80px); // the 80px is the total height of the navbar on the page. That's how I get the aside height to fit perfectly according to device vh and it's content scrollable
  }
</style>