<template>
  <div id="top">
    <Container>
      <section class="content-section">
        <div class="contents">
          <div class="topSection">
            <img src="~/assets/HTF1/HTF-Logo.png" width="600" />
            <h3>
              BUILD AND SOLVE
            </h3>
            <h4>
              OCTOBER 31 - NOVEMBER 01, 2020
            </h4>
          </div>
          <div class="container">
            <div style="text-align: justify;">
              <p>
                Hack This Fall began with a mindset of encouraging new hackers
                to build unique projects regardless of the tech or field; the
                only focus was to create something meaningful and enjoy building
                while also solving the shared struggles of our surroundings.
                <br />
                <br />
                Hack This Fall Season 1 was a 24 Hours Virtual Hackathon
                organized on Oct 31st - Nov 1st, 2020. We organized this event
                during the global COVID19 crisis, where the entire world was
                suffering from a pandemic. The event allowed participants to
                join from the safety and comfort of their homes.
                <br />
                <br />
                In Season 1, we were joined by 500+ superb hackers from 170+
                cities, who all were motivated to build towards solving
                society’s everyday problems, and ended up building 50+ projects,
                which was in line with our motto i.e. “Build & Solve”. Hackers
                truly understood the value of our motto and showed their
                excellent piece of innovation and problem-solving skills. Not
                only this, we found hackers hacking individually and
                collaborating in a team, but this didn’t stop them from engaging
                with other hackers in a meaningful way.
                <br />
                <br />
                <img src="~/assets/HTF1/blogImage.png" width="100%" />
                <br />
                <br />
                While we are talking about hackathons and especially about Hack
                This Fall, it was not just limited to Coding and Building stuff.
                Hackers also had a ton of fun learning new skills and
                technologies. We hosted pre-hackathon speaker sessions where
                industry professionals were invited. They shared their knowledge
                about various domains like OpenSource, Game Development,
                BlockChain, Hackathons, DevRel, Web Technologies, Machine
                Learning, App Development, and whatnot; all these sessions were
                indeed so insightful for all our hackers.
                <br />
                <br />
                While the hackers were busy building their hacks, we also
                arranged multiple mini-events for all, where anyone could join,
                relax and enjoy their presence at the hackathon. Some of the
                mini-events included “MS Paint Bob-Ross,” where we flaunted our
                painting skills as we painted along with Bob Ross himself.
                Additionally, we also had “Hacker Hangouts,” which essentially
                helped everyone know more about each other. We even played games
                like “Among Us” and “Space Team”, which was a ton of fun. Not
                only this, but we also had “Mentor Connect” sessions, where
                hackers could interact with mentors and get feedback on their
                ideas/hacks.
                <br />
                <br />
                All in all, Season 1 was a huge success, thanks to all the
                fantastic hackers for joining and building with us. We couldn’t
                have made the process of running a hackathon at such a scale
                without the help & contribution from our elite panel of
                industry-leading speakers, experienced mentors, and righteous
                judges. The entire event ran smoothly like a cruise, thanks to
                all our sponsors and community partners, who helped us with
                their support and resources. Last but not least, kudos to our
                team, who worked dedicatedly for about 4+ months and put
                everything together.
                <br />
                <br />
              </p>
            </div>
            <a
              target="_blank"
              href="https://hackthisfall.tech/"
              class="cta-button"
            >
              SEASON 2
            </a>
          </div>
        </div>
      </section>
    </Container>
  </div>
</template>

<script>
import HashHeader from "~/components/HashHeader";
import Container from "~/components/Container";
export default {
  components: {
    HashHeader,
    Container
  }
};
</script>

<style lang="scss" scoped>
.content-section {
  display: flex;
  flex-direction: column;
  padding: 2rem 3rem;
  border-radius: 1rem;
  background-color: #feede3;
  @include respond-below(sm) {
    padding: 2rem 1rem;
  }

  .contents {
    justify-content: center;
    text-align: center;
    font-family: "Barlow", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Helvetica Neue", Arial, sans-serif;

    .topSection {
      img {
        @include respond-below(sm) {
          width: 100%;
        }
      }

      h3 {
        color: black;
        font-weight: 500;
        padding-bottom: 2.5%;
        font-size: 60px;
        font-family: "Barlow Condensed", -apple-system, BlinkMacSystemFont,
          "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;

        @include respond-below(sm) {
          font-size: 45px;
        }

        @include respond-below(xxs) {
          font-size: 30px;
        }
      }

      h4 {
        letter-spacing: 0.1em;
        font-weight: 500;
        font-size: 30px;
        line-height: 1.2;
        font-family: "Barlow Condensed", -apple-system, BlinkMacSystemFont,
          "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        color: black;
        padding-bottom: 7%;

        @include respond-below(sm) {
          font-size: 25px;
        }

        @include respond-below(xxs) {
          font-size: 20px;
        }
      }
    }

    .container {
      text-align: center;
      p {
        font-size: 20px;
        font-weight: 600;
        color: #121212e3;
        line-height: 1.75;
      }
    }

    a {
      text-decoration: none;
    }

    .cta-button {
      margin: auto;
      background-color: #e85325;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      display: flex;
      align-items: center;
      width: fit-content;
      font-family: "Segoe UI Bold";
      border-radius: 0.5rem;
      box-shadow: #ff6b00 0px 0px 10px 0px;
      cursor: pointer;
    }
  }
}
</style>
