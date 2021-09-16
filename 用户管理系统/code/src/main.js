import Vue from 'vue';
import VueRouter from 'vue-router';
import app from './components/Main.vue';
import router from './router.js';
import './css/app.css';

Vue.use(VueRouter);

Vue.directive('focus', {
    inserted: function (el) {
        el.focus();
    }
});

var vm = new Vue({
    el: '#app',
    data: {

    },
    components: {
        app
    },
    router
});