<template>
  <div id="app">
    <admin></admin>
  </div>
</template>

<script>
  import Admin from './components/admin/Admin'
  export default {
    name: 'App',
    components: {
      admin:Admin
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding:0;
    text-align: center;
  }
</style>
