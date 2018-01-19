import Vue from 'vue'
import Router from 'vue-router'
import Vuetify from 'vuetify'
import Hello from '@/components/Hello'
import Collection from '@/components/Collection'
import SSHelp from '@/components/SSHelp'
import SSFeedbackIssues from '@/components/SSFeedbackIssues'
import SSMyProfile from '@/components/SSMyProfile'
import SSListings from '@/components/SSListings'
import SSBookmarks from '@/components/SSBookmarks'
import SSPassword from '@/components/SSPassword'
import SSNotifications from '@/components/SSNotifications'
import SSPaymentProfiles from '@/components/SSPaymentProfiles'
import SSFollowing from '@/components/SSFollowing'

Vue.use(Router)
Vue.use(Vuetify)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/collection',
      name: 'Collection',
      component: Collection
    },
    {
      path: '/help',
      name: 'Help',
      component: SSHelp
    },
    {
      path: '/feedback_issues',
      name: 'Feedbak_Issues',
      component: SSFeedbackIssues
    },
    {
      path: '/my_profile',
      name: 'My_Profile',
      component: SSMyProfile
    },
    {
      path: '/listings',
      name: 'Listings',
      component: SSListings
    },
    {
      path: '/bookmarks',
      name: 'Bookmarks',
      component: SSBookmarks
    },
    {
      path: '/password',
      name: 'Password',
      component: SSPassword
    },
    {
      path: '/notifications',
      name: 'Notifications',
      component: SSNotifications
    },
    {
      path: '/payment_profiles',
      name: 'Payment Profiles',
      component: SSPaymentProfiles
    },
    {
      path: '/following',
      name: 'Following',
      component: SSFollowing
    }
  ]
})
