<script setup>

import { ref } from 'vue';

let activeBloc = ref(0)

let experiences = ref([
{
    title: "Développeuse Web - FullStack",
    date: "Depuis 2021",
    line1: "Compétences numéro 1.",
    line2: "Compétences numéro 2.",
    line3: "Compétences numéro 3."
},
{
    title: "Développeuse Web - Cybersécurité",
    date: "2019 - 2021",
    line1: "Compétences numéro 1.",
    line2: "Compétences numéro 2.",
    line3: "Compétences numéro 3."
},
{
    title: "Assistante de direction",
    date: "2015 - 2019",
    line1: "Compétences numéro 1.",
    line2: "Compétences numéro 2.",
    line3: "Compétences numéro 3."
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
            <p :class="activeBloc === 0 ? 'active' : ''" class="company fw600" @click="ShowXp(0)">Société n°1</p>
            <p :class="activeBloc === 1 ? 'active' : ''" class="company fw600" @click="ShowXp(1)">Société n°2</p>
            <p :class="activeBloc === 2 ? 'active' : ''" class="company fw600" @click="ShowXp(2)">Société n°3</p>
        </div>
        <div id="right">
            <template v-for="(job,index) in experiences">
                <div class="job-details" :class="index === activeBloc ? '' : 'hide'" :id="'bloc_'+index">
                    <h3 class="fw600">{{job.title}}</h3>
                    <span id="date">{{job.date}}</span>
                    <br/>
                    <p class="fw600 mtb8" style="margin-top: 10px;"><span class="text-highlight-2">Ok</span> {{ job.line1 }}</p>
                    <p class="fw600 mtb8"><span class="text-highlight-2">Ok</span> {{ job.line2 }}</p>
                    <p class="fw600 mtb8"><span class="text-highlight-2">Ok</span> {{ job.line3 }}</p>
                </div>
            </template>
        </div>  
    </div>

</template>

<style scoped>
    #xp {
        margin-top: 0px;
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