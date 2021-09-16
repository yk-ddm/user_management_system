import Vue from 'vue';
import VueRouter from 'vue-router';
import home from './components/Home.vue';
import aboutUs from './components/AboutUs.vue';
import addUser from './components/AddUser.vue';
import showInfo from './components/ShowInfo.vue';
import editinfo from './components/Editinfo.vue';

Vue.use(VueRouter);

var routerObj = new VueRouter({
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: home },
        { path: '/aboutUs', component: aboutUs },
        { path: '/addUser', component: addUser },
        { path: '/showInfo/:id', component: showInfo },
        { path: '/editinfo/:id', component: editinfo }
    ]
});

export default routerObj;