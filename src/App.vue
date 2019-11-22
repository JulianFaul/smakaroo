<template>
  <v-app >
      <top-navigation :navigation='navigation'></top-navigation>
      <v-content>
          <router-view></router-view>
      </v-content>
      <!-- <bottom-navigation :navigation='navigation'></bottom-navigation> -->
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import TopNavigation from '@/components/Navigation/TopNavigation'
import BottomNavigation from '@/components/Navigation/BottomNavigation'

export default {
  name: 'App',
  components: {
    HelloWorld,
    TopNavigation,
    BottomNavigation
  },
  data(){
    return{
     navigation: [
      {link: "/", name:"Home", icon: "mdi-home"},
      {link: "/about", name:"About", icon: "mdi-contact-mail"},
    ]
    }
  }
   

};



</script>
