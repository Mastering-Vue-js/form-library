<script setup>
import { ref } from 'vue';
import Input from './components/Input.vue';
import Button from './components/Button.vue';
const name = ref('');
const password = ref('');
</script>

<template>
  <Input type="text" label="Name: " placeholder="Enter your name" v-model="name"/>
  <Input type="password" label="Password: " placeholder="Enter your password" v-model="password"/>
  <Button :url="false" text="Click Here" />
  <Button url="https://sayedulsayem.com" text="Sayedul Sayem" />
</template>

<style scoped>
</style>
