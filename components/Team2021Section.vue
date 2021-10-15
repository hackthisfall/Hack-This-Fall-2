<template>
  <Container name="team">
    <section class="content-section">
      <HashHeader title="SEASON 2 TEAM" />
      <div class="contents">
        <div class="team-grid">
          <div
            v-for="(teamMember, index) in team"
            :key="index"
            :class="['team-card', `rot-${Math.floor(Math.random() * 24) * 15}`]"
          >
            <a :href="teamMember.url" target="_blank" rel="noopener noreferrer">
              <div class="picture-wrapper smooth-transition">
                <img
                  :src="teamMember.picture"
                  alt="profile picture"
                  class="profile-pic"
                />
              </div>
            </a>
            <h4 class="title">{{ teamMember.name }}</h4>
          </div>
        </div>
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
  data() {
    return {
      team: [
        {
          name: "Siddharth Dayalwal",
          url: "https://www.linkedin.com/in/siddharth-dayalwal/",
          picture: require("~/assets/Team/siddharth.png"),
          rotation: 30,
        },
        {
          name: "Paras Gupta",
          url: "https://www.linkedin.com/in/parasg1999/",
          picture: require("~/assets/Team/paras.jpeg"),
          rotation: 75,
        },
        {
          name: "Ojasvi Khurana",
          url: "https://www.linkedin.com/in/ojasvikhurana/",
          picture: require("~/assets/Team/ojasvi.jpeg"),
          rotation: 90,
        },
        {
          name: "Apoorv Dwivedi",
          url: "https://www.linkedin.com/in/apoorvdwi",
          picture: require("~/assets/Team/apoorv.jpeg"),
        },
        {
          name: "Vaibhav Toshniwal",
          url: "https://www.linkedin.com/in/vaibhav-vinay-toshniwal-252ba8187/",
          picture: require("~/assets/Team/vaibhav.jpeg"),
          rotation: 90,
        },
        {
          name: "Sahil Bhatiya",
          url: "https://www.linkedin.com/in/sahil-bhatiya-73790719a/",
          picture: require("~/assets/Team/sahil.jpeg"),
          rotation: 120,
        },
        {
          name: "Dennis D'mello",
          url: "https://www.linkedin.com/in/dendemello/",
          picture: require("~/assets/Team/dennis.jpeg"),
        },
        {
          name: "Sahil Sen",
          url: "https://www.linkedin.com/in/sahil-sen-528647ba/",
          picture: require("~/assets/Team/sahilsen.webp"),
          rotation: 150,
        },
        // {
        //   name: "Rishabh Bansal",
        //   url: "https://www.linkedin.com/in/rishabhbansal97",
        //   picture: require("~/assets/Team/rishabh.jpeg"),
        //   rotation: 210,
        // },
        {
          name: "Aaishika S Bhattacharya",
          url: "https://www.linkedin.com/in/aaishika/",
          picture: require("~/assets/Team/aaishika.png"),
          rotation: 45,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.content-section {
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  font-family: "Segoe UI";

  .contents {
    padding: 1rem 4rem;
    text-align: center;

    @include respond-below(sm) {
      padding: 1rem 0rem;
    }

    .team-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      column-gap: 20px;
      row-gap: 30px;

      @include respond-below(md) {
        grid-template-columns: repeat(3, 1fr);
      }

      @include respond-below(sm) {
        grid-template-columns: repeat(2, 1fr);
      }

      @include respond-below(xs) {
        grid-template-columns: repeat(1, 1fr);
      }

      .team-card {
        padding-bottom: 1rem;
        display: flex;
        flex-direction: column;
        box-shadow: rgba(255, 107, 0, 0.07) 0px 0px 10px 2px;
        border-radius: 1rem;
        // justify-content: center;
        align-items: center;

        .picture-wrapper {
          border-style: solid;
          border-width: 3px;
          border-color: red red white red;
          width: 210px;
          height: 210px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          margin-top: 1rem;

          .profile-pic {
            width: 200px;
            height: 200px;
            border-radius: 50%;
            // background: var(red);
          }

          @include respond-below(md) {
            width: 170px;
            height: 170px;
            .profile-pic {
              width: 160px;
              height: 160px;
            }
          }

          @include respond-below(sm) {
            width: 140px;
            height: 140px;
            .profile-pic {
              width: 130px;
              height: 130px;
            }
          }
        }

        .title {
          font-size: 1.2rem;
          text-align: center;
          margin: 1rem 0rem;
          color: rgba(233, 83, 34, 1);

          @include respond-below(sm) {
            font-size: 1rem;
            margin-top: 10px;
          }
        }
      }
    }
  }
}
</style>
