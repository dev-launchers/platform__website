import React from "react";
import { withTheme } from "styled-components";
import Link from "next/link";
import {
  Wrapper,
  HeroSection,
  ProjectDescription,
  ProjectTitle,
  Actions,
  InfoBar,
  Section,
} from "./StyledProjectHero";
import Button from "../../../../common/Button";
import Tag from "../../../../common/Tag";

import { env } from "../../../../../utils/EnvironmentVariables";

const ProjectHero = (props) => {
  const { projectData } = props;

  return (
    <Wrapper imageURL={projectData?.heroImage?.url}>
      <HeroSection>
        <ProjectTitle>
          <span>Project</span>
          {projectData?.title}
        </ProjectTitle>
        <ProjectDescription>{projectData?.catchPhrase}</ProjectDescription>
        <Actions>
          <Button
            rel="noopener noreferrer"
            target="_blank"
            href={projectData?.signupFormUrl}
          >
            JOIN NOW
          </Button>
          <Link
            href={{
              pathname: "/support-us",
            }}
            passHref
          >
            <Button bgColor={props.theme.colors.ACCENT_3}>DONATE</Button>
          </Link>
        </Actions>
      </HeroSection>
      <InfoBar>
        <Section position="start" size="1rem">
          {projectData?.keywords.map(({ keyword, id }) => (
            <Tag key={id} text={keyword}></Tag>
          ))}
        </Section>
        <Section position="end" size="3rem">
          {projectData?.projectReferenceURLs.map(({ title, url }) => {
            if (title === "Github Repo")
              return (
                <a
                  style={{ color: props.theme.colors.NEUTRAL_2 }}
                  href={url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-github"></i>
                </a>
              );
            if (title === "Website")
              return (
                <a
                  style={{ color: props.theme.colors.NEUTRAL_2 }}
                  href={url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-globe"></i>
                </a>
              );
            return false;
          })}
        </Section>
      </InfoBar>
    </Wrapper>
  );
};

export default withTheme(ProjectHero);
