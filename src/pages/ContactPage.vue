<template>
    <ContactHeader
        title="Me Contacter"
        description1="Vous avez un projet web ou applicatif, ou souhaitez échanger sur une future collaboration ?"
        description2="Je suis disponible pour étudier vos besoins et vous accompagner dans la réalisation de solutions fiables et adaptées."
    />

    <ContactStatus
        :message="statusMessage"
        :type="statusType"
    />

    <ContactForm
        :emailjs-config="emailjsConfig"
        use-captcha
        @submit-success="handleSuccess"
        @submit-error="handleError"
    />

    <RouterLink to="/">Retour à l'accueil</RouterLink>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import ContactHeader from '@/components/ContactHeader.vue';
import ContactStatus from '@/components/ContactStatus.vue';
import ContactForm from '@/components/ContactForm.vue';

const emailjsConfig = {
    serviceId: '',
    templateId: '',
    publicKey: ''
};

const statusMessage = ref('');
const statusType = ref('info');

const handleSuccess = (message) => {
    statusMessage.value = message;
    statusType.value = 'success';
    setTimeout(() => statusMessage.value = '', 5000);
};

const handleError = (message) => {
    statusMessage.value = message;
    statusType.value = 'error';
    setTimeout(() => statusMessage.value = '', 5000);
};

const route = useRoute()

</script>