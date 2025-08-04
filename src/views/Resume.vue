<template>
  <div class="page-container">
    <h1>这是页面 Project</h1>
    <button @click="loadData">加载后端数据</button>
    <pre>{{ result }}</pre>
  </div>
</template>

<script>
import api from '../services/api'

export default {
  name: 'Project',
  data() {
    return {
      result: null
    }
  },
  methods: {
    async loadData() {
      try {
        this.result = await api.getList({ page: 1 })
      } catch (err) {
        this.result = { error: '加载失败' }
      }
    }
  }
}
</script>

<style scoped>
.page-container {
  padding: 20px;
}
</style>
