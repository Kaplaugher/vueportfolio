<template>
    <div id="app">
        <app-navbar></app-navbar>
        <router-view></router-view>
        <app-footer></app-footer>
    </div>
</template>
<script>
    import Navbar from './Navbar.vue'
    import Footer from './Footer.vue'


    export default {
      components: {
        appNavbar: Navbar,
        appFooter: Footer
      }
    }
</script>