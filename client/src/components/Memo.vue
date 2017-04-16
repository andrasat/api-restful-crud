<template>
  <div class="memo">
    <h1 class="title">{{ msg }}</h1>
    <div v-if="datas.length > 0" class="columns">
      <div class="column is-three-quarters">
        <article class="box">
          <div class="content is-medium">
            <h2 class="subtitle">{{ firstMemo.title }}</h2>
            <p>{{ firstMemo.content }}</p>
          </div>
          <div class="field is-grouped">
            <p class="control"><button class="button is-info"><router-link :to="{name: 'Edit-Memo', params: {id: firstMemo._id}}">Edit</router-link></button></p>
            <p class="control"><button class="button is-danger" @click="deleteMemo(firstMemo._id)">Delete</button></p>
          </div>
        </article>
      </div>
      <div class="column is-one-quarters">
        <aside class="menu">
          <p>Your Memo List</p>
          <ul class="menu-label">
            <li v-for="data in datas">
              <a @click="selectMemo(data)">{{ data.title }}</a>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'memo',
  data() {
    return {
      msg: 'Welcome to Memo App',
      datas: [],
      firstMemo: {},
      errorMsg: null
    }
  },
  methods: {
    getMemo: function() {
      let self = this
      axios.get('http://localhost:3000/api')
        .then(function(res) {
          console.log(res.data)
          self.datas = res.data.data
          self.firstMemo = res.data.data[0]
        })
        .catch(function(err) {
          console.log(err)

        })
    },
    selectMemo: function(data) {
      this.firstMemo = data
    },
    deleteMemo: function(id) {
      let conf = confirm('Are you sure?')
      if(conf) {
        axios.delete('http://localhost:3000/api/'+id)
          .then(function(res) {
            window.location.reload()
          })
          .catch(function(err) {
            console.log(err)
          })
      }
    }
  },
  mounted: function() {
    this.getMemo()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.column {
  /*border: solid 1px;*/
}
.is-three-quarters {
  padding-left: 3em;
}
</style>
