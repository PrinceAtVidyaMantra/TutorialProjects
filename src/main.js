import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import Routes from './routes';

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

// Vue.directive('rainbow', {
//   bind(el, binding, vnode) {
//     el.style.color = '#' + Math.random().toString().slice(2, 8);
//   },
//   // inserted(el, binding, vnode) {},
//   // update(el, binding, vnode, oldVnode) {},
//   // componentUpdated(el, binding, vnode) {},
//   // unbind(el, binding, vnode) {},
// });

// Vue.directive('theme', {
//   bind(el, binding, vnode) {
//     if (binding.value == 'wide') {
//       el.style.maxWidth = '1200px';
//     }
//     else if (binding.value == 'narrow') {
//       el.style.maxWidth = '560px';
//     }
//     if (binding.arg == 'column') {
//       el.style.background = '#add';
//       el.style.padding = '20px';
//     }
//   },
//   // inserted(el, binding, vnode) {},
//   // update(el, binding, vnode, oldVnode) {
//   //   if (binding.value == 'wide') {
//   //     el.style.maxWidth = '1200px';
//   //   }
//   //   else if (binding.value == 'narrow') {
//   //     el.style.maxWidth = '560px';
//   //   }
//   // },
//   componentUpdated(el, binding, vnode) {
//     if (binding.value == 'wide') {
//       el.style.maxWidth = '1200px';
//     }
//     else if (binding.value == 'narrow') {
//       el.style.maxWidth = '560px';
//     }
//   },
//   // unbind(el, binding, vnode) {},
// });

new Vue({
  el: '#app',
  render: h => h(App),
  router: router,
})
