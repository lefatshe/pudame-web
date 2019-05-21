<template>
  <div v-if="list" class="edit container">
    <h2>Edit {{ list.title }}</h2>

    <form @submit.prevent="editProject">
      <div class="row">
        <div class="col-4">
          <label for="title">Name project</label>
          <input type="text" name="title" v-model="title">
        </div>

        <div class="col-4">
          <label for="date">Close date</label>
          <input type="text" name="date" v-model="date">
        </div>

        <div class="col-4">
          <label for="image">Image</label>
          <input type="text" name="date" v-model="image">
        </div>

      </div>

      <div class="row">
        <div class="col-12">
          <label for="detail">Brief detail</label>
          <textarea name="detail" v-model="detail">

        </textarea>

        </div>

      </div>

      <div class="row">

        <div class="col-6">
          <label for="hits">Number of persons required</label>
          <input type="number" name="type" v-model="hits">
        </div>

        <div class="col-6">
          <span v-for="(t, index) in types" :key="index">
            <input type="text" v-model="types[index]"> <i @click="deleteType(t)"> remove X </i>
          </span>
          <label for="types">Type</label>
          Type - <input type="text" name="type" v-model="type" @keydown.enter.prevent="addType">
        </div>

        <div class="" v-if="feedback">
          {{ feedback }}
        </div>

        <br/>

        <div class="btn">
          <button type="submit">Update</button>
        </div>


      </div>

    </form>
  </div>
</template>

<script>

  import db from '@/firebase/init';
  import slugify from 'slugify'

  const timestamp = require('time-stamp');

  export default {
    name: 'Edit',
    data() {
      return {
        list: null
      }
    },
    created() {
      let ref = db.collection('listings').where('slug', '==', this.$route.params.list_slug)
      ref.get().then(snapshot => {
        snapshot.forEach(doc => {
          console.log(doc.data())
          this.list = doc.data()
          this.list.id = doc.id
        })
      })
    }
  }
</script>


<style>

</style>
