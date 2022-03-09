const Image = ({ type, name, position = 1 }) => {
  const imageUrl = `/data/images/${type}/${name}/${position}.jpg`;

  return <img src={imageUrl} alt="" />;
};

export default Image;
