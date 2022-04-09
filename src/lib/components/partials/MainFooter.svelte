<script>
  import SocialIconsGrid from "$components/bites/SocialIconsGrid.svelte";
  import MiniFooter from "$components/bites/MiniFooter.svelte";
  import { footerItems } from "$lib/stores/site/items";
</script>

<footer class="uk-section-secondary uk-margin-top">
  <div class="uk-container uk-section">
    <div class="uk-grid uk-grid-medium uk-child-width-1-4@l uk-child-width-1-3@m uk-child-width-1-2@s uk-grid-row-medium">
      {#each $footerItems as footerItem}
        <div class="uk-margin-bottom">
          <h4>{footerItem?.gridSection?.sectionTitle}</h4>
          <hr style="width: 20%">
          {#if footerItem?.gridSection?.component}
            <SocialIconsGrid />
          {:else}
            <ul class="uk-list uk-list-square">
              {#each footerItem.gridSection.routes as route}
                <li>
                  <a
                    href="{route?.link}" 
                    target="{route?.external === true ? '_blank' : ''}" 
                    rel="{route?.external === true ? 'noopener noreferrer' : ''}" 
                    title="{route?.metaTitle}">
                    {route?.title}
                  </a>
                </li>
              {/each}
            </ul>
          {/if}
        </div>
      {/each}
    </div>
  </div>
  <MiniFooter only={false} />
</footer>