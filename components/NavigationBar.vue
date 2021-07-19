<template>
  <div class="navigation-bar">
    <div class="no-extend">
      <div class="navigation-contents">
        <!-- Branding area -->
        <div class="branding">
          <NuxtLink to="/">
            <img class="headerImage" src="~/assets/HTF2/HTFLogo.svg" />
          </NuxtLink>
        </div>
        <!-- Menu area -->
        <div class="menu-area">
          <ul class="nav-links">
            <li>
              <a href="/#about">ABOUT</a>
            </li>
            <li>
              <a href="/#speakers">SPEAKERS</a>
            </li>
            <li>
              <a href="/#timeline">TIMELINE</a>
            </li>
            <li>
              <a href="/#schedule">SCHEDULE</a>
            </li>
            <li>
              <a href="/#tracks">TRACKS</a>
            </li>
            <li>
              <a href="/#sponsors">SPONSORS</a>
            </li>
            <li>
              <a href="/#faq">FAQ</a>
            </li>
            <li>
              <a href="/#team">TEAM</a>
            </li>
            <li>
              <a href="https://s1.hackthisfall.tech/">SEASON 1</a>
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
      showJoinButton: false
    };
  }
};
</script>

<style lang="scss" scoped>
.navigation-bar {
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 15px 2px;
  z-index: 500;
  padding: 0rem 1.5rem;
  position: sticky;
  top: 0;
  position: -webkit-sticky;
  width: 97%;
  border-radius: 1rem;
  margin: 1rem auto -3rem auto;

  .navigation-contents {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0.25rem 0rem;

    @include respond-below(sm) {
      justify-content: center;
    }

    .branding {
      padding-top: 0.25rem;
      .headerImage {
        height: 2.5rem;
        margin-bottom: -0.1rem;
      }
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
            padding: 10px 10px;
            transition: 0.2s all ease-in-out;
            text-decoration: none;
            font-size: 1.1rem;
            opacity: 0.95;

            &:hover {
              color: rgba(226, 62, 37, 1);
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
