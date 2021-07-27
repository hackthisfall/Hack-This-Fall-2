<template>
  <Container id="testimonials">
    <section class="content-section">
      <HashHeader title="TESTIMONIALS" />
      <div class="grid">
        <a href="https://www.youtube.com/watch?v=wJsQ_1AWZhA" class="anchor">
          <div class="panel text">
            <img src="~/assets/Testimonials/link.svg" class="link-img" />
            <div class="person">
              <img
                src="~/assets/Testimonials/alekhya.jpg"
                alt="Gita Alekhya Paul"
              />
            </div>
            <div class="texts">
              <h3 class="title">Gita Alekhya Paul</h3>
              <p class="description">Season 1 Winner</p>
            </div>
          </div>
        </a>
        <a href="https://www.youtube.com/watch?v=r1KZf2kWX0o" class="anchor">
          <div class="panel text">
            <img src="~/assets/Testimonials/link.svg" class="link-img" />
            <div class="person">
              <img src="~/assets/Testimonials/praveen.webp" alt="Praveen" />
            </div>
            <div class="texts">
              <h3 class="title">Praveen Kumar</h3>
              <p class="description">Mentor and Speaker</p>
            </div>
          </div>
        </a>
        <a href="https://www.youtube.com/watch?v=PEQKT8iPxe4" class="anchor">
          <div class="panel text">
            <img src="~/assets/Testimonials/link.svg" class="link-img" />
            <div class="person">
              <img src="~/assets/Testimonials/aditya.jpg" alt="Aditya Oberai" />
            </div>
            <div class="texts">
              <h3 class="title">Aditya Oberai</h3>
              <p class="description">Mentor</p>
            </div>
          </div>
        </a>
        <a href="https://www.youtube.com/watch?v=FA73HA6NBzc" class="anchor">
          <div class="panel text">
            <img src="~/assets/Testimonials/link.svg" class="link-img" />
            <div class="person">
              <img src="~/assets/Testimonials/shivay.jpeg" alt="Shivay Lamba" />
            </div>
            <div class="texts">
              <h3 class="title">Shivay Lamba</h3>
              <p class="description">Speaker</p>
            </div>
          </div>
        </a>
      </div>
    </section>
  </Container>
</template>

<script>
import Container from "~/components/Container";
import HashHeader from "~/components/HashHeader";

export default {
  components: {
    Container,
    HashHeader,
  },
};
</script>

<style lang="scss" scoped>
.content-section {
  display: flex;
  flex-direction: column;
  padding: 2rem 6rem;
  border-radius: 1rem;
  background-color: #feede3;

  @include respond-below(sm) {
    padding: 2rem 1rem;
  }

  .grid {
    padding: 10px 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 6rem;
    row-gap: 2rem;

    .anchor {
      text-decoration: none;
      color: initial;

      .panel {
        border-radius: 1rem;
        display: flex;
        flex-direction: row;
        background-color: white;
        justify-content: flex-start;
        box-shadow: rgba(255, 107, 0, 0.07) 0px 0px 10px 2px;
        align-items: center;
        position: relative;

        .link-img {
          position: absolute;
          right: 0;
          padding: 0.6rem;
          padding-left: 0.65rem;
          border-radius: 0.5rem;
          margin-right: 1rem;
          background-color: #e85325;
          @include respond-below(xxs) {
            display: none;
          }
        }

        .person {
          margin-left: 1rem;
          height: 5rem;
          width: 5rem;
          box-sizing: border-box;
          display: flex;
          justify-content: center;
          align-items: center;

          img {
            border-radius: 50%;
            width: 3.5rem;
            height: 3.5rem;
            align-content: center;
            border: 1px solid black;
            padding: 1px;
          }
        }

        .texts {
          margin-left: 0.5rem;
          display: flex;
          flex-direction: column;
          padding: 10px;

          .title {
            font-family: "Segoe UI Bold";
            color: rgba(233, 83, 34, 1);
            font-size: 1.1rem;
          }

          .description {
            font-family: "Segoe UI";
            margin-top: 0.5em;
            opacity: 0.7;
          }
        }
      }
    }

    @include respond-below(md) {
      grid-column-gap: 4rem;
    }

    @include respond-below(sm) {
      grid-template-columns: repeat(1, 1fr);

      .texts {
        padding: 10px 0;
      }
    }
  }

  @include respond-above(xl) {
    padding: 2rem 8rem;

    .grid {
      grid-column-gap: 8rem;
    }
  }
}
</style>
