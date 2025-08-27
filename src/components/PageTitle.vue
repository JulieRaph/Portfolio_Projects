<script setup>


</script>

<template>
    <div id="top-line">
        <img id="profile-img" src="../assets/me.png" alt="me" width="270px" height="340px" />
        <div id="line">
            <p>Je suis <span class="text-highlight-1">Julie TOLVE</span>, <br/>
                    Développeuse Web.</p>
            <div id="social">
                <a href="https://www.linkedin.com/in/julie-tolve/" target="_blank">
                    <img class="social-img" src="../assets/in.png" alt="linkedin" width="32px"/> 
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
    }

    #top-line #line {
        float: left;
        transform: translateY(40%);
        text-align: center;
    }

    #top-line p {
        font-size: 42px;
        line-height: 60px;
    }

    #top-line p span {
        font-weight: bold; 
    }

    #social {
        margin-top: 15px;
    }

    .social-img {
        margin-right: 10px;
        filter: opacity(0.8);
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