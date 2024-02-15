<template>
  <div class="home-container">
    <main class="home-main">
      <Menu menuHeight="4vh" class="home-menu"></Menu>

    </main>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped lang="scss">
  .home-container{
    min-height: 100vh;
    height: 1500px;
    overflow-y: auto;   
   

    .home-main{
      background-image: url('/home-background-small.png');
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      width: 100vw;
      min-height: 100vh;
      height: auto;
      background-color: red;

      .home-menu{
        position: fixed;
        top: 0;
      }

    }
  }

  @media screen and (min-width: 980px) {
    .home-container {
      .home-main{
        background-size: 100vw 100vh;
      }
    }
  }


</style>