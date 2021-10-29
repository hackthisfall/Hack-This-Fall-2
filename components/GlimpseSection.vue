<template>
  <div id="glimpse">
    <Container>
      <section class="content-section">
        <HashHeader title="GLIMPSE OF PAST SEASONS" />
        <div class="contents">
          <div class="about">
            <p>
              <span style="color: rgba(233, 83, 34, 1)"> Hack This Fall </span
              >has hosted 2 seasons virtually in the last 2 years. Both the
              seasons of Hack This Fall experienced an outstanding attendance of
              <span style="color: rgba(233, 83, 34, 1); font-weight: bold">
                4500+ hackers</span
              >
              joining us from
              <span style="color: rgba(233, 83, 34, 1); font-weight: bold"
                >55+ countries</span
              >
              across the globe.
              <br />
              <br />
              The taglines for the last 2 years were <span style="font-weight: bold">Build &amp; Solve</span> and
         <span style="font-weight: bold">Innovate For Good</span> respectively, with which we came across a pool
              of
              <span style="color: rgba(233, 83, 34, 1); font-weight: bold">
                320+ amazing  ideas</span> and  project submissions.</span
              >
              <br />
              <br />

              Hackers truly understood the value of our motto and showed their
              excellent piece of innovation and problem-solving skills.
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
                <p>Countries</p>
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
      projects: { value: 0, max: 320 },
      hackers: { value: 0, max: 4500 },
      cities: { value: 0, max: 55 },
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

    @include respond-below(md) {
      grid-template-columns: repeat(1, 1fr);
    }

    .about {
      padding: 1rem 0;
      align-self: center;

      p {
        font-size: 1.1rem;
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
        box-shadow: 0 15px 30px 0 rgba(214, 93, 32, 0.25);
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
