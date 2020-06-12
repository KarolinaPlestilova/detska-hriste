<template>
  <div class="container">
    <router-link to="/page1">Go to Page 1</router-link>
    <router-link to="/page2">Go to Page 2</router-link>

    <h1>Vue router</h1>
    <el-row>
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </el-row>
    <el-button
      plain
      @click="open1">
      Closes automatically
    </el-button>
    <el-button
      plain
      @click="open2">
      Won't close automatically
      </el-button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    open1() {
      const h = this.$createElement;

      this.$notify({
        title: 'Title',
        message: h('i', { style: 'color: teal' }, 'This is a reminder')
      });
    },

    open2() {
      this.$notify({
        title: 'Prompt',
        message: 'This is a message that does not automatically close',
        duration: 0
      });
    }
  }
};
</script>

<style lang="css">
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}
</style>