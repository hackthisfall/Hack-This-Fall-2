<template>
  <div id="faq">
    <Container>
      <section class="content-section">
        <HashHeader title="FREQUENTLY ASKED QUESTIONS" />
        <div class="contents">
          <div class="cards-grid">
            <div
              v-for="(faq, index) in FAQs"
              :key="index"
              :data-card-id="index"
              :class="['card', FAQs[index].isOpen ? null : 'hidden']"
            >
              <div class="texts" @click="toggleFAQItem(index)">
                <h4 class="title">Q. {{ faq.title }}</h4>
                <img
                  v-if="FAQs[index].isOpen === true"
                  src="~/assets/HTF2/orange-arrow-up.svg"
                  alt="toggle FAQ"
                />
                <img
                  v-else
                  src="~/assets/HTF2/black-arrow-up.svg"
                  alt="toggle FAQ"
                />
              </div>
              <div class="answer">
                <div v-html="faq.content">{{}}</div>
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
export default {
  components: {
    HashHeader,
    Container,
  },
  data() {
    return {
      FAQs: [
        {
          isOpen: false,
          title: "What is a hackathon?",
          content:
            "A hackathon is an invention marathon where you can work with people around the globe to build a project related to technology! It isn't about hacking into a system, it's instead about hacking something together and learning a great deal in the process.",
        },
        {
          isOpen: false,
          title: "What is an online hackathon?",
          content:
            "It's an invention marathon like the traditional in-person hackathon, but held remotely!",
        },
        {
          isOpen: false,
          title: "How long will it be on for?",
          content:
            "The event will be running for about 48 hours from 28th May to 30th May.",
        },
        {
          isOpen: false,
          title: "Who can participate?",
          content:
            "Everyone is welcome to participate, be it, students, professionals or aliens from different Planet!",
        },
        {
          isOpen: false,
          title: "How will project submissions work?",
          content:
            "To participate, register on <a rel='noopener noreferrer' href='//hackon.hackerearth.com' target= '_blank'>HackerEarth's platform</a>. You will then be able to create your project once the hackathon starts. To be eligible for the judging process you'll have to submit the project before the hackathon ends.",
        },
        {
          isOpen: false,
          title: "How will judging work?",
          content:
            "We'll be reviewing submissions on HackerEarth, and it will be judged by our team and judges mentioned on the page.",
        },
        {
          isOpen: false,
          title: "Do I need to be a student?",
          content:
            "Absolutely not! The team behind HackOn is mostly made up of students, however, anyone age 13 and above can give it a go!",
        },
        {
          isOpen: false,
          title: "How much does it cost?",
          content:
            "Zero. Zip. Zilch. Nada. Nothing. Admission to HackOn is completely free, thanks to our sponsors!",
        },
        {
          isOpen: false,
          title: "Where can I find updates?",
          content:
            "We have an active <a rel='noopener noreferrer' href='//discord.hackon.tech' target= '_blank'>Discord</a> for communication, along with a <a rel='noopener noreferrer' href='//telegram.hackon.tech' target= '_blank'>Telegram</a> ",
        },
        {
          isOpen: false,
          title: "How big can a team be?",
          content:
            "You can form teams of 2 to 4 people. Most teams aim to have a mix of people with both design and developer skills. Remember we won't accept project submissions from individual applicants.",
        },
      ],
      expandedFAQs: new Set(),
    };
  },
  methods: {
    toggleFAQItem(index) {
      if (this.FAQs[index].isOpen) {
        this.FAQs[index].isOpen = false;
      } else {
        this.FAQs.forEach((faq, currentIndex) => {
          if (currentIndex === index) {
            faq.isOpen = true;
          } else {
            faq.isOpen = false;
          }
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.content-section {
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  .contents {
    padding: 1rem 4rem;

    .cards-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 20px;
      row-gap: 20px;

      @include respond-below(sm) {
        grid-template-columns: 1fr;
      }

      .card {
        flex: 1;
        align-self: flex-start;
        box-shadow: rgba(255, 107, 0, 0.1) 0px 0px 10px 0px;
        display: flex;
        flex-direction: column;
        border-radius: 5px;
        background-color: #feede3;

        &.hidden {
          background-color: #fff;
          .texts {
            .title {
              color: initial;
            }
          }
          .answer {
            background-color: #fff;
            max-height: 0px;
          }

          img {
            transform: rotate(180deg);
          }
        }

        img {
          width: 1rem;
        }

        .texts {
          padding: 15px 15px 10px;
          margin-left: 9px;
          margin-right: 2px;
          display: flex;
          justify-content: space-between;
          align-content: flex-start;
          cursor: pointer;
          -moz-user-select: none;
          -webkit-user-select: none;
          -ms-user-select: none;
          user-select: none;

          .title {
            color: rgba(233, 83, 34, 1);
            font-size: 1.2rem;
            font-weight: 300;
          }
        }

        .answer {
          margin: 0px 6px 6px;
          height: 100%;
          background-color: #feede3;
          max-height: 200px;
          overflow: hidden;
          transition: all 0.3s ease-out;

          div {
            padding: 16px 24px;
          }
        }
      }
    }
  }
}
</style>
