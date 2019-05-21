<template>
  <div class="add container">

    <h2>Start a project</h2>

    <div class="text-center btn-group row">
      <button>Step 1 - Gauge interest</button>
      <button>Step 2 - Confirm booking/attendees</button>
      <button>Step 3 - Its on</button>
    </div>

    <hr/>

    <form @submit.prevent="startProject">
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
          <button type="submit">Save</button>
        </div>


      </div>

    </form>

    <br/>
  </div>
</template>

<script>

  import db from '@/firebase/init';
  import slugify from 'slugify'

  const timestamp = require('time-stamp');

  export default {
    name: 'Add',
    data() {
      return {
        title: null,
        detail: null,
        date: null,
        image: null,
        hits: null,
        types: [],
        type: null,
        feedback: null,
        slug: null
      }
    },
    methods: {
      addType() {
        if (this.type) {
          this.types.push(this.type)
          this.type = null
          this.feedback = null
          console.log('output', this.types)
        } else {
          this.feedback = 'Enter value'
        }
      },
      deleteType(t){
        this.types = this.types.filter(type => {
          return type != t
        })
      },
      // Save the project
      startProject() {
        if (this.title) {
          this.feedback = null
          this.slug = slugify(this.title, {
            replacement: '-',
            remove: /\-\-+/g,
            lower: true
          })
          const newList = {
            title: this.title,
            hits: this.hits,
            types: this.types,
            image: this.image,
            detail: this.detail,
            slug: this.slug,
            created: timestamp()
          }
          db.collection('listings').add(newList).then(() => {
            this.$router.push({name: 'Index'})
          }).catch(err => {
            console.log(err)
          })
        } else {
          this.feedback = 'Please complete all mandatory fields'
        }
      }
    },
    created() {
    }
  }
</script>


<style>

</style>
