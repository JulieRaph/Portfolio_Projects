<template>
    <div class="certifications-page">
        <div class="header">
            <h1 class="text-highlight-1">Mes Certifications</h1>
            <RouterLink to="/" class="back-link-top">← Retour à l'accueil</RouterLink>
        </div>

        <div class="certifications-container">
            <!-- Certification AGILE -->
            <div class="certification-item">
                <h2>Certification AGILE</h2>
                <div class="image-container">
                    <img
                        src="/certifications/certification-agile.jpg"
                        alt="Certification AGILE"
                    />
                </div>
            </div>

            <!-- Certification CLOUD -->
            <div class="certification-item">
                <h2>Certification CLOUD</h2>
                <div class="image-container">
                    <img
                        src="/certifications/certification-cloud.jpg"
                        alt="Certification CLOUD"
                    />
                </div>
            </div>

            <!-- Certification CYBERSECURITY -->
            <div class="certification-item">
                <h2>Certification CYBERSECURITY</h2>
                <div class="image-container">
                    <img
                        src="/certifications/certification-cybersecurity.jpg"
                        alt="Certification CYBERSECURITY"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
onMounted(() => {
    document.addEventListener('contextmenu', (e) => {
        if (e.target.tagName === 'IMG') {
            e.preventDefault();
        }
    });
});
</script>

<style scoped>
    .certifications-page {
        max-width: 1200px;
        margin: 0 auto;
        padding: 40px 20px;
    }

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 60px;
    }

    h1 {
        font-size: 2.5rem;
        margin: 0;
    }

    .back-link-top {
        font-size: 1.1rem;
        font-weight: 500;
    }

    .certifications-container {
        display: flex;
        flex-direction: column;
        gap: 80px;
    }

    .certification-item {
        width: 100%;
    }

    .certification-item h2 {
        color: var(--vt-c-custom-text-2);
        font-size: 1.8rem;
        margin-bottom: 20px;
        text-align: center;
    }

    .image-container {
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: center;
    }

    .image-container img {
        width: 100%;
        max-width: 900px;
        height: auto;
        border: 2px solid var(--vt-c-custom-text-2);
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(93, 189, 193, 0);
        transition: transform 0.3s ease;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        pointer-events: none;
    }

    .certification-item:hover .image-container img {
        transform: scale(1.01);
    }

    @media screen and (max-width: 768px) {
        .certifications-page {
            padding: 20px 15px;
        }

        .header {
            flex-direction: column;
            gap: 20px;
            align-items: flex-start;
        }

        h1 {
            font-size: 2rem;
        }

        .certification-item h2 {
            font-size: 1.5rem;
        }

        .image-container img {
            max-width: 100%;
        }
    }
</style>