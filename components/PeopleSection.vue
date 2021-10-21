<template>
  <Container id="speakers">
    <section class="content-section">
      <HashHeader title="HUMANS OF HACK THIS FALL" />
      <div class="contents">
        <div class="subheading">
          <h2 class="section-title" style="margin-top: -2rem">JUDGES</h2>
        </div>
        <div class="speakers-grid">
          <div
            v-for="(speaker, index) in judges"
            :key="index"
            :class="['team-card', `rot-${Math.floor(Math.random() * 24) * 15}`]"
          >
            <a :href="speaker.url" target="_blank" rel="noopener noreferrer">
              <div class="picture-wrapper smooth-transition">
                <img
                  :src="speaker.picture"
                  alt="profile picture"
                  class="profile-pic"
                />
              </div>
            </a>
            <h4 class="title">{{ speaker.name }}</h4>
            <p class="description"></p>
            <img
              v-if="speaker.companyLogo"
              :src="speaker.companyLogo"
              :title="speaker.company"
              alt="company logo"
              class="company-logo"
            />
          </div>
        </div>
        <div class="subheading with-spacing">
          <h2 class="section-title">MENTORS</h2>
        </div>
        <div class="speakers-grid">
          <div
            v-for="(speaker, index) in mentors"
            :key="index"
            :class="['team-card', `rot-${Math.floor(Math.random() * 24) * 15}`]"
          >
            <a :href="speaker.url" target="_blank" rel="noopener noreferrer">
              <div class="picture-wrapper smooth-transition">
                <img
                  :src="speaker.picture"
                  alt="profile picture"
                  class="profile-pic"
                />
              </div>
            </a>
            <h4 class="title">{{ speaker.name }}</h4>
            <p class="description">{{ speaker.description }}</p>
            <img
              v-if="speaker.companyLogo"
              :src="speaker.companyLogo"
              :title="speaker.company"
              alt="company logo"
              class="company-logo"
            />
          </div>
        </div>
        <div class="subheading with-spacing">
          <h2 class="section-title">SPEAKERS</h2>
        </div>
        <div class="speakers-grid">
          <div
            v-for="(speaker, index) in speakers"
            :key="index"
            :class="['team-card', `rot-${Math.floor(Math.random() * 24) * 15}`]"
          >
            <a :href="speaker.url" target="_blank" rel="noopener noreferrer">
              <div class="picture-wrapper smooth-transition">
                <img
                  :src="speaker.picture"
                  alt="profile picture"
                  class="profile-pic"
                />
              </div>
            </a>
            <h4 class="title">{{ speaker.name }}</h4>
            <p class="description">{{ speaker.description }}</p>
            <img
              v-if="speaker.companyLogo"
              :src="speaker.companyLogo"
              :title="speaker.company"
              alt="company logo"
              class="company-logo"
            />
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
      speakers: [
        {
          description: "Engineer,Web DataWorks",
          name: "Nishu Goel",
          url: "https://twitter.com/TheNishuGoel",
          picture: require("~/assets/Speakers/nishu.png"),
        },
        {
          description: "JS Full stack developer",
          name: "Praveen Kumar",
          url: "https://praveen.science/",
          picture: require("~/assets/Speakers/praveen.jpeg"),
        },
        {
          description: "Associate Solution Architect, Red Hat",
          name: "Gourav Sharma",
          url: "https://twitter.com/rhcasharma",
          picture: require("~/assets/Speakers/gourav.jpg"),
        },
        {
          description: "Chief Business Officer, Unschool",
          name: "Narayanan S",
          url: "https://www.linkedin.com/in/chalkmeout/",
          picture: require("~/assets/Speakers/narayanan.png"),
        },
        {
          description: "Lead-Engineering, SAWO Labs",
          name: "Soumaya Ranjan",
          url: "https://www.linkedin.com/in/soumayaranjan/",
          picture: require("~/assets/Speakers/soumaya.jpeg"),
        },
        {
          description: "Curriculum Manager, InspiritAI",
          name: "Amanda Somvilay",
          url: "https://twitter.com/hackthisfall",
          picture: require("~/assets/Speakers/amanda.png"),
        },
        {
          description: "Developer Relations Engineer, Storyblok",
          name: "Facundo Giuliani",
          url: "https://twitter.com/facundozurdo",
          picture: require("~/assets/Speakers/facundo.jpg"),
        },
        {
          description: "Head of Developer Relations, Storyblok",
          name: "Samuel Snopko",
          url: "https://twitter.com/samuelsnopko",
          picture: require("~/assets/Speakers/samuel.jpg"),
        },
        {
          description: "Product Manager, Agoric",
          name: "Rowland Graus",
          url: "https://twitter.com/rowlandgraus",
          picture: require("~/assets/Speakers/rowland.jpeg"),
        },
        {
          description: "CEO, Agoric",
          name: "Dean Tribble",
          url: "https://twitter.com/deantribble",
          picture: require("~/assets/Speakers/dean.jpeg"),
        },
        {
          description: "Software Engineer, Agoric",
          name: "Kate Sills",
          url: "https://twitter.com/kate_sills",
          picture: require("~/assets/Speakers/kate.jpeg"),
        },
        {
          description: "Software Engineer, Microsoft",
          name: "Sashrika Kaur",
          url: "https://twitter.com/SashrikaKaur",
          picture: require("~/assets/Speakers/sashrika.jpg"),
        },
        {
          description: "Developer Relations Lead, Strapi",
          name: "Daniel Phiri",
          url: "https://twitter.com/malgamves",
          picture: require("~/assets/Speakers/daniel.jpg"),
        },
        {
          description: "Community Evangelist, SymblAI",
          name: "Akanksha Bhasin",
          url: "https://www.linkedin.com/in/akankshabhasin",
          picture: require("~/assets/Speakers/akanksha.jpeg"),
        },
        {
          description: "Lead Developer Advocate, SymblAI",
          name: "Eric Giannini",
          url: "https://www.linkedin.com/in/unicornmobile",
          picture: require("~/assets/Speakers/eric.jpeg"),
        },
        {
          description: "Auth0 Ambassador",
          name: "Abel Mathew",
          url: "https://twitter.com/DesignrKnight",
          picture: require("~/assets/Speakers/abel.jpg"),
        },
        {
          description: "COO, Filebase",
          name: "Zac Cohen",
          url: "https://www.linkedin.com/in/zaccohen427/",
          picture: require("~/assets/Speakers/zac.jpg"),
        },
        {
          description: "Software Engineer, Microsoft",
          name: "Khushboo Verma",
          url: "https://twitter.com/khushbooverma_",
          picture: require("~/assets/Speakers/khushboo.jpg"),
        },
        {
          description: "Founder, EddieHub",
          name: "Eddie Jaoude",
          url: "https://twitter.com/eddiejaoude/",
          picture: require("~/assets/Speakers/eddie.jpg"),
        },
        {
          description: "Senior Community Engineer, Gitpod",
          name: "Pauline Narvas",
          url: "https://twitter.com/paulienuh",
          picture: require("~/assets/Speakers/pauline.jpg"),
        },
      ],
      mentors: [
        {
          name: "Ishita Keshawani",
          url: "https://twitter.com/ishitakeshawani",
          picture: require("~/assets/Mentors/ishita.jpg"),
        },
        {
          name: "Shubham Patel",
          url: "https://devshub21.github.io/deshub21/",
          picture: require("~/assets/Mentors/shubham.jpeg"),
        },
        {
          name: "Ishika	Kesarwani",
          url: "https://github.com/ishikkkkaaaa",
          picture: require("~/assets/Mentors/ishika.jpg"),
        },
        {
          name: "Himanshu	Sharma",
          url: "https://www.linkedin.com/in/himanshusharma89",
          picture: require("~/assets/Mentors/himanshu.jpg"),
        },
        {
          name: "Abhishek	Doshi",
          url: "https://abhishekdoshi.netlify.app",
          picture: require("~/assets/Mentors/abhishek.jpeg"),
        },
        {
          name: "Ashwin Kumar	Uppala",
          url: "https://bio.link/ashwinexe",
          picture: require("~/assets/Mentors/ashwin.jpg"),
        },
        {
          name: "Subhampreet Mohanty",
          url: "https://github.com/Subhampreet",
          picture: require("~/assets/Mentors/subhampreet.jpg"),
        },
        {
          name: "Akshita Gupta",
          url: "https://www.linkedin.com/in/akshita-gupta-a4a895187",
          picture: require("~/assets/Mentors/akshita.jpg"),
        },
        {
          name: "Manasvi Alimchandani",
          url: "https://www.linkedin.com/in/manasvi-alimchandani-934b49197/",
          picture: require("~/assets/Mentors/manasvi.jpeg"),
        },
        {
          name: "Anup Panwar",
          url: "https://www.linkedin.com/in/anupkumarpanwar/",
          picture: require("~/assets/Mentors/anup.jpg"),
        },
        {
          name: "Avinash Upadhyaya K R",
          url: "https://www.linkedin.com/in/avinash-upadhyaya/",
          picture: require("~/assets/Mentors/avinash.jpg"),
        },
        {
          name: "Pragati Verma",
          url: "https://linktr.ee/pragativerma18",
          picture: require("~/assets/Mentors/pragati.png"),
        },
        {
          name: "Sagar Choudhary",
          url: "https://www.linkedin.com/sagarchoudhary96",
          picture: require("~/assets/Mentors/sagar.png"),
        },
        {
          name: "Yashank",
          url: "https://www.linkedin.com/in/yashank18/",
          picture: require("~/assets/Mentors/yashank.jpg"),
        },
        {
          name: "Anshumaan Kumar Prasad",
          url: "https://twitter.com/aminostwt",
          picture: require("~/assets/Mentors/anshumaan.png"),
        },
        {
          name: "Sreekaran Srinath",
          url: "https://sreekaran.com",
          picture: require("~/assets/Mentors/sreekaran.png"),
        },
        {
          name: "Shyam Sundar	R",
          url: "www.linkedin.com/in/iamshyam",
          picture: require("~/assets/Mentors/shyam.jpg"),
        },
        {
          name: "Khushi	Saxena",
          url: "https://www.linkedin.com/in/khushi321/",
          picture: require("~/assets/Mentors/khushi.jpg"),
        },
        {
          name: "Devesh	Raj",
          url: "https://www.linkedin.com/in/devish2/",
          picture: require("~/assets/Mentors/devesh.jpeg"),
        },
        {
          name: "Kumar Satyarth",
          url: "https://ksatyarth2.in",
          picture: require("~/assets/Mentors/satyarth.png"),
        },
        {
          name: "Prathamesh	Shanbhag",
          url: "https://www.linkedin.com/in/prathamesh-shanbhag/",
          picture: require("~/assets/Mentors/prathamesh.jpg"),
        },
        {
          name: "Prince Canuma",
          url: "https://twitter.com/CanumaGdt",
          picture: require("~/assets/Mentors/prince.jpeg"),
        },
        {
          name: "Chandrika Deb",
          url: "https://github.com/chandrikadeb7",
          picture: require("~/assets/Mentors/chandrika.jpeg"),
        },
        {
          name: "Vedant Bahel",
          url: "https://twitter.com/Vedant_Bahel",
          picture: require("~/assets/Mentors/vedant.jpg"),
        },
        {
          name: "Shubham Sah",
          url: "https://twitter.com/ishubhamsah",
          picture: require("~/assets/Mentors/shubham.jpg"),
        },
        {
          name: "Vanshika Garg",
          url: "https://github.com/Vanshikagarg17",
          picture: require("~/assets/Mentors/vanshika.jpeg"),
        },
        {
          name: "Soumya	Ghosh Dastidar",
          url: "https://twitter.com/gdsoumya",
          picture: require("~/assets/Mentors/soumya.jpg"),
        },
        {
          name: "Vaishnavi Dwivedi",
          url: "https://twitter.com/dwvicy",
          picture: require("~/assets/Mentors/vaishnavi.jpg"),
        },
        {
          name: "Abir	Pal",
          url: "https://twitter.com/imabptweets",
          picture: require("~/assets/Mentors/abir.png"),
        },
        {
          name: "Calvin	D'Souza",
          url: "https://twitter.com/kalzen15",
          picture: require("~/assets/Mentors/calvin.png"),
        },
        {
          name: "Kartik	Choudhary",
          url: "https://www.linkedin.com/in/kartikcho/",
          picture: require("~/assets/Mentors/kartik.jpg"),
        },
        {
          name: "Harsh Jain",
          url: "https://www.linkedin.com/in/harshjain2710/",
          picture: require("~/assets/Mentors/harsh.jpeg"),
        },
      ],
      judges: [
        {
          name: "Pranshu Khanna",
          url: "https://twitter.com/inmypranshoes",
          picture: require("~/assets/Judges/pranshu.jpg"),
        },
        {
          name: "Harshit Singh",
          url: "https://twitter.com/helios1101",
          picture: require("~/assets/Judges/harshit.jpeg"),
        },
        {
          name: "Yashovardhan Agrawal",
          url: "https://twitter.com/yashovardhan",
          picture: require("~/assets/Judges/yashovardhan.jpg"),
        },
        {
          name: "Santosh Yadav",
          url: "https://twitter.com/SantoshYadavDev",
          picture: require("~/assets/Judges/santosh.png"),
        },
        {
          name: "Khushboo Verma",
          url: "https://twitter.com/khushbooverma_",
          picture: require("~/assets/Speakers/khushboo.jpg"),
        },
        {
          name: "Abel Mathew",
          url: "https://twitter.com/DesignrKnight",
          picture: require("~/assets/Speakers/abel.jpg"),
        },
        {
          name: "Sashrika Kaur",
          url: "https://twitter.com/SashrikaKaur",
          picture: require("~/assets/Speakers/sashrika.jpg"),
        },
        {
          name: "Abhishek	Doshi",
          url: "https://abhishekdoshi.netlify.app",
          picture: require("~/assets/Mentors/abhishek.jpeg"),
        },
        {
          name: "Soumya	Ghosh Dastidar",
          url: "https://twitter.com/gdsoumya",
          picture: require("~/assets/Mentors/soumya.jpg"),
        },
        {
          name: "Pragati Verma",
          url: "https://linktr.ee/pragativerma18",
          picture: require("~/assets/Mentors/pragati.png"),
        },
        {
          name: "Himanshu Sharma",
          url: "https://www.linkedin.com/in/himanshusharma89",
          picture: require("~/assets/Mentors/himanshu.jpg"),
        },
        {
          name: "Kartik	Choudhary",
          url: "https://www.linkedin.com/in/kartikcho/",
          picture: require("~/assets/Mentors/kartik.jpg"),
        },
        // {
        //   name: "Mohammad Shahbaz Alam",
        //   url: "https://twitter.com/mdsbzalam",
        //   picture: require("~/assets/Judges/shahbaz.png"),
        // },
        // {
        //   name: "Praveen Kumar",
        //   url: "https://praveen.science/",
        //   picture: require("~/assets/Speakers/praveen.jpeg"),
        // },
        {
          name: "Aditya Oberai",
          url: "https://twitter.com/adityaoberai1",
          picture: require("~/assets/Testimonials/aditya.jpg"),
        },
      ],
    };
  },
  mounted() {
    this.speakers.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });

    this.mentors.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });

    this.judges.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  },
};
</script>

