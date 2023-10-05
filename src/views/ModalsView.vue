<template>
    <div class="modals">
        <h1>Modals</h1>
        <button @click="showModal = true">Show modal</button>
        <teleport to=".modals-container">
            <div v-if="showModal" class="modal">
                <h1>This is a modal</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore provident culpa laboriosam! Deleniti harum possimus id exercitationem quis iure, amet totam placeat vitae animi, voluptate magnam ducimus aliquam, dignissimos reprehenderit.</p>
                <button @click="showModal = false">Hide modal</button>
            </div>
        </teleport>

    </div>
</template>

<script setup>
import { ref } from 'vue';

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