<template>
  <q-page class="homePage_container">
    <HomePageWelcomeScreen
      @click="hideWelcomeScreen"
      v-if="showWelcomeScreen"
      class="homepage-welcome-screen"
    />
    <section class="title_section">
      <h1>Меняйте валюту <span class="colored">без посредников</span></h1>
      <p>Децентрализованный P2P обмен.</p>
      <p class="hint">
        Ваш телеграм аккаунт не связан с ботом напрямую. Вы можете иметь
        множество аккаунтов используя лишь один профиль тг
      </p>
    </section>
    <div class="btns_container">
      <router-link to="/login" style="width: 100%"
        ><TelegramButton>Войти</TelegramButton></router-link
      >
      <router-link to="/register" style="width: 100%"
        ><TelegramButton>Зарегистрироваться</TelegramButton></router-link
      >
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import TelegramButton from "../components/TelegramButton";
import HomePageWelcomeScreen from "../components/HomePageWelcomeScreen";
defineOptions({
  name: "IndexPage",
});
const showWelcomeScreen = ref(true);

const hideWelcomeScreen = () => {
  const elem = document.querySelector(".homepage-welcome-screen");
  if (elem) {
    elem.classList.add(
      "animate__animated",
      "animate__slower",
      "animate__fadeOutUpBig"
    );
    elem.addEventListener("animationend", () => {
      showWelcomeScreen.value = false;
    });
  }
};
</script>

<style scoped lang="scss">
.homePage_container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .title_section {
    position: relative;
    margin-top: 30vh;
    display: flex;
    flex-direction: column;
    gap: 16px;
    h1 {
      font-weight: 700;
      font-size: 56px;
      line-height: 53.2px;
      letter-spacing: -0.05em;
      text-align: left;
      .colored {
        color: $accent_text_color;
      }
    }
  }

  .btns_container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    margin-bottom: 24px;
    button {
      width: 100%;
    }
  }
}
</style>
