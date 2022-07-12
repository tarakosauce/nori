<script setup lang="ts">
</script>

<template>
    <div id="text-box" flex flex-col justify-center items-center>
        <h1>WHAT</h1>
        <h1 id="tiiime">TIME</h1>
        <h1>IS IT</h1>
        <h1>THERE?</h1>
    </div>
</template>

<style>

#text-box {
    width: 40%;
    font-size: 5em;
    font-family: "Patua One", sans-serif;
}

#tiiime {
  font-size: calc(20px + 18vh);
  line-height: calc(20px + 20vh);
/*   text-shadow: 0 0 5px #f562ff, 0 0 15px #f562ff, 0 0 25px #f562ff,
    0 0 20px #f562ff, 0 0 30px #890092, 0 0 80px #890092, 0 0 80px #890092;
  color: #fccaff; */
  text-shadow: 0 0 5px #3ac41e, 0 0 15px #3ac41e, 0 0 20px #3ac41e, 0 0 40px #3ac41e, 0 0 60px #ff0000, 0 0 10px #ff8d00, 0 0 98px #ff0000;
    color: #fff6a9;
  text-align: center;
  animation: blink 12s infinite;
  -webkit-animation: blink 12s infinite;
}

@-webkit-keyframes blink {
  20%,
  24%,
  55% {
    color: #111;
    text-shadow: none;
  }

  0%,
  19%,
  21%,
  23%,
  25%,
  54%,
  56%,
  100% {
  text-shadow: 0 0 5px #3ac41e, 0 0 15px #3ac41e, 0 0 20px #3ac41e, 0 0 40px #3ac41e, 0 0 60px #09c29a, 0 0 10px #3ac41e, 0 0 98px #09c29a;
    color: #c9ffa9;
  }
}

@keyframes blink {
  20%,
  24%,
  55% {
    color: #111;
    text-shadow: none;
  }

  0%,
  19%,
  21%,
  23%,
  25%,
  54%,
  56%,
  100% {
  text-shadow: 0 0 5px #3ac41e, 0 0 15px #3ac41e, 0 0 20px #3ac41e, 0 0 40px #3ac41e, 0 0 60px #09c29a, 0 0 10px #3ac41e, 0 0 98px #09c29a;
    color: #e4ffb9;
  }
}

@media screen and (max-width: 1270px) {

  #text-box {
    order: 2;
    flex-direction: row;
    max-width: 90%;
    font-size: 3em;
  }

  #tiiime {
    font-size: 2em;
  }

  h1 {
    line-height: 1em;
    margin: 5px;
  }
}

@media screen and (max-width: 574px) {

  #text-box {
    order: 2;
    flex-direction: row;
    max-width: 90%;
    font-size: 2em;
  }

  #tiiime {
    font-size: 2.5em;
  }

  h1 {
    line-height: 1em;
    margin: 5px;
  }
}

@media screen and (max-width: 421px) {

  #text-box {
    order: 2;
    flex-direction: row;
    max-width: 90%;
    font-size: 1.5em;
  }

  #tiiime {
    font-size: 1.8em;
  }

  h1 {
    line-height: 1em;
    margin: 5px;
  }
}

</style>