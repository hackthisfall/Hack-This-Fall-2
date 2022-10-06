<template>
  <div class="navigation-bar">
    <div class="no-extend">
      <div class="navigation-contents">
        <!-- Branding area -->
        <div class="branding">
          <NuxtLink to="/hacktoberfest">
            <img class="headerImage" src="~/assets/Hacktoberfest/HTFLogo.png" />
          </NuxtLink>

          <img
            class="solana"
            alt="solana"
            src="~/assets/Hacktoberfest/solana.png"
          />
        </div>

        <!-- Menu area -->
        <div class="menu-area">
          <ul class="nav-links">
            <li
              v-for="(navlink, index) in navlinks"
              :key="index"
              :id="'nav-link-' + navlink.text"
            >
              <a
                :href="navlink.link"
                :target="navlink.newTab ? '_new' : '_self'"
                >{{ navlink.text }}</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- <Slide class="slidingDrawer" :closeOnNavigation="true">
      <a
        v-for="(navlink, index) in navlinks"
        :key="index"
        :href="navlink.link"
        :target="navlink.newTab ? '_new' : '_self'"
      >
        <span>{{ navlink.text }}</span>
      </a>
    </Slide> -->
  </div>
</template>

<script>
import { Slide } from "vue-burger-menu";

export default {
  data() {
    return {
      navlinks: [
        { link: "/hacktoberfest#home", text: "home" },
        { link: "/hacktoberfest#about", text: "about" },
        { link: "/hacktoberfest#agenda", text: "agenda" },
        { link: "/hacktoberfest#speakers", text: "speakers" },
        { link: "/hacktoberfest#faq", text: "faqs" },
      ],
    };
  },
  components: {
    Slide,
  },
};
</script>

<style lang="scss" scoped>
.navigation-bar {
  z-index: 500;
  top: 0.5rem;
  width: 90%;
  height: auto;
  font-family: "Jetbrains Mono", monospace;

  @include respond-below(lg) {
    margin: unset;
    padding: 0px 15px;
  }

  .slidingDrawer {
    min-height: 100vh !important;
    @include respond-above(lg) {
      display: none;
    }
    a {
      span {
        text-transform: uppercase;
      }
    }
  }

  .navigation-contents {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0.25rem 0rem;

    // @include respond-below(lg) {
    //   display: none;
    // }

    // @include respond-below(sm) {
    //   justify-content: center;
    // }

    .branding {
      display: flex;
      // padding-top: 0.25rem;
      .headerImage {
        height: 8.5rem;
        margin-bottom: -0.1rem;
      }

      .solana {
        margin-left: 1.5rem;
        align-self: center;
        width: 12rem;
      }
    }

    .menu-area {
      display: flex;
      align-items: center;
      align-self: center;

      @include respond-below(lg) {
        display: none;
      }

      @include respond-below(sm) {
        display: none;
      }

      ul.nav-links {
        display: flex;
        align-items: center;
        font-weight: 600;

        li {
          margin-right: 1.7rem;
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

          &.active {
            a {
              color: rgba(226, 62, 37, 1);
            }
            &::before {
              content: "\2022"; /* Add content: \2022 is the CSS Code/unicode for a bullet */
              color: rgba(226, 62, 37, 1); /* Change the color */
              font-weight: bold; /* If you want it to be bold */
              font-size: 1.2rem;
              display: inline-block; /* Needed to add space between the bullet and the text */
              width: 1em; /* Also needed for space (tweak if needed) */
              margin-left: -0.4rem; /* Also needed for space (tweak if needed) */
              margin-right: -0.8rem; /* Also needed for space (tweak if needed) */
            }
          }

          a {
            color: #fff;
            padding: 10px 10px;
            transition: 0.2s all ease-in-out;
            text-decoration: none;
            font-size: 1.1rem;
            opacity: 0.95;
            text-transform: uppercase;

            &:hover {
              color: #40ddff;
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
