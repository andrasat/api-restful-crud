
Vue.component('edit-form', {
  template: `
  <>
  `
})

new Vue({
  el: '#app',
  data: {
    memos : []
  },
  methods: {
    getMemo: function() {
      let self = this
      axios.get('http://localhost:3000/api/')
        .then((res)=> {
          console.log(res)
          self.memos = res.data
        })
        .catch((err)=> {
          console.log(err)
        })
    }
  },
  mounted: function() {
    getMemo()
  }
})