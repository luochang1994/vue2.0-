export default {
  data () {
    return {
      show: false,
      loading: false,
      ifUpdateUpper: false,
    }
  },
  methods: {
    $_modal_close () {
      this.$refs.modal.close()
    },
    $_modal_decideIfClose () {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log(this.ifUpdateUpper)
          this.$emit('close', this.ifUpdateUpper)
        }, 300)
        resolve()
      })
    },
    $_modal_cancel () {
      setTimeout(() => {
        this.$emit('close', this.finish)
      }, 300)
    },
  },
}
