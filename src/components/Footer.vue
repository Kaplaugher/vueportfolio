<template>
    <footer class="footer">
        <div class="container">
            <span class="text-muted">Copyright &copy; Kyle Plaugher 2017</span>
        </div>
    </footer>
</template>
<style>
    html {
        position: relative;
        min-height: 100%;
    }
    body {
        /* Margin bottom by footer height */
        margin-bottom: 60px;
    }
    .footer {
        position: absolute;
        bottom: 0;
        width: 100%;
        /* Set the fixed height of the footer here */
        height: 60px;
        line-height: 60px; /* Vertically center the text there */
        background-color: #fff;
    }
</style>