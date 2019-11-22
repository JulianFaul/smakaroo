<template>
<div>
        <v-navigation-drawer temporary v-model="drawer" app>
        <v-list dense>
            <v-list-item link v-for='(item, index) in navigation' :key='index' :to='item.link'>
            <v-list-item-action>
                <v-icon>{{item.icon}}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title>{{item.name}}</v-list-item-title>
            </v-list-item-content>
            </v-list-item>
        </v-list>
        </v-navigation-drawer>

        

<v-toolbar extended flat extension-height="60" class='app-bar'>
    <v-app-bar-nav-icon class='hidden-sm-and-up' @click.stop="drawer = !drawer" />
      <template #extension  class='toolbar-search-container hidden-sm-and-up'>
        <div class='hidden-xs-only'>
        <v-text-field  placeholder="Search"
            solo append-icon="mdi-times" hide-details single-line></v-text-field>
        </div>
      </template>
      <v-toolbar-side-icon>
            <v-img style='margin-top: -11px;margin-right:2px;' src="@/assets/smakaroo.png" width="37px"> 
            </v-img>
     </v-toolbar-side-icon>
      <v-toolbar-title>makaroo</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class='hidden-sm-and-up'>
          <MobileSearch />
        </v-toolbar-items>
       <v-toolbar-items class='hidden-xs-only'>
            <v-btn link text v-for='(item, index) in navigation' :key='index' :to='item.link' >{{item.name}}</v-btn>
        </v-toolbar-items>
    </v-toolbar>
        
       </div>
</template>

<script>
import MobileSearch from "./MobileSearch"
  export default {
    components:{
        MobileSearch
    },
    props:{
        navigation: Array
    },
    data: () => ({
      drawer: false,
    }),
    computed:{

    }
  }
</script>