module.exports = {
  /*@Autowired("component")*/
  component: null,
  show: function() {
    return this.component.say();
  }
}
