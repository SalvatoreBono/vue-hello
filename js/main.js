"use script"

const { createApp } = Vue

createApp({
    data() {
        return {
            title: `Benvenuto in Vue`,
            img: `img/vue.png`,
        }
    }
}).mount('#app');