<script setup>


</script>

<template>
    <div id="top-line">
        <img id="profile-img" src="../assets/photo5.png" alt="me" width="340px" height="340px" />
        <div id="line">
            <p><span class="text-highlight-1"></span><br/>
                    Spécialisée en Vus.js et Python, je développe des applications fiables et évolutives.<br>
                    J'accorde une attention particulière à la structure du code, à la maintenabilité et à l'expérience utilisateur.<br>
                    Chaque projet est conçu avec une approche rigoureuse et orientée vers des solutions concrètes.</p>
            <div id="social">
                <a href="https://www.linkedin.com/in/julie-tolve/" target="_blank">
                    <img class="social-img linkedin-img" src="../assets/in.png" alt="linkedin"/> 
                </a>
                <a href="https://github.com/JulieRaph/" target="_blank">
                    <img class="social-img github-img" src="../assets/github.png" alt="github"/> 
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped>
    #top-line {
        margin-top: 50px;
        width: 100%;
        height: 300px;
    }

    #top-line #profile-img {
        float: left;
        margin-right: 50px;
        border-radius: 45px;
    }

    #top-line #line {
        float: left;
        transform: translateY(40%);
        text-align: center;
    }

    #top-line p {
        font-size: 21px;
        line-height: 60px;
    } 

    #top-line p span {
        font-weight: bold; 
    }

    #social {
        margin-top: 15px;
        display: flex;
        align-items: center;
        justify-content: left;
        gap: 20px;
    }

    .social-img {
        filter: brightness(0) invert(1);
        opacity: 0.9;
        transition: opacity 0.3s ease;
    }

    .linkedin-img {
        width: 38px;
        height: 38px;
    }

    .github-img {
        width: 32px;
        height: 32px;
    }

    .social-img:hover {
        opacity: 1;
    }

    @media screen and (max-width: 905px) {
        #top-line #profile-img {
            display: none;
        }

        #top-line #line {
            float: none;
            transform: translateY(0%);
        }

        #top-line p {
            font-size: 36px;
        }
    }
</style>