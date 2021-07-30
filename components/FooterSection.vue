<template>
  <div class="footer">
    <Container class="contents">
      <div class="content-grid">
        <div class="panel">
          <div class="branding">
            <img src="~/assets/HTF2/logo-light.svg" />
          </div>
        </div>

        <div class="panel">
          <h4 class="title">About</h4>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
            >Code Of Conduct</a
          >
          <a rel="noopener noreferrer" target="_blank" href="/blog"
            >Season 1 Blog</a
          >
          <a rel="noopener noreferrer" target="_blank" href="/team"
            >Know The Team</a
          >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://hackon.tech/universe"
            >HackOn Universe</a
          >
        </div>

        <div class="panel">
          <h4 class="title">Explore</h4>
          <a href="/#sponsors">Sponsors</a>
          <a href="/#speakers">Speakers</a>
          <a href="/#faq">FAQ</a>
        </div>

        <div class="panel">
          <h4 class="title">Connect With Us</h4>
          <div class="socialLinks">
            <a
              class="smooth-transition"
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/company/hackonhackathon"
            >
              <img src="~/assets/Socials/discord.svg" alt="LinkedInLink" />
            </a>
            <a
              class="smooth-transition"
              rel="noopener noreferrer"
              target="_blank"
              href="https://discord.hackon.tech/"
            >
              <img src="~/assets/Socials/twitter.svg" alt="DiscordLink" />
            </a>
            <a
              class="smooth-transition"
              rel="noopener noreferrer"
              target="_blank"
              href="https://medium.com/hackonhackathon"
            >
              <img src="~/assets/Socials/instagram.svg" alt="MediumLink" />
            </a>
          </div>
          <div class="socialLinks">
            <a
              class="smooth-transition"
              rel="noopener noreferrer"
              target="_blank"
              href="https://twitter.com/hackonhackathon"
            >
              <img src="~/assets/Socials/youtube.svg" alt="FacebookLink" />
            </a>
            <a
              class="smooth-transition"
              rel="noopener noreferrer"
              target="_blank"
              href="https://youtube.com/playlist?list=PLl4Y2XuUavmuPZrFczbT6xk8zwJv0Irli"
            >
              <img src="~/assets/Socials/mail.svg" alt="YoutubeLink" />
            </a>
            <a
              class="smooth-transition"
              rel="noopener noreferrer"
              target="_blank"
              href="https://telegram.hackon.tech/"
            >
              <img src="~/assets/Socials/linkedin.svg" alt="TelegramLink" />
            </a>
          </div>
        </div>
      </div>
      <hr />
      <div class="attribution">
        <span>© 2021, Hack This Fall. All rights reserved. </span>
      </div>
    </Container>
  </div>
</template>

<script>
import Container from "~/components/Container";
import CopyLink from "~/components/CopyLink";

export default {
  components: {
    Container,
    CopyLink
  }
};
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  @include respond-between(md, lg) {
    padding: 40px 20px;
  }

  @include respond-between(sm, md) {
    padding: 40px 20px;
  }

  @include respond-below(sm) {
    padding: 40px 10px;
  }

  a {
    text-decoration: none;
    color: #848484;
  }

  .contents {
    background-color: #feede3;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
  }

  .content-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 100px;
    row-gap: 30px;
    padding: 2rem;

    @include respond-between(md, lg) {
      column-gap: 50px;
    }

    @include respond-below(md) {
      column-gap: 50px;
      grid-template-columns: 1fr 1fr;
      margin: auto;
    }

    @include respond-between(sm, md) {
      column-gap: 30px;
    }

    @include respond-below(xs) {
      grid-template-columns: 1fr;
      margin: auto;
    }
  }

  .panel {
    display: flex;
    flex-direction: column;
    line-height: 2;

    a {
      transition: all 0.2s ease-out;
      &:hover {
        color: #e85325;
        transition: all 0.2s ease-out;
      }
    }

    .branding {
      img {
        margin-top: 20px;
        margin-bottom: -10px;

        @include respond-below(md) {
          max-width: 100%;
          margin-top: 60px;
        }

        @include respond-below(xxs) {
          width: 100%;
          margin-bottom: -40px;
        }
      }
    }

    .socialLinks {
      padding: 20px 0 10px;
      margin-left: -5px;

      a {
        position: relative;
        padding: 10px;
        margin: 5px;
        background: #e85325;
        border-radius: 49%;
        text-align: center;
        box-shadow: rgba(255, 107, 0, 0.4) 0px 0px 20px 0px;

        &:hover {
          box-shadow: rgba(232, 82, 37, 0.25) 0px 0px 0px 6px;
        }

        img {
          position: absolute;
          height: 20px;
          width: 20px;
          position: relative;
          top: 4px;
        }
      }
    }

    .description {
      opacity: 0.5;
    }

    .title {
      padding: 10px 0;
    }
  }

  .attribution {
    padding: 10px 20px;
    margin-top: 20px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    text-align: center;
    font-weight: 600;

    span {
      margin-top: -10px;
      @include respond-below(sm) {
        margin-bottom: 1em;
      }
    }

    img {
      height: 1.75em;
    }
  }
}
</style>
