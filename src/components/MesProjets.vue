<script setup>
    import { ref } from 'vue';
    import ProjectSingle from './ProjectSingle.vue';

    let projects = ref([
        {
            name: "WeRidUp",
            image: "projet.png",
            tags: "Vue.js;Flask;Python",
            description: "Création d'un site communautaire pour les motards. Afin de rouler en toute liberté et en toute confiance avec d'autres passionnés de moto.",
            tasks: "Création du backend en Flask API REST, sur Python via VSCode;Création de la partie Frontend en Vue.js;Création d'une messagerie en temps réel entre les utilisateurs."
        },
         {
            name: "HBnb",
            image: "projet.png",
            tags: "HTML;CSS;Javascript;Flask;Python",
            description: "Création d'un site personnalisé du célèbre site de location de logements AirBNB.",
            tasks: "Création du backend en Flask API REST, sur Python via VSCode;Création de la partie Frontend en HTML, CSS et Javascript."
        },
         {
            name: "Simple Shell",
            image: "projet.png",
            tags: "Langage C",
            description: "Création d'un interpréteur de commandes en Langage C.",
            tasks: "Création du nouvel interpréteur de commandes: En équipe de 2 personnes et en Méthode Agile."
        },
    ]);
</script>

<template>
    <div id="projects">
        <h2 class="text-highlight-1 section-title">Quelques projets</h2>
        <ProjectSingle v-for="(project, index) in projects" :key="project.name" :project="project" :reverse="index % 2 === 0 ? false : true"/>
    </div>
</template>

<style scoped>
    #projects {
        display: inline-block;
        margin-top: 40px;
    }
</style>