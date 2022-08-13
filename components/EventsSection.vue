<template>
  <div class="contents">
    <div class="events-wrapper">
      <img
        src="https://raw.githubusercontent.com/hack-this-fall/Media-Kit/main/Logo/HTF-White.png"
        alt="HTF Logo"
      />
      <p class="details">
        <span style="color: #d74f4b; font-size: 25px; font-weight: 600"
          >In-Person City Meetup Series 2022</span
        >
      </p>
      <a
        class="cta-button-disabled"
        href="#"
        >See You in 2023</a
      >
      <br />
      <div class="cards-grid">
        <div v-for="(event, index) in events" :key="index" class="card">
          <div class="card-side smooth-transition">
            <img :src="event.image" alt="cityImage" />
            <div class="texts">
              <h4 class="eventName" v-html="event.name">{{}}</h4>
              <p class="event">
                Date: {{ event.date }} <br />
                Time: {{ event.time }} <br />
              </p>
              <a :href="event.url" target="_blank">
                <p
                  :class="[
                    'venue smooth-transition',
                    event.active ? 'highlight' : null
                  ]"
                >
                  Venue: {{ event.venue }}
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <EventsPageSponsorSection />
    </div>
  </div>
</template>

<script>
import Container from "~/components/Container";
import EventsPageSponsorSection from "~/components/EventsPageSponsorSection.vue";

