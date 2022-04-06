<script>
  export let name
  export let result
</script>

<figure class="preview-item uk-flex uk-flex-column">
  <div class="image">
    <img src="{result}" alt="" height="300" width="480">
  </div>
  <figcaption class="uk-padding-small">
    <span class="uk-text-small uk-text-break">{name}</span>
  </figcaption>
</figure>

<style lang="scss">
  figure {
    img {
      border-top-left-radius: .35rem;
      border-top-right-radius: .35rem;
      max-width: 100%;
      max-height: 100%;
    }
    figcaption {
      border-bottom-left-radius: .35rem;
      border-bottom-right-radius: .35rem;
      margin-top: .25rem;
      background-color: #636e78;
      color: white;
    }
  }
</style>