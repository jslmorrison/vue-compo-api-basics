<template>
    <div class="modals">
        <h1>Modals</h1>
        <button @click="showModal = true">Show modal</button>
        <Modal 
            v-model="showModal"
        >
        </Modal>

    </div>
</template>

<script setup>
import { ref } from 'vue';
import Modal from '@/components/Modal.vue'

const showModal = ref(false)
</script>

<style>
.modal {
    background-color: beige;
    color: black;
    padding: 10px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}
</style>