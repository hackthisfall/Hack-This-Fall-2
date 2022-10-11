<template>
  <section class="content-section" id="agenda">
    <div class="contents">
      <span class="activeDate allHeaders first">
        <div class="headers">16TH OCTOBER 2022</div>
      </span>
      <!-- <div
        style="
          color: rgba(233, 83, 34, 1);
          font-style: italic;
          font-size: 0.8rem;
          margin-top: 0.6rem;
          margin-bottom: 1rem;
        "
      >
        * All times displayed in India Standard Time (UTC+05:30).
      </div> -->
      <div class="daily-schedule">
        <div
          v-for="(event, index) in scheduleComplete[selectedIndex].items"
          :key="index"
          class="single-event"
        >
          <div class="date-time">
            <span class="time">
              {{ event.time }}
            </span>
            <span class="duration"> {{ event.duration }} MINS </span>
          </div>
          <div :class="['description', event.type]">
            <div class="speaker">
              <div class="details">
                <span class="title">
                  {{ event.title }}
                </span>
                <span class="name">
                  <span v-if="event.speaker !== undefined">
                    {{ event.speaker }}
                  </span>
                </span>
              </div>
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
      selectedIndex: 0,
      scheduleComplete: [
        {
          header: "Day 1 - October 22",
          items: [
            {
              title: "CHECK IN",
              time: "10:00 AM",
              duration: "60",
            },
            {
              title: "WELCOME & INTRODUCTION",
              time: "11:00 AM",
              speaker: "Siddharth Dayalwal",
              duration: "15",
            },
            {
              title: "Into the world of Open-Source with Hacktoberfest [TALK]",
              time: "11:15 AM",
              speaker: "Aayush sharma & Bishwajeet parhi",
              duration: "20",
            },
            {
              title: "BASICS OF GIT & GITHUB [WORKSHOP]",
              time: "11:40 AM",
              speaker: "Apoorv Dwivedi and paras gupta",
              duration: "50",
            },
            {
              title: "UPSKILL & RELOCATE WITH HABSIDA [TALK]",
              time: "12:30 AM",
              // speaker: "",
              duration: "10",
            },
            {
              title: "LUNCH & NETWORKING",
              time: "12:45 PM",
              duration: "75",
            },
            {
              title: "MAKING YOUR FIRST CONTRIBUTION TO APPWRITE [WORKSHOP]",
              time: "02:00 PM",
              speaker: "Aditya Oberai & Haimantika Mitra",
              duration: "25",
            },
            {
              title: "Contributing and Building on Solana [WORKSHOP]",
              time: "02:30 PM",
              speaker: "Prakarsh Pathak",
              duration: "25",
            },
            {
              title: "CAREER OPPORTUNITIES WITH OPEN SOURCE [TALK]",
              time: "03:00 PM",
              speaker: "Ishika Kesarwani",
              duration: "25",
            },
            {
              title: "OPEN SOURCE PROJECT SHOWCASE [OPEN STAGE]",
              time: "03:30 PM",
              speaker: "ATTENDEES",
              duration: "30",
            },
            {
              title: "CONTRIBUTE TOWARDS HACKTOBERFEST [BREAKOUT ROOM]",
              time: "04:00 PM",
              speaker: "ATTENDEES",
              duration: "30",
            },
            {
              title: "PRIZES & GIVEAWAYS",
              time: "04:30 PM",
              duration: "15",
            },
            {
              title: "CONCLUSION & GROUP PHOTO",
              time: "04:45 PM",
              duration: "15",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.content-section {
  flex-direction: column;
  font-family: "Jetbrains Mono", monospace;
  margin-top: 2rem;
  width: 100%;
  .contents {
    .headers {
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
    }
    .disclaimer {
      color: #9ca4b6;
    }

    .daily-schedule {
      margin-bottom: 1em;
    }

    .single-event {
      display: flex;
      flex-direction: row;
      padding-top: 0.6rem;
      padding-bottom: 0.6rem;
      border-bottom: 1px solid rgba(229, 225, 230, 0.5);

      .date-time {
        // background-color: #feede3;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0.75em 0em 0.75em 0em;
        // text-align: flex-start;
        min-width: 8rem;

        .time {
          font-size: 1.4rem;
          font-weight: 700;
        }

        .duration {
          font-size: 1.1rem;
          font-weight: 400;
          color: #40ddff;
        }

        @include respond-below(sm) {
          padding-top: 0.6rem;
          padding-bottom: 0.6rem;

          .time {
            font-size: 1.2rem;
            font-weight: 700;
          }

          .duration {
            font-size: 1rem;
            font-weight: 400;
            color: #40ddff;
          }
        }
      }

      .description {
        padding-left: 2em;
        // background-color: #feede3;
        flex: 1;
        display: flex;
        justify-content: space-between;
        // margin-left: 1rem;

        @include respond-below(sm) {
          padding-left: 1em;
        }

        border-left: 2px solid rgba(229, 225, 230, 1);

        .speaker {
          display: flex;
          align-items: center;

          @include respond-below(md) {
            padding-right: 0.5em;
          }

          img.avatar {
            width: 5rem;
            height: 5rem;
            border-radius: 50%;
            margin-right: 2rem;

            @include respond-below(sm) {
              width: 3rem;
              height: 3rem;
              margin-right: 1em;
            }
          }
          .details {
            display: flex;
            flex-direction: column;
            justify-content: center;
            // line-height: 1.5rem;

            .title {
              // font-size: 1.1em;
              font-size: 1.4rem;
              font-weight: 700;
              letter-spacing: 0.1rem;
              text-transform: uppercase;

              @include respond-below(sm) {
                letter-spacing: initial;
                font-size: 1.2em;
              }
            }

            .name {
              // margin-top: -0.5rem;
              // color: rgba(255, 255, 255, 0.5);
              text-transform: uppercase;
              font-weight: 400;
              font-size: 1.1rem;
              color: rgba(255, 255, 255, 0.6);
              @include respond-below(sm) {
                font-size: 1rem;
              }
            }
          }
        }
      }

      .more-details {
        display: flex;
        align-items: center;
        color: #797e97;
        cursor: pointer;
        white-space: nowrap;

        @include respond-below(sm) {
          display: none;
        }

        img {
          transform: rotate(90deg);
          margin-left: 0.5em;
          margin-right: 2em;
          width: 1em;
        }
      }
    }
  }
}
</style>
