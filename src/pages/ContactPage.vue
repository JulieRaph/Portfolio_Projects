<template>
    <ContactHeader />
    <ContactStatus />
    <ContactForm />
    Page de contact {{ route.params.id }}
    <RouterLink to="/"><- Retour à l'accueil</RouterLink>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import ContactHeader from '@/components/ContactHeader.vue';
import ContactStatus from '@/components/ContactStatus.vue';
import ContactForm from '@/components/ContactForm.vue';

const route = useRoute()


</script>