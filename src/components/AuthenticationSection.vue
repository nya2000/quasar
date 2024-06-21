<template>
  <div style="display: flex; flex-direction: column; gap: 8px">
    <div
      style="display: flex; align-items: center; justify-content: space-between"
    >
      <q-img
        src="../assets/auth_code.png"
        style="height: 100px; max-width: 300px"
      />
      <div
        style="
          padding: 8px;
          border-radius: 8px;
          background-color: #fff;
          width: fit-content;
        "
      >
        <q-img
          src="../assets/icons/refresh-2.svg"
          style="width: 24px; height: 24px"
        />
      </div>
    </div>
    <p class="form_input">
      Введите символы с картинки. Используйте строчные и прописные буквы, цифры.
    </p>
    <input
      style="padding: 15px; border-radius: 8px"
      placeholder="Введите код с картинки*"
    />
    <input
      style="padding: 15px; border-radius: 8px"
      placeholder="Код Google аутентификации"
      v-if="type === AUTH_PAGE_TYPES.LOGIN"
    />
  </div>
</template>

<script setup>
import { AUTH_PAGE_TYPES } from "src/utils/const";
defineOptions({
  name: "AuthenticationSection",
});

const props = defineProps({
  type: {
    type: String,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.form_input {
  color: $text-hint-color;
  font-weight: 400;
  font-size: 14px;
  line-height: 16.71px;
}
</style>
