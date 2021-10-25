<template>
  <div id="swag">
    <section class="content-section">
      <HashHeader title="SWAG STORE" />
      <div class="contents">
        <div class="about">
          <p>
            Everyone loves swags so that they can brag about them. We at Hack
            This Fall love swags too. What if we tell you that you can earn cool
            swags just by doing some interesting and fun challenges?
            <br /><br />
            We have designed various challenges especially for you and by
            completing them, you can earn points for yourself. All the
            challenges are listed below with their descriptions. Read them out
            carefully. New challenges will be added with time and announcements
            for the same will be done in our
            <a target="_blank" href="https://discord.hackthisfall.tech/"
              >Discord</a
            >, so make sure you join us there. <br /><br />
            Once you complete a Challenge, make sure you fill out our
            <a target="_blank" href="https://bit.ly/htf2-challenge"
              >Challenge Form</a
            >, you can edit the form responses so feel free to submit one task
            and return to edit the form to submit another task. Every task has
            points and <span style="color: rgb(233, 83, 34)">Top-3</span> people
            on the leaderboard after the hackathon ends will stand a chance to
            win an outstanding exclusive
            <span style="color: rgb(233, 83, 34)"
              >Hack This Fall Merchandise Swag Pack</span
            >
            delivered at your doorstep. The deadline to complete the challenges
            is 25th October 2021 11:59 PM IST.
          </p>
        </div>
        <div class="container-fluid">
          <div
            v-for="(challenge, index) in challenges"
            :key="index"
            class="challenges"
          >
            <div class="subHeading">
              <h2 class="section-title">{{ challenge.heading }}</h2>
            </div>
            <div
              class="
                row
                m-lg-3 m-0
                justify-content-center
                text-center text-lg-left
              "
            >
              <div
                v-for="(task, index) in challenge.tasks"
                :key="index"
                class="
                  col-10 col-md-5 col-lg-3
                  m-4
                  panel
                  shadow-1
                  smooth-transition-1
                "
              >
                <div class="row justify-content-center p-3">
                  <div
                    class="col-12 font-weight-bold my-2 font-size-18"
                    style="color: rgb(233, 83, 34)"
                  >
                    {{ task.heading }}
                  </div>
                  <div class="col-12 mb-2" v-html="task.content">{{}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <HashHeader title="DIGITAL SWAG" />
        <div class="about">
          <p>
            Hack This Fall 2.0 is a virtual hackathon so get yourself equipped
            with some amazing official Hack This Fall Digital Swags, and flex it
            by owning them. We have a Digital Badge where you can upload your
            photo and make it personalized. Get our cool Hack This Fall
            wallpapers for your desktop computers and mobile phones. Don't
            forget to use the zoom/meet wallpapers in your meetings. Also, to
            have fun and enjoy, we have an Instagram Bingo Story for you, which
            you can share on your stories, tag
            <a target="_blank" href="https://www.instagram.com/hackthisfall/"
              >@hackthisfall</a
            >, and nominate your friends for the same.
          </p>
        </div>
        <Container name="swagDigital">
          <div class="virtualBadge" id="badge">
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
                <img src="~/assets/icons/wallpaper.svg" height="15px" />
                Wallpaper
              </div>
              <button @click="desktopWallpaper" class="cta-button">
                DOWNLOAD&nbsp;&nbsp;&nbsp;
                <img
                  style="margin-bottom: -1px"
                  src="~/assets/icons/download.svg"
                  height="15px"
                />
              </button>
              <VueSlickCarousel class="carousel" v-bind="settings">
                <div>
                  <img
                    src="~/assets/DigitalSwags/desktop3.jpg"
                    class="carouselImg"
                  />
                </div>
                <div>
                  <img
                    src="~/assets/DigitalSwags/desktop1.png"
                    class="carouselImg"
                  />
                </div>
                <div>
                  <img
                    src="~/assets/DigitalSwags/desktop2.png"
                    class="carouselImg"
                  />
                </div>
              </VueSlickCarousel>
            </div>
            <div class="carouselWrapper">
              <div class="cornerHeading">
                <img src="~/assets/icons/wallpaper.svg" height="15px" />
                Zoom Background
              </div>
              <button @click="zoomBackground" class="cta-button">
                DOWNLOAD&nbsp;&nbsp;&nbsp;
                <img
                  style="margin-bottom: -1px"
                  src="~/assets/icons/download.svg"
                  height="15px"
                />
              </button>
              <VueSlickCarousel class="carousel" v-bind="settings">
                <div>
                  <img
                    src="~/assets/DigitalSwags/zbg3.png"
                    class="carouselImg"
                  />
                </div>
                <div>
                  <img
                    src="~/assets/DigitalSwags/zbg1.png"
                    class="carouselImg"
                  />
                </div>
                <div>
                  <img
                    src="~/assets/DigitalSwags/zbg2.png"
                    class="carouselImg"
                  />
                </div>
              </VueSlickCarousel>
            </div>
          </div>
          <div class="story">
            <div class="StoryCarouselWrapper">
              <div class="cornerHeading">
                <img src="~/assets/icons/mobile.svg" height="15px" />
                Wallpaper
              </div>
              <button @click="mobileWallpaper" class="cta-button story-button">
                DOWNLOAD&nbsp;&nbsp;&nbsp;
                <img
                  style="margin-bottom: -1px"
                  src="~/assets/icons/download.svg"
                  height="15px"
                />
              </button>
              <VueSlickCarousel class="StoryCarousel" v-bind="settings">
                <div>
                  <img
                    src="~/assets/DigitalSwags/mobile2.png"
                    class="StorycarouselImg"
                  />
                </div>
                <div>
                  <img
                    src="~/assets/DigitalSwags/mobile1.png"
                    class="StorycarouselImg"
                  />
                </div>
                <div>
                  <img
                    src="~/assets/DigitalSwags/mobile3.jpg"
                    class="StorycarouselImg"
                  />
                </div>
              </VueSlickCarousel>
            </div>
            <div class="storyWallpaper">
              <img class="bg" src="~/assets/DigitalSwags/insta.png" />
              <button @click="instaBingo" class="cta-button">
                DOWNLOAD&nbsp;&nbsp;&nbsp;
                <img
                  style="margin-bottom: -1px"
                  src="~/assets/icons/download.svg"
                  height="15px"
                />
              </button>
              <div class="cornerHeading">
                <img src="~/assets/icons/insta.svg" height="15px" />
                Story
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
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
        lazyLoad: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
      addedImage: false,
      challenges: [
        {
          heading: "Hack This Fall Challenges",
          tasks: [
            {
              heading: "1. Register for Hack This Fall",
              content:
                "First things first, we want to get you registered! <a target='_blank' href='https://hackthisfall.devpost.com/'>Register now here</a> to earn yourself your first points. It's as easy as that! Send us a screenshot on our <a target='_blank' href=\"https://bit.ly/htf2-challenge\">Challenge Form</a> after you register.",
            },
            {
              heading: "2. Follow HTF on Social Media",
              content:
                "Hack This Fall has an engaging social media presence where we share opportunities for the community. You can follow us on <a target='_blank' href='https://www.instagram.com/hackthisfall/'>Instagram</a>, <a target='_blank' href='https://twitter.com/hackthisfall'>Twitter</a>, <a target='_blank' href='https://www.linkedin.com/company/hackthisfall/'>LinkedIn</a>, <a target='_blank' href='https://dev.to/hackthisfall'>Dev.to</a> or <a target='_blank' href='https://www.youtube.com/c/HackThisFall'>Youtube</a> for a point each! Send us a screenshot on our <a target='_blank' href='https://bit.ly/htf2-challenge'>Challenge Form</a> after you follow.",
            },
            {
              heading: "3. Join the HTF Community Discord",
              content:
                "Join us on <a target='_blank' href='https://discord.hackthisfall.tech/'>Discord</a> and be a part of our awesome community. Send us a screenshot on our <a target='_blank' href='https://bit.ly/htf2-challenge'>Challenge Form</a> after you join.",
            },
            {
              heading: "4. Join us in Opening Ceremony",
              content:
                "Join us in our <a target='_blank' href='https://youtu.be/odV-eeqM3Jw'>Opening Ceremony</a> on 22nd October 10:30 AM IST. Tweet your excitement about it live and submit a link to your tweet on our <a target='_blank' href='https://bit.ly/htf2-challenge'>Challenge Form.</a>",
            },
            {
              heading: "5. Submit a project on Devpost",
              content:
                "Build something during the hackathon duration and submit a project on devpost. Submit your project link after the hackathon to our <a target='_blank' href='https://bit.ly/htf2-challenge'>Challenge Form</a> after you register.",
            },
            {
              heading: "6. Join us in Project Showcase Live Stream",
              content:
                "Join us for the <a target='_blank' href='https://youtu.be/rlNmAB7fqv4'>Project Showcase Live Stream</a> and share your excitement on Twitter. Submit a link to your tweet on our <a target='_blank' href='https://bit.ly/htf2-challenge'>Challenge Form.</a>.",
            },
            {
              heading: "7. Join us in Closing Ceremony",
              content:
                "Join us in our <a target='_blank' href='https://youtu.be/8pu1hMsGP3k'>Closing Ceremony</a> on 24th October 9:00 PM IST. Tweet your excitement about it live and submit a link to your tweet on our <a target='_blank' href='https://bit.ly/htf2-challenge'>Challenge Form.</a>.",
            },
            {
              heading: "8. [Repeatable] Post about HTF on Socials",
              content:
                "Share anything about us and use #HackThisFall and tag @hackthisfall on your Twitter, Instagram, and LinkedIn posts to earn points! This challenge is repeatable once daily. Submit a link to your post on our <a target='_blank' href='https://bit.ly/htf2-challenge'>Challenge Form</a>.",
            },
            {
              heading: "9. [Repeatable] Refer your friend",
              content:
                'Refer your friends and community members to register for Hack This Fall and ask them to enter your Email under the "Referral Email" field while registering on Devpost. Earn 1 point for 1 referral.',
            },
          ],
        },
        {
          heading: "Community Challenges",
          tasks: [
            {
              heading: "1. Design a Mascot for Hack This Fall",
              content:
                "Bring in your creativity and show it to us by designing a Mascot for Hack This Fall. Tweet your design and share the link of the tweet in this <a target='_blank' href='https://bit.ly/htf2-challenge'>Challenge Form</a>.",
            },
            {
              heading: "2. Share a coffee with a hacker",
              content:
                "Interact with our community members over coffee and network with others. Tweet the screenshot of your video call and share the link of the tweet in this <a target='_blank' href='https://bit.ly/htf2-challenge'>Challenge Form</a>.",
            },
            {
              heading: "3. Join HTF Hacker Connect",
              content:
                "Join us for a fun Hacker Connect to enjoy and relax. Tweet the screenshot of the connect and share the link of the tweet in this <a target='_blank' href='https://bit.ly/htf2-challenge'>Challenge Form</a>.",
            },
            {
              heading: "4. Join Bob Ross Mini Event",
              content:
                "Come join us and paint with Bob Ross himself, flaunt your painting skills online by tweeting your art. Share the link of the tweet in this <a target='_blank' href='https://bit.ly/htf2-challenge'>Challenge Form</a>.",
            },
            {
              heading: "5. Join Sketchful IO Mini Event",
              content:
                "Want to have some extra fun? Join us for the Sketchful mini event to guess the guesses. Tweet the screenshot of the mini event and share the link of the tweet in this <a target='_blank' href='https://bit.ly/htf2-challenge'>Challenge Form</a>.",
            },
            {
              heading: "6. Play Bingo on Instagram Story",
              content:
                "Remember the time we were obsessed with Insta Bingos? Check out Hack This Fall themed bingo <a target=\"_blank\" href=\"https://drive.google.com/file/d/1gBKNDRGFlg88YU1zA4ErvRXCrG7kznvg/view\">here</a>. Show it off on your stories & tag your favorite community members to complete it! Share the screenshot of your story in this <a target='_blank' href='https://bit.ly/htf2-challenge'>Challenge Form</a>.",
            },
            {
              heading: "7. Show off using Instagram Filter",
              content:
                "We are all obsessed with Instagram filters. Explore an awesome Hack This Fall Virtual Booth Instagram filter on our profile <a target=\"_blank\" href=\"https://www.instagram.com/hackthisfall/\">here</a> and try out the filter made with love for all the hackers attending Hack This Fall 2.0! Share the screenshot of your story in this <a target='_blank' href='https://bit.ly/htf2-challenge'>Challenge Form</a>.",
            },
            {
              heading: "8. Best memory with Hack This Fall",
              content:
                "We would love to hear from you your best memory at Hack This Fall. Tweet your favorite memory and share the link of the tweet in this <a target='_blank' href='https://bit.ly/htf2-challenge'>Challenge Form</a>.",
            },
            {
              heading: "9. [Repeatable] Attend a Live Session",
              content:
                "Attend any of the live speaker sessions happening the entire September on our <a target=\"_blank\" href=\"https://www.youtube.com/c/HackThisFall\">YouTube Channel</a> and tweet your learnings from the session. Share the link of the tweet in this <a target='_blank' href='https://bit.ly/htf2-challenge'>Challenge Form</a>.",
            },
          ],
        },
        {
          heading: "Sponsor Challenges",
          tasks: [
            {
              heading: "1. Sign up for a WazirX account",
              content:
                "Head to <a target='_blank' href='https://wrx.gg/htf'>wrx.gg/htf</a> and sign up. WazirX is India’s most trusted bitcoin & cryptocurrency exchange platform. Submit a screenshot of your account to our <a target='_blank' href='https://bit.ly/htf2-challenge'>Challenge Form</a>.",
            },
            {
              heading: "2. Sign up on SAWO Labs landing page",
              content:
                "Head to <a target='_blank' href='https://sawolabs.com/hackathon/redeemnow/?hackathon_name=HackThisFall2.0'>SAWO Labs</a> and sign up. Say goodbye to OTPs and Passwords. Submit a screenshot of your account to our <a target='_blank' href='https://bit.ly/htf2-challenge'>Challenge Form</a>.",
            },
            {
              heading: "3. Join the Storyblok Beta Crew",
              content:
                "Our favorite Headless CMS has just gotten even better! Check out the Storyblok v2, which will be launching later this year, & you can already sign-up for public beta <a target='_blank' href='https://bit.ly/htf2-storyblok-beta'>here</a>. Submit a screenshot of confirmation to our <a target='_blank' href='https://bit.ly/htf2-challenge'>Challenge Form</a>.",
            },
            {
              heading: "4. Sign up and try out Filebase",
              content:
                "Filebase is S3 Compatible Object Storage Powered by Blockchain. Get the first 5 GB of storage as free by just signing up <a target='_blank' href='https://bit.ly/htf2-filebase-signup'>here</a>. Submit a screenshot of your account to our <a target='_blank' href='https://bit.ly/htf2-challenge'>Challenge Form</a>.",
            },
            {
              heading: "5. FREE Tshirt by The@Company",
              content:
                "<span style='color: rgb(233, 83, 34);'>The@Company</span> loves hackathon, and they are giving away FREE Tshirts for first 200 people. All you need to do is, complete the steps in this form : <a style='text-decoration: underline' href='https://docs.google.com/forms/d/e/1FAIpQLSeUHeKxM6N0ts3V5M17lmtOZvZDVK7kdD506tox1ZA-2b8lrw/viewform' target='_blank'> CLICK HERE</a>.",
            },
            {
              heading: "6. Earn FREE Tshirt [Courier]",
              content:
                "Tweet about your project based on Courier or tweet about your hackathon experience using Courier and tag <a target='_blank' style='color: rgb(233, 83, 34);' href=\"https://twitter.com/hackthisfall\">@hackthisfall</a>, <a target='_blank' href=\"https://twitter.com/trycourier\" style='color: rgb(233, 83, 34);'>@trycourier</a> to receive a free graphic t-shirt. Limited to first 25 people who do this.",
            },
          ],
        },
      ],
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
      link.download = "htf-badge.png";
      link.href = image;
      link.click();
      link.remove();
    },
    desktopWallpaper() {
      var link = document.createElement("a");
      link.target = "_blank";
      link.href =
        "https://drive.google.com/drive/folders/18fTSDdTyT54Qihy0kzdrww0NQbAm4UPJ?usp=sharing";
      link.click();
      link.remove();
    },
    instaBingo() {
      var link = document.createElement("a");
      link.target = "_blank";
      link.href =
        "https://drive.google.com/file/d/1gBKNDRGFlg88YU1zA4ErvRXCrG7kznvg/view?usp=sharing";
      link.click();
      link.remove();
    },
    mobileWallpaper() {
      var link = document.createElement("a");
      link.target = "_blank";
      link.href =
        "https://drive.google.com/drive/folders/1R5Ca9GbutusY7skY3OKWCGbNYJvbnOBD?usp=sharing";
      link.click();
      link.remove();
    },
    zoomBackground() {
      var link = document.createElement("a");
      link.target = "_blank";
      link.href =
        "https://drive.google.com/drive/folders/13vb62xb3fTv9W-U1Kk0Bg3emMTj2t5Gn?usp=sharing";
      link.click();
      link.remove();
    },
    toggleImageAdded() {
      this.addedImage = true;
    },
  },
};
</script>

