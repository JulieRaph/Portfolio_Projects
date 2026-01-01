<template>
    <div class="contact-header">
        <h1 class="page-title text-highlight-1">{{ title }}</h1>
        <p class="intro-text">{{ description1 }}</p>
        <p class="intro-text">{{ description2 }}</p>
    </div>    
</template>

<script setup>
defineProps({
    title: {
        type: String,
        default: 'Me Contacter'
    },
    description1: {
        type: String,
        default: 'Vous avez un projet web ou applicatif, ou souhaitez échanger sur une future collaboration ?'
    },
    description2: {
        type: String,
        default: 'Je suis disponible pour étudier vos besoins et vous accompagner dans la réalisation de solutions fiables et adaptées.'
    }
});
</script>

<style scoped>
    .contact-header {
        text-align: center;
        margin-bottom: 50px;
    }

    .page-title {
        font-size: 2.5rem;
        margin-bottom: 20px;
        text-transform: uppercase;
        letter-spacing: 2px;
    }

    .intro-text .description1 {
        font-size: 1.1rem;
        line-height: 1.8;
        color: var(--vt-c-custom-text-normal);
        max-width: 600px;
        margin: 0 auto;
        white-space: pre-line;
    }

    .intro-text .description2 {
        font-size: 1.1rem;
        line-height: 1.8;
        color: var(--vt-c-custom-text-normal);
        max-width: 600px;
        margin: 0 auto;
        white-space: pre-line;
        font-weight: bold;
    }

    .intro-text + .intro-text {
        margin-top: 15px;
    }

    @media screen and (max-width: 768px) {
        .page-title {
            font-size: 2rem;
        }
        
        .intro-text {
            font-size: 1rem;
        }
    }
</style>