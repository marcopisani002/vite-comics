<template>
  <TheHeader > </TheHeader>
 
  <CardSection > </CardSection>

  <CommercialSection></CommercialSection>
 
  <BackgroundListSection></BackgroundListSection>
  
  <!-- <TheFooter :page-links="navLinks"></TheFooter> -->
  <TheFooter></TheFooter>

</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TheFooter from "./components/TheFooter.vue";
import CommercialSection from "./components/CommercialSection.vue";
import BackgroundListSection from "./components/BackgroundListSection.vue";
import CardSection from "./components/CardSection.vue";

export default {
  components: { TheHeader, TheFooter, CommercialSection, BackgroundListSection,CardSection },
  data() {
    return {
     
    };
  },


};
</script>

<style lang="scss">
@use "./styles/general.scss";

</style>
