<template>
    <Transition name="slide">
        <div v-if="message" :class="['status-message', type]">
            {{ message }}
        </div>
    </Transition>
</template>

<script setup>
defineProps({
    message: {
        type: String, 
        default: ''
    },
    type: {
        type: String,
        default: 'info',
        validator: (value) => ['success', 'error', 'info'].includes(value)
    }
});
</script>

<style scoped>
    .status-message {
        padding: 15px 20px;
        border-radius: 8px;
        margin-bottom: 30px;
        font-weight: 500;
        text-align: center;
    }

    .status-message.success {
        background: rgba(93, 189, 193, 0.1);
        border: 2px solid var(--vt-c-custom-text-2);
        color: var(--vt-c-custom-text-2);
    }

    .status-message.error {
        background: rgba(25, 107, 157, 0.1);
        border: 2px solid #ff6b9d;
        color: #ff6b9d;
    }

    .status-message.info {
        background: rgba(255, 255, 255, 0.05);
        border: 2px solid rgba(255, 255, 255, 0.2);
        color: var(--vt-c-custom-text-normal);
    }

    .slide-enter-active,
    .slide-leave-active {
        transition: all 0.3s ease;
    }

    .slide-enter-from {
        opacity: 0;
        transform: translateY(-10px);
    }

    .slide-leave-to {
        opacity: 0;
        transform: translateY(-10px);
    }

</style>