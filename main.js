const { createApp } = Vue  

const app = Vue.createApp({
    data() {
      return {
        mail: [],
      };
    },
    mounted() {
      const requests = [];
      for (let i = 0; i < 10; i++) {
        requests.push(axios.get('https://flynn.boolean.careers/exercises/api/random/mail'));
      }
      Promise.all(requests).then((responses) => {
        this.mail = responses.map((response) => response.data.response);
      });
    },
    methods: {
      
    },
  });
  
  app.mount('#app');