<template>
  <div class="container">
    <img class="htf" alt="htf" src="~/assets/Hacktoberfest/HTFLogo.png" />
    <img class="solana" alt="solana" src="~/assets/Hacktoberfest/SolanaLogo.png" />
    <img class="grid" alt="grid" src="~/assets/Hacktoberfest/Grid.png" />
    <img class="section" alt="middle section" src="~/assets/Hacktoberfest/Section.png" />
  </div>
</template>

<style>
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
}

.section {
    position: absolute;
    width: 90vw;
    left: 50%;
    transform: translate(-50%, 0);
    top: -10%;
}

.htf {
  position: absolute;
  top: 0;
  left: 50px;
  width: 145px;
}

.solana {
  position: absolute;
  top: 52px;
  right: 50px;
  width: 201px;
}

#mlh-trust-badge {
  display: none !important;
}
</style>
