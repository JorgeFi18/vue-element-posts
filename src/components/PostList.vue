<template>
  <el-container>
    <el-header>
      <h1>Post List</h1>
    </el-header>
    <el-main>
      <el-table :data="posts" stripe>
        <el-table-column prop="id" label="ID" width="50"></el-table-column>
        <el-table-column prop="title" label="Title"></el-table-column>
        <el-table-column label="Actions" width="120">
          <template slot-scope="scope">
            <el-button @click="viewPost(scope.row.id)" type="primary" size="mini">View</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
  </el-container>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      posts: [],
    };
  },
  created() {
    this.fetchPosts();
  },
  methods: {
    fetchPosts() {
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
          this.posts = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
    viewPost(id) {
      this.$router.push(`/post/${id}`);
    },
  },
};
</script>