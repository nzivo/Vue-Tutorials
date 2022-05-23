const app = Vue.createApp({
  data() {
    const age = 25;
    let x = Math.random(0, 1);
    return {
      my_name: "John",
      age: age,
      fav_random_no: x,
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/512px-Vue.js_Logo_2.svg.png",
    };
  },
  methods: {
    age_in_five() {
      return (y = this.age + 5);
    },
  },
});

app.mount("#assignment");
