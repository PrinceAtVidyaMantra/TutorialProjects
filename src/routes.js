import ShowBlogs from './components/ShowBlogs.vue'
import AddBlogs from './components/AddBlog.vue'
import SingleBlog from './components/SingleBlog.vue'

export default [
    {path: '/', component:ShowBlogs},
    {path: '/add', component:AddBlogs},
    {path: '/blog/:id', component: SingleBlog}
]