import React from "react";

function ProfileWithChildren({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* JSX as children */}
      <p>Profile</p>
      {children}
    </>
  );
}

export default ProfileWithChildren;
