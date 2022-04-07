<script>
  import MiniFooter from "$components/bites/MiniFooter.svelte"
  import PageNavigation from "$components/bites/PageNavigation.svelte"
  import { pageNavigation } from "$lib/stores/site/Util";
</script>

<div class="uk-margin-large-top">
  <div class="uk-grid-small" uk-grid>
    <div class="uk-width-expand">
      <div class="uk-width-1-1@m uk-width-3-4@l uk-width-3-5@xl uk-margin-auto">
        <slot></slot>
      </div>
    </div>
    <div class="navigation-wrapper uk-width-1-4 uk-visible@m">
      <PageNavigation navigation={$pageNavigation} />
    </div>
  </div>
</div>

<MiniFooter />