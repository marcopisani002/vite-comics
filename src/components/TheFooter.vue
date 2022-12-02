<template>
  <footer>
    <div class="container ">
      <div class="d-flex justify-content-between pt-4 pb-4">
        <button class=" btn my-btn fw-bold text-white ">
          <a href="">SIGN UP NOW!</a>


        </button>

        <ul class="d-flex gap-3">

          <li class="fw-bold pt-2">FOLLOW US!</li>
          <li>
            <img src="/footer-facebook.png" alt="facebook">
          </li>
          <li>
            <img src="/footer-twitter.png" alt="twitter">
          </li>
          <li>
            <img src="/footer-youtube.png" alt="youtube">
          </li>
          <li>
            <img src="/footer-pinterest.png" alt="pinterest">
          </li>
          <li>
            <img src="/footer-periscope.png" alt="periscope">
          </li>
        </ul>

      </div>
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

  a {
    text-decoration: none;
    color:$color-primary;
  }

  button:hover {
    background-color: $color-secondary;
    border: 4px solid rgb(37, 37, 37);
    transform: scale(1.3);
  }

  button:active {
    transform: scale(.5);
  }

  .my-btn {
    border: 1px solid $color-secondary;
    border-radius: 0;
  }

  ul {
    color: $color-secondary;
    list-style: none;


  }
}
</style>