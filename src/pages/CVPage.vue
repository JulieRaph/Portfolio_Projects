<template>
    <div class="cv-page">
        <div class="header">
            <h1 class="text-highlight-1">Mon CV Complet</h1>
            <RouterLink to="/" class="back-link-top">← Retour à l'accueil</RouterLink>
        </div>

        <div class="cv-container">
            <div class="cv-item">
                <div class="cv-actions">
                    <a
                        href="/cv/cv-julie.pdf"
                        download="CV-Julie-Developpeur-Web.pdf"
                        class="download-btn"
                    >
                        📥 Télécharger mon CV
                    </a>
                </div>

                <div class="image-container">
                    <img
                        src="/cv/cv-julie.jpg"
                        alt="CV Julie - Développeur Web"
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
    .cv-page {
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

    .cv-container {
        display: flex;
        flex-direction: column;
        gap: 40px;
    }

    .cv-item {
        width: 100%;
    }

    .cv-actions {
        display: flex;
        justify-content: center;
        margin-bottom: 60px;
    }

    .download-btn {
        display: inline-block;
        padding: 14px 32px;
        background: var(--vt-c-custom-text-2);
        color: var(--vt-c-custom-dark-1);
        border-radius: 8px;
        text-decoration: none;
        font-weight: 600;
        font-size: 1.1rem;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(93, 189, 193, 0.3);
    }

    .download-btn:hover {
        background: var(--vt-c-custom-text-1);
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(93, 189, 193, 0.4);
    }

    .image-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .image-container img {
        width: 100%;
        max-width: 900px;
        height: auto;
        border: 2px solid var(--vt-c-custom-text-2);
        border-radius: 8px;
        transition: transform 0.3s ease;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        pointer-events: none;
    }

    .cv-item:hover .image-container img {
        transform: scale(1.02);
    }

    @media screen and (max-width: 768px) {
        .cv-page {
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

        .download-btn {
            font-size: 1rem;
            padding: 12px 24px;
        }

        .image-container img {
            max-width: 100%;
        }
    }
</style>