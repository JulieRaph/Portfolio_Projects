<script setup>

</script>

<template>
    <div id="about-me">
        <h2 class="text-highlight-1 section-title">À propos</h2>
        <p>
            <span class="text-highlight-2">Développeuse web indépendante</span> spécialisée dans la création web et mobiles.<br>
            Issue d'une reconversion professionnelle débutée en 2024, j'ai construit mes compétences à travers des projets concrets,<br> en autonomie
            comme en équipe, en couvrant l'ensemble du cycle de développement : conception, développement,<br> déploiement et maintenance.
            J'ai notamment travaillé sur des applications web complexes, telle qu'une plateforme de<br> location de logements inspirée d'Airbnb, ainsi
            que sur la création d'un site communautaire que je développe et maintiens actuellement.<br>
            Aujourd'hui, j'accompagne les entreprises, startups et porteurs de projets dans la réalisation de solutions web
            adaptées à leurs besoins,<br> avec une attention particulière portée à la clarté des fonctionnalités et à la pérennité des projets.<br>
            Disponible pour de nouvelles missions, je m'inscris dans une démarche professionnelle, structurée et orientée résultats.
        </p>

        <div class="contact-links">
            <div class="card">
                <p><RouterLink to="/contact">Contactez moi</RouterLink></p>
            </div>
            <div class="card">
                <p><RouterLink to="/certifications">Certifications</RouterLink></p>
            </div>
            <div class="card">
                <p><RouterLink to="/cv">CV complet</RouterLink></p>
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
        border-color: var(--vt-c-custom-text-2);
        transform: translateY(-2px);
    }

    .card a {
        color: var(--vt-c-custom-text-2);
        text-decoration: none;
        font-weight: bold;
        font-size: 16px;
        display: block;
        width: 100%;
    }

    .card:hover a {
        color: var(--vt-c-custom-text-2);
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
