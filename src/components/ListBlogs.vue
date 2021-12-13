<template>
  <div id="show-blogs">
    <h1>List Blog Titles</h1>
    <input type="text" v-model="search" placeholder="search blogs" />
    <div v-for="blog in filteredBlogs" :key="blog.userID" class="single-blog">
      <h2 v-rainbow>{{ blog.title | toUppercase }}</h2>
    </div>
  </div>
</template>

<script>

import SearchMixin from '../mixins/searchMixin'

export default {
  name: "app",
  data() {
    return {
      blogs: [],
      my_theme: "",
      search: "",
    };
  },
  updated() {
    console.log("Changes to ", this.my_theme);
  },
  methods: {},
  created() {
    this.$http
      .get("http://jsonplaceholder.typicode.com/posts")
      .then(function (data) {
        console.log(data);
        this.blogs = data.body.slice(0, 10);
      });
  },
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    },

    snippet(value) {
      return value.slice(0, 100) + "...";
    },
  },
  directives: {
    rainbow: {
      bind(el, binding, vnode) {
        el.style.color = "#" + Math.random().toString(16).slice(2, 8);
      },
    },
  },
  mixins: [SearchMixin],
};
</script>

<style>
#show-blogs {
  max-width: 800px;
  margin: 0px auto;
}
.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>
