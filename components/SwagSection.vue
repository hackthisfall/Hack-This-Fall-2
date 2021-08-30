<template>
  <div id="swag">
    <Container name="swag">
      <section class="content-section">
        <HashHeader title="SWAG STORE" />
        <div class="contents">
          <div class="about">
            <p>
              Hack This Fall is a 48 Hours Virtual Hackathon where we aim to
              promote hackers and help them nurture their new ideas and
              prototypes in various domains. Our motto is also to involve more
              beginner hackers and support everyone to solve the shared problems
              of our society to bring a change in a revolutionary way. For
              season 2, we are focussing on creating more learning opportunities
              along with building and solving. We will talk about various
              technologies, create awareness, encourage others, hack to
              contribute, and participate in many more exciting events &amp;
              sessions.
            </p>
          </div>
          <div class="challenges">
            <HashHeader title="DAILY &amp; WEEKDAY CHALLENGES" />
            <div
              class="
            row
            justify-content-center
            text-center text-lg-left
          "
            >
              <div
                v-for="(challenge, index) in challenges"
                :key="index"
                class="col-10 col-md-5 col-lg-auto mx-3 my-3"
              >
                <div
                  class="
                panel
                shadow-1
                row
                justify-content-center
                py-3
                smooth-transition-1
              "
                >
                  <div class="row">
                    <div
                      class="col-12 font-weight-bold my-2 font-size-18"
                      style="color: #e38333"
                    >
                      {{ challenge.heading }}
                    </div>
                    <div class="col-12 mb-2">
                      {{ challenge.content }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="virtualBadge">
            <div class="cornerHeading">
              <img
                style="margin-bottom: -1px;"
                src="~/assets/icons/user.svg"
                height="13px"
              />
              Virtual Badge
            </div>
            <div class="leftColumn">
              <!-- add canvas or badge here -->
              <div class="dummy" />
              <button class="cta-button">Download</button>
            </div>
            <div class="rightColumn">
              <h1>Hack This Fall Badge</h1>
              <p>
                Now that you are here, how about personalising your DevFest 2021
                profile? Upload an image and generate a personalised badge with
                the DevFest 2021 frame. Also share your image using
                #DevFestIndia on different social platforms.
              </p>
              <h4>Select a Image</h4>
              <input type="file" />
            </div>
          </div>
          <div class="wallpapers">
            <div class="carouselWrapper">
              <div class="cornerHeading">
                <img src="~/assets/icons/user.svg" height="15px" />
                Wallpaper
              </div>
              <button class="cta-button">Download</button>
              <VueSlickCarousel style="max-width: 500px;" v-bind="settings">
                <div style="max-width: 80vw;">
                  <img src="~/assets/dummy/1.png" width="500px" />
                </div>
                <div style="max-width: 80vw;">
                  <img src="~/assets/dummy/1.png" width="500px" />
                </div>
                <div style="max-width: 80vw;">
                  <img src="~/assets/dummy/1.png" width="500px" />
                </div>
                <div style="max-width: 80vw;">
                  <img src="~/assets/dummy/1.png" width="500px" />
                </div>
              </VueSlickCarousel>
            </div>
            <div class="carouselWrapper">
              <div class="cornerHeading">
                <img src="~/assets/icons/user.svg" height="15px" />
                Zoom Background
              </div>
              <button class="cta-button">Download</button>
              <VueSlickCarousel style="max-width: 500px;" v-bind="settings">
                <div>
                  <img src="~/assets/dummy/1.png" width="500px" />
                </div>
                <div>
                  <img src="~/assets/dummy/1.png" width="500px" />
                </div>
                <div>
                  <img src="~/assets/dummy/1.png" width="500px" />
                </div>
                <div>
                  <img src="~/assets/dummy/1.png" width="500px" />
                </div>
              </VueSlickCarousel>
            </div>
          </div>
          <div class="story">
            <div class="storyWallpaper">
              <img class="bg" src="~/assets/dummy/4.png" />
              <button class="cta-button">
                DOWNLOAD&nbsp;&nbsp;&nbsp;
                <img
                  style="margin-bottom: -1px;"
                  src="~/assets/icons/download.svg"
                  height="15px"
                />
              </button>
              <div class="cornerHeading">
                <img src="~/assets/icons/user.svg" height="15px" />
                Wallpaper
              </div>
            </div>
            <div class="storyWallpaper">
              <img class="bg" src="~/assets/dummy/4.png" />
              <button class="cta-button">
                DOWNLOAD&nbsp;&nbsp;&nbsp;
                <img
                  style="margin-bottom: -1px;"
                  src="~/assets/icons/download.svg"
                  height="15px"
                />
              </button>
              <button class="cta-button share">
                SHARE&nbsp;&nbsp;&nbsp;
                <img
                  style="margin-bottom: -1px;"
                  src="~/assets/icons/insta.svg"
                  height="15px"
                />
              </button>
              <div class="cornerHeading">
                <img src="~/assets/icons/insta.svg" height="15px" />
                Story
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
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  components: {
    HashHeader,
    Container,
    VueSlickCarousel
  },
  data() {
    return {
      settings: {
        edgeFriction: 0.35,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      },
      challenges: [
        {
          heading: "DIVERSITY & INCLUSION",
          content:
            "Build a hack that helps communicate the importance of managing bias and make it more diverse and inclusive. With this track, we aim to promote the development and advancement of underrepresented groups."
        },
        {
          heading: "DIVERSITY & INCLUSION",
          content:
            "Build a hack that helps communicate the importance of managing bias and make it more diverse and inclusive. With this track, we aim to promote the development and advancement of underrepresented groups."
        },
        {
          heading: "DIVERSITY & INCLUSION",
          content:
            "Build a hack that helps communicate the importance of managing bias and make it more diverse and inclusive. With this track, we aim to promote the development and advancement of underrepresented groups."
        },
        {
          heading: "DIVERSITY & INCLUSION",
          content:
            "Build a hack that helps communicate the importance of managing bias and make it more diverse and inclusive. With this track, we aim to promote the development and advancement of underrepresented groups."
        },
        {
          heading: "DIVERSITY & INCLUSION",
          content:
            "Build a hack that helps communicate the importance of managing bias and make it more diverse and inclusive. With this track, we aim to promote the development and advancement of underrepresented groups."
        },
        {
          heading: "DIVERSITY & INCLUSION",
          content:
            "Build a hack that helps communicate the importance of managing bias and make it more diverse and inclusive. With this track, we aim to promote the development and advancement of underrepresented groups."
        }
      ]
    };
  }
};
</script>

