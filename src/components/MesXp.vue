<script setup>

import { ref } from 'vue';

let activeBloc = ref(0)

let experiences = ref([
{
    title: "Développeuse Web - Projets Applicatifs",
    date: "De 2024 à aujourd'hui",
    line1: "Réalisation de projets web et applicatifs variés, du prototype à la mise en production",
    line2: "Participation à toutes les étapes, en appliquant la méthodologie AGILE : analyse des besoins, conception, développement et déploiement",
    line3: "Développement de solutions robustes et évolutives, avec un code structuré et facilement maintenable",
    line4: "Collaboration avec clients et utilisateurs pour créer des interfaces intuitives et performantes"
},
{
    title: "Assistante de Programmes / Direction",
    date: "De 2021 à aujourd'hui",
    line1: "Suivi administratif et juridique des opérations immobilières, garantissant conformité",
    line2: "Coordination avec les concessionnaires et tous corps d'état pour assurer la bonne réalisation des projets",
    line3: "Gestion comptable et suivi budgétaire précis",
    line4: "Relation Clients et Suivi après-vente, garantissant la satisfaction"
},
{
    title: "Responsable de Magasin",
    date: "De 2008 à 2024",
    line1: "Développement du Chiffre d'Affaires avec analyse des indicateurs",
    line2: "Management : Encadrement et accompagnement d'une équipe d'au moins 5 personnes et recrutement",
    line3: "Orientation client : anticipation des besoins et amélioration continue de l’expérience client",
    line4: "Gestion d'un point de vente, avec des projets opérationnels avec organisation et orientation client"
}
]);

const ShowXp = (id) => {
    activeBloc.value = id;
};

</script>

<template>
    <div id="xp">
        <h2 class="text-highlight-1 section-title">Parcours professionnel</h2>
        <div id="left">
            <p :class="activeBloc === 0 ? 'active' : ''" class="company fw600" @click="ShowXp(0)">Développeuse Web</p>
            <p :class="activeBloc === 1 ? 'active' : ''" class="company fw600" @click="ShowXp(1)">Promotion immobilières</p>
            <p :class="activeBloc === 2 ? 'active' : ''" class="company fw600" @click="ShowXp(2)">Maison Parisienne Haut de Gamme</p>
        </div>
        <div id="right">
            <template v-for="(job,index) in experiences">
                <div class="job-details" :class="index === activeBloc ? '' : 'hide'" :id="'bloc_'+index">
                    <h3 class="fw600">{{job.title}}</h3>
                    <span id="date">{{job.date}}</span>
                    <br/>
                    <p class="fw600 mtb8" style="margin-top: 10px;"><span class="text-highlight-2">✓</span> {{ job.line1 }}</p>
                    <p class="fw600 mtb8"><span class="text-highlight-2">✓</span> {{ job.line2 }}</p>
                    <p class="fw600 mtb8"><span class="text-highlight-2">✓</span> {{ job.line3 }}</p>
                    <p class="fw600 mtb8"><span class="text-highlight-2">✓</span> {{ job.line4 }}</p>
                </div>
            </template>
        </div>  
    </div>

</template>

<style scoped>
    #xp {
        margin-top: 90px;
    }

    #xp #left {
        float: left;
        width: 25%;
    }

    #xp #right {
        float: left;
        width: 75%;
    }

    #xp #right h3 {
        font-size: 20px;
    }

    .fw600 {
        font-weight: 600;
    }

    .mtb8 {
        margin: 8px 0px;
    }

    #date {
        font-style: italic;
        font-size: 14px;
    }

    .company {
        border-left: 4px solid var(--vt-c-custom-text-1);
        line-height: 30px;
        padding-left: 10px;
    }

    .active {
        border-left: 4px solid var(--vt-c-custom-text-2);
        color: var(--vt-c-custom-text-2);
    }

    .company:hover {
        cursor: pointer;
        color: var(--vt-c-custom-text-1);
    }

    .hide {
        display: none;
    }

    @media screen and (max-width: 600px) {
        #xp #right {
            width: 100%;
            margin-top: 20px;
        }
        #xp #left {
            width: 100%;
        }
        .company {
            border: none;
            padding-left: 0px;
            float: left;
            margin-right: 10px;
        }
    }
</style>