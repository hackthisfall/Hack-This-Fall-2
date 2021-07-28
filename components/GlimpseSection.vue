<template>
  <div id="glimpse">
    <Container>
      <section class="content-section">
        <HashHeader title="GLIMPSE OF SEASON 1" />
        <div class="contents">
          <img src="~/assets/HTF2/glimpse-leaves.svg" class="leaves" />
          <div class="about">
            <p>
              Season 1 was a 24 Hours Virtual Hackathon organized on October
              31st - November 1st, 2020. We were joined by 500+ superb hackers
              from 170+ different cities, who all were motivated to build
              towards solving society’s everyday problems, and ended up building
              50+ projects, which was in line with our motto i.e. “Build &amp;
              Solve”.
            </p>
          </div>
          <div class="stats">
            <div class="gridLayout">
              <div class="statData smooth-transition">
                <img src="~/assets/HTF2/timer.svg" />
                <h4>48</h4>
                <p>Hours</p>
              </div>
              <div class="statData smooth-transition">
                <img src="~/assets/HTF2/project.svg" />
                <h4>24+</h4>
                <p>Projects</p>
              </div>
              <div class="statData smooth-transition">
                <img src="~/assets/HTF2/user.svg" />
                <h4>400+</h4>
                <p>Hackers</p>
              </div>
              <div class="statData smooth-transition">
                <img src="~/assets/HTF2/globe.svg" />
                <h4>170+</h4>
                <p>Cities</p>
              </div>
            </div>
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
    Container,
  },
};
</script>

<style lang="scss" scoped>
.content-section {
  display: flex;
  flex-direction: column;
  padding: 2rem 4rem;
  background-color: #feede3;
  position: relative;
  overflow: hidden;
  border-radius: 1rem;

  @include respond-below(sm) {
    padding: 2rem 1rem;
  }

  .contents {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 20px;

    .leaves {
      position: absolute;
      top: -1rem;
      left: -3.75rem;
      height: 8rem;
      transform: rotate(135deg);
    }

    @include respond-below(md) {
      grid-template-columns: repeat(1, 1fr);
    }

    .about {
      padding: 1rem 0;
      align-self: center;

      p {
        font-size: 1.2rem;
      }
    }
  }

  .stats {
    text-align: center;
    justify-content: center;
    padding: 1rem 0 10px;

    .gridLayout {
      display: grid;
      margin-top: 15px;
      grid-template-columns: repeat(2, 200px);
      column-gap: 3rem;
      row-gap: 3rem;
      justify-content: center;

      @include respond-below(sm) {
        grid-template-columns: repeat(2, 120px);
      }

      @include respond-below(xs) {
        column-gap: 1rem;
        row-gap: 1rem;
      }
    }

    .statData {
      height: 150px;
      width: 200px;
      margin: 0;
      display: flex;
      flex-direction: column;
      text-align: center;
      justify-content: center;
      padding: 1rem;
      border-radius: 8px;
      background-color: rgb(253, 250, 245);

      &:hover {
        box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
      }
      
      h4 {
        font-size: 2rem;
        font-weight: bold;
      }

      @include respond-below(sm) {
        width: 120px;
        height: 150px;
      }
    }
  }
}
</style>
