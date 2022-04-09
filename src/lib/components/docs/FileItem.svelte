<script>
  export let name
  export let result
</script>

<figure class="preview-item uk-flex uk-flex-column">
  <div class="image">
    <img src="{result}" title={name} alt="" height="300" width="480">
  </div>
  <figcaption>
    <span title={name} class="uk-text-small">{name}</span>
  </figcaption>
</figure>

<style lang="scss">
  figure {
    .image {
      height: 7.5rem;
    }
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
      background-color: teal;
      color: white;
      padding: 0.35rem;
      font-size: .15rem;
      line-height: .15rem;
      span {
        display: inline-block;
        width: 100px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
    }
  }
</style>