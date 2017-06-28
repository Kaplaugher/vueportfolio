<template>
    <div class="projects">
        <section class="jumbotron text-center">
            <div class="container">
                <h1 class="jumbotron-heading">Recent Projects</h1>
                <p class="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>

            </div>
        </section>

        <div class="album text-muted">
            <div class="container">

                <div class="row">
                    <div class="card">
                        <img data-src="holder.js/100px280/thumb" alt="Card image cap">
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <div class="card">
                        <img data-src="holder.js/100px280/thumb" alt="Card image cap">
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <div class="card">
                        <img data-src="holder.js/100px280/thumb" alt="Card image cap">
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>

                </div>

            </div>
        </div>
    </div>
</template>
<style>
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
        background-color: #fff;
    }

    .jumbotron p:last-child {
        margin-bottom: 0;
    }

    .jumbotron-heading {
        font-weight: 300;
    }

    .jumbotron .container {
        max-width: 40rem;
    }

    .album {
        min-height: 50rem; /* Can be removed; just added for demo purposes */
        padding-top: 3rem;
        padding-bottom: 3rem;
        background-color: #f7f7f7;
    }

    .card {
        float: left;
        width: 33.333%;
        padding: .75rem;
        margin-bottom: 2rem;
        border: 0;
    }

    .card > img {
        margin-bottom: .75rem;
    }

    .card-text {
        font-size: 85%;
    }

    footer {
        padding-top: 3rem;
        padding-bottom: 3rem;
    }

    footer p {
        margin-bottom: .25rem;
    }

</style>