<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-menu
          :default-active="$route.path"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item index="/">Home</el-menu-item>
        </el-menu>
      </el-header>
      <el-main class="main-content">
        <router-view />
      </el-main>
      <el-backtop target=".main-content" :visibility-height="100">
        <el-button type="primary" icon="el-icon-top" circle></el-button>
      </el-backtop>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    handleSelect(key) {
      if (key !== this.$route.path) {
        this.$router.push(key);
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.el-menu-demo {
  border-radius: 0;
  margin-bottom: 20px;
  line-height: 60px;
}

.main-content {
  overflow-y: auto;
  height: calc(100vh - 200px);
}
</style>