<style lang="scss" scoped>
.content-section {
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  font-family: "Segoe UI";

  .subheading {
    &.with-spacing {
      margin-top: 2rem;
    }
    font-family: "Poppins";
    font-style: bold;
    justify-content: space-around;
    display: flex;
    align-self: center;
    color: rgba(128, 128, 128, 1);

    h2.section-title {
      font-size: 1.5rem;
      font-weight: 600;
      padding: 20px 10px 20px 0;
    }
  }

  .contents {
    padding: 1rem 4rem;
    text-align: center;

    .subheading {
      &.with-spacing {
        margin-top: 3rem;
      }
      font-family: "Poppins";
      font-style: bold;
      justify-content: space-around;
      display: flex;
      align-self: center;
      color: rgba(128, 128, 128, 1);

      h2.section-title {
        font-size: 1.5rem;
        font-weight: 600;
        padding: 20px 10px 20px 0;
      }
    }

    @include respond-below(sm) {
      padding: 1rem 0rem;
    }

    .speakers-grid {
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
        padding-bottom: 1rem;
        // justify-content: center;
        align-items: center;

        .picture-wrapper {
          border-style: solid;
          border-width: 3px;
          border-color: red red white red;
          width: 160px;
          height: 160px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          margin-top: 1rem;

          .profile-pic {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            // background: var(red);
          }

          @include respond-below(md) {
            width: 120px;
            height: 120px;
            .profile-pic {
              width: 110px;
              height: 110px;
            }
          }

          @include respond-below(sm) {
            width: 100px;
            height: 100px;
            .profile-pic {
              width: 90px;
              height: 90px;
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

        .description {
          margin-top: 1rem;
          font-size: 0.8rem;
          color: rgba(112, 112, 112, 1);
          text-align: center;
        }

        .company-logo {
          margin-top: 1rem;
          font-size: 0.8rem;
          height: 20px;
        }
      }
    }
  }

  .cta-buttons {
    display: flex;
    margin-top: 3rem;
    justify-content: center;

    a {
      text-decoration: none;
    }

    .cta-button {
      background-color: #e85325;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-family: "Segoe UI Bold";
      border-radius: 0.5rem;
      cursor: pointer;
      box-shadow: rgba(255, 107, 0, 0.4) 0px 0px 20px 0px;

      &:hover {
        box-shadow: rgba(232, 82, 37, 0.25) 0px 0px 0px 6px;
      }

      img {
        margin-right: 0.5rem;
      }
    }
  }
}
</style>
