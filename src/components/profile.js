import React from "react";

const Profile = ({ link, openNewWindow = false }) => {
  return (
    <a href={link} target={openNewWindow ? "_blank" : "_self"}>
      my link
    </a>
  );
};

export default Profile;
