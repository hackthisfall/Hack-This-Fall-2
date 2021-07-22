<template>
  <Container id="team">
    <section class="content-section">
      <HashHeader title="Season 2 Team" />
      <div class="contents">
        <div class="team-grid">
          <div
            v-for="(teamMember, index) in team"
            :key="index"
            :class="['team-card', teamMember.rotation]"
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
          rotation: "thirty",
        },
        {
          name: "Paras Gupta",
          url: "https://www.linkedin.com/in/parasg1999/",
          picture: require("~/assets/Team/paras.jpeg"),
          rotation: "sixty",
        },
        {
          name: "Ojasvi Khurana",
          url: "https://www.linkedin.com/in/ojasvikhurana/",
          picture: require("~/assets/Team/ojasvi.jpeg"),
          rotation: "ninety",
        },
        {
          name: "Apoorv Dwivedi",
          url: "https://www.linkedin.com/in/apoorvdwi",
          picture: require("~/assets/Team/apoorv.jpeg"),
        },
        {
          name: "Shubhangi Gupta",
          url: "https://www.linkedin.com/in/knowshubhangi/",
          picture: require("~/assets/Team/shubhangi.jpeg"),
          rotation: "thirty",
        },
        {
          name: "Vaibhav Toshniwal",
          url: "https://www.linkedin.com/in/vaibhav-vinay-toshniwal-252ba8187/",
          picture: require("~/assets/Team/vaibhav.jpeg"),
          rotation: "sixty",
        },
        {
          name: "Sahil Bhatiya",
          url: "https://www.linkedin.com/in/sahil-bhatiya-73790719a/",
          picture: require("~/assets/Team/sahil.jpeg"),
          rotation: "ninety",
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
          rotation: "thirty",
        },
        {
          name: "Rishabh Bansal",
          url: "https://www.linkedin.com/in/rishabhbansal97",
          picture: require("~/assets/Team/rishabh.jpeg"),
          rotation: "sixty",
        },
        {
          name: "Aaishika S Bhattacharya",
          url: "https://www.linkedin.com/in/aaishika/",
          picture: require("~/assets/Team/aaishika.png"),
          rotation: "ninety",
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
        display: flex;
        flex-direction: column;
        box-shadow: rgba(255, 107, 0, 0.07) 0px 0px 10px 2px;
        border-radius: 1rem;
        // justify-content: center;
        align-items: center;

        &.thirty {
          .picture-wrapper {
            transform: rotate(30deg);
            .profile-pic {
              transform: rotate(-30deg);
            }
          }
        }

        &.sixty {
          .picture-wrapper {
            transform: rotate(60deg);
            .profile-pic {
              transform: rotate(-60deg);
            }
          }
        }

        &.ninety {
          .picture-wrapper {
            transform: rotate(90deg);
            .profile-pic {
              transform: rotate(-90deg);
            }
          }
        }

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

          &:hover {
            background: rgba(233, 83, 34, 1);
          }

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
          margin-top: 1rem;
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
