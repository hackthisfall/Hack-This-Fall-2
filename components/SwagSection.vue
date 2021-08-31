<template>
  <div id="swag">
    <Container name="swag">
      <section class="content-section">
        <HashHeader title="SWAG STORE" />
        <div class="contents">
          <div class="about">
            <p>
              Everyone love swags so that they can brag about it. We at Hack
              This Fall love swags too. What if we tell you that you can earn
              cool swags just by doing some interesting and fun challenges?
              <br /><br />
              We have designed various challenges specially for you and by
              completing it, you can earn points for yourself. All the
              challenges are listed below with their descriptions. Read them out
              carefully. New challenges will be added with time and
              announcements for the same will be done in our
              <a target="_blank" href="https://discord.hackthisfall.tech/"
                >Discord</a
              >, so make sure you join us there. <br /><br />
              Once you complete a Challenge, make sure you fill out our
              <a target="_blank" href="https://bit.ly/htf2-points"
                >Points Form</a
              >, you can edit the form responses so feel free to submit one task
              and return to edit the form to submit another task. Every task
              have points and Top-3 people on the leaderboard after the
              hackathon ends will stand a chance to win an outstanding exlusive
              Hack This Fall Merchandise Swag Pack delivered at your doorstep.
            </p>
          </div>
          <div
            v-for="(challenge, index) in challenges"
            :key="index"
            class="challenges"
          >
            <div class="subHeading">
              <h2 class="section-title">{{challenge.heading}}</h2>
            </div>
            <div class="row justify-content-center text-center text-lg-left">
              <div
                v-for="(task, index) in challenge.tasks"
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
                      style="color: rgb(233, 83, 34)"
                    >
                      {{ task.heading }}
                    </div>
                    <div class="col-12 mb-2" v-html="task.content">
                      {{}}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <HashHeader title="DIGITAL SWAG" />
          <div class="virtualBadge">
            <div class="cornerHeading">
              <img
                style="margin-bottom: -1px"
                src="~/assets/icons/user.svg"
                height="13px"
              />
              Virtual Badge
            </div>
            <div class="leftColumn">
              <!-- add canvas or badge here -->
              <div class="dummy">
                <canvas id="myCanvas" width="1620" height="1620" />
              </div>
            </div>
            <div class="rightColumn">
              <h1>Hack This Fall Badge</h1>
              <div class="rightContent">
                Here is your place to flex and show off your presence at Hack
                This Fall.
                <br />
                <div style="margin-top: 1rem">
                  Upload your image below to get a personalized Hack This Fall
                  Badge.
                </div>
                <div style="margin-top: 1rem">
                  Download it and Share it on socials using
                  <a
                    style="color: rgba(233, 83, 34, 1)"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://twitter.com/hashtag/hackthisfall"
                    >#HackThisFall</a
                  >
                  and tag
                  <a
                    style="color: rgba(233, 83, 34, 1)"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://twitter.com/hackthisfall"
                  >
                    @hackthisfall</a
                  >
                </div>
                <div
                  style="
                    color: rgba(233, 83, 34, 1);
                    font-style: italic;
                    font-size: 0.8rem;
                    margin-top: 1rem;
                  "
                >
                  * We respect your privacy and are not storing your pictures on
                  our servers.
                </div>
              </div>
              <div class="cta-buttons">
                <input
                  type="file"
                  id="imageInput"
                  accept="image/*"
                  class="cta-button"
                  style="display: none"
                />
                <button @click="uploadImage" class="cta-button">
                  <img
                    src="https://img.icons8.com/material-rounded/24/ffffff/upload--v1.png"
                  />
                  UPLOAD IMAGE
                </button>
                <button
                  v-show="addedImage"
                  @click="downloadImage"
                  class="cta-button"
                >
                  <img
                    src="https://img.icons8.com/material-rounded/24/ffffff/download--v1.png"
                  />
                  DOWNLOAD
                </button>
                <a
                  v-show="addedImage"
                  href="https://twitter.com/intent/tweet?text=Hey folks!👋%0A%0AExcited to share that I'm attending @hackthisfall 2.0🥳 %26 absolutely can't wait to learn, build %26 share with the community!🚀%0A%0AJoin me %26 register now: hackthisfall.devpost.com%0AGet a personal badge for yourself: hackthisfall.tech/swag%0A%0A%23HackThisFall %23InnovateForGood"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="cta-button"
                >
                  <img
                    src="https://img.icons8.com/material-rounded/24/ffffff/share.png"
                  />SHARE
                </a>
              </div>
            </div>
          </div>
          <div class="wallpapers">
            <div class="carouselWrapper">
              <div class="cornerHeading">
                <img src="~/assets/icons/user.svg" height="15px" />
                Wallpaper
              </div>
              <button class="cta-button">Download</button>
              <VueSlickCarousel class="carousel" v-bind="settings">
                <div>
                  <img src="~/assets/dummy/1.png" class="carouselImg" />
                </div>
                <div>
                  <img src="~/assets/dummy/1.png" class="carouselImg" />
                </div>
                <div>
                  <img src="~/assets/dummy/1.png" class="carouselImg" />
                </div>
                <div>
                  <img src="~/assets/dummy/1.png" class="carouselImg" />
                </div>
              </VueSlickCarousel>
            </div>
            <div class="carouselWrapper">
              <div class="cornerHeading">
                <img src="~/assets/icons/user.svg" height="15px" />
                Zoom Background
              </div>
              <button class="cta-button">Download</button>
              <VueSlickCarousel class="carousel" v-bind="settings">
                <div>
                  <img src="~/assets/dummy/1.png" class="carouselImg" />
                </div>
                <div>
                  <img src="~/assets/dummy/1.png" class="carouselImg" />
                </div>
                <div>
                  <img src="~/assets/dummy/1.png" class="carouselImg" />
                </div>
                <div>
                  <img src="~/assets/dummy/1.png" class="carouselImg" />
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
                  style="margin-bottom: -1px"
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
                  style="margin-bottom: -1px"
                  src="~/assets/icons/download.svg"
                  height="15px"
                />
              </button>
              <button class="cta-button share">
                SHARE&nbsp;&nbsp;&nbsp;
                <img
                  style="margin-bottom: -1px"
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
    VueSlickCarousel,
  },
  data() {
    return {
      settings: {
        edgeFriction: 0.35,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
      addedImage: false,
      challenges: [
        {
          heading: "Hack This Fall Challenges",
          tasks: [
            {
              heading: "Register for Hack This Fall",
              content:
                "First things first, we want to get you registered! <a target='_blank' href='https://hackthisfall.devpost.com/'>Register now here</a> to earn yourself your first points. It's as easy as that! Send us a screenshot on our <a target='_blank' href=\"https://bit.ly/htf2-points\">Points Form</a> after you register."
            },
            {
              heading: "Follow HTF on Social Media",
              content:
                "Hack This Fall has an engaging social media presence where we share opportunities for the community. You can follow us on <a target='_blank' href='https://www.instagram.com/hackthisfall/'>Instagram</a>, <a target='_blank' href='https://twitter.com/hackthisfall'>Twitter</a>, <a target='_blank' href='https://www.linkedin.com/company/hackthisfall/'>LinkedIn</a>, <a target='_blank' href='https://dev.to/hackthisfall'>Dev.to</a> or <a target='_blank' href='https://www.youtube.com/c/HackThisFall'>Youtube</a> for a point each! Send us a screenshot on our <a target='_blank' href='https://bit.ly/htf2-points'>Points Form</a> after you follow."
            },
            {
              heading: "Join the HTF Community Discord",
              content:
                "Join us on <a target='_blank' href='https://discord.hackthisfall.tech/'>Discord</a> and be a part of our awesome community. Send us a screenshot on our <a target='_blank' href='https://bit.ly/htf2-points'>Points Form</a> after you join."
            },
            {
              heading: "Submit a project on Devpost",
              content:
                "Build something during the hackathon duration and submit a project on devpost. Submit your project link after the hackathon to our <a target='_blank' href='https://bit.ly/htf2-points'>Points Form</a> after you register."
            },
            {
              heading: "[Repeatable] Post about HTF on Socials",
              content:
                "Share anything about us and use #HackThisFall and tag @hackthisfall on your Twitter, Instagram, and LinkedIn posts to earn points! This challenge is repeatable once daily. Submit a link to your post on our <a target='_blank' href='https://bit.ly/htf2-points'>Points Form</a>."
            },
            {
              heading: "[Repeatable] Refer your friend",
              content:
                'Refer your friends and community members to register for Hack This Fall and ask them to enter your Email under the "Referral Email" field while registering on Devpost. Earn 1 point for 1 referral.'
            }
          ]
        },
        {
          heading: "Community Challenges",
          tasks: [
            {
              heading: "Share a coffee with a hacker",
              content: "Interact with our community members over coffee and network with others. Tweet the screenshot of your video call and share the link of the tweet in this <a target='_blank' href='https://bit.ly/htf2-points'>Points Form</a>."
            },
            {
              heading: "Design a Mascot for Hack This Fall",
              content: "Bring in your creativity and show it to us by designing a Mascot for Hack This Fall. Tweet your design and share the link of the tweet in this <a target='_blank' href='https://bit.ly/htf2-points'>Points Form</a>."
            },
            {
              heading: "Best memory with Hack This Fall",
              content: "We would love to hear from you your best memory at Hack This Fall. Tweet your favorite memory and share the link of the tweet in this <a target='_blank' href='https://bit.ly/htf2-points'>Points Form</a>."
            },
            {
              heading: "[Repeatable] Attend a Live Session",
              content: "Attend any of the live speaker sessions happening the entire September on our <a target=\"_blank\" href=\"https://www.youtube.com/c/HackThisFall\"></a>YouTube Channel and tweet your learnings from the session. Share the link of the tweet in this <a target='_blank' href='https://bit.ly/htf2-points'>Points Form</a>."
            }
          ]
        }, {
          heading: "Sponsor Challenges",
          tasks: [
            {
              heading: "Sign up for a WazirX account",
              content: "Head to <a target='_blank' href='https://wrx.gg/htf'>wrx.gg/htf</a> and sign up. WazirX is India’s most trusted bitcoin & cryptocurrency exchange platform. Submit a screenshot of your account to our <a target='_blank' href='https://bit.ly/htf2-points/'>Points Form</a>."
            },
            {
              heading: "Sign up on SAWO Labs landing page",
              content: "Head to <a target='_blank href='https://sawolabs.com/hackathon/redeemnow/?hackathon_name=HackThisFall2.0'>SAWO Labs</a> and sign up. Say goodbye to OTPs and Passwords. Submit a screenshot of your account to our <a target='_blank' href='https://bit.ly/htf2-points'>Points Form</a>."
            }
          ]
        }
      ]
    };
  },
  mounted() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    var img = new Image();
    img.onload = function () {
      ctx.drawImage(img, 0, 0, 1620, 1620);
    };
    img.src = "/badge.png";

    let imgInput = document.getElementById("imageInput");
    imgInput.addEventListener("change", (e) => {
      if (e.target.files) {
        let imageFile = e.target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(imageFile);
        reader.onloadend = (e) => {
          var myImage = new Image();
          myImage.src = e.target.result;
          myImage.onload = (ev) => {
            ctx.clearRect(0, 0, 1620, 1620);
            const inputWidth = myImage.naturalWidth;
            const inputHeight = myImage.naturalHeight;
            const smallerSide = Math.min(inputWidth, inputHeight);
            let startX = 0;
            let startY = 0;

            if (inputWidth < inputHeight) {
              startY = (inputHeight - inputWidth) / 2;
            } else if (inputWidth > inputHeight) {
              startX = (inputWidth - inputHeight) / 2;
            }

            ctx.drawImage(
              myImage,
              startX,
              startY,
              smallerSide,
              smallerSide,
              0,
              0,
              1620,
              1620
            );
            ctx.drawImage(img, 0, 0, 1620, 1620);
            this.toggleImageAdded();
          };
        };
      }
    });
  },
  methods: {
    uploadImage() {
      document.getElementById("imageInput").click();
    },
    downloadImage() {
      var image = document.getElementById("myCanvas").toDataURL("image/png");
      var link = document.createElement("a");
      link.download = "my-image.png";
      link.href = image;
      link.click();
    },
    toggleImageAdded() {
      this.addedImage = true;
    },
  },
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
  top: 305px;
  z-index: 99;

  @include respond-below(xs) {
    top: unset;
    left: 8%;
    bottom: 10%;
  }
}

