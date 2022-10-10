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
        10:00 AM - 05:00 PM
        <img src="~/assets/Hacktoberfest/star.png" />
        Delhi NCR
      </span>

      <span class="only-mobile">
        16th Oct 2022
        <br />
        10:00 AM - 05:00 PM
        <br />
        Delhi NCR
      </span>

      <a
        href="https://lu.ma/event/evt-jaolIB5dAflB1NL"
        class="luma-checkout--button"
        data-luma-action="checkout"
        data-luma-event-id="evt-jaolIB5dAflB1NL"
        target="_blank"
      >
        Register Now
      </a>

      <!-- <img
        class="solana"
        alt="solana"
        src="~/assets/Hacktoberfest/solana.png"
      /> -->
    </section>

    <section class="about-section" id="about">
      <div class="parallelograms">
        <h4>ABOUT EVENT</h4>
        <div class="parallelograms-only">
          <div v-for="n in 14" v-bind:key="n" class="parallelogram"></div>
        </div>
      </div>
      <span>
        Hacktoberfest is DigitalOcean’s annual month-long event that encourages
        everyone to contribute to Open Source throughout the month of October.
        <a
          href="https://hackthisfall.tech"
          style="color: #9092ff"
          target="_blank"
          >Hack This Fall</a
        >
        and
        <a href="https://solana.com" style="color: #9092ff" target="_blank"
          >Solana</a
        >
        bring you an in-person Hacktoberfest event where you can join with the
        community to learn, explore and contribute towards Open Source!
        <br /><br />Much of modern tech infrastructure—including some of
        DigitalOcean’s own products—relies on open-source projects built and
        maintained by passionate people who often don’t have the staff or
        budgets to do much more than keeping the project alive.Hacktoberfest is
        all about giving back to those projects, sharpening skills, and
        celebrating all things open source, especially the people that make open
        source so special.
      </span>

      <a
        href="https://hacktoberfest.com/"
        class="luma-checkout--button"
        target="_blank"
      >
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

    <section class="speaker-section" id="speakers">
      <div class="parallelograms">
        <h4>SPEAKERS</h4>
        <div class="parallelograms-only">
          <div v-for="n in 14" v-bind:key="n" class="parallelogram"></div>
        </div>
      </div>

      <PeopleSection />
    </section>

    <section class="partner-section" id="partners">
      <div class="parallelograms">
        <h4>PARTNERS</h4>
        <div class="parallelograms-only">
          <div v-for="n in 14" v-bind:key="n" class="parallelogram"></div>
        </div>
      </div>

      <div class="partners">
        <div class="partner-card">
          <h5>Community Member</h5>
          <img class="superteam" src="~/assets/Hacktoberfest/superteam.png" />
        </div>
        <div class="partner-card habsida-card">
          <h5>Ecosystem Partner</h5>
          <img class="habsida" src="~/assets/Hacktoberfest/habsida.png" />
        </div>
        <div class="partner-card tcw-card">
          <h5>Venue Partner</h5>
          <img
            class="theCircleWork"
            src="~/assets/Hacktoberfest/thecirclework.png"
          />
        </div>
      </div>
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
        <div class="links">
          <a
            class="link first"
            href="https://hacktoberfest.com/participation/#beginner-resources"
            target="_blank"
            >RESOURCES</a
          >
          <a class="link" href="https://do.co/hacktoberconduct" target="_blank"
            >CODE OF CONDUCT</a
          >
          <a class="link" href="https://hackthisfall.tech/" target="_blank"
            >HTF SEASON 3</a
          >
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
          href="https://discord.hackthisfall.tech"
        >
          <img src="~/assets/Hacktoberfest/discord.png" class="social first" />
        </a>
        <a
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
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.linkedin.com/company/hackthisfall/"
        >
          <img src="~/assets/Hacktoberfest/linkedin.png" class="social" /> </a
        ><a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.youtube.com/channel/UCpdsmUIkLpfopjURSYF1gaA"
        >
          <img src="~/assets/Hacktoberfest/youtube.png" class="social" />
        </a>
      </div>
    </section>
  </div>
</template>

<script>
import NavigationBar from "~/components/Hacktoberfest/NavigationBar";
import PeopleSection from "~/components/Hacktoberfest/PeopleSection";
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
body {
  &::-webkit-scrollbar {
    display: none;
  }

  background: rgba(23, 15, 30, 1);

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.container-hacktoberfest {
  min-height: 100vh;
  width: 100vw;
  background: url(~/assets/Hacktoberfest/grid-bg.png),
    linear-gradient(rgba(23, 15, 30, 0.1), rgba(23, 15, 30, 0.1));
  background-size: 100% 100%;
  background-blend-mode: overlay;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;

  font-family: "Jetbrains Mono", monospace;
  color: white;
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

    // font-family: "Jetb";
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
    margin-top: 6rem;
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
    margin-top: 6rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 90%;

    // font-size: 5rem;
  }

  .speaker-section {
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 90%;

    // font-size: 5rem;
  }

  .partner-section {
    margin-top: 7rem;
    // display: flex;
    // flex-direction: column;
    align-items: flex-start;
    width: 90%;

    .partners {
      display: flex;
      margin-top: 2rem;

      .partner-card {
        display: flex;
        flex-direction: column;
        align-items: center;

        font-size: 1.6rem;

        &.tcw-card {
          margin-left: 6rem;
          margin-top: unset;
        }

        &.habsida-card {
          margin-left: 6rem;
          margin-top: unset;
        }        

        .habsida {
          max-width: 12rem;
          margin-top: 3.5rem;
        }

        .superteam {
          max-width: 12rem;
          margin-top: 0.5rem;
        }

        .theCircleWork {
          max-width: 10rem;
        }
      }

      @include respond-below(md) {
        flex-direction: column;
        align-content: center;

        .partner-card {
          display: flex;
          flex-direction: column;
          align-items: center;

          font-size: 1.8rem;
          margin-top: 1rem;

          &.tcw-card {
            margin-left: 0rem;
            margin-top: 3rem;
          }

          &.habsida-card {
            margin-left: 0rem;
            margin-top: 3rem;
          }

          .habsida {
            max-width: 16rem;
            margin-top: 1rem;
          }

          .theCircleWork {
            max-width: 10rem;
            margin-top: 1rem;
          }
        }
      }
    }
  }

  .faq-section {
    margin-top: 5rem;
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

      .links {
        .link {
          font-family: "Jetbrains Mono", monospace;

          font-weight: 500;
          color: #fff;
          text-decoration: none;
          margin-left: 1.5rem;

          &.first {
            margin-left: 0;
          }

          &:hover {
            color: #40ddff;
            opacity: 1;
          }
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

        .links {
          margin-top: 2rem;
          .link {
            font-family: "Jetbrains Mono", monospace;
            font-size: 0.9rem;
            font-weight: 500;
            color: #fff;
            text-decoration: none;
            margin-left: 1.1rem;

            &.first {
              margin-left: 0;
            }
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
      display: flex;
      .social {
        width: 2rem;
        height: 2rem;
        margin-left: 2rem;
      }
    }

    @include respond-below(sm) {
      flex-direction: column-reverse;

      .socials {
        margin-bottom: 1rem;

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