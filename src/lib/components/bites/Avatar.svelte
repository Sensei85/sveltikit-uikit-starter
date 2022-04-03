<script>
  export let initials = "J.T"
</script>

<div class="avatar">
  <div class="avatar_face">{initials}</div>
</div>

<style lang="scss">
  .avatar {
    &_face {
      height: 3rem;
      width: 3rem;
      background-color: #d3d3d3;
      border-radius: 50%;
      display: grid;
      place-items: center;
      color: gray;
      font-size: 1rem;
      line-height: 1rem;
      font-weight: bold;
    }
  }
</style>
