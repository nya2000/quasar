<template>
  <q-btn
    unelevated
    class="default_button"
    :class="{
      outlined_variant: outlined,
    }"
  >
    <slot />
  </q-btn>
</template>

<script setup>
defineOptions({
  name: "TelegramButton",
});

const props = defineProps({
  outlined: {
    type: Boolean,
    required: false,
  },
});
</script>

<style scoped lang="scss">
.default_button {
  background-color: $button_color;
  color: $button_text_color;
  border-radius: 8px;
  padding: 6px 12px;
  width: fit-content;

  &.outlined_variant {
    background-color: $second_button_color;
    color: $accent_text_color;
  }
  &:disabled {
    background-color: $button_main_disabled_color !important;
    color: $text_main_disabled_color !important;
    cursor: not-allowed;
  }
}
</style>
