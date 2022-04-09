<script>
  // @ts-ignore
  import { currentYear } from "$stores/site/items";
  export let only = false;
</script>

<div 
  class="uk-section uk-section-xsmall" 
  style:background-color={only ? '#222222' : '#1d1d1d'}>
  <div class="uk-container uk-container-expand">
    <div class="uk-grid uk-child-width-1-2@s uk-text-center uk-text-left@s" data-uk-grid>
      <div class="uk-text-small uk-text-muted">
        &copy; {$currentYear} My App | All rights reserved.
      </div>
      <div class="uk-text-small uk-text-muted uk-text-center uk-text-right@s">
        <span>&trade; Built By </span> | 
        <a href="https://github.com/Sensei85" class="uk-text-muted" title="Visit my Github to see more cool stuff I build." target="_blank" rel="noopener noreferrer" uk-tooltip="title: Visit my Github to see more cool stuff I build.; pos: right">sensei85</a>
      </div>
    </div>
  </div>
</div>