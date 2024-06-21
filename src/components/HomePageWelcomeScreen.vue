<template>
  <div class="welcome_screen">
    <div class="title">TWIX.IM</div>
  </div>
</template>

<script setup>
defineOptions({
  name: "HomePageWelcomeScreen",
});
</script>

<style scoped>
.welcome_screen {
  position: fixed;
  z-index: 999 !important;
  width: 100vw;
  height: 100vh;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(347.96deg, #41126b 0%, #aa4ce0 100%);
  .title {
    margin: 0 auto;
    padding: 0;
    color: #fff;
    font-size: 60px;
    font-weight: 700;
    line-height: 71.6px;
    letter-spacing: -0.08em;
    text-align: left;
    width: fit-content;
  }
}
</style>
