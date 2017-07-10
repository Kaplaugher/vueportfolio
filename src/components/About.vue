<template>
    <div class="about-wrapper">


        <section class="jumbotron text-center">
            <div class="container">
                <h1 class="jumbotron-heading">About Me</h1>
                <p class="lead">
                    Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>

            </div>
        </section>
        <div class="container-fluid">
            <div class='row'>
                <div class="col-xs-12 whatIKnow">
                    <h1>What I Know</h1>
                    <div class="skill-grid skills">
                        <div class="icon-grid">
                            <i class="devicon-javascript-plain"></i>
                        </div>
                        <div class="icon-grid">
                            <i class="devicon-bootstrap-plain-wordmark"></i>
                        </div>
                        <div class="icon-grid">
                            <i class="devicon-css3-plain-wordmark"></i>
                        </div>
                        <div class="icon-grid">
                            <i class="devicon-jquery-plain-wordmark"></i>
                        </div>
                        <div class="icon-grid">
                            <i class="devicon-nodejs-plain-wordmark"></i>
                        </div>
                        <div class="icon-grid">
                            <i class="devicon-webstorm-plain"></i>
                        </div>
                        <div class="icon-grid">
                            <i class="devicon-wordpress-plain"></i>
                        </div>
                        <div class="icon-grid">
                            <i class="devicon-vuejs-line-wordmark"></i>
                        </div>
                        <div class="icon-grid">
                            <i class="devicon-sass-original"></i>
                        </div>
                        <div class="icon-grid">
                            <i class="devicon-react-original-wordmark"></i>
                        </div>
                        <div class="icon-grid">
                            <i class="devicon-amazonwebservices-plain-wordmark"></i>
                        </div>
                        <div class="icon-grid">
                            <i class="devicon-mysql-plain-wordmark"></i>
                        </div>
                        <div class="icon-grid">
                            <i class="devicon-mongodb-plain-wordmark"></i>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<style>
    .jumbotron {
        padding-top: 6rem;
        padding-bottom: 6rem;
        margin-bottom: 0;
        background-image: url(../../src/img/codesmall.jpg);
        background-size: cover;
        margin-top: 2rem;
        color: white;
    }

    h1 {
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
        color: crimson;
        text-align: center;
    }

    p {
        font-family: 'Open Sans', sans-serif;
    }
    .skill-title {
        text-align: center;
    }
    .skills{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .icon-grid{
        font-size: 70px;
        display: flex;
        flex-wrap: wrap;
        color: black;
        padding-left: 50px;
        padding-top: 50px;
        margin-bottom: 10px;
        transition: all .2s ease-in-out;


    }

    .icon-grid:hover {
        transform: scale(1.05);

    }
</style>
