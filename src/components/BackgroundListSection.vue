<template>
    <section class="my-bg-jumbo">
        <div class="container">
            <div class="row">
                <div class="col-8 d-flex">

                    <ul class="pt-5">

                        <li class="fw-bold first-li ">DC COMICS</li>
                        <li class="text-secondary">Characters</li>
                        <li class="text-secondary">Comics</li>
                        <li class="text-secondary">Movies</li>
                        <li class="text-secondary">TV</li>
                        <li class="text-secondary">Games</li>
                        <li class="text-secondary">Videos</li>
                        <li class="text-secondary">News</li>
                        <li class="fw-bold first-li pt-5">SHOP</li>
                        <li class="text-secondary ">Shop DC</li>
                        <li class="text-secondary">Shop DC collectibles</li>


                    </ul>
                    <ul class="pt-5">
                        <li class="fw-bold first-li ">DC</li>
                        <li class="text-secondary">Terms Of Use</li>
                        <li class="text-secondary">Privacy policy(new)</li>
                        <li class="text-secondary">Add choices</li>
                        <li class="text-secondary">Adversiting</li>
                        <li class="text-secondary">Jobs</li>
                        <li class="text-secondary">Subscriptions</li>
                        <li class="text-secondary">Talent Workshops</li>
                        <li class="text-secondary">CPSC Certificates</li>
                        <li class="text-secondary">Ratings</li>
                        <li class="text-secondary">Shop Help</li>
                        <li class="text-secondary">Contact Us</li>
                    </ul>
                    <ul class="pt-5">
                        <li class="fw-bold first-li ">SITES</li>
                        <li class="text-secondary ">DC</li>
                        <li class="text-secondary ">MAD Magazine</li>
                        <li class="text-secondary ">DC Kids</li>
                        <li class="text-secondary ">DC Universe</li>
                        <li class="text-secondary ">DC Power Visa</li>
                    </ul>




                </div>
                <div class="col-4">

                    <img src="/dc-logo-bg.png" class="w-100">

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

.my-bg-jumbo {
    background-image: url("../assets/footer-bg.jpg");
    width: 100%;
    height: 100%;
    background-size: cover;
}

ul {
    color: $color-primary;
    list-style: none;

    .first-li {
        font-size: 1.2rem;
    }
}
</style>