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
            <div
              class="gridLayout"
              v-waypoint="{
                active: true,
                callback: onWaypoint,
                options: intersectionOptions,
              }"
            >
              <div class="statData smooth-transition">
                <img src="~/assets/HTF2/timer.svg" />
                <span>{{ numberOfHours.value }}</span>
                <p>Hours</p>
              </div>
              <div class="statData smooth-transition">
                <img src="~/assets/HTF2/project.svg" />
                <span>{{ projects.value }}+</span>
                <p>Projects</p>
              </div>
              <div class="statData smooth-transition">
                <img src="~/assets/HTF2/user.svg" />
                <span>{{ hackers.value }}+</span>
                <p>Hackers</p>
              </div>
              <div class="statData smooth-transition">
                <img src="~/assets/HTF2/globe.svg" />
                <span>{{ cities.value }}+</span>
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
  data() {
    return {
      incrementCalled: false,
      numberOfHours: { value: 0, max: 48 },
      projects: { value: 0, max: 50 },
      hackers: { value: 0, max: 500 },
      cities: { value: 0, max: 170 },
      intersectionOptions: {
        root: null,
        rootMargin: "0px 0px 0px 0px",
        threshold: [0.5, 0.75],
      },
    };
  },
  methods: {
    onWaypoint({ going }) {
      if (going === this.$waypointMap.GOING_IN && !this.incrementCalled) {
        this.incrementCalled = true;
        this.increment(this.numberOfHours);
        this.increment(this.projects);
        this.increment(this.hackers);
        this.increment(this.cities);
      }
    },
    increment(e, diff = 0) {
      if (!diff) {
        diff = parseInt((e.max - e.value) / 100, 10) + 1;
      }
      if (e.value + diff < e.max) {
        e.value += diff;
        setTimeout(() => this.increment(e, diff), 20);
      } else {
        e.value = e.final || e.max;
      }
    },
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
      height: 160px;
      width: 200px;
      margin: 0;
      display: flex;
      flex-direction: column;
      text-align: center;
      justify-content: center;
      padding: 1rem;
      border-radius: 8px;
      background-color: rgb(253, 250, 245);
      color: rgba(233, 83, 34, 1);

      &:hover {
        box-shadow: 0 48px 70px 0 rgba(214,93,32,0.25);
      }

      img {
        height: 3rem;
      }

      span {
        margin-top: 0.7rem;
        margin-bottom: -0.5rem;
        font-size: 2rem;
        font-weight: 600;
      }

      @include respond-below(sm) {
        width: 120px;
        height: 150px;
      }
    }
  }
}
</style>
