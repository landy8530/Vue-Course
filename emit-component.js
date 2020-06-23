Vue.component('welcome-button', {
  template: `
    <button v-on:click="$emit('welcome')">
      Click me to be welcomed
    </button>
  `
})

//配合额外的参数使用 $emit：
Vue.component('magic-eight-ball', {
  data: function () {
    return {
      possibleAdvice: ['Yes', 'No', 'Maybe']
    }
  },
  methods: {
    giveAdvice: function () {
      var randomAdviceIndex = Math.floor(Math.random() * this.possibleAdvice.length)
      this.$emit('give-advice', this.possibleAdvice[randomAdviceIndex])
    }
  },
  template: `
    <button v-on:click="giveAdvice">
      Click me for advice
    </button>
  `
})
