<template>
  <div id="faq">
    <Container name="faq">
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
      currentIndex: 0,
      FAQs: [
        {
          isOpen: false,
          title: "What is a hackathon?",
          content:
            "Hackathons are an incredible way to bring your community together to learn new skills, build amazing projects, and share ideas.",
        },
        {
          isOpen: false,
          title: "Where and When is Hack This Fall?",
          content:
            "Hack This Fall is a virtual 48-hours hackathon to be happening on 22nd to 24th October, 2021.",
        },
        {
          isOpen: false,
          title: "Who can attend a hackathon?",
          content:
            "Anyone who has an interest in technology can attend a hackathon to learn, build & share. You  should also be of age of 13 and above.",
        },
        {
          isOpen: false,
          title: "Can beginners participate?",
          content:
            "Absolutely. We will have plenty of mentors and resources available, along with several workshops targeted for beginners. Come learn and experience your first hackathon at Hack This Fall.",
        },
        {
          isOpen: false,
          title: "Can we form teams?",
          content:
            "Most definitely! We believe in collaboration and encourage hackers to work in teams of up to minimum 2 and maximum 4 members. You may opt-in to team formation through our <a style='color: rgba(233, 83, 34, 1);' href='https://discord.hackthisfall.tech/' rel='noopener noreferrer' target='_blank'>Discord Server</a>. Every hacker must be a part of only one team and submit only one project.",
        },
        {
          isOpen: false,
          title: "Can I submit my previous project?",
          content:
            "We apologize, but all hackathon's projects should be developed during the event from scratch. We want honest conditions for all hackers. That's why all code should be done during the hackathon.",
        },
        {
          isOpen: false,
          title: "Where do I need to submit my project?",
          content:
            "First register on our <a style='color: rgba(233, 83, 34, 1);' href='https://hackthisfall.devpost.com/' rel='noopener noreferrer' target='_blank'>Devpost page</a>. Once the hackathon starts, you will be able to create the project there. To become eligible for prizes, you must submit your project before the deadline.",
        },
        {
          isOpen: false,
          title: "Who keeps ownership of the projects after the hackathon?",
          content:
            "The hackers building the project will keep full ownership of the project as it is their intellectual property.",
        },
        {
          isOpen: false,
          title: "What is the Code of Conduct?",
          content:
            "We want to ensure a positive experience for all participants. We will be following MLH’s Code of Conduct, we encourage you to read it <a style='color: rgba(233, 83, 34, 1);' href='https://static.mlh.io/docs/mlh-code-of-conduct.pdf' rel='noopener noreferrer' target='_blank'>here</a>.",
        },
        {
          isOpen: false,
          title: "More Questions?",
          content:
            "Join our Hacker Community Discord Server <a style='color: rgba(233, 83, 34, 1);' href='https://discord.hackthisfall.tech/' rel='noopener noreferrer' target='_blank'>here</a>. Ask any other questions you have and connect with a larger community. Looking forward to welcoming you.",
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
        this.FAQs[this.currentIndex].isOpen = false;
        this.FAQs[index].isOpen = true;
        this.currentIndex = index;
        // this.FAQs.forEach((faq, currentIndex) => {
        //   if (currentIndex === index) {
        //     faq.isOpen = true;
        //   } else {
        //     faq.isOpen = false;
        //   }
        // });
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

    @include respond-below(sm) {
      padding: 1rem 0rem;
    }

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
        border-radius: 1rem;
        background-color: #feede3;

        &.hidden {
          background-color: #fff;
          transition: max-height 0.3s ease, background-color 0s ease 0.3s;
          .texts {
            .title {
              color: initial;
              transition: color 0s ease 0.3s;
              padding-right: 16px;
            }
          }
          .answer {
            background-color: #fff;
            max-height: 0px;
            transition: max-height 0.3s ease, background-color 0s ease 0.3s;
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
            font-size: 1.1rem;
            font-weight: 300;
          }
        }

        .answer {
          margin: 0px 6px 6px;
          height: 100%;
          background-color: #feede3;
          max-height: 300px;
          overflow: hidden;
          transition: max-height 0.3s ease;

          div {
            padding: 16px 24px;
          }
        }
      }
    }
  }
}
</style>
