<template>
  <el-container>
    <el-header>
      <h1>{{ post.title }}</h1>
    </el-header>
    <el-main>
      <p>{{ post.body }}</p>
      <h2>Comments</h2>
      <el-card v-for="comment in comments" :key="comment.id" class="comment-card">
        <p>{{ comment.name }}</p>
        <p>{{ comment.body }}</p>
        <p><strong>{{ comment.email }}</strong></p>
      </el-card>
      <el-button @click="$router.push('/')" type="primary">Back</el-button>
    </el-main>
  </el-container>
</template>

<script>
import axios from 'axios';

export default {
  props: ['id'],
  data() {
    return {
      post: {},
      comments: [],
    };
  },
  created() {
    this.fetchPost();
    this.fetchComments();
  },
  methods: {
    fetchPost() {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
        .then(response => {
          this.post = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
    fetchComments() {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${this.id}/comments`)
        .then(response => {
          this.comments = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
  },
};
</script>

<style scoped>
.comment-card {
  margin: 20px 0;
}
</style>