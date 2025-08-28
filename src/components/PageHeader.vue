<script setup>


</script>

<template>
    <div class="header-container">
        <div class="header-line"></div>
        <h1 class="text-highlight-1">Bienvenue sur mon site professionnel.<br>
            Je vous invite à découvrir mon parcours, mes compétences et mes réalisations.</h1>
        <div class="header-line"></div>
    </div>
</template>

<style scoped>
    .header-container {
        width: 100%;
        text-align: center;
        margin: 40px 0;
    }

    .header-line {
        width: 100%;
        height: 2px;
        background-color: var(--vt-c-custom-text-normal);
        margin: 20px 0;
    }

    h1 {
        text-align: center;
        margin: 30px auto;
        max-width: 800px;
        line-height: 1.4;
    }

    @media screen and (max-width: 768px) {
        .header-container {
            margin: 20px 0;
        }
        
        .header-line {
            margin: 15px 0;
        }
        
        h1 {
            font-size: 1.5rem;
            margin: 20px auto;
            padding: 0 20px;
        }
    }
</style>