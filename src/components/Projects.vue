<template>
    <div class="projects">
        <section class="jumbotron text-center">
            <div class="container">
                <h1 class="jumbotron-heading">Recent Projects</h1>
                <p class="lead">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>

            </div>
        </section>
        <div class="container">
            <div class="row">
                <div class="col-sm-4">
                    <div class="card" @click="atlantaVibes">
                        <img class="card-img-top" src="../img/atlantavibes.png" alt="Card image cap">
                        <div class="card-block">
                            <h4 class="card-title">AtlantaVibes</h4>
                            <p class="card-text">AtlantaVibes is a Full-Stack application that aggregates data from the top ten music festivals into one
                                easy to use website. AtlantaVibes lets users view, rate, comment and purchase tickets for their favorite
                                festivals in Atlanta.</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card" @click="geographyGame">
                        <img class="card-img-top" src="../img/atlantavibes.png" alt="Card image cap">
                        <div class="card-block">
                            <h4 class="card-title">Geography Game</h4>
                            <p class="card-text">This is a geography game where you are asked a question and then you have to locate the answer (in the
                                form of a marker) on the map.</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card" @click="atlantaVibes">
                        <img class="card-img-top" src="../img/atlantavibes.png" alt="Card image cap">
                        <div class="card-block">
                            <h4 class="card-title">AtlantaVibes</h4>
                            <p class="card-text">AtlantaVibes is a Full-Stack application that aggregates data from the top ten music festivals into one
                                easy to use website. AtlantaVibes lets users view, rate, comment and purchase tickets for their favorite
                                festivals in Atlanta.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>


</template>
<script>
  export default {
    methods: {
      atlantaVibes() {
        this.$router.push('/AtlantaVibes')
      },
      geographyGame() {
        this.$router.push('/geographygame')
      }
    }
    }
</script>
<style scoped>

    .jumbotron {
        padding-top: 6rem;
        padding-bottom: 6rem;
        margin-bottom: 0;
        background-image: url(../../src/img/codesmall.jpg);
        background-size: cover;
        margin-top: 2rem;
        color: white;
    }
    .card {
        transition: all .2s ease-in-out;
        border-style: none;
        margin: 2rem;

    }
    .card:hover {
        transform: scale(1.05);
        cursor: pointer;
    }
    .card-title {
        color: black;
        font-weight: bold;
        font-size: 2rem;
    }
    .card-text {
        color: black;
        font-size: .75rem;
        font-weight: bold;
    }
    .card-img-top {
        background-size: cover;
        height: 200px;
        width: 250px;
    }

    h1 {
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
        color: gold;
    }
    p {
        font-family: 'Open Sans', sans-serif;
    }






</style>