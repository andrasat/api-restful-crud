<template>
  <div class="new-memo">
    <h1 class="title">{{ msg }}</h1>
    <div class="columns">
      <div class="column is-half">
        <form>
          <div class="field">
            <label class="label">Your memo title is : {{ title }}</label>
            <p class="control"><input class="input" v-model="title" type="text" placeholder="Memo title here"></p>
          </div>
          <div class="field">
            <label class="label">Insert your content here</label>
            <p class="control"><textarea class="textarea" v-model="content" placeholder="Your content here"></textarea></p>
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
  name: 'create-memo',
  data() {
    return {
      msg: 'Type your memo here',
      title: '',
      content: ''
    }
  },
  methods: {
    sendData: function() {
      let self = this
      axios.post('http://localhost:3000/api', {
        title: self.title,
        content: self.content
      })
        .then(function(res) {
          alert('Memo added')
        })
        .catch(function(err) {
          console.log(err)
          alert('Server Error')
        })
    }
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
