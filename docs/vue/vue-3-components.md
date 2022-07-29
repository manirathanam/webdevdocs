# Single File Components (SFC)

SFC, is one of main featires of the Vue.

1. It is a spec or guildline to build components in vue.
2. each SFC contains 3 building blocks `<template>`, `<script>` and `<style>`.
   Typing SFC component will be like below

```vue
<template>
  <button @click="increment">{{ count }}</button>
</template>

<script setup>
import { ref } from "vue";
let count = ref(0);
function increment() {
  count.value += 1;
}
</script>

<style>
button {
  padding: 8px;
}
</style>
```

`<template>` - is where define html content. we can add event listener (`@click` in above) and bind javascript variables that are defined top level inside `<script>`.Also we can import another component and use in inside the template just like html elements.

`<script>` - is where we define our javascript,that includes declaring state (`count` in above ), methods (`increment()` in above) of the particular component and logical behaviour of the component.

`<style>` - is where we define css for this component. we can use css libs like `sass` by speicfying lang attribute in the tag `<style lang="sass">`.
