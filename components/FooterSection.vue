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
          <a href="/coc">Code Of Conduct</a>
          <a href="/blog">Season 1 Blog</a>
          <a href="/team">Know The Team</a>
          <a href="/team">HackOn Universe</a>
        </div>

        <div class="panel">
          <h4 class="title">Explore</h4>
          <a href="/coc">Sponsors</a>
          <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
            >Speakers</a
          >
          <a href="/team">FAQ</a>
        </div>

        <div class="panel">
          <h4 class="title">Connect With Us</h4>
          <div class="socialLinks">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/company/hackonhackathon"
            >
              <img src="~/assets/Socials/discord.svg" alt="LinkedInLink" />
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://discord.hackon.tech/"
            >
              <img src="~/assets/Socials/twitter.svg" alt="DiscordLink" />
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://medium.com/hackonhackathon"
            >
              <img src="~/assets/Socials/instagram.svg" alt="MediumLink" />
            </a>
          </div>
          <div class="socialLinks">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://twitter.com/hackonhackathon"
            >
              <img src="~/assets/Socials/youtube.svg" alt="FacebookLink" />
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://youtube.com/playlist?list=PLl4Y2XuUavmuPZrFczbT6xk8zwJv0Irli"
            >
              <img src="~/assets/Socials/mail.svg" alt="YoutubeLink" />
            </a>
            <a
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
    padding: 1rem 2rem;

    @include respond-between(md, lg) {
      column-gap: 50px;
    }

    @include respond-below(md) {
      column-gap: 50px;
    }

    @include respond-between(sm, md) {
      column-gap: 30px;
    }

    @include respond-below(sm) {
      grid-template-columns: 1fr;
    }
  }

  .panel {
    display: flex;
    flex-direction: column;

    .branding {
      img {
        margin-top: 20px;
        margin-bottom: -10px;
      }
    }

    .hackonUniverse {
      color: white;

      &:hover {
        color: var(--colour-pink);
      }
    }

    .socialLinks {
      padding: 20px 0 10px;
      margin-left: -5px;

      a {
        padding: 10px;
        margin: 5px;
        background: #252638;
        border-radius: 50%;
        text-align: center;

        &:hover {
          filter: invert(100%);
        }

        img {
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

    a {
      color: var(--colour-pink);
    }
  }

  .attribution {
    padding: 10px 0;
    border-top: 1px solid var(--color-secondary);
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    span {
      margin-top: -10px;
      @include respond-below(sm) {
        margin-bottom: 1em;
      }
      a {
        color: var(--color-accent);
      }
    }

    img {
      height: 1.75em;
    }
  }
}
</style>
