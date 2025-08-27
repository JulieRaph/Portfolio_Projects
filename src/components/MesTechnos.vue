<script setup>

</script>

<template>
    <div id="skills">
        <h2 class="text-highlight-1 section-title">Mes technos préférées</h2>
        <div id="icons-list">
            <div class="techno-container"><i class="techno-icon devicon-vuejs-plain"></i> <br/> <span>Vue.js</span></div>
            <div class="techno-container"><i class="techno-icon devicon-javascript-plain"></i> <br/> <span>JavaScript</span></div>
            <div class="techno-container"><i class="techno-icon devicon-html5-plain"></i> <br/> <span>HTML5</span></div>
            <div class="techno-container"><i class="techno-icon devicon-css3-plain"></i> <br/> <span>CSS3</span></div>
            <div class="techno-container"><i class="techno-icon devicon-nodejs-plain"></i> <br/> <span>Node.js</span></div>
            <div class="techno-container"><i class="techno-icon devicon-mongodb-plain"></i> <br/> <span>MongoDB</span></div>
            <div class="techno-container"><i class="techno-icon devicon-git-plain"></i> <br/> <span>Git</span></div>
            <div class="techno-container"><i class="techno-icon devicon-flask-plain"></i> <br/> <span>Flask</span></div>
            <div class="techno-container"><i class="techno-icon devicon-python-plain"></i> <br/> <span>Python</span></div>
            <div class="techno-container"><i class="techno-icon devicon-c-plain"></i> <br/> <span>Langage C</span></div>
            <div class="techno-container"><i class="techno-icon devicon-vscode-plain"></i> <br/> <span>VSCode</span></div>
            <div class="techno-container"><i class="techno-icon devicon-mysql-plain"></i> <br/> <span>MySql</span></div>
            <div class="techno-container"><i class="techno-icon devicon-csharp-plain"></i> <br/> <span>C#</span></div>
            <div class="techno-container"><i class="techno-icon devicon-gimp-plain"></i> <br/> <span>Gimp</span></div>
        </div>
    </div>
</template>

<style scoped>
    #skills {
        margin-top: 90px;
    }

    #icons-list {
        display: grid;
        grid-template-columns: repeat(8, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 5px;
        grid-row-gap: 50px;
        margin-top: 50px;
    }

    .techno-container {
        text-align: center;
        color: var(--vt-c-custom-text-1);
        transition: transform 0.5s;
    }

    .techno-container span {
        font-height: bold;
    }

    .techno-container:hover {
        tranform: rotate(15deg);
        color: var(--vt-c-custom-text-2);
    }

    .techno-icon {
        font-size: 40px;
        margin: 0 auto;
        color: var(--vt-c-custom-text-1);
    }

    .techno-icon:hover {
        color: var(--vt-c-custom-text-2);
        tranform: rotate(15deg);
    }

    @media screen and (max-width: 905px) {
        #icons-list {
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: repeat(4, 1fr);
            grid-column-gap: 5px;
            grid-row-gap: 20px;
        }
    }
</style>

