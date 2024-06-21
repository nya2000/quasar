<template>
  <form class="auth_form_container">
    <input
      class="form_input"
      v-for="(field, index) in FORM_FIELDS"
      :key="index"
      :placeholder="field.placeholder"
      :required="field.required"
    />
  </form>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { DEFAULT_LOGIN_FIELDS } from "../utils/const";
defineOptions({
  name: "AuthorizationForm",
});

const props = defineProps({
  type: {
    type: String,
    required: true,
  },
});

const getFormFields = () => {
  if (!DEFAULT_LOGIN_FIELDS) return;
  return DEFAULT_LOGIN_FIELDS.filter((field) =>
    field.types.includes(props.type)
  );
};

const FORM_FIELDS = ref(getFormFields());

onMounted(() => {
  console.log("mount");
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
