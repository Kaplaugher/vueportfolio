<template>
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1 class="display-3">Kyle Plaugher</h1>
            <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
            <router-link to="/about"><a class="btn btn-primary">About</a></router-link>
        </div>
    </div>

</template>
<style scoped>

   .jumbotron {
       background-image: url("../../src/img/cover.jpg");
       background-size: cover;
       text-align: center;
       color: white;
       margin-top: 2rem;
   }
    .jumbotron a {
        color: #fff;
    }
   h1 {
       font-family: 'Montserrat', sans-serif;
       font-weight: bold;
       color: dodgerblue;
   }
   p {
       font-family: 'Open Sans', sans-serif;
   }
    
</style>

