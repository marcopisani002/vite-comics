<template >

    <main>
        <!-- SEZIONE JUMBOTRON SOTTO NAVBAR -->
        <div>
            <img src="/jumbotron.jpg" alt="">
        </div>

        <!-- SEZIONE CARD -->
        <div class="bg-dark my-second-header">
            <div class="container bg-dark my-padd">

                <div class=" row row-cols-1  row-cols-md-3 g-4 ">
                    <div class="col-md-2 " v-for="(Contents, i) in cardItems " :key="('contents n°' + i)">
                        <div class="card bg-dark border-0 text-white pt-4 pb-4">
                            <img :src="Contents.thumb" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">{{ Contents.series }}</h5>
                                <p class="card-text fw-light m-neg"><small><em>{{ Contents.type }}</em></small> </p>
                                <p class="card-text fw-light"><small>{{ Contents.price }}</small> </p>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="text-center pb-4">

                    <button class=" btn my-batn fw-bold text-white  ">
                        <a class="a-btn">SIGN UP NOW!</a>


                    </button>
                </div>

            </div>
        </div>
    </main>

</template>
<script>
import { cardItems } from "../composables/myData";
export default {
    data() {
        return {
            cardItems: cardItems,
        }
    },
}
</script>
<style lang="scss">
/*@use "../styles/partials/variables" as *;*/
.m-neg {
    margin-top: -.5rem;
    margin-bottom: -.1rem;
}

img {
    width: 100%;

}

.a-btn {
    text-decoration: none;
    /* color:$color-primary;*/
    color: white;
}

button:hover {
    /*background-color: $color-secondary;*/
    background-color: #0074E8;
    border: 4px solid rgb(37, 37, 37);
    transform: scale(1.3);
}

button:active {
    transform: scale(.5);
}

.my-batn {
    background-color: #0074E8;
    /*border: 1px solid $color-secondary;*/
    border-radius: 0;
}
</style>