<template>
  <nav class="header-nav">
    <ul>
      <li><router-link to="/Resume">Home</router-link></li>
      <li><router-link to="/page2">Other</router-link></li>
      <li><router-link to="/page3">SLAM</router-link></li>
      <li><router-link to="/page4">Data</router-link></li>
      <li><router-link to="/page5">Download</router-link></li>
      <li><router-link to="/page6">Sign in</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'HeaderNav'
}
</script>

<style scoped>
.header-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #333;
  z-index: 1000;
  box-sizing: border-box;
}

.header-nav ul {
  margin: 0;
  padding: 0;
  display: flex;
  height: 60px;
  align-items: center;
  list-style: none;
}

.header-nav li {
  flex: 1;               /* 每个 li 占等宽 */
  text-align: center;    /* 内容居中 */
}

.header-nav a {
  color: #fff;
  text-decoration: none;
  display: inline-block;
  line-height: 60px;     /* 垂直居中 */
  width: 100%;           /* 链接填满 li */
}

.header-nav a.router-link-active {
  border-bottom: 2px solid #42b983;
}
</style>
