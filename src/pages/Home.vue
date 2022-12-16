<template>
    <div>
        <h1>Home Page</h1>
        <h1>{{ msg }}</h1>
        <button @click="hello">Click</button>
    </div>
</template>
<script>
export default {
    name: 'Home',
    data() {
        return {
            msg: 'Xin chao',
        };
    },
    methods: {
        hello() {
            alert('Xin chao');
        },
    },
};
</script>
<style></style>
