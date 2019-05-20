<template>
  <div class="container">

    <div class="row">
      <div class="col-3">
        <a href="">
          <strong> Explore </strong>
        </a>


        <router-link class="pull-right" :to="{ name: 'Add'}">
          <strong> Start project </strong>
        </router-link>
      </div>

      <div class="col-2">
        <router-link :to="{ name: 'Index'}">
          <strong> PUDAME.co </strong>
        </router-link>
      </div>


      <div class="col-7">
        <a href="">
          <strong> How it works </strong>
        </a>


        <a href="">
          <strong> Community </strong>
        </a>

        <a href="">
          <strong> External resources </strong>
        </a>

        <a href="">
          <strong> Search </strong>
        </a>

        <a href="">
          <strong> Sign In </strong>
        </a>
      </div>

<!--      <router-link class="pull-right" :to="{ name: 'Add'}">-->
<!--        <strong> Add </strong>-->
<!--      </router-link>-->

    </div>

    <hr/>
  </div>
</template>

<script>
  export default {
    name: 'Navbar',
    data() {
      return {
        //
      }
    }
  }
</script>

<style>
  .navbar nav {
    padding: 0 20px;
  }
</style>

