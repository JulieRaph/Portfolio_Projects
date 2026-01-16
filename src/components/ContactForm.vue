<template>
    <form @submit.prevent="handleSubmit" class="contact-form">
        <div class="form-group">
            <label for="name">Nom <span class="required">*</span></label>
            <input
                type="text"
                id="name"
                v-model="formData.name"
                placeholder="Votre prénom et nom"
                required
                :disabled="isSubmitting"
                @blur="validateField('name')"
            />
            <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
        </div>

        <div class="form-group">
            <label for="email">Adresse email <span class="required">*</span></label>
            <input
            type="email"
            id="email"
            v-model="formData.email"
            placeholder="votre.email@exemple.com"
            required
            :disabled="isSubmitting"
            @blur="validateField('email')"
            />
            <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
        </div>

        <div class="form-group">
            <label for="subject">Sujet <span class="required">*</span></label>
            <input
            type="text"
            id="subject"
            v-model="formData.subject"
            placeholder="Objet de votre message"
            required
            :disabled="isSubmitting"
            @blur="validateField('subject')"
            />
            <span v-if="errors.subject" class="error-message">{{ errors.subject }}</span>
        </div>

        <div class="form-group">
            <label for="message">Message <span class="required">*</span></label>
            <textarea
                id="message"
                v-model="formData.message"
                placeholder="Décrivez votre projet ou votre demande..."
                rows="8"
                required
                maxlength="5000"
                :disabled="isSubmitting"
                @blur="validateField('message')"
            ></textarea>
            <span v-if="errors.message" class="error-message">{{ errors.message }}</span>
        </div>

        <!-- Honeypot invisible (anti-bot) -->
        <input
            type="text"
            v-model="honeypot"
            name="website"
            style="position: absolute; left: -9999px; width: 1px; height: 1px;"
            tabindex="-1"
            autocomplete="off"
        />

        <button
            type="submit"
            class="submit-btn"
            :disabled="isSubmitting"
        >
            <span v-if="!isSubmitting">📧 Envoyer le message</span>
            <span v-else>⏳ Envoi en cours...</span>
        </button>
    </form>
</template>

<script setup>
    import { reactive, ref } from 'vue';

const emit = defineEmits(['submit-success', 'submit-error']);

const formData = reactive({
    name: '',
    email: '',
    subject: '',
    message: ''
});

const errors = reactive({
    name: '',
    email: '',
    subject: '',
    message: ''
});

const honeypot = ref('');
const isSubmitting = ref(false);
const lastSubmitTime = ref(0);

const COOLDOWN = 60000; // 1 minute entre deux envois

const validateField = (fieldName) => {
    errors[fieldName] = '';

    switch (fieldName) {
        case 'name':
            if (formData.name.trim().length < 2) {
                errors.name = 'Merci de renseigner votre nom';
            }
            break;
        case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                errors.email = 'Veuillez entrer une adresse mail';
            }
            break;
        case 'subject':
            if (formData.subject.trim().length < 3) {
                errors.subject = 'Merci de donner un titre à votre demande';
            }
            break;
        case 'message':
            if (formData.message.trim().length < 10) {
                errors.message = 'Merci de me décrire votre demande';
            } else if (formData.message.length > 5000) {
                errors.message = 'Message trop long (maximum 5000 caractères)';
            }
            break;
    }
};

const validateForm = () => {
    let isValid = true;

    // Valider tous les champs
    Object.keys(formData).forEach(field => {
        validateField(field);
        if (errors[field]) {
            isValid = false;
        }
    });

    return isValid;
};

// Réinitialiser le formulaire
const resetForm = () => {
    formData.name = '';
    formData.email = '';
    formData.subject = '';
    formData.message = '';
    errors.name = '';
    errors.email = '';
    errors.subject = '';
    errors.message = '';
};

// Soumission du formulaire
const handleSubmit = async () => {
    // 1. Protection honeypot (anti-bot)
    if (honeypot.value !== '') {
        console.log('Bot détecté via honeypot');
        return;
    }

    // 2. Protection throttling (limite de fréquence)
    const now = Date.now();
    if (now - lastSubmitTime.value < COOLDOWN) {
        const remaining = Math.ceil((COOLDOWN - (now - lastSubmitTime.value)) / 1000);
        emit('submit-error', `⏱️ Veuillez attendre ${remaining} secondes avant de renvoyer`);
        return;
    }

    // 3. Valider le formulaire
    if (!validateForm()) {
        emit('submit-error', 'Veuillez corriger les erreurs dans le formulaire');
        return;
    }

    isSubmitting.value = true;

    try {
        // Prépare le message complet avec le sujet
        const fullMessage = `Sujet: ${formData.subject}\n\n${formData.message}`;

        const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                from_name: formData.name,
                from_email: formData.email,
                message: fullMessage
            })
        });

        const data = await response.json();

        if (response.ok) {
            // Succès !
            emit('submit-success', '✅ Message envoyé avec succès ! Je vous répondrai rapidement.');
            resetForm();
            lastSubmitTime.value = now;
        } else {
            emit('submit-error', `❌ ${data.error || 'Erreur lors de l\'envoi'}`);
        }

    } catch (error) {
        console.error('Erreur réseau:', error);
        emit('submit-error', '❌ Erreur de connexion. Veuillez réessayer plus tard.');
    } finally {
        isSubmitting.value = false;
    }
};
</script>

<style scoped>
    .contact-form {
        background: rgba(255, 255, 255, 0.02);
        padding: 40px;
        border-radius: 12px;
        border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .form-group {
        margin-bottom: 25px;
    }

    .form-group label {
        display: block;
        font-size: 1rem;
        color: var(--vt-c-custom-text-1);
        margin-bottom: 8px;
        font-weight: 500;
    }

    .required {
        color: var(--vt-c-custom-text-2);
    }

    .form-group input,
    .form-group textarea {
        width: 100%;
        padding: 12px 15px;
        background: rgba(255, 255, 255, 0.05);
        border: 2px solid rgba(255, 255, 255, 0.1);
        border-radius: 8px;
        color: var(--vt-c-custom-text-normal);
        font-size: 1rem;
        font-family: inherit;
        transition: all 0.3s ease;
    }

    .form-group input:focus,
    .form-group textarea:focus {
        outline: none;
        border-color: var(--vt-c-custom-text-2);
        background: rgba(93, 189, 193, 0.05);
    }

    .form-group input:disabled,
    .form-group textarea:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .form-group textarea {
        resize: vertical;
        min-height: 150px;
    }

    .error-message {
        display: block;
        color: #ff6b9d;
        font-size: 0.9rem;
        margin-top: 5px;
        animation: shake 0.3s ease;
    }

    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }

    .submit-btn {
        width: 100%;
        padding: 15px 30px;
        background: var(--vt-c-custom-text-2);
        color: #1a1d29;
        border: none;
        border-radius: 8px;
        font-size: 1.1rem;
        font-weight: bold;
            cursor: pointer;
        transition: all 0.3s ease;
        margin-top: 10px;
    }

    .submit-btn:hover:not(:disabled) {
        background: #4da8ac;
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(93, 189, 193, 0.4);
    }

    .submit-btn:disabled {
        opacity: 0.6;
        cursor: not-allowed;
        transform: none;
    }

    @media screen and (max-width: 768px) {
        .contact-form {
            padding: 25px 20px;
        }

        .form-group input,
        .form-group textarea {
            font-size: 16px; /* Évite le zoom automatique sur iOS */
        }
    }
</style>