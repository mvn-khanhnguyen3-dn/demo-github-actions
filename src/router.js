import { createRouter, createWebHistory } from 'vue-router'

import ListText from './components/ListText.vue'
import UserDetails from './components/User/UserDetails.vue'
import UserProfile from './components/User/UserProfile.vue'
import UserPost from './components/User/UserPost.vue'
import User from './components/User/User.vue'
import Count from './components/Count/Count.vue'

const routes = [
    {
        path: '/',
        component: ListText
    },
    {
        path: '/count',
        component: Count
    },
    {
        path: '/user/',
        component: User,
        name: 'user-parent',
        children: [
            {
                path: 'profile',
                component: UserProfile,
                name: 'user-profile',
            },
            {
                path: ':id',
                component: UserDetails,
                name: 'user-id',
            },
            {
                path: 'posts',
                component: UserPost,
                name: 'user-post',
            },
        ],
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router
