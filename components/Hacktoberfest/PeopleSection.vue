<template>
  <section class="speaker-section">
    <div class="contents">
      <div class="speakers-grid">
        <div
          v-for="(speaker, index) in speakers"
          :key="index"
          class="team-card"
        >
          <img
            :src="speaker.picture"
            alt="profile picture"
            class="profile-pic"
          />
          <div class="right">
            <div class="details">
              <h4 class="title">{{ speaker.name }}</h4>
              <span class="description">{{ speaker.description }}</span>
            </div>
            <div class="socials">
              <a :href="speaker.twitter" target="_blank">
                <img
                  src="~/assets/Hacktoberfest/link-twitter.png"
                  class="social twitter"
                />
              </a>
              <a :href="speaker.github" target="_blank">
                <img
                  src="~/assets/Hacktoberfest/link-github.png"
                  class="social github"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Container from "~/components/Container";
import HashHeader from "~/components/HashHeader";

export default {
  components: {
    Container,
    HashHeader,
  },
  data() {
    return {
      speakers: [
        {
          description: "You Foundation/Developer",
          name: "Bishwajeet Parhi",
          github: "https://github.com/2002Bishwajeet",
          twitter: "https://twitter.com/biswa_20p",
          picture: require("~/assets/Hacktoberfest/biswa.png"),
        },
        {
          description: "Student/DEVELOPER",
          name: "Aayush Sharma",
          twitter: "https://twitter.com/SuperAayush14",
          github: "https://github.com/SuperAayush",
          picture: require("~/assets/Hacktoberfest/aayush.jpeg"),
        },
        {
          description: "METAPASS/DEVELOPER",
          name: "Apoorv Dwivedi",
          github: "https://github.com/apoorvdwi",
          twitter: "https://twitter.com/Apoorvdwi",
          picture: require("~/assets/Team/apoorv.jpg"),
        },
        {
          description: "SPENNY/DEVELOPER",
          name: "Paras Gupta",
          github: "https://github.com/parasg1999",
          twitter: "https://twitter.com/parasg1999",
          picture: require("~/assets/Hacktoberfest/paras.jpg"),
        },
        {
          description: "APPWRITE/Developer Advocate",
          name: "Aditya Oberai",
          github: "https://github.com/adityaoberai",
          twitter: "https://twitter.com/adityaoberai1",
          picture: require("~/assets/Hacktoberfest/aditya.jpg"),
        },
        {
          description: "APPWRITE/Developer Advocate",
          name: "Haimantika Mitra",
          github: "https://github.com/Haimantika",
          twitter: "https://twitter.com/HaimantikaM",
          picture: require("~/assets/Hacktoberfest/haimantika.jpg"),
        },
        {
          description: "ALTOGIC/Community Manager",
          name: "Ishika Kesarvani",
          twitter: "https://twitter.com/ishikakesarwan4",
          github: "https://github.com/ishikkkkaaaa",
          picture: require("~/assets/Hacktoberfest/ishika.jpg"),
        },
        // {
        //   description: "Engineer,Web DataWorks",
        //   name: "Siddharth Dayalwal",
        //           //   github: "https://twitter.com/TheNishuGoel",github: "https://twitter.com/TheNishuGoel",
        //   picture: require("~/assets/Speakers/nishu.png"),
        // },
      ],
    };
  },
  mounted() {
    // this.speakers.sort((a, b) => {
    //   if (a.name < b.name) {
    //     return -1;
    //   }
    //   if (a.name > b.name) {
    //     return 1;
    //   }
    //   return 0;
    // });
  },
};
</script>

<style lang="scss" scoped>
.speaker-section {
  width: 100%;
  .contents {
    width: 110%;
    .speakers-grid {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 2fr));
      column-gap: 3rem;
      row-gap: 1rem;
      justify-content: space-around;

      font-family: "Jetbrains Mono", monospace;
      text-transform: uppercase;

      .team-card {
        display: flex;
        background: rgba(255, 255, 255, 0.1);
        padding: 1rem;
        border-radius: 15px;

        .profile-pic {
          width: 6rem;
          height: 6rem;
          margin-right: 1rem;
          border-radius: 10px;
        }

        .right {
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          h4 {
            font-size: 1.2rem;
            font-weight: 700;
          }

          span {
            font-weight: 400;
            font-size: 0.9rem;
            color: rgba($color: #fff, $alpha: 0.5);
          }

          .socials {
            .social {
              width: 1.5rem;

              &.github {
                margin-left: 0.5rem;
              }
            }
          }
        }
      }

      @include respond-below(lg) {
        grid-template-columns: repeat(2, minmax(0, 2fr));
      }

      @include respond-below(sm) {
        grid-template-columns: repeat(1, minmax(0, 2fr));
      }
    }
  }
}
</style>
