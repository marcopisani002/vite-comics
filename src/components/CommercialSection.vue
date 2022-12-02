<template>
    <section>
        <div class="my-bg  my-commercial-section">
            <div class="container ">
                <div class="row text-center pt-5">
                    <div class="col text-white ">
                        <div class="d-flex ">

                            <img src="/buy-comics-digital-comics.png" class="mt-3 mb-2">
                            <h5 class="pt-5 px-1">DIGITAL COMICS</h5>
                        </div>
                    </div>
                    <div class="col text-white">
                        <div class="d-flex ">

                            <img src="/buy-comics-merchandise.png" class="mt-3 mb-2">
                            <h5 class="pt-5">DC MERCHANDISE</h5>
                        </div>
                    </div>
                    <div class="col text-white">
                        <div class="d-flex ">

                            <img src="/buy-comics-SUBSCRIPTIONS.png" class="mt-3 mb-2">
                            <h5 class="pt-5 px-1">SUBSCRIBE</h5>
                        </div>

                    </div>
                    <div class="col text-white">
                        <div class="d-flex ">

                            <img src="/buy-comics-shop-locator.png" class="mt-3 mb-2">
                            <h5 class="pt-5 ">COMIC SHOP LOCATOR</h5>
                        </div>

                    </div>
                    <div class="col text-white">
                        <div class="d-flex pt-4 ">

                            <img src="/buy-dc-power-visa.svg" class="mt-3 mb-2 last-img">
                            <h5 class="pt-4 px-1">DC-POWER VISA</h5>
                        </div>

                    </div>
                </div>

            </div>


        </div>

    </section>


</template>
  
<script>
export default {
    data() {
        return {

        };
    },
    methods: {

    }
};
</script>
  
<style scoped lang="scss">
@use "../styles/partials/variables" as *;

.my-bg {
    background-color: $color-secondary;
}

.my-commercial-section {
    height: 30vh;

    img{
        width: 30%;
        
    }
}
</style>