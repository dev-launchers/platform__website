import React, { useState, useEffect } from "react";

import PageBody from "../../common/PageBody";
import Button from "../../common/Button";

import ProfileCard from "./ProfileCard";
import Points from "./Points";
import BioBox from "./BioBox";
import LabCampus from "./LabCampus";
import LabMember from "./LabMember";
import WeeksGlance from "./WeeksGlance";
import { useUserDataContext } from "../../../context/UserDataContext";

import { env } from "../../../utils/EnvironmentVariables";

import { Wrapper, UserSection, UserInfo, Misc } from "./StyledUserProfile";
import DiscordSection from "./DiscordSection/DiscordSection";

export default function UserProfile() {
  const { userData } = useUserDataContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(userData.id === -1);
  }, [userData]);

  if (loading) {
    return <strong>Loading.....</strong>;
  }

  return (
    <PageBody>
      {userData.id && !loading ? (
        <Wrapper>
          <UserSection>
            <ProfileCard
              img={userData.profilePictureUrl}
              name={userData.name}
              username={userData.username}
            />
            <UserInfo>
              <Points
                availablePoints={userData.availablePoints}
                seasonPoints={userData.totalSeasonPoints}
                volunteerHours={userData.volunteerHours}
              />
              <BioBox data={userData}>{userData.bio}</BioBox>
            </UserInfo>
          </UserSection>
          <LabCampus />
          <WeeksGlance />

          <Misc>
            <LabMember />
            <DiscordSection
              discordId={userData.discord.id}
              avatarKey={userData.discord.avatar}
              discordUsername={userData.discord.username}
              discordDiscriminator={userData.discord.discriminator}
            />
          </Misc>
        </Wrapper>
      ) : (
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            minHeight: "60vh",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p style={{ fontSize: "2rem" }}>
            Please sign in to access this page!
          </p>
          <Button fontSize="2rem" href={env().GOOGLE_AUTH_URL}>
            Sign In
          </Button>
          <br />
        </div>
      )}
      <br />
    </PageBody>
  );
}
