<script setup>
    import { ref } from 'vue';
    import ProjectSingle from './ProjectSingle.vue';

    let projects = ref([
        {
            name: "WeRidUp",
            image: "project.png",
            tags: "Vue.js;Typescript;API RESTFul;Flask;MySql;Python",
            description: "Création d'un site communautaire avec évènements pour les motards, incluant la conception d’une API REST et la gestion des données",
            tasks: "Création du backend en Flask API REST, sur Python via VSCode;Création de la partie Frontend en Vue.js;Création d'une messagerie en temps réel entre les utilisateurs"
        },
         {
            name: "HBnb",
            image: "airbnb-logo.svg",
            tags: "Javascript;HTML;CSS;API RESTFul;Flask;Python",
            description: "Développement d'une application de location de logements, avec gestion des fonctionnalités côté serveur et interface utilisateur",
            tasks: "Création du backend en Flask API REST, sur Python via VSCode;Création de la partie Frontend en HTML, CSS et Javascript"
        },
         {
            name: "Simple Shell",
            image: "shell.png",
            tags: "Langage C",
            description: "Réalisation d'un interpréteur de commandes en Langage C, avec gestion avancée des spécificateurs",
            tasks: "Création du nouvel interpréteur de commandes: En équipe de 2 personnes et en Méthodologie Agile"
        },
    ]);
</script>

<template>
    <div id="projects">
        <h2 class="text-highlight-1 section-title">Projets & Solutions Développées</h2>
        <ProjectSingle v-for="(project, index) in projects" :key="project.name" :project="project" :reverse="index % 2 === 0 ? false : true"/>
    </div>
</template>

<style scoped>
    #projects {
        display: inline-block;
        margin-top: 90px;
    }
</style>