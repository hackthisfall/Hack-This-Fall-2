<template>
  <ScrollTopComponent>
    <a href="#" class="btn">
      <img src="~/assets/HTF2/orange-arrow-up.svg" alt="go to top" />
    </a>
  </ScrollTopComponent>
</template>

<script>
import ScrollTopComponent from "~/components/ScrollTop";
export default {
  components: {
    ScrollTopComponent,
  },
};
</script>

<style>
.btn {
  display: flex;
  border-radius: 50%;
  background-color: #fff;
  width: 3rem;
  height: 3rem;
  padding: 0.8rem;
  transition: 0.5s;
  -moz-transition: 0.5s;
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  box-shadow: rgba(255, 107, 0, 0.1) 0px 0px 10px 0px;
  color: black;
  cursor: pointer;
}

.btn:hover {
  background-color: rgba(178, 178, 178, 1);
  transition: 0.5s;
  -moz-transition: 0.5s;
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
}
</style>
