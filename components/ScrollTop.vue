<template>
  <a href="#" v-show="visible" class="bottom-right">
    <slot></slot>
  </a>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      element: null,
    };
  },
  methods: {
    scrollListener() {
      this.visible = this.element.scrollTop > this.element.scrollHeight * 0.35;
    },
  },
  mounted() {
    this.element = document.querySelector("html");
    document.addEventListener("scroll", this.scrollListener);
  },
  beforeDestroy() {
    this.element.removeEventListener("scroll", this.scrollListener);
  },
};
</script>

<style scoped>
.bottom-right {
  z-index: 10000;
  position: fixed;
  bottom: 2rem;
  right: 4rem;
  cursor: pointer;
}
</style>
