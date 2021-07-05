import React from "react";
import FlexPageSection from "../../../common/FlexPageSection";

import CenteredHeadline from "../../../common/CenteredHeadline";

import {
  CtaSectionContent,
  CtaSectionDescription,
  CtaSectionButtonArea,
} from "./StyledContribution";

import Button from "../../../common/Button";
import ShadowCard from "../../../common/ShadowCard";

import codeSnapshotImage from "../../../../images/home-page/code-snapshot--white-background.jpg";

export default function Contribution() {
  return (
    <FlexPageSection
      width="100%"
      height="80vh"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      backgroundImage={codeSnapshotImage}
    >
      <ShadowCard width="70%" height="60%">
        <CenteredHeadline style={{ backgroundColor: "white", color: "black" }}>
          CONTRIBUTE TO OUR PROJECTS
        </CenteredHeadline>
        <div>
          <CtaSectionContent>
            <CtaSectionDescription>
              Everything, from our platform to our curriculum to the projects we
              develop, is released to the open source community. We rely on
              contributors to grow our platform and continue serving our
              members!
            </CtaSectionDescription>
            <CtaSectionButtonArea>
              <Button fontSize="2rem" href="https://github.com/dev-launchers">
                Find us on GitHub
              </Button>
            </CtaSectionButtonArea>
          </CtaSectionContent>
        </div>
      </ShadowCard>
    </FlexPageSection>
  );
}
