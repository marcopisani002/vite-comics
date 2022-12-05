<template>
    <header>

        <div class="container my-posiz">

            <nav class="navbar navbar-expand-lg bg-white my-navbar">
                <div class="container-fluid">
                    <img src="/dc-logo.png" class="mt-3 mb-2 " alt="">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse my-marg" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li class="nav-item  " v-for="link in navLink">

                                <a :href="link.url"> {{ link.text }}</a>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    </header>
</template>
  
<script>
import { navLinks } from "../composables/myData";
export default {

    data() {
        return {
            navLink: navLinks,
        }
    },

};
</script>
  
<style scoped lang="scss">
@use "../styles/partials/variables" as *;

header {
    background-color: $color-primary;
    // position:fixed;
    // width: 100%;
    // z-index: 1;

}

.my-marg {
    margin-left: 7.8rem;
}

img {
    width: 50px;
}

.my-navbar {
   
    display: flex;
    justify-content: space-between;


    ul {
        font-size: 12px;
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: center;

        a {
            padding: $basic-space (
                $basic-space * 2
            );
        display: inline-block;
        text-decoration: none;
        color: $color-text;

        &:hover {
            border-bottom: 3px solid $color-secondary;
            font-weight: bold;

        }
    }
}
}
</style>