<style scoped src="~/assets/styles/bootstrap.css"></style>
<style lang="scss">
a {
  color: rgba(233, 83, 34, 1);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}

.slick-prev,
.slick-next {
  background: #e85325 !important;
  border-radius: 1rem;
}

.slick-prev {
  left: 20px;
  top: 270px;
  z-index: 99;

  @include respond-below(xs) {
    top: unset;
    left: 4%;
    bottom: 5%;
  }
}

.slick-next {
  left: 50px;
  top: 270px;
  z-index: 99;

  @include respond-below(xs) {
    top: unset;
    left: 10%;
    bottom: 5%;
  }

  @include respond-below(xxs) {
    top: unset;
    left: 12%;
  }
}

.StoryCarouselWrapper {
  .slick-prev {
    left: 20px;
    top: 418px;
    z-index: 99;

    @include respond-below(xs) {
      top: unset;
      left: 4%;
      bottom: 1%;
    }
  }

  .slick-next {
    left: 50px;
    top: 418px;
    z-index: 99;

    @include respond-below(xs) {
      top: unset;
      left: 12%;
      bottom: 1%;
    }

    @include respond-below(xxs) {
      top: unset;
      left: 16%;
    }
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
    text-decoration: none;

    &:hover {
      text-decoration: underline;
      color: rgba(233, 83, 34, 1);
    }
  }

  .subHeading {
    font-family: "Poppins";
    font-style: bold;
    justify-content: space-around;
    display: flex;
    align-self: center;
    text-align: center;
    color: rgba(128, 128, 128, 1);

    h2.section-title {
      text-transform: uppercase;
      font-size: 1.5rem;
      font-weight: 600;
      padding: 20px 10px 20px 0;

      &:after {
        content: "";
        height: 1.5px;
        background: #ccc;
        display: block;
        margin-top: 0.2rem;
      }
    }
  }

  .shadow-1 {
    box-shadow: 0 0 10px 2px rgba(255, 107, 0, 0.07) !important;
    border-radius: 16px;
  }

  .panel {
    padding: 0 30px;
    font-family: "Poppins";
    background-color: #feeee5;
    min-width: 29%;
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
      margin: auto;
      width: 90%;
      background-color: #feeee5;
      text-align: center;
      border-radius: 1rem;
      margin-bottom: 2rem;

      p {
        color: rgba(112, 112, 112, 1);
        font-weight: bold;
        margin: 1rem 1rem 2rem;
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
      padding: 4rem 0.5rem 3rem 0.5rem;
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

        @media screen and (max-width: 360px) {
          height: 280px;
          width: 280px;

          canvas {
            height: 280px;
            width: 280px;
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
    margin-left: 0.1rem;
    margin-bottom: 1rem;

    @include respond-below(xs) {
      margin-left: -1rem;
    }

    .carouselWrapper {
      position: relative;
      margin: 0 1rem;
      border-radius: 1rem;

      @include respond-below(lg) {
        margin: unset;
        margin-left: 20%;
      }

      @include respond-below(md) {
        margin: unset;
        margin-left: 12%;
      }

      @include respond-below(sm) {
        margin: unset;
        margin-left: -0.5rem;
      }

      @include respond-below(xs) {
        margin: 1rem 0;
        margin-left: 2.5%;
      }

      .carousel {
        width: 520px;
        border-radius: 1rem;

        @include respond-below(xs) {
          width: 95vw !important;
        }

        .carouselImg {
          width: 520px;
          border-radius: 1rem;

          @include respond-below(xs) {
            width: 95vw !important;
          }
        }
      }

      .cta-button {
        background-color: #e85325;
        color: white;
        border: none;
        position: absolute;
        bottom: 5px;
        right: 13px;
        z-index: 100;
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
          right: 3%;
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
      top: 0px;
      left: 0px;
      background: #e85325;
      color: #fff;
      font-weight: 600;
      padding: 8px 10px;
      border-top-left-radius: 1rem;
      border-bottom-right-radius: 1rem;

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
    margin-top: 1.5rem;
    margin-left: 26%;

    @include respond-below(lg) {
      margin-left: 20%;
    }

    @include respond-below(md) {
      margin-left: 12%;
    }

    @include respond-below(sm) {
      margin-left: 22%;
    }

    @include respond-below(xs) {
      margin-left: 1%;
    }

    .cta-button {
      background-color: #e85325;
      color: white;
      border: none;
      position: absolute;
      bottom: 4%;
      right: 10px;
      z-index: 100;
      padding: 0.5rem 1rem;
      display: flex;
      align-items: center;
      width: unset;
      margin: 0 auto 0.8rem;
      font-family: "Segoe UI Bold";
      border-radius: 0.5rem;
      cursor: pointer;
      box-shadow: rgba(255, 107, 0, 0.4) 0px 0px 20px 0px;

      @include respond-below(sm) {
        bottom: 0;
      }

      &:hover {
        box-shadow: rgba(232, 82, 37, 0.25) 0px 0px 0px 6px;
      }

      @media screen and (max-width: 390px) {
        top: unset;
        left: unset;
        bottom: -1%;
        right: 3%;
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
      border-radius: 1rem;

      .bg {
        width: 250px;
        border-radius: 1rem;

        @include respond-below(xs) {
          width: 90vw !important;
        }
      }
    }

    .StoryCarouselWrapper {
      position: relative;
      margin-right: 2rem;
      border-radius: 1rem;
      margin-bottom: 20px;

      @include respond-below(xs) {
        margin-bottom: 20px;
        margin-right: 0;
      }

      .StoryCarousel {
        width: 250px;
        border-radius: 1rem;

        @include respond-below(xs) {
          width: 90vw !important;
        }

        .StorycarouselImg {
          width: 250px;
          border-radius: 1rem;

          @include respond-below(xs) {
            width: 90vw !important;
          }
        }
      }

      .story-button {
        bottom: 0px !important;
        right: 10px !important;
        top: unset !important;
        left: unset !important;
      }
    }

    .cornerHeading {
      position: absolute;
      z-index: 99;
      top: 0px;
      left: 0px;
      background: #e85325;
      color: #fff;
      font-weight: 600;
      padding: 8px 10px;
      border-top-left-radius: 1rem;
      border-bottom-right-radius: 1rem;

      img {
        display: inline-block;
        margin-bottom: -2px;
      }
    }
  }
}
</style>
