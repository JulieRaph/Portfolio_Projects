<script setup>

import { ref } from 'vue';

let activeBloc = ref(0)

let experiences = ref([
{
    title: "Conceptrice et Développeuse Web et Application",
    date: "De 2024 à aujourd'hui",
    line1: "Création d'un site communautaire d'évènements ciblés : Python, Flask, API RESTFul, MySql, Vue.js",
    line2: "Création d'un site de location de logements : Python, Flask, API, Javascript, HTML, CSS",
    line3: "Création personnalisée de la commande 'printf' avec gestion des specifiers en Langage C",
    line4: "Création personnalisée d'un interpréteur de commande en Langage C"
},
{
    title: "Assistante de Programme / Direction",
    date: "De 2021 à 2024",
    line1: "Suivi administratif et juridique des opérations immobilières",
    line2: "Gestion des concessionnaires et de tous corps d'état",
    line3: "Gestion comptabilité",
    line4: "Relation Client et SAV"
},
{
    title: "Responsable de Magasin",
    date: "De 2008 à 2024",
    line1: "Développement du Chiffre d'Affaires avec analyse des indicateurs",
    line2: "Management : Encadrement et accompagnement d'une équipe d'au moins 5 personnes et recrutement",
    line3: "Gestion des stocks et du magasin dans les attentes de la Direction",
    line4: "Relation Client et Fidélisation"
}
]);

const ShowXp = (id) => {
    activeBloc.value = id;
};

</script>

<template>
    <div id="xp">
        <h2 class="text-highlight-1 section-title">Mes expériences</h2>
        <div id="left">
            <p :class="activeBloc === 0 ? 'active' : ''" class="company fw600" @click="ShowXp(0)">Holberton School</p>
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