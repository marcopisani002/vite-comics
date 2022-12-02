<template>
    <header>
        
        <div class="container">
            <nav class="my-navbar">
                
            <img src="/dc-logo.png" class="mt-3 mb-2" alt="">
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
    border-bottom: 4px solid grey;
    
    
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
            background-color: #cccccc;
        }
    }
}
}
</style>