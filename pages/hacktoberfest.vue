<template>
  <div class="container container-hacktoberfest">
    <NavigationBar />
    <section class="hero-section">
      <img
        src="~/assets/Hacktoberfest/hacktoberfest-logo.png"
        class="hacktoberfest-logo"
      />
      <img
        src="~/assets/Hacktoberfest/hacktoberfest-logo-vertical.png"
        class="hacktoberfest-logo-mobile"
      />
      <span class="only-desktop">
        16th Oct 2022
        <img src="~/assets/Hacktoberfest/star.png" />
        10:00 A.M - 5:00 P.M
        <img src="~/assets/Hacktoberfest/star.png" />
        Delhi, NCR
      </span>

      <span class="only-mobile">
        16th Oct 2022, 10:00 A.M - 5:00 P.M
        <br />
        Delhi, NCR
      </span>

      <a
        href="https://lu.ma/event/evt-jaolIB5dAflB1NL"
        class="luma-checkout--button"
        data-luma-action="checkout"
        data-luma-event-id="evt-qGGsEAq2bXhbXIM"
      >
        Register
      </a>

      <!-- <img
        class="solana"
        alt="solana"
        src="~/assets/Hacktoberfest/solana.png"
      /> -->
    </section>

    <section class="about-section" id="about">
      <div class="parallelograms">
        <h4>ABOUT US</h4>
        <div class="parallelograms-only">
          <div v-for="n in 14" v-bind:key="n" class="parallelogram"></div>
        </div>
      </div>
      <span>
        Hacktoberfest is DigitalOcean’s annual month-long event that encourages
        everyone to contribute to Open Source throughout the month of October.
        Hack This Fall brings you an in-person Hacktoberfest event where you can
        join with the community to learn, explore and contribute!
        <br /><br />Much of modern tech infrastructure—including some of
        DigitalOcean’s own products—relies on open-source projects built and
        maintained by passionate people who often don’t have the staff or
        budgets to do much more than keeping the project alive.Hacktoberfest is
        all about giving back to those projects, sharpening skills, and
        celebrating all things open source, especially the people that make open
        source so special.
      </span>

      <a href="https://hacktoberfest.com/" class="luma-checkout--button">
        >> Know More
      </a>
    </section>

    <section class="agenda-section" id="agenda">
      <div class="parallelograms">
        <h4>AGENDA</h4>
        <div class="parallelograms-only">
          <div v-for="n in 14" v-bind:key="n" class="parallelogram"></div>
        </div>
      </div>

      <ScheduleSection />
    </section>

    <section class="faq-section" id="faq">
      <div class="parallelograms">
        <h4>FAQS</h4>
        <div class="parallelograms-only">
          <div v-for="n in 14" v-bind:key="n" class="parallelogram"></div>
        </div>
      </div>

      <FAQSection />
    </section>

    <section class="subfooter-section">
      <div class="left">
        <h4>HOPE TO SEE YOU THERE</h4>
        <div class="branding">
          <NuxtLink to="/">
            <img class="headerImage" src="~/assets/Hacktoberfest/HTFLogo.png" />
          </NuxtLink>

          <img
            class="solana"
            alt="solana"
            src="~/assets/Hacktoberfest/solana.png"
          />
        </div>
      </div>

      <img src="~/assets/Hacktoberfest/astronaut.png" class="astronaut" />
    </section>

    <section class="footer-section">
      <span class="copyright"
        >Copyright © 2022 Hack This Fall. All rights reserved</span
      >
      <div class="socials">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.youtube.com/channel/UCpdsmUIkLpfopjURSYF1gaA"
        >
          <img
            src="~/assets/Hacktoberfest/youtube.png"
            class="social first"
          /> </a
        ><a
          rel="noopener noreferrer"
          target="_blank"
          href="https://discord.hackthisfall.tech"
        >
          <img src="~/assets/Hacktoberfest/discord.png" class="social" /> </a
        ><a
          rel="noopener noreferrer"
          target="_blank"
          href="https://twitter.com/hackthisfall/"
        >
          <img src="~/assets/Hacktoberfest/twitter.png" class="social" /> </a
        ><a
          rel="noopener noreferrer"
          target="_blank"
          href="https://instagram.com/hackthisfall"
        >
          <img src="~/assets/Hacktoberfest/instagram.png" class="social" />
        </a>
      </div>
    </section>

    <!-- <img class="htf" alt="htf" src="~/assets/Hacktoberfest/HTFLogo.png" /> -->
    <!-- <img class="grid" alt="grid" src="~/assets/Hacktoberfest/Grid.png" /> -->
    <!-- <img
      class="section"
      alt="middle section"
      src="~/assets/Hacktoberfest/Section.png"
    />
    <img
      class="section-mobile"
      alt="middle section"
      src="~/assets/Hacktoberfest/SectionMobile.png"
    /> -->
  </div>
</template>

<script>
import NavigationBar from "~/components/Hacktoberfest/NavigationBar";
import PeopleSection from "~/components/PeopleSection";
import FAQSection from "~/components/Hacktoberfest/FAQSection";
import ScheduleSection from "~/components/Hacktoberfest/ScheduleSection";

export default {
  components: {
    NavigationBar,
    PeopleSection,
    FAQSection,
    ScheduleSection,
  },
};
</script>

