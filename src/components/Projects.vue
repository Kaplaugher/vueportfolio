<template>
    <div class="projects">
        <section class="jumbotron text-center">
            <div class="container">
                <h1 class="jumbotron-heading">Recent Projects</h1>
                <p class="lead">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>

            </div>
        </section>

        <div class="album text-muted">
            <div class="container">

                <div class="row row-center">
                    <div class="card card-inverse">
                        <img class="card-img" src="http://via.placeholder.com/350x200" alt="Card image">
                        <div class="card-img-overlay">
                            <h4 class="card-title">Card title</h4>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                    <div class="card card-inverse">
                        <img class="card-img" src="http://via.placeholder.com/350x200" alt="Card image">
                        <div class="card-img-overlay">
                            <h4 class="card-title">Card title</h4>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<style scoped>
    body {
        min-height: 75rem; /* Can be removed; just added for demo purposes */
    }

    .navbar {
        margin-bottom: 0;
    }

    .jumbotron {
        padding-top: 6rem;
        padding-bottom: 6rem;
        margin-bottom: 0;
        background-image: url(../../src/img/codesmall.jpg);
        background-size: cover;
        margin-top: 5rem;
        color: white;
    }
    .card {
        margin-top: 2rem;

    }
    
    .row-center {
        text-align: center;
    }






</style>