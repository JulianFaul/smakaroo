<template>
  <v-bottom-navigation grow color="teal">
    <v-btn v-for='(item, index) in navigation' :key='index' :to='item.link'>
      <span>{{item.name}}</span>
      <v-icon>{{item.icon}}</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
  export default {
    props:{
        navigation: Array
    },
    data () {
      return {
        activeBtn: 1,
      }
    },
  }
</script>