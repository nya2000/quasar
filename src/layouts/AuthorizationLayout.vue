<template>
  <q-layout view="lHh Lpr lFf" style="background-color: #f4f4f4">
    <q-page-container
      style="padding: 16px; padding-bottom: 24px; height: 100vh; width: 100%"
    >
      <h2 class="auth_layout_title">
        {{ pageType === AUTH_PAGE_TYPES.LOGIN ? "Вход" : "Регистрация" }}
      </h2>
      <div
        style="
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        "
      >
        <router-view @updateFormData="updateFormData" />
        <section class="bottom_auth_buttons">
          <router-link style="width: 100%"
            ><TelegramButton style="width: 100%">{{
              pageType === AUTH_PAGE_TYPES.LOGIN
                ? "Войти"
                : "Зарегистрироваться"
            }}</TelegramButton></router-link
          >
          <span
            >{{
              pageType === AUTH_PAGE_TYPES.LOGIN
                ? "У вас еще нет аккаунта?"
                : "У вас уже есть аккаунт?"
            }}
            <router-link
              class="hint_link"
              :to="pageType === AUTH_PAGE_TYPES.LOGIN ? '/register' : '/login'"
              >{{
                pageType === AUTH_PAGE_TYPES.LOGIN
                  ? "Зарегестрироваться"
                  : "Войти"
              }}</router-link
            >
          </span>
        </section>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { AUTH_PAGE_TYPES } from "../utils/const";
import { useRoute } from "vue-router";
import { ref, watch } from "vue";
import TelegramButton from "../components/TelegramButton";
defineOptions({
  name: "AuthorizationLayout",
});
const route = useRoute();
const pageType = ref(getPageType());

function getPageType() {
  const getPageType = route.path.includes(AUTH_PAGE_TYPES.LOGIN.toLowerCase())
    ? AUTH_PAGE_TYPES.LOGIN
    : AUTH_PAGE_TYPES.REGISTER;
  return getPageType;
}

const updatePageInformation = () => {
  pageType.value = getPageType();
};

watch(route, () => updatePageInformation());

const updateFormData = (formData) => {
  console.log(formData);
};
</script>

<style lang="scss" scoped>
.auth_layout_title {
  font-size: 32px;
  font-weight: 600;
  line-height: 33.6px;
  letter-spacing: -0.05em;
  text-align: left;
}
.bottom_auth_buttons {
  position: fixed;
  width: 100%;
  bottom: 24px;
  left: 0;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}
.hint_link {
  color: $text-hint-color;
}
</style>
