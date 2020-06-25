<template>
    <div>
        用户名：{{userInfo}}
    </div>
</template>

<script>
    import {mapState} from "vuex";
    export default {
        name: "Index",
        data() {
            return {};
        },
        computed: {
            ...mapState("users",["userInfo"])
        },
        mounted() {
            console.log(this.userInfo);
        }
    }
</script>

<style scoped>

</style>
