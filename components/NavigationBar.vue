<template>
  <div class="navigation-bar">
    <div class="no-extend">
      <div class="navigation-contents">
        <!-- Branding area -->
        <div class="branding">
          <NuxtLink to="/">
            Hello
            <!-- <img src="~/assets/header-logo.svg" /> -->
          </NuxtLink>
        </div>
        <!-- Menu area -->
        <div class="menu-area">
          <ul class="nav-links">
            <li>
              <a href="/#responsibility">Responsibility</a>
            </li>
            <li>
              <a href="/#rewards">Rewards</a>
            </li>
            <li>
              <a href="/#testimonials">Testimonials</a>
            </li>
            <li v-if="showJoinButton">
              <NuxtLink to="/join">
                <button class="btn">Join Now</button>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showJoinButton: false,
    };
  },
  // methods: {
  //   hs(e) {
  //     var element = document.getElementById("hero-image");
  //     var topPos = element.getBoundingClientRect().top + window.scrollY;

  //     if (topPos < -100) {
  //       this.showJoinButton = true;
  //     } else {
  //       this.showJoinButton = false;
  //     }
  //   },
  // },
  // mounted() {
  //   this.element = document.getElementById("__layout");
  //   this.element.addEventListener("scroll", this.hs);
  // },
};
</script>

<style lang="scss" scoped>
.navigation-bar {
  background-color: #e4f7ff;
  z-index: 500;
  padding: 0rem 4rem;
  position: sticky;
  top: 0;
  position: -webkit-sticky;

  .navigation-contents {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0.75rem 0rem;
    padding: 10px;

    @include respond-below(sm) {
      justify-content: center;
    }

    .menu-area {
      display: flex;
      align-items: center;

      @include respond-below(sm) {
        display: none;
      }

      ul.nav-links {
        display: flex;
        align-items: center;
        font-weight: 600;

        li {
          margin-right: 1rem;
          @media (max-width: 850px) {
            margin-right: 0.5rem;
          }
          @media (max-width: 790px) {
            margin-right: 0.3rem;
          }
          &:nth-last-of-type(1) {
            margin-right: 0;
          }
          list-style: none;
          a {
            color: #848484;
            padding: 10px 15px;
            transition: 0.2s all ease-in-out;
            text-decoration: none;
            font-size: 1.1rem;
            opacity: 0.95;

            &:hover {
              color: #7c7979;
              opacity: 1;
            }

            .btn {
              font-family: "Open Sans";
              background-color: #3067f0;
              border: none;
              color: white;
              font-weight: 700;
              font-size: 1.1rem;
              border-radius: 0.2rem;
              padding: 0.75rem 2.5rem;
              cursor: pointer;
              transition: 0.2s;
              opacity: 0.95;

              @media (max-width: 850px) {
                padding: 0.75rem 1rem;
              }

              @media (max-width: 790px) {
                padding: 0.75rem 0.5rem;
              }

              &:hover {
                background-color: #1656f7;
                opacity: 1;
              }
            }
          }
        }
      }
    }
  }
}
</style>
