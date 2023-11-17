// another way of reading Props would be to just write props: ProfileJSXWithProps(props: PropsType)
// and use props.src, props.alt
// a default value is given to the alt prop and hence can be marked as optional in the type using ?
function ProfileJSXWithProps({
  src,
  alt = "this is default alt value for some fame person",
}: {
  src: string;
  alt?: string;
}) {
  return (
    <div>
      <p style={{ backgroundColor: "lightcoral" }}>{alt}&apos;s image</p>
      <p>as on {new Date().toDateString()}</p>
      <img src={src} alt={alt} />
      {/* JSX spread syntax */}
      <img {...{ src, alt }} />
    </div>
  );
}

export default ProfileJSXWithProps;
