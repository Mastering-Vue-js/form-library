# Form Library
A lightweight Vuejs library for form 

## Install it via npm
```bash
npm install https://github.com/Mastering-Vue-js/form-library --save
```
after publishing on npm
```bash
npm install form-library --save
```

## import the components from any components
```js
import { Input, Button } from "form-library";
import "form-library/style.css";
```

## use the components in template
```html
<Input type="text" label="Name: " placeholder="Enter your name"  />
<Input type="number" label="Number: " placeholder="Enter your number" />
<Button :url="false" text="Click Here" />
<Button url="https://sayedulsayem.com" text="Sayedul Sayem" />
```

## Full Code Example
Example.vue
```html
<script setup>
    import { Input, Button } from "form-library";
    import "form-library/style.css";
</script>
<template>
    <Input type="text" label="Name: " placeholder="Enter your name"  />
    <Input type="number" label="Number: " placeholder="Enter your number" />
    <Button :url="false" text="Click Here" />
    <Button url="https://sayedulsayem.com" text="Sayedul Sayem" />
</template>
```