.slick-next {
  left: 70px;
  top: 305px;
  z-index: 99;

  @include respond-below(xs) {
    top: unset;
    left: 14%;
    bottom: 10%;
  }

  @include respond-below(xxs) {
    top: unset;
    left: 16%;
  }
}
</style>

<style lang="scss" scoped>
.content-section {
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  font-family: "Segoe UI";

  a {
    color: rgba(233, 83, 34, 1);
  }

  .subHeading {
    font-family: "Poppins";
    font-style: bold;
    justify-content: space-around;
    display: flex;
    align-self: center;
    color: rgba(128, 128, 128, 1);

    h2.section-title {
      font-size: 1.5rem;
      font-weight: 600;
      padding: 20px 10px 20px 0;
    }
  }

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

    .challenges {
      margin-bottom: 1rem;
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
    margin-top: 1rem;
    margin-bottom: 2rem;
    padding: 4rem 4rem 3rem 0rem;
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

    @include respond-below(xs) {
      padding: 4rem 2rem 3rem 2rem;
    }

    @media screen and (max-width: 375px) {
      padding: 4rem 0.5rem 3rem 0.5rem;
    }

    @media screen and (max-width: 360px) {
      padding: 4rem 0 3rem 0rem;
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
      .dummy {
        height: 400px;
        width: 400px;
        margin: 0.2rem auto 1.3rem;
        background: #fff;

        canvas {
          height: 400px;
          width: 400px;
        }

        @include respond-below(xs) {
          height: 300px;
          width: 300px;

          canvas {
            height: 300px;
            width: 300px;
          }
        }
      }

      button {
        margin-bottom: 0rem;
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

    .rightColumn {
      margin-left: 1rem;
      @include respond-below(xs) {
        margin-left: unset;
      }

      h1 {
        font-size: 2.1rem;
        font-family: "Segoe UI Bold";
        color: rgba(233, 83, 34, 1);
      }

      .rightContent {
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

      .cta-buttons {
        display: flex;
        margin-top: 2rem;
        justify-content: flex-start;

        a {
          text-decoration: none;
        }

        input {
          display: none;
        }

        .cta-button {
          border: none;
          display: flex;
          align-items: center;
          border-radius: 2rem;
          outline: none;
          padding: 0.6rem 1.2rem 0.8rem;
          white-space: nowrap;
          cursor: pointer;
          color: #fff;
          font-weight: 700;
          font-size: 12pt;
          background-color: #e85325;
          margin-left: 0;
          box-shadow: rgba(255, 107, 0, 0.4) 0px 0px 20px 0px;

          &:hover {
            box-shadow: rgba(232, 82, 37, 0.25) 0px 0px 0px 6px;
          }

          img {
            margin-right: 0.5rem;
          }
        }

        @include respond-below(sm) {
          flex-direction: column;

          .cta-button {
            margin: auto;
            align-items: center;
            width: 100%;
            margin-bottom: 0.5rem;
          }
        }
      }
    }
  }

  .wallpapers {
    display: flex;
    flex-wrap: wrap;
    margin-left: 0.4rem;
    margin-bottom: 1rem;

    @include respond-below(xs) {
      margin-left: -1rem;
    }

    .carouselWrapper {
      position: relative;

      .carousel {
        width: 550px;

        @include respond-below(xs) {
          width: 100vw !important;
          margin-bottom: -20px;
        }

        .carouselImg {
          width: 550px;

          @include respond-below(xs) {
            width: 100vw !important;
          }
        }
      }

      .cta-button {
        background-color: #e85325;
        color: white;
        border: none;
        position: absolute;
        top: 277px;
        left: 400px;
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

        @include respond-below(xs) {
          bottom: 2%;
          right: 8%;
          left: unset;
          top: unset;
          width: unset;
        }

        @include respond-below(xxs) {
          top: unset;
          left: unset;
          width: unset;
          bottom: -2%;
        }
      }
    }

    .cornerHeading {
      position: absolute;
      z-index: 99;
      top: 27px;
      left: 27px;
      background: #e85325;
      color: #fff;
      font-weight: 600;
      padding: 8px 10px;
      border-top-left-radius: 0.4rem;
      border-bottom-right-radius: 0.4rem;

      @include respond-below(xs) {
        top: 8%;
        left: 5%;
      }

      @include respond-below(xxs) {
        top: 16px;
        left: 17px;
      }

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
    margin-left: 25%;

    @include respond-below(xs) {
      margin-left: 17%;
    }

    .share {
      display: none !important;
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
