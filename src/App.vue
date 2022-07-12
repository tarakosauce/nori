<script setup lang="ts">
</script>

<template>
    <Navbar />
    <div id="container" w-full justify-center items-center>
      <WhatTime />
      <div id="timebox" border black dark:border white m2 p2>
        <SearchBar />
        <Agenda />
      </div>
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Patua+One&display=swap');

html.dark {
  background: #000;
  color: #fff;
  color-scheme: dark;
}

html, body {
  height: 100%;
  min-height: 100%;
  overflow: hidden;
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
      height: 100%;
  min-height: 100%;
}

#container {
  display: flex;
  flex-direction: row;
  height: 100%;
}

#timebox {
  width: 40%;
  height: 500px;
  max-height: 500px;
}

.timemono {
  padding-right: 10px;
}

.cityname {
  font-size: 1.2em;
}

@media screen and (max-width: 1270px) {
  #container {
    flex-direction: column;
  }

  #timebox {
    width: 90%;
  }

}

@media screen and (max-width: 421px) {
  .timemono {
    padding-right: 0;
  }

  .cityname {
  font-size: 1em;
}

}

</style>
