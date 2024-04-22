<script setup>
import { ref } from "vue";

defineProps({
    type: String,
    placeholder: String,
    label: String
});

</script>
<template>
    <div class="form-library-group">
        <label>{{ label }}</label>
        <input :type="type" :placeholder="placeholder">
    </div>
</template>
<style scoped>
.form-library-group {
    margin: 10px 0;
}
label {
    margin-right: 10px;
}
input {
    padding: 10px;
}
</style>