<style lang="scss" >
.container-hacktoberfest {
  min-height: 100vh;
  width: 100vw;
  background: url(~/assets/Hacktoberfest/grid-bg.png),
    linear-gradient(rgba(23, 15, 30, 0.1), rgba(23, 15, 30, 0.1));
  background-size: 100% 100%;
  background-blend-mode: overlay;
  background-attachment: fixed;

  color: white;
  // background-repeat: no-repeat;
  // background-attachment: fixed;
  // overflow: hidden;
  // background: url(~/assets/Hacktoberfest/Background.png);
  // background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  display: flex;
  flex-direction: column;
  align-items: center;

  .hero-section {
    width: 90%;
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    color: white;

    font-family: "Inter";
    .hacktoberfest-logo {
      max-width: 50%;

      @include respond-below(sm) {
        display: none;
      }
    }

    .hacktoberfest-logo-mobile {
      max-width: 80%;
      display: none;

      @include respond-below(sm) {
        display: unset;
      }
    }

    .only-desktop {
      display: flex;
      align-items: center;
      font-size: 1.5rem;

      @include respond-below(sm) {
        display: none;
      }

      img {
        max-width: 4rem;
        padding-left: 1rem;
        padding-right: 1rem;
      }
    }

    .only-mobile {
      display: flex;
      align-items: center;
      font-size: 1.3rem;
      display: none;

      @include respond-below(sm) {
        display: unset;
        text-align: center;
      }

      img {
        max-width: 4rem;
        padding-left: 1rem;
        padding-right: 1rem;
      }
    }

    .solana {
      align-self: flex-start;
      margin-top: 2rem;
      // right: 50px;
      width: 10rem;
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
  }

  .about-section {
    margin-top: 4rem;
    width: 90%;
    font-family: "Jetbrains Mono", monospace;
    font-weight: 400;
    font-size: 1.3rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    span {
      margin-top: 2rem;
      color: #e5e1e6;
      text-transform: uppercase;
      opacity: 0.75;
    }
  }

  .agenda-section {
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 90%;

    // font-size: 5rem;
  }

  .faq-section {
    margin-top: 3rem;
    // display: flex;
    // flex-direction: column;
    align-items: flex-start;
    width: 90%;

    // font-size: 5rem;
  }

  .subfooter-section {
    display: flex;
    align-items: center;
    font-family: "Vanguard";
    justify-content: space-between;
    width: 90%;

    h4 {
      font-size: 4rem;
      color: #e5e1e6;
      margin-right: 1rem;
    }

    .left {
      display: flex;
      flex-direction: column;

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
    }

    .astronaut {
      width: 20rem;
    }

    @include respond-below(sm) {
      flex-direction: column-reverse;

      h4 {
        font-size: 2.5rem;
        margin-right: unset;
        text-align: center;
        margin-top: 1rem;
      }

      .left {
        .branding {
          flex-direction: column;
          align-items: center;

          .headerImage {
            height: 10rem;
          }

          .solana {
            margin-left: 0rem;
            width: 14rem;
          }
        }
      }
    }
  }

  .footer-section {
    margin-top: 4rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    color: #777e91;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    font-size: 0.9rem;

    .socials {
      .social {
        width: 2rem;
        margin-left: 2rem;
      }
    }

    @include respond-below(sm) {
      flex-direction: column;

      .socials {
        margin-top: 1rem;

        .social {
          width: 2rem;
          margin-left: 2rem;

          &.first {
            margin-left: 0;
          }
        }
      }
    }
  }
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

.parallelograms {
  display: flex;
  align-items: flex-end;
  font-family: "Vanguard";

  h4 {
    font-size: 4rem;
    color: #e5e1e6;
    margin-right: 1rem;
  }

  @include respond-below(sm) {
    flex-direction: column;
    align-items: flex-start;

    h4 {
      margin-right: unset;
      font-size: 2.5rem;
    }
  }

  .parallelograms-only {
    display: flex;
    flex-direction: row;

    .parallelogram {
      width: 20px;
      height: 0.75rem;
      transform: skew(-45deg);
      background: #e5e1e6;
      margin-left: 1rem;
      margin-bottom: 0.6rem;

      @include respond-below(sm) {
        margin-left: 0.75rem;
        margin-top: 0.75rem;
        margin-bottom: 0rem;

        &:nth-child(1) {
          margin-left: 0.4rem;
        }

        &:nth-child(12),
        &:nth-child(13),
        &:nth-child(14) {
          display: none;
        }
      }
    }
  }
}

#mlh-trust-badge {
  display: none !important;
}

.luma-checkout--button {
  margin-top: 2rem;
  font-size: 1.3rem;
  padding: 0.75rem 3rem;

  mask: linear-gradient(135deg, transparent 10px, red 0) top left,
    linear-gradient(-45deg, transparent 10px, red 0) bottom right;
  mask-size: 51% 100%;
  mask-repeat: no-repeat;

  -webkit-mask: linear-gradient(135deg, transparent 10px, red 0) top left,
    linear-gradient(-45deg, transparent 10px, red 0) bottom right;
  -webkit-mask-size: 51% 100%;
  -webkit-mask-repeat: no-repeat;

  color: rgba(23, 15, 30, 1);

  background: linear-gradient(92.37deg, #64e3ff -7.32%, #9192ff 94.95%);
  // height: 200px;
  text-decoration: none;
  font-family: "Jetbrains Mono", monospace;
}
</style>