<style scoped src="~/assets/styles/bootstrap.css"></style>
<style lang="scss">
.slick-prev,
.slick-next {
  background: #e85325 !important;
  border-radius: 1rem;
}

.slick-prev {
  left: 40px;
  top: 270px;
  z-index: 99;
}

.slick-next {
  left: 70px;
  top: 270px;
  z-index: 99;
}
</style>

<style lang="scss" scoped>
.content-section {
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  font-family: "Segoe UI";

  .shadow-1 {
    box-shadow: 0 0 10px 2px rgba(255, 107, 0, 0.07) !important;
    min-width: 100%;
    max-width: 500px;
    border-radius: 16px;
  }

  .panel {
    padding: 0 30px;
    font-family: "Poppins";
  }

  .panel:hover {
    box-shadow: 0px 15px 30px 0px rgba(223, 117, 64, 0.15) !important;
  }

  .smooth-transition {
    -webkit-transition: all 1.1s ease;
    -moz-transition: all 1.1s ease;
    -o-transition: all 1.1s ease;
    transition: all 1.1s ease;
  }

  .smooth-transition-1 {
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    transition: all 0.5s ease;
  }

  .font-size-18 {
    font-size: 18px;
  }

  .contents {
    .about {
      padding: 10px;
      background-color: #feeee5;
      text-align: center;
      border-radius: 1rem;
      margin-bottom: 2rem;

      p {
        color: rgba(112, 112, 112, 1);
        font-weight: bold;
        margin: 2rem 1rem;
        font-size: 1rem;

        @include respond-below(md) {
          padding-top: 20px;
        }
      }

      img {
        margin-right: 0.7rem;
      }

      div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        .title {
          font-size: 1.1rem;
          font-family: "Segoe UI Bold";
          color: rgba(233, 83, 34, 1);
        }

        .desc {
          opacity: 0.6;
          font-size: 0.95rem;
          margin-top: 0.5rem;
        }
      }

      &:nth-of-type(2) {
        margin-left: 2rem;
      }

      &:hover {
        background-color: #feede3;
      }
    }

    @include respond-below(xs) {
      flex-direction: column;
      justify-content: center;
      .cta-button {
        width: 100%;

        &:nth-of-type(2) {
          margin-top: 1rem;
          margin-left: 0rem;
        }
      }
    }
  }

  .virtualBadge {
    margin-top: 4rem;
    margin-bottom: 2rem;
    padding: 4rem 2rem 3rem;
    background-color: #feeee5;
    border-radius: 1rem;
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @include respond-below(md) {
      grid-template-columns: repeat(1, 1fr);

      .leftColumn {
        margin-right: unset;
        margin-bottom: 2rem;

        button {
          margin-top: 2rem;
        }
      }
    }

    .cornerHeading {
      position: absolute;
      top: 0px;
      left: 0px;
      background: #e85325;
      color: #fff;
      font-weight: 600;
      padding: 10px;
      border-top-left-radius: 1rem;
      border-bottom-right-radius: 1rem;
    }

    .leftColumn {
      margin-right: 1rem;

      .dummy {
        height: 270px;
        width: 270px;
        margin: 0.2rem auto 1.3rem;
        background: #fff;
      }

      button {
        margin-bottom: 0rem;
      }
    }

    .rightColumn {
      margin-left: 1rem;
      h1 {
        font-size: 2.1rem;
        font-family: "Segoe UI Bold";
        color: rgba(233, 83, 34, 1);
      }

      p {
        opacity: 0.6;
        font-size: 1.4rem;
        margin: 2rem 0;
        justify-content: center;
      }

      h4 {
        opacity: 0.6;
        font-size: 1.2rem;
        margin-bottom: 1.2rem;
        font-weight: bold;
        color: rgba(233, 83, 34, 1);
      }

      input {
        color: transparent;

        &::-webkit-file-upload-button {
          visibility: hidden;
        }

        &::before {
          content: "Upload Image";
          background: #e85325;
          display: inline-block;
          border-radius: 2rem;
          outline: none;
          padding: 0.6rem 1.2rem 0.8rem;
          white-space: nowrap;
          cursor: pointer;
          color: #fff;
          font-weight: 700;
          font-size: 12pt;
        }
      }
    }

    .cta-button {
      background-color: #e85325;
      color: white;
      border: none;
      padding: 0.6rem 1rem 0.8rem;
      font-size: 1.1rem;
      display: flex;
      width: unset !important;
      align-items: center;
      margin: 0 auto 0.8rem;
      font-family: "Segoe UI Bold";
      border-radius: 1.5rem;
      cursor: pointer;
      box-shadow: rgba(255, 107, 0, 0.4) 0px 0px 20px 0px;

      &:hover {
        box-shadow: rgba(232, 82, 37, 0.25) 0px 0px 0px 6px;
      }
    }
  }

  .wallpapers {
    display: flex;
    flex-wrap: wrap;
    margin-left: -1.5rem;
    margin-bottom: 1rem;

    .carouselWrapper {
      position: relative;

      .cta-button {
        background-color: #e85325;
        color: white;
        border: none;
        position: absolute;
        top: 250px;
        left: 355px;
        z-index: 999;
        padding: 0.5rem 1rem;
        display: flex;
        align-items: center;
        margin: 0 auto 1rem;
        font-family: "Segoe UI Bold";
        border-radius: 0.5rem;
        cursor: pointer;
        box-shadow: rgba(255, 107, 0, 0.4) 0px 0px 20px 0px;

        &:hover {
          box-shadow: rgba(232, 82, 37, 0.25) 0px 0px 0px 6px;
        }
      }
    }

    .cornerHeading {
      position: absolute;
      z-index: 99;
      top: 25px;
      left: 25px;
      background: #e85325;
      color: #fff;
      font-weight: 600;
      padding: 8px 10px;
      border-top-left-radius: 0.4rem;
      border-bottom-right-radius: 0.4rem;

      img {
        display: inline-block;
        margin-bottom: -2px;
      }
    }
  }

  .story {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 2rem;

    .share {
      top: 305px !important;

      @include respond-below(xs) {
        top: 290px !important;
      }
    }

    .cta-button {
      background-color: #e85325;
      color: white;
      border: none;
      position: absolute;
      top: 350px;
      left: 85px;
      z-index: 999;
      padding: 0.5rem 1rem;
      display: flex;
      align-items: center;
      width: unset;
      margin: 0 auto 0.8rem;
      font-family: "Segoe UI Bold";
      border-radius: 0.5rem;
      cursor: pointer;
      box-shadow: rgba(255, 107, 0, 0.4) 0px 0px 20px 0px;

      &:hover {
        box-shadow: rgba(232, 82, 37, 0.25) 0px 0px 0px 6px;
      }
    }

    .cornerHeading {
      position: absolute;
      z-index: 99;
      top: 0px;
      left: 1px;
      background: #e85325;
      color: #fff;
      font-weight: 600;
      padding: 8px 10px;
      border-top-left-radius: 0.5rem;
      border-bottom-right-radius: 0.5rem;

      img {
        display: inline-block;
        margin-bottom: -2px;
      }
    }
    .storyWallpaper {
      position: relative;
      margin-right: 2rem;
      margin-top: 1rem;
    }
  }
}
</style>
