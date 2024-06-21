<template>
  <AuthorizationForm :type="pageType" />
  <!-- <button @click="provideDataToLayout">Provide data</button> -->
</template>

<script setup>
import { ref, defineEmits, watch } from "vue";
import { useRoute } from "vue-router";
import AuthorizationForm from "../components/AuthorizationForm";
import { AUTH_PAGE_TYPES } from "../utils/const";

defineOptions({
  name: "LoginPage",
});

const route = useRoute();
const pageType = ref(getPageType());

function getPageType() {
  const getPageType = route.path.includes(AUTH_PAGE_TYPES.LOGIN.toLowerCase())
    ? AUTH_PAGE_TYPES.LOGIN
    : AUTH_PAGE_TYPES.REGISTER;
  return getPageType;
}

const loginData = ref("loginData value");
const emit = defineEmits(["updateFormData"]);

const provideDataToLayout = () => {
  emit("updateFormData", loginData.value);
};
</script>
