import React from "react"
import FeatherIcon from "./FeatherIcon"
import styled from "styled-components"

const Sc = styled.div`
  margin-top: 40px;
`

const SocialList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

const ItemSocial = styled.li`
  margin: 6px 5px;
`

const Link = styled.a`
  display: block;
  position: relative;
  padding: 0.65rem 0.8rem;
  min-width: 75px;
  text-align: center;
  align-items: center;
  border-radius: 0.5rem;
  transition: all 200ms ease-in-out;
  box-shadow: 0 0px 5px 0px rgba(0, 0, 0, 0.08),
    0 5px 2px 0px rgba(0, 0, 0, 0.02);

  &:hover {
    box-shadow: 0 0px 10px 0px rgba(0, 0, 0, 0.1),
      0 5px 5px 0px rgba(0, 0, 0, 0.05);
  }

  @media only screen and (min-width: 45em) {
    min-width: 120px;

    svg {
      line-height: 24px;
      height: 24px;
      width: 24px;
    }

    p {
      line-height: 24px;
      font-size: 16px;
    }
  }

  svg {
    color: transparent;
    border: 0 solid var(--Nord06);
    vertical-align: bottom;
    display: inline-block;
    margin-right: 3px;
    line-height: 20px;
    height: 20px;
    width: 20px;
  }

  p {
    vertical-align: bottom;
    display: inline-block;
    line-height: 20px;
    font-size: 12px;
  }

  &.twitter {
    background: rgba(0, 106, 173, 0.1);
    color: var(--twitterbluelight);

    svg {
      fill: var(--twitterbluelight);
      color: transparent;
    }
  }

  &.instagram {
    color: var(--dark);
    background: rgba(240, 148, 51, 0.3);
    background: linear-gradient(
      45deg,
      rgba(240, 149, 51, 0.3),
      rgba(230, 105, 60, 0.3) 25%,
      rgba(220, 39, 66, 0.3) 50%,
      rgba(204, 35, 103, 0.3) 75%,
      rgba(188, 24, 136, 0.3)
    );

    svg {
      fill: transparent;
      color: var(--dark);
    }
  }

  &.github {
    background: rgba(25, 25, 25, 0.1);
    color: var(--dark);

    svg {
      fill: transparent;
      color: var(--dark);
    }
  }

  &.youtube {
    background: rgba(255, 87, 87, 0.1);
    color: var(--youtuberedlight);

    svg {
      fill: transparent;
      color: var(--youtuberedlight);
    }
  }
  &.gmail {
    background: rgba(52, 168, 83, 0.1);
    color: var(--gmailgreenlight);

    svg {
      fill: transparent;
      color: var(--gmailgreenlight);
    }
  }
  &.linkedin {
    background: rgba(0, 119, 181, 0.1);
    color: var(--linkedinbluelight);

    svg {
      fill: transparent;
      color: var(--linkedinbluelight);
    }
  }

  &.telegram {
    background: rgba(0, 136, 204, 0.1);
    color: var(--telegrambluelight);

    svg {
      fill: transparent;
      color: var(--telegrambluelight);
    }
  }

  &.twitch {
    background: rgba(145, 70, 255, 0.1);
    color: var(--twitchpurpledark);

    svg {
      fill: transparent;
      color: var(--twitchpurpledark);
    }
  }

  @media (prefers-color-scheme: dark) {
    box-shadow: 0 0px 5px 0px rgba(242, 242, 242, 0.01),
      0 5px 2px 0px rgba(242, 242, 242, 0.01);

    &:hover {
      box-shadow: 0 0px 10px 0px rgba(255, 255, 255, 0.1),
        0 5px 5px 0px rgba(255, 255, 255, 0.02);
    }

    svg {
      border: 0 solid var(--Nord06);
    }

    &.twitter {
      background: rgba(124, 204, 255, 0.1);
      color: var(--twitterbluedark);

      svg {
        fill: var(--twitterbluedark);
        color: transparent;
      }
    }

    &.instagram {
      color: var(--light);

      svg {
        color: var(--light);
      }
    }

    &.github {
      background: rgba(236, 236, 236, 0.1);
      color: var(--light);

      svg {
        color: var(--light);
      }
    }

    &.youtube {
      background: rgba(185, 0, 0, 0.1);
      color: var(--youtubereddark);

      svg {
        color: var(--youtubereddark);
      }
    }
    &.gmail {
      background: rgba(52, 168, 83, 0.1);
      color: #32ac71;

      svg {
        color: var(--gmailgreendark);
      }
    }

    &.linkedin {
      color: var(--linkedinbluedark);

      svg {
        color: var(--linkedinbluedark);
      }
    }

    &.telegram {
      color: var(--telegrambluedark);

      svg {
        color: var(--telegrambluedark);
      }
    }

    &.twitch {
      background: rgba(145, 70, 255, 0.1);
      color: var(--twitchpurplelight);

      svg {
        fill: transparent;
        color: var(--twitchpurplelight);
      }
    }
  }

  @media (prefers-color-scheme: light-mode) {
    box-shadow: 0 0px 5px 0px rgba(0, 0, 0, 0.08),
      0 5px 2px 0px rgba(0, 0, 0, 0.02);

    &:hover {
      box-shadow: 0 0px 10px 0px rgba(0, 0, 0, 0.1),
        0 5px 5px 0px rgba(0, 0, 0, 0.05);
    }

    svg {
      border: 0 solid var(--Nord06);
    }

    &.twitter {
      background: rgba(0, 106, 173, 0.1);
      color: var(--twitterbluelight);

      svg {
        fill: var(--twitterbluelight);
        color: transparent;
      }
    }

    &.instagram {
      color: var(--dark);

      svg {
        color: var(--dark);
      }
    }

    &.github {
      background: rgba(25, 25, 25, 0.1);
      color: var(--dark);

      svg {
        color: var(--dark);
      }
    }

    &.youtube {
      color: var(--youtuberedlight);

      svg {
        color: var(--youtuberedlight);
      }
    }

    &.linkedin {
      color: var(--linkedinbluelight);

      svg {
        color: var(--linkedinbluelight);
      }
    }

    &.telegram {
      color: var(--telegrambluelight);

      svg {
        color: var(--telegrambluelight);
      }
    }

    &.twitch {
      background: rgba(145, 70, 255, 0.1);
      color: var(--twitchpurpledark);

      svg {
        fill: transparent;
        color: var(--twitchpurpledark);
      }
    }
  }

  @media (prefers-color-scheme: no-preference) {
    box-shadow: 0 0px 5px 0px rgba(0, 0, 0, 0.08),
      0 5px 2px 0px rgba(0, 0, 0, 0.02);

    &:hover {
      box-shadow: 0 0px 10px 0px rgba(0, 0, 0, 0.1),
        0 5px 5px 0px rgba(0, 0, 0, 0.05);
    }

    svg {
      border: 0 solid var(--Nord06);
    }

    &.twitter {
      background: rgba(0, 106, 173, 0.1);
      color: var(--twitterbluelight);

      svg {
        fill: var(--twitterbluelight);
        color: transparent;
      }
    }

    &.instagram {
      color: var(--dark);

      svg {
        color: var(--dark);
      }
    }

    &.github {
      background: rgba(25, 25, 25, 0.1);
      color: var(--dark);

      svg {
        color: var(--dark);
      }
    }

    &.youtube {
      color: var(--youtuberedlight);

      svg {
        color: var(--youtuberedlight);
      }
    }
    &.gmail {
      color: var(--gmailgreenlight);

      svg {
        color: var(--gmailgreenlight);
      }
    }

    &.linkedin {
      color: var(--linkedinbluelight);

      svg {
        color: var(--linkedinbluelight);
      }
    }

    &.telegram {
      color: var(--telegrambluelight);

      svg {
        color: var(--telegrambluelight);
      }
    }

    &.twitch {
      background: rgba(145, 70, 255, 0.1);
      color: var(--twitchpurpledark);

      svg {
        fill: transparent;
        color: var(--twitchpurpledark);
      }
    }
  }
`

