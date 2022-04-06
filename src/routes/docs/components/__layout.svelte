<script>
  import MiniFooter from "$components/bites/MiniFooter.svelte"
  import PageNavigation from "$components/bites/PageNavigation.svelte"
  import { pageNavigation } from "$lib/stores/site/Util";
</script>

<div class="uk-margin-large-top">
  <div class="uk-grid-small" uk-grid>
    <div class="uk-width-expand">
      <slot></slot>
    </div>
    <div class="navigation-wrapper uk-width-1-4 uk-visible@m">
      <PageNavigation navigation={$pageNavigation} />
    </div>
  </div>
</div>

<MiniFooter />