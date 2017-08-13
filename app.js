new Vue({
  el: '#vue-app',
  data: {
    name: 'pet2r',
    job: 'web developer',
    website: 'http://wizu.co.kr',
    websiteTag: '<a href="http://naver.com">wizu website</a>',
    age: 35,
    x: 0,
    y: 0,
    available: false,
    nearby: false
  },
  methods: {
    greet: function(msg){
      return 'Cool guy ' + this.name;
    },
    add: function(num){
      this.age += num;
    },
    subtract: function(num){
      this.age -= num;
    },
    updateXY:function(event){
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    click: function(){
      alert('you clicked me');
    },
    logName: function(){
        console.log('you enterd name');
    },
    logAge: function(){
        console.log('you enterd age');
    }

  },
  computed: {
    compClasses: function(){
      return {
        available: this.available,
        nearby: this.nearby
      }
    }
  }
});
