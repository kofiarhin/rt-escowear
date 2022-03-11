import "./image.styles.css";
const Image = ({ type, name, position = 1, thumb = false }) => {
  const imageUrl = thumb
    ? `/data/images/${type}/thumb.jpg`
    : `/data/images/${type}/${name}/${position}.jpg`;

  return <img src={imageUrl} alt="" />;
};

export default Image;
