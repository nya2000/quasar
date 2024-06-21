<template>
  <form class="auth_form_container">
    <input class="form_input" placeholder="Логин*" required type="text" />
    <input
      class="form_input"
      placeholder="Никнейм*"
      required
      type="text"
      v-if="type === AUTH_PAGE_TYPES.LOGIN"
    />
    <input
      class="form_input"
      placeholder="E-mail@gmail.com"
      type="email"
      v-if="type === AUTH_PAGE_TYPES.LOGIN"
    />
    <input class="form_input" placeholder="Пароль*" required type="password" />
  </form>
</template>

<script setup>
import { AUTH_PAGE_TYPES } from "../utils/const";
defineOptions({
  name: "AuthorizationForm",
});
// .

const props = defineProps({
  type: {
    type: String,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.auth_form_container {
  display: flex;
  flex-direction: column;
  margin-top: 28px;
  gap: 8px;
  .form_input {
    padding: 15px;
    border-radius: 8px;
  }
}
</style>
