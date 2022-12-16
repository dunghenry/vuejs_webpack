<template>
    <div>
        <h1>About Page</h1>
        {{ data }}
    </div>
</template>
<script>
import { mapState } from 'vuex';
import { ref } from 'vue';
export default {
    name: 'About',
    setup(props, context) {
        const title = ref('Hehe');
        return {
            title,
        };
    },
    created() {
        console.log('Created');
        console.log(this.title);
        console.log(this.todos.todos[0]);
    },
    mounted() {
        console.log('Mounted');
    },

    computed: {
        todos() {
            return this.$store.state.todos;
        },
    },

    // computed: mapState([
    //     'todos',
    // ]),

    // computed: mapState({
    //     todos: (state) => state.todos,
    // }),

    data() {
        return {
            data: 1,
        };
    },
};
</script>
<style></style>
