<template>
  <div class="container">
    <img class="htf" alt="htf" src="~/assets/Hacktoberfest/HTFLogo.png" />
    <img
      class="solana"
      alt="solana"
      src="~/assets/Hacktoberfest/solana.png"
    />
    <img class="grid" alt="grid" src="~/assets/Hacktoberfest/Grid.png" />
    <img
      class="section"
      alt="middle section"
      src="~/assets/Hacktoberfest/Section.png"
    />
    <img
      class="section-mobile"
      alt="middle section"
      src="~/assets/Hacktoberfest/SectionMobile.png"
    />
  </div>
</template>

<style lang="scss">
.container {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background: url(~/assets/Hacktoberfest/Background.png);
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}

.grid {
  height: 100%;
  @include respond-below(mobile) {
    height: 80%;
  }
}

.section {
  position: absolute;
  width: 50vw;
  left: 50%;
  transform: translate(-50%, 0);
  top: 25%;
  
  @include respond-below(mobile) {
    display: none;
  }

  @include respond-below(xs) {
    top: 25%;
  }

  @include respond-below(sm) {
    width: 80vw;
    top: 30%;
  }
  
  @include respond-below(lg) {
    width: 70vw;
  }
}

.section-mobile {
  display: none;
  position: absolute;
  @include respond-below(mobile) {
    display: unset;
    top: 15%;
    width: 85vw;
  }
}

.htf {
  position: absolute;
  top: 0;
  left: 50px;
  width: 145px;
  @include respond-below(mobile) {
    width: 79px;
    left: 31px;
  }

  @include respond-below(xs) {
    width: 100px;
    left: 35px;
  }
}

.solana {
  position: absolute;
  top: 52px;
  right: 50px;
  width: 201px;
  @include respond-below(mobile) {
    width: 130px;
    top: 23px;
    right: 31px;
  }
  @include respond-below(xs) {
    width: 138px;
    top: 23px;
    right: 35px;
  }
}

#mlh-trust-badge {
  display: none !important;
}
</style>
