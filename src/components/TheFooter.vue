<template>
  <footer>
    <div class="container">
      <button class=" btn my-btn fw-bold text-white">
        SIGN UP NOW!

      </button>




    </div>

  </footer>
</template>
  
<script>
export default {

};
</script>
  
<style scoped lang="scss">
@use "../styles/partials/variables" as *;

footer {
  background-color: rgb(37, 37, 37);
  color: $color-primary;

  .my-btn {
    border: 1px solid $color-secondary;
    border-radius: 0;
  }
}
</style>