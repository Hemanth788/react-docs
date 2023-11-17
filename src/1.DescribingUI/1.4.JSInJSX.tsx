// 2. Defining the function
function ProfileJSX() {
  const src = "https://i.imgur.com/MK3eW3As.jpg";
  const alt = "Katherine Johnson";

  // using curly braces for JS in JSX
  // React.Fragment
  return (
    <>
      {/* this is not double braces but just passing an object as a value to style property */}
      {/* ! camelCase ! */}
      <p style={{ backgroundColor: "lightcoral" }}>{alt}&apos;s image</p>
      {/* this is how comments look in between JSx */}
      {/* using curly braces for JS expressions */}
      <p>as on {new Date().toDateString()}</p>
      <img src={src} alt={alt} />
    </>
  );
}

export default ProfileJSX;
