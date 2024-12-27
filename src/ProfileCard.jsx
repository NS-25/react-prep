function ProfileCard({ title, handle, image }) {
  // first way
  // const title = props.title;
  // const handle = props.handle;

  // second way to destructuring props
  // const { title, handle } = props;
  return (
    <div>
      <img src={image} />
      <div>Title is {title}</div>
      <div>Handle is {handle}</div>
    </div>
  );
}
export default ProfileCard;
