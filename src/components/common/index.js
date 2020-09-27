import Vue from 'vue'

import AppBar from './AppBar'

/**
 * Register common components globally so that we don't have to import them
 * everywhere we want to use them.
 */
Vue.component('app-bar', AppBar)