const Social = () => (
  <Sc>
    <SocialList>
      {/* Twitter */}
      <ItemSocial>
        <Link
          href="https://twitter.com/emilibethvill?s=21&t=2UgQN4lpNsXjEEb2GRxDMQ"
          target="_blank"
          rel="noopener noreferrer"
          className={"twitter"}
          alt={"twitter"}
        >
          <FeatherIcon name="twitter" alt={"twitter"} />
          <p>@Emilibeth</p>
        </Link>
      </ItemSocial>
      {/* Youtube */}
      <ItemSocial>
        <Link
          href="mailto:emilibethvav@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className={"gmail"}
          alt={"Gmail"}
        >
          <FeatherIcon name="mail" />
          <p>emilibethvav@gmail.com</p>
        </Link>
      </ItemSocial>
      {/* Telegram */}
      {/* <ItemSocial>
        <Link
          href="https://t.me/rychiii"
          target="_blank"
          rel="noopener noreferrer"
          className={"telegram"}
          alt={"telegram"}
        >
          <FeatherIcon name="send" alt={"telegram"} />
          <p>@rychiii</p>
        </Link>
      </ItemSocial> */}
      {/* Github */}
      {/* <ItemSocial>
        <Link
          href="https://www.github.com/Emilibeth/"
          target="_blank"
          rel="noopener noreferrer"
          className={"github"}
          alt={"github"}
        >
          <FeatherIcon name="github" alt={"github"} />
          <p>/Emilibeth</p>
        </Link>
      </ItemSocial> */}
      {/* Instagram */}
      <ItemSocial>
        <Link
          href="https://instagram.com/emilibeth_villasmil?igshid=MDM4ZDc5MmU="
          target="_blank"
          rel="noopener noreferrer"
          className={"instagram"}
          alt={"instagram"}
        >
          <FeatherIcon name="instagram" alt={"instagram"} />
          <p>@Emilibeth</p>
        </Link>
      </ItemSocial>
      {/* Linkedin */}
      <ItemSocial>
        <Link
          href="https://www.linkedin.com/in/emilibeth-villasmil-b4929b25b/"
          target="_blank"
          rel="noopener noreferrer"
          className={"linkedin"}
          alt={"linkedin"}
        >
          <FeatherIcon name="linkedin" alt={"linkedin"} />
          <p>/Emilibeth</p>
        </Link>
      </ItemSocial>
      {/* Twitch */}
      {/* <ItemSocial>
        <Link
          href="https://www.twitch.tv/Emilibeth"
          target="_blank"
          rel="noopener noreferrer"
          className={"twitch"}
          alt={"twitch"}
        >
          <FeatherIcon name="twitch" alt={"twitch"} />
          <p>/Emilibeth</p>
        </Link>
      </ItemSocial> */}
    </SocialList>
  </Sc>
)

export default Social