export default {
  components: {
    Container,
    EventsPageSponsorSection
  },
  data() {
    return {
      events: [
        {
          name: "Jaipur City Meetup",
          details:
            "<span style='color: rgba(233, 83, 34, 1)'>INR 17,500</span> awarded to the person whose page stands out the most for all the right reasons.",
          image: require("~/assets/Meetup/jaipur.png"),
          venue: "Cowocoli, Jaipur",
          date: "4th April 2022",
          time: "6:00 PM to 8:00 PM",
          url: "https://g.page/Cowocoli-Coworkingspace?share",
          active: true
        },
        {
          name: "Mumbai City Meetup",
          details:
            "<span style='color: rgba(233, 83, 34, 1)'>INR 7,500</span> awarded to the person who used the custom content feature in the most creative and unique ways.",
          image: require("~/assets/Meetup/mumbai.png"),
          venue: "74Technopark Hub",
          date: "16th April 2022",
          time: "4:00 PM to 9:00 PM",
          active: true,
          url: "https://goo.gl/maps/D7VU6guZ8eBu3rJy5"
        },
        {
          name: "Pune City Meetup",
          details:
            "<span style='color: rgba(233, 83, 34, 1)'>INR 7,500</span> awarded to the page that showcases Indian culture, art, traditions, the festivals and its people the best.",
          image: require("~/assets/Meetup/pune.png"),
          venue: "Redbrick Offices",
          date: "17th April 2022",
          time: "11:30 AM to 4:30 PM",
          active: true,
          url: "https://goo.gl/maps/TjJ4piny2MhNd9a5A"
        },
        {
          name: "Delhi City Meetup",
          details:
            "<span style='color: rgba(233, 83, 34, 1)'>INR 7,500</span> awarded to the person with the best page about their pet(s)",
          image: require("~/assets/Meetup/delhi.png"),
          venue: "The Circle Work",
          date: "28th May 2022",
          time: "11:00 AM to 5:00 PM",
          active: true,
          url: "https://goo.gl/maps/MtiVc153cHp7R7Bw6"
        },
        {
          name: "Bengaluru City Meetup",
          details:
            "<span style='color: rgba(233, 83, 34, 1)'>INR 7,500</span> awarded to the person with the most nerdy page. We expect the content on this to be super techy!",
          image: require("~/assets/Meetup/bengaluru.png"),
          venue: "91Springboard, J.P. Nagar",
          date: "11th June 2022",
          time: "11:00 AM to 5:00 PM",
          active: true,
          url: "https://goo.gl/maps/AV6NrfPcqwW6rct27"
        },
        {
          name: "Ahmedabad City Meetup",
          details:
            "<span style='color: rgba(233, 83, 34, 1)'>INR 7,500</span> awarded to the person with the most nerdy page. We expect the content on this to be super techy!",
          image: require("~/assets/Meetup/ahmedabad.png"),
          venue: "DevX, Ahmedabad",
          date: "30th July 2022",
          time: "3:00 PM to 8:00 PM",
          active: true,
          url: "https://goo.gl/maps/PWhjTUtRPBqWQSNr6"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.contents {
  width: 90%;
  margin: 0 auto;
  padding: 80px 0 20px;

  .events-wrapper {
    background-color: #fdf7df;
    border-radius: 10px;
    text-align: center;
    padding: 30px;

    .details {
      width: 70%;
      margin: auto auto 2rem;

      @include respond-below(xs) {
        width: 90%;
      }
    }

    img {
      margin: auto auto 30px;
      width: 300px;

      @include respond-below(xs) {
        width: 90%;
      }
    }

    .cta-button-disabled {
      color: #666;
      background-color: #ccc;
      border: none;
      text-decoration: none;
      margin-bottom: 1rem;
      height: 5rem;
      padding: 0.5rem 1rem;
      font-family: "Segoe UI Bold";
      border-radius: 0.5rem;
      cursor: pointer;
    }

    .cta-button {
      background-color: #e85325;
      color: white;
      border: none;
      text-decoration: none;
      margin-bottom: 1rem;
      height: 5rem;
      padding: 0.5rem 1rem;
      font-family: "Segoe UI Bold";
      border-radius: 0.5rem;
      cursor: pointer;
      box-shadow: rgba(255, 107, 0, 0.4) 0px 0px 20px 0px;

      &:hover {
        box-shadow: rgba(215, 79, 75, 0.25) 0px 0px 0px 6px;
      }
    }

    .cards-grid {
      display: grid;
      position: relative;
      grid-template-columns: 1fr 1fr 1fr;
      background-color: #fdf7df;
      border-radius: 10px;
      column-gap: 30px;
      margin-top: 2rem;
      row-gap: 30px;

      @include respond-below(md) {
        grid-template-columns: repeat(3, 1fr);
        margin-top: 30px;
      }

      @include respond-below(sm) {
        grid-template-columns: repeat(2, 1fr);
        margin-top: 30px;
      }

      @include respond-below(xs) {
        grid-template-columns: repeat(1, 1fr);
        margin-top: 30px;
      }

      .card {
        min-height: 25rem;
        display: flex;
        align-items: center;
        justify-content: center;

        @include respond-below(lg) {
          min-height: 18rem;
        }

        a {
          text-decoration: none;
          color: unset;
        }

        .card-side {
          width: 100%;
          border-radius: 15px;
          padding: 1.5rem;
          background-color: #fdf7df;
          border: 2px solid #d8504b;

          &:hover {
            box-shadow: rgba(215, 79, 75, 0.25) 0px 0px 0px 10px;
          }

          img {
            margin: auto auto -5px;
            width: 100%;
          }
        }

        .image {
          position: relative;
          display: flex;
          flex-direction: column;
          align-content: center;
          margin-left: auto;
          margin-right: auto;

          img {
            margin: 16px;
            width: 190px;
          }

          .line {
            position: absolute;
            right: 0px;
            border-left: 2px dashed #ff5100;
            top: -50px;
            height: 300%;
          }
        }

        .texts {
          text-align: center;

          .highlight {
            background: #d8504b;
            border-radius: 5px;
            color: white;
            padding: 4px 0;
            margin-top: 8px;

            &:hover {
              box-shadow: rgba(215, 79, 75, 0.25) 0px 0px 0px 6px;
            }
          }

          .eventName {
            font-size: 1.2rem;
            font-weight: bold;
            padding-bottom: 10px;
          }
        }
      }
    }
  }
}
</style>
