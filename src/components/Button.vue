<script setup>

defineProps({
    text: String,
    url: String| Boolean
});

</script>
<template>
    <div class="form-library-group">
        <a v-if="url != false" :href="url">{{ text }}</a>
        <button v-else>{{ text }}</button>
    </div>
</template>
<style scoped>
.form-library-group {
    margin: 10px 0;
}

a, button {
    display: inline-block;
    text-decoration: none;
    border-radius: 5px;
    padding: 20px 40px;
    border: 1px solid #000;
    color: #000;
    background-color: #fff;
    font-size: 14px;
    font-weight: 400;
    font-family: Arial, Helvetica, sans-serif;
    cursor: pointer;
}
</style>