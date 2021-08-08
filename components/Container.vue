<template>
  <div
    class="container"
    v-waypoint="{
      active: true,
      callback: onWaypoint,
      options: intersectionOptions,
    }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: "Container",
  props: ["name"],
  data() {
    return {
      incrementCalled: false,
      intersectionOptions: {
        root: null,
        rootMargin: "0px 0px 0px 0px",
        threshold: [0.4, 1],
      },
    };
  },
  methods: {
    onWaypoint({ going }) {
      if (!this.name) return;

      if (going === this.$waypointMap.GOING_IN) {
        [
          "about",
          "tracks",
          "speakers",
          "sponsors",
          "testimonials",
          "faq",
          "team",
        ].forEach((e) => {
          document.getElementById(`nav-link-${e}`).classList.remove("active");
        });
        if (this.name !== "hero")
          document
            .getElementById(`nav-link-${this.name}`)
            .classList.add("active");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: block;
  width: 90%;
  margin: 0 auto;
}
</style>
