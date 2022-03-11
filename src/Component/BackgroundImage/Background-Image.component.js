import "./background-image.styles.css";
const BackgroundImage = ({
  url,
  type,
  thumb = false,
  defaultImage = false,
  position = 1,
  name,
}) => {
  const imageUrl = defaultImage
    ? `url(/data/images/test.jpg)`
    : `url(/data/images/${type}/${name}/${position}.jpg`;

  const encoded = encodeURI(imageUrl);

  return (
    <div
      style={{
        backgroundImage: encoded,
      }}
      className="background-image"
    ></div>
  );
};

export default BackgroundImage;
