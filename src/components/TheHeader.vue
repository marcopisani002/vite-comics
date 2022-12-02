<template>
    <header class="text-center">
      <img src="/la-molisana-logo.png" alt="">
      <!-- 
        <img src="../assets/vue.svg" alt="">
        <img src="../assets/download.png" alt="">
  
        <img :src="getImgUrl()" alt=""> 
      -->
      <div class="text-pippo">
        <p>asdasdasd</p>
      </div>
  
      <nav class="my-navbar">
        <ul>
          <li><a href="#">Link</a></li>
          <li><a href="#">Link</a></li>
          <li><a href="#">Link</a></li>
          <li><a href="#">Link</a></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    data () {
      return {
        nomeImg: "vue.svg"
      };
    },
    methods: {
      /* getImgUrl() {
        return new URL(`../assets/${this.nomeImg}`, import.meta.url)
      } */
    }
  };
  </script>
  
  <style scoped lang="scss">
  @use "../styles/partials/variables" as *;
  
  header {
    background-color: $color-secondary;
  }
  
  .text-pippo {
    color: pink;
    font-weight: bold;
  }
  
  .my-navbar {
    display: flex;
    justify-content: center;
  
    ul {
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: center;
  
      a {
        padding: $basic-space ($basic-space * 2);
        display: inline-block;
        text-decoration: none;
        color: $color-text;
  
        &:hover {
          color: $color-primary;
          background-color: #cccccc;
        }
      }
    }
  }
  </style>