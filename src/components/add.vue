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
          <label for="types">Type</label>
          <input type="number" name="type" v-model="types" @keydown.enter.prevent="addIng">
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
        feedback: null
      }
    },
    methods: {
      addIng() {
        if (this.type) {
          this.types.push(this.type)
          this.type = null
          this.feedback = null
          console.log('output', this.types)
        } else {
          this.feedback = 'Enter value'
        }
      },
      startProject() {
        console.log('addding', this.title)
      }
    },
    created() {
    }
  }
</script>


<style>

</style>
