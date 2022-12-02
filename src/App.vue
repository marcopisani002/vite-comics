<template>
  <TheHeader></TheHeader>

  <main>
    <div class="container">
      <h1 class="bg-primary">La Molisana</h1>

      <button class="btn btn-primary">Testo di prova</button>
    </div>
  </main>

  <TheFooter></TheFooter>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TheFooter from "./components/TheFooter.vue";

export default {
  components: { TheHeader, TheFooter }
};
</script>

<style lang="scss">
@use "./styles/general.scss";

.text-pippo {
  color: blue;
}
</style>
