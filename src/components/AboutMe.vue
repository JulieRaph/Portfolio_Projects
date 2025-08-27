<script setup>

</script>

<template>
    <div id="about-me">
        <h2 class="text-highlight-1 section-title">Qui suis-je ?</h2>
        <p>
            Je suis Julie Tolve, <span class="text-highlight-2">développeuse web</span> passionnée par la création d'applications web et mobiles. 
            J'ai commencé mon parcours dans le développement en 2024 et depuis, je continue de me former et d'acquérir de nouvelles compétences dans l'objectif d'une solide expérience 
            dans la création de sites web dynamiques et interactifs.
            J'ai travaillé sur divers projets, allant de la reproduction d'un site de location de logements tel que Airbnb, mais également dans 
            la création de mon premier site communautaire ciblé que je déploie et maintient pour une interface utilisateur exceptionnelle et fluide.
            Mon expertise couvre une variété de technologies, notamment <span class="text-highlight-2">Python, Flask, HTML, CSS, JavaScript, Vue.js et Node.js</span>.
            Je suis toujours à la recherche de nouveaux défis et d'opportunités pour apprendre et grandir en tant que développeuse.
        </p>

        <div class="contact-links">
            <div class="card">
                <p><RouterLink to="/contact/1">Contactez moi</RouterLink></p>
            </div>
            <div class="card">
                <p><RouterLink to="/contact/2">Contactez le support</RouterLink></p>
            </div>
            <div class="card">
                <p><RouterLink to="/contact/3">Contactez le SAV</RouterLink></p>
            </div>
        </div>
    </div>
</template>

<style scoped>
    #about-me {
        margin-top: 100px;
    }

    .default-text {
        text-align: justify;
    }

    .default-text span {
        font-weight: bold;
    }

    .contact-links {
        margin-top: 40px;
        padding-top: 20px;
        display: flex;
        gap: 100px;
        justify-content: center;
        flex-wrap: wrap;
    }

    .card {
        background: var(--vt-c-custom-dark-1);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 12px;
        padding: 20px 30px;
        min-width: 180px;
        text-align: center;
    }

    .card:hover {
        background: rgba(255, 255, 255, 0.1);
        border-color: var(--vt-c-custom-text-1);
        transform: translateY(-2px);
    }

    .card a {
        color: var(--vt-c-custom-text-1);
        text-decoration: none;
        font-weight: bold;
        font-size: 16px;
        display: block;
        width: 100%;
    }

    .card:hover a {
        color: var(--vt-c-custom-text-1);
        text-decoration: underline;
    }

    @media screen and (max-width: 768px) {
        .contact-links {
            flex-direction: column;
            align-items: center;
        }
        
        .card {
            width: 100%;
            max-width: 300px;
        }
    }
</style>
