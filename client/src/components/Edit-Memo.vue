<template>
  <div class="new-memo">
    <h1 class="title">{{ msg }}</h1>
    <div class="columns">
      <div class="column is-half">
        <form>
          <div class="field">
            <label class="label">Your memo title is : {{ title }}</label>
            <p class="control"><input class="input" v-model="title" type="text"></p>
          </div>
          <div class="field">
            <label class="label">Insert your content here</label>
            <p class="control"><textarea class="textarea" v-model="content"></textarea></p>
          </div>
          <div class="field">
            <p class="control"><button class="button is-primary" @click="sendData()">Submit</button></p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'edit-memo',
  data() {
    return {
      msg: 'Edit Memo here',
      title: '',
      content: ''
    }
  },
  methods: {
    sendData: function() {
      let self = this
      axios.put('http://localhost:3000/api/'+this.$route.params.id, {
        title: self.title,
        content: self.content
      })
        .then(function(res) {
          console.log(res.data)
          alert('Edit Success')
          window.location.reload()
        })
        .catch(function(err) {
          alert('Server error')
          console.log(err)
        })
    },
    getOneMemo: function() {
      let self = this
      axios.get('http://localhost:3000/api/'+this.$route.params.id)
        .then(function(res) {
          console.log(res.data)
          self.title = res.data.data.title
          self.content = res.data.data.content
        })
        .catch(function(err) {
          console.log()
          alert('Server Error')
        })
    }
  },
  mounted: function() {
    this.getOneMemo()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
label {
  display: block;
  margin: 1em;
}
.is-half {
  margin: auto;
}
</style>
