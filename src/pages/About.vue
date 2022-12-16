<template>
    <div>
        <h1>About Page</h1>
        {{ count }}
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
        }

    },
    mounted() {
        console.log(this.title)
    },
    
    // computed: {
    //     count() {
    //         return this.$store.state.count;
    //     },
    // },

    // computed: mapState([
    //     'count',
    // ]),

    computed: mapState({
        count: (state) => state.count,
    }),
    data() {
        return {
            data: 1,
        };
    },
};
</script>
<style></style>
