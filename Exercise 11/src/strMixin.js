export const strMixin = {
  computed: {
    countAppendComputed() {
      return this.text + '(' + this.text.length + ')';
    }
  }
};
