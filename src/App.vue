<template>
  <TheHeader></TheHeader>

  <main>
    <div class="bg-dark my-second-header">
      <div class="container bg-dark">

        <h2 class="text-white  text-center pt-5">--| Content goes Here |-- </h2>


      </div>
    </div>
  </main>

  <CommercialSection></CommercialSection>
  <BackgroundListSection></BackgroundListSection>
  <TheFooter></TheFooter>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TheFooter from "./components/TheFooter.vue";
import CommercialSection from "./components/CommercialSection.vue";
import BackgroundListSection from "./components/BackgroundListSection.vue";

export default {
  components: { TheHeader, TheFooter, CommercialSection, BackgroundListSection }
};
</script>

<style lang="scss">
@use "./styles/general.scss";

.my-second-header {
  height: 20vh;
}
</style>
