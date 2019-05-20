<template>
  <div id="app">
    <Navbar/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/nav';
import Footer from '@/components/footer'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
</style>
