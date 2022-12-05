<template>
    <header>

        <div class="container my-posiz">
            <!-- <nav class="my-navbar">
                
            <img src="/dc-logo.png" class="mt-3 mb-2 " alt="">
                <ul>
                    <li><a href="#">CHARACTERS</a></li>
                    <li><a href="#">COMICS</a></li>
                    <li><a href="#">MOVIES</a></li>
                    <li><a href="#">TV</a></li>
                    <li><a href="#">GAMES</a></li>
                    <li><a href="#">COLLECTIBLES</a></li>
                    <li><a href="#">VIDEOS</a></li>
                    <li><a href="#">FANS</a></li>
                    <li><a href="#">NEWS</a></li>
                    <li><a href="#">SHOP</a></li>
                </ul>
            </nav> -->
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
                            <li class="nav-item px-3">
                                <a class="nav-link active" aria-current="page" href="#">CHARACTERS</a>
                            </li>
                            <li class="nav-item px-3">
                                <a class="nav-link" href="#">COMICS</a>
                            </li>
                            <li class="nav-item px-3">
                                <a class="nav-link" href="#">MOVIES</a>
                            </li>
                            <li class="nav-item px-3">
                                <a class="nav-link" href="#">TV</a>
                            </li>
                            <li class="nav-item px-3">
                                <a class="nav-link" href="#">GAMES</a>
                            </li>
                            <li class="nav-item px-3">
                                <a class="nav-link" href="#">COLLECTIBLES</a>
                            </li>
                            <li class="nav-item px-3">
                                <a class="nav-link" href="#">VIDEOS</a>
                            </li>
                            <li class="nav-item px-3" >
                                <a class="nav-link" href="#">FANS</a>
                            </li>
                            <li class="nav-item px-3">
                                <a class="nav-link" href="#">NEWS</a>
                            </li>
                            <li class="nav-item px-3">
                                <a class="nav-link" href="#">SHOP</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    </header>
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

header {
    background-color: $color-primary;
    // position:fixed;
    // width: 100%;
    // z-index: 1;

}
.my-marg{
    margin-left:20rem;
}

img {
    width: 50px;
}

.my-navbar {

    display: flex;
    justify-content: space-between;


    ul {
        font-size: 14px;
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