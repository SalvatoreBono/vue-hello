"use strict"

const { createApp } = Vue;

createApp({
    data() {
        return {
            title: `Benvenuto in Vue`,
            img: `img/vue.png`,
            color: ``,
            changer: ``,
        };
    },
    methods: {
        colorChanger() {
            if (this.color === `text-danger`) {
                this.color = `text-primary`;
            } else {
                this.color = `text-danger`;
            }
        },
        imgChanger() {
            if (this.changer === `img-custom`) {
                this.changer = ``;
            } else {
                this.changer = `img-custom`;
            }
        },
    },
}).mount('#app');