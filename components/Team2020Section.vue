<template>
  <Container id="team">
    <section class="content-section">
      <HashHeader title="SEASON 1 TEAM" />
      <div class="contents">
        <div class="team-grid">
          <div
            v-for="(teamMember, index) in team"
            :key="index"
            :class="['team-card', `rot-${Math.floor(Math.random() * 24) * 15}`]"
          >
            <a :href="teamMember.url" target="_blank" rel="noopener noreferrer">
              <div class="picture-wrapper">
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
          name: "Dhvanan Kotecha",
          url: "https://www.linkedin.com/in/dkots111/",
          picture: require("~/assets/Team2020/dhvanan.webp"),
          rotation: 60,
        },
        {
          name: "Naivedh Shah",
          url: "https://www.linkedin.com/in/naivedh-shah/",
          picture: require("~/assets/Team2020/naivedh.webp"),
          rotation: 90,
        },
        {
          name: "Abhishek Doshi",
          url: "https://www.linkedin.com/in/abhishek-doshi-520983199/",
          picture: require("~/assets/Team2020/abhi.webp"),
          rotation: 180,
        },
        {
          name: "Tushar",
          url: "https://www.linkedin.com/in/tushar-ba401a136/",
          picture: require("~/assets/Team2020/tushar.webp"),
          rotation: 210,
        },
        {
          name: "Sahil Sen",
          url: "https://www.linkedin.com/in/sahil-sen-528647ba/",
          picture: require("~/assets/Team/sahilsen.webp"),
          rotation: 60,
        },
        {
          name: "Tirthak Patel",
          url: "https://www.linkedin.com/in/tirthakpatel/",
          picture: require("~/assets/Team2020/tirthak.webp"),
          rotation: 45,
        },
        {
          name: "Perin Shah",
          url: "https://www.linkedin.com/in/shahperin/",
          picture: require("~/assets/Team2020/perin.webp"),
        },
        {
          name: "Sagar Parmar",
          url: "https://www.linkedin.com/in/sagarparmar881/",
          picture: require("~/assets/Team2020/sagar.jpeg"),
          rotation: 75,
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
          border-width: 2px;
          border-color: red red white red;
          width: 210px;
          height: 210px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: 0.3s all ease-in-out;
          margin-top: 1rem;

          .profile-pic {
            width: 200px;
            height: 200px;
            border-radius: 50%;
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
