<template>
    <teleport to=".modals-container">
        <div class="modal">
            <h1>{{ title }}</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore provident culpa laboriosam! Deleniti harum possimus id exercitationem quis iure, amet totam placeat vitae animi, voluptate magnam ducimus aliquam, dignissimos reprehenderit.</p>
            <button @click="$emit('hideModal')">Hide modal</button>
        </div>
    </teleport>
</template>

<script setup>
    const props = defineProps({
        title: {
            type: String,
            default: 'default modal title from a prop'
        }
    })
    // console.log(props.title)

    const emit =  defineEmits(['hideModal'])
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