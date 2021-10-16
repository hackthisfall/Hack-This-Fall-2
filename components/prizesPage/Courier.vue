<template>
  <div class="contents">
    <div class="prizes-wrapper">
      <a
        href="https://www.courier.com/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img src="~/assets/Sponsors/courier.png" alt="company" />
      </a>
      <p style="width: 90%; margin: auto">
        Early stage startups can require building complex notification systems
        into their product to improve communication with users and increase user
        engagement, which can be a time consuming and expensive process.
        <br /><br />
        <span style="color: rgba(233, 83, 34, 1)"
          >Courier offers a fast and cost-effective solution for developers to
          build notifications into their products.</span
        >
        We are looking for the project for the best implementation - the most
        innovative, fun, and/or practical - of notifications using the
        <span style="color: rgba(233, 83, 34, 1)">Courier API.</span>.
      </p>
      <br />
      <a
        class="cta-button smooth-transition"
        target="_blank"
        href="https://docs.google.com/document/d/1s2s1li4YYXdpIPk33gTmSGcOAuVaZwk9PfvQ4FI_gGA/edit?usp=sharing"
        >More Info</a
      >
      <div class="cards-grid">
        <div class="card">
          <div class="card-side front">
            <div class="texts">
              <h4 class="prizeName"></h4>
              <p
                class="prize"
                style="
                  font-size: 5rem;
                  font-weight: 600;
                  font-family: monospace;
                "
              >
                $100
              </p>
              Amazon Card + Courier Swag Kit
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Container from "~/components/Container";

export default {
  components: {
    Container,
  },
};
</script>

<style lang="scss" scoped>
.contents {
  width: 99%;
  padding: 20px 0;
  margin: auto;

  .prizes-wrapper {
    background-color: #feede3;
    border-radius: 10px;
    text-align: center;
    padding: 30px;

    img {
      margin: auto auto 30px;
      width: 300px;

      @include respond-below(xs) {
        width: 90%;
      }
    }

    .cta-button {
      background-color: #e85325;
      color: white;
      border: none;
      text-decoration: none;
      margin-bottom: 1rem;
      height: 5rem;
      padding: 0.5rem 1rem;
      font-family: "Segoe UI Bold";
      border-radius: 0.5rem;
      cursor: pointer;
      box-shadow: rgba(255, 107, 0, 0.4) 0px 0px 20px 0px;

      &:hover {
        box-shadow: rgba(232, 82, 37, 0.25) 0px 0px 0px 6px;
      }
    }

    .cards-grid {
      justify-content: center;
      position: relative;
      background-color: #feede3;
      border-radius: 10px;

      margin-top: 1.5rem;

      @include respond-below(md) {
        grid-template-columns: repeat(3, 1fr);
        margin-top: 30px;
      }

      @include respond-below(sm) {
        grid-template-columns: repeat(2, 1fr);
        margin-top: 30px;
      }

      @include respond-below(xs) {
        grid-template-columns: repeat(1, 1fr);
        margin-top: 30px;
      }

      .background {
        position: absolute;
        top: 10%;
        left: 4rem;

        @include respond-below(lg) {
          left: 2rem;
        }

        @include respond-below(md) {
          top: 15%;
          left: 2rem;
        }

        @include respond-below(sm) {
          height: 10rem;
          top: 10rem;
          left: 2rem;
        }

        @include respond-below(xs) {
          display: none;
        }
      }

      .company {
        text-align: center;
        margin: auto;

        img {
          width: 110px;
          border-radius: 10px;
        }

        h1 {
          font-weight: 600;
          font-family: "Sen";
          font-size: 1.4rem;
        }
      }

      .card {
        min-height: 200px;
        position: relative;
        width: 400px;
        margin: auto;

        @include respond-below(sm) {
          min-height: 250px !important;
        }

        @media (max-width: 1000px) {
          width: 96%;
        }

        .card-side {
          width: 100%;
          border-radius: 15px;
          transition: all 0.8s ease;
          backface-visibility: hidden;
          position: absolute;
          display: flex;
          align-items: center;
          padding: 0.5rem;
          min-height: 95%;
          background-color: rgb(253, 250, 245);
          overflow: hidden;

          @include respond-below(sm) {
            flex-direction: column;
            padding: 40px 10px;
          }
        }
        .card-side.back {
          transform: rotateY(-180deg);

          @include respond-below(sm) {
            flex-direction: column;
          }
        }
        /* &:hover .card-side.front {
          transform: rotateY(180deg);
        } */
        &:hover .card-side.back {
          transform: rotateY(0deg);
        }

        &.hidden {
          .card-side {
            background-color: transparent;
          }

          @include respond-below(sm) {
            display: none;
          }
        }

        @include respond-between(md, lg) {
          min-height: 350px;
        }

        @include respond-below(md) {
          min-height: 250px;
        }

        @include respond-below(sm) {
          min-height: 200px;
        }

        .image {
          position: relative;
          display: flex;
          flex-direction: column;
          align-content: center;
          margin-left: auto;
          margin-right: auto;

          img {
            margin: 16px;
            width: 190px;
          }

          .line {
            position: absolute;
            right: 0px;
            border-left: 2px dashed #ff5100;
            top: -50px;
            height: 300%;
          }
        }

        .texts {
          margin-left: 1rem;
          flex: 1;

          @include respond-below(sm) {
            margin-left: 0;
          }
          .prizeName {
            font-size: 1.2rem;
            font-weight: bold;
            padding-bottom: 10px;
          }
        }
      }
    }
  }
}
</style>
