<template>

  <div class="container">
    <div class="row">
      <div class="col-4" v-for="list in listings" :key="list.id">
        <h4>{{ list.title }}</h4>
        <p class="text">{{list.detail}}</p>
        <div class="controls">
          <i @click="deleteItem(list)">delete</i>
          <i @click="viewItem(list)">MORE...</i>
          <i class="pull-right" @click="viewItem(list)">POINTS ( {{list.hits}} /6 )</i>
        </div>

        <ul>
          <li v-for="(i, index) in list.types" :key="index">
            <span> {{ i }} </span>
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>

  import db from '@/firebase/init';

  export default {
    name: 'Index',
    data() {
      return {
        listings: []
      }
    },
    methods: {
      deleteItem(item) {
        console.log('delete:', item.title)
        db.collection('listings').doc(item.id).delete()
          .then(() => {
            this.listings = this.listings.filter(list => {
              return list.id != item.id
            })
          })
      },
      viewItem(item) {
        console.log('view:', item.id)
      }
    },
    created() {
      // get data fs
      db.collection('listings').get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            // console.log(doc.data(), doc.id)
            let list = doc.data()
            list.id = doc.id
            this.listings.push(list)
          });
        })
    }
  }
</script>


<style>
  .index {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;
    margin-top: 60px;
  }

  .index h2 {
    font-size: 1.8em;
    text-align: center;
    margin: 0;
  }

  .index .details {
    margin: 30px auto
  }

  .index .details li {
    display: inline-block
  }

  .delete {
    position: absolute;
    top: 4px;
    right: 10px;
    cursor: pointer;
    color: gray
  }
</style>
