<template>
  <section class="faq-content-section">
    <div class="contents">
      <div class="cards-grid">
        <div
          v-for="(faq, index) in FAQs"
          :key="index"
          :data-card-id="index"
          :class="['card', FAQs[index].isOpen ? null : 'hidden']"
        >
          <div class="texts" @click="toggleFAQItem(index)">
            <h4 class="title">{{ faq.title }}</h4>
            <!-- <img
                v-if="FAQs[index].isOpen === true"
                src="~/assets/Hacktoberfest/xmark.svg"
                alt="toggle FAQ"
              /> -->
            <img src="~/assets/Hacktoberfest/plus.svg" alt="toggle FAQ" />
          </div>
          <div class="answer">
            <div v-html="faq.content">{{}}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
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
          title: "Do you need Laptop for this event?",
          content:
            "We will be providing hands on workshops so bringing laptop would be recommended",
        },
        {
          isOpen: false,
          title: "Is this Event free?",
          content:
            "Yes, this event is absolutely free. Lunch and swags is on us",
        },
        {
          isOpen: false,
          title: "Where is the venue?",
          content:
            "Details about the venue will shared in the email to the selected attendees",
        },
        {
          isOpen: false,
          title: "I have more questions!",
          content:
            "You can shoot your questions in the <a target='_blank' style='color: rgba(64, 221, 255, 1)' href='https://discord.hackthisfall.tech'>HackThisFall Discord server</a>",
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
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.faq-content-section {
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  font-family: "Jetbrains Mono", monospace;
  .contents {
    padding: 1rem 0rem;

    @include respond-below(sm) {
      padding: 1rem 0rem;
    }

    .cards-grid {
      display: grid;
      grid-template-columns: 1fr;
      column-gap: 20px;
      row-gap: 20px;

      @include respond-below(sm) {
        grid-template-columns: 1fr;
      }

      .card {
        flex: 1;
        align-self: flex-start;
        display: flex;
        flex-direction: column;
        border-bottom: 1px solid rgba(229, 225, 230, 0.5);
        padding-bottom: 1rem;

        &.hidden {
          transition: max-height 0.3s ease, background-color 0s ease 0.3s;
          .texts {
            .title {
              color: #fff;
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
            transform: rotate(0deg);
            transition: transform 0.3s ease;
          }
        }

        img {
          transform: rotate(45deg);
          transition: transform 0.3s ease;
          width: 1rem;
        }

        .texts {
          // padding: 15px 15px 10px;
          // margin-left: 9px;
          // margin-right: 2px;
          display: flex;
          justify-content: space-between;
          align-content: flex-start;
          cursor: pointer;
          -moz-user-select: none;
          -webkit-user-select: none;
          -ms-user-select: none;
          user-select: none;

          .title {
            font-size: 1.1rem;
            font-weight: 700;
          }
        }

        .answer {
          font-weight: 300;
          // margin: 0px 6px 6px;
          height: 100%;
          max-height: 300px;
          overflow: hidden;
          transition: max-height 0.3s ease;
          color: rgba(64, 221, 255, 1);

          div {
            a {
              a {
                color: inherit;
              }
            }
            margin-top: 16px;
          }
        }
      }
    }
  }
}
</style>
