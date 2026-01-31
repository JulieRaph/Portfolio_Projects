<script setup>
    import { ref, onMounted, onUnmounted } from 'vue';

    const props = defineProps({
        project: {
            type: Object,
            required: true
        },
        reverse: {
            type: Boolean,
            required: false
        }
    })

    let fadeInElements = ref();

    onMounted(() => {
        fadeInElements.value = Array.from(document.getElementsByClassName('fade-in'))
        document.addEventListener('scroll', handleScroll)
    })
    onUnmounted(() => {
        document.removeEventListener('scroll', handleScroll)
    })

    const handleScroll = () => {
        for (let i = 0; i < fadeInElements.value.length; i++) {
            const elem = fadeInElements.value[i]
            if (isElemVisible(elem)) {
                elem.style.opacity = '1'
                elem.style.transform = 'scale(1)'
                fadeInElements.value.splice(i, 1) //Anim 1 fois
            }
        }
    }

    const isElemVisible = (el) => {
        const rect = el.getBoundingClientRect()
        const elemTop = rect.top + 200
        const elemBottom = rect.Bottom
        return elemTop < window.innerHeight && elemBottom >= 0
    }

    const getProjectTags = () => {
        return props.project.tags.split(';');
    }

    const getProjectTasks = () => {
        return props.project.tasks.split(';');
    }

</script>

<template>
    <div class="project">
        <div class="left fade-in" :class="reverse ? 'reverse' : ''">
            <h3 class="text-highlight-1">{{ project.name }}</h3>
            <a :href="project.image" target="_blank" rel="noopener noreferrer">
                <img
                    :src="project.image"
                    :alt="project.altText || `Logo du projet ${project.name}`"
                    loading="lazy"
                />
            </a>
        </div>
        <div class="right fade-in">
            <p class="tag" v-for="tag in getProjectTags()" :key="tag">{{ tag }}</p>
            <p class="description">
                {{ project.description }}
            </p>
            <p class="tasks">
                <span v-for="(task, index) in getProjectTasks()" :key="index"><span class="text-highlight-2">▶</span> {{ task }}<br/></span>
            </p>
        </div>
    </div>
</template>

<style scoped>
    .project {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(1, 1fr);
        grid-column-gap: 10px;
        grid-row-gap: 50px;
        margin-top: 20px;
    }

    .project .left h3 {
        font-weight: bold;
        font-size: 32px;
        margin-bottom: 10px;
    }

    .project .left img {
        width: 50%;
        margin-top: 30px;
    }

    .project .right {
        padding-top: 20px;
    }

    .project .right .tag {
        display: block;
        float: left;
        background-color: #333746;
        padding: 8px 16px;
        margin-right: 12px;
        border-radius: 5px;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.3s ease;
        color: var(--vt-c-custom-text-2);
    }

    .project .right .description {
        clear: both;
        margin-top: 80px;
        font-size: 18px;
    }

    .project .right .tasks {
        margin-top: 20px;
        font-size: 18px;
    }

    .reverse {
        order: 1;
    }

    .fade-in {
        /* opacity: 0; */
        transition: 0.3s all ease-out;
        transform: scale(0.8);
        display: inline-block;
    }

    @media screen and (max-width: 905px) {
        .project {
            grid-template-columns: repeat(1, 1fr);
            grid-template-rows: repeat(1, 1fr);
            grid-column-gap: 0px;
            grid-row-gap: 20px;
        }
        .project .right {
            padding-top: 0px;
        }
        .reverse {
            order: 0;
        }
    }
</style>