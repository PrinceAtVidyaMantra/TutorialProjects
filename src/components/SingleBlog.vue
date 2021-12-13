<template>
  <div id="single-blog">
    <h1> {{blog.title}} </h1>
    <article> {{blog.body}} </article>
  </div>
</template>

<script>
export default {
    name: 'single-blog',

    data() {
        return {
            id: this.$route.params.id,
            blog: {}
        };
    },

    // mounted() {
        
    // },

    // methods: {
        
    // },
    created() {
        console.log('dasd');
        this.$http.get('http://jsonplaceholder.typicode.com/posts/' + this.id).then(function(data) {
            this.blog = data.body;
            console.log(data);
        });
    }
};
</script>

<style scoped>
#single-blog {
    max-width: 960px;
    margin: 0 auto;
}
</style>