import NoImage from "/src/assets/images/no-image.jpg";
const imageNotAvailable = "image not available";

const MediaComponent = ({media,name}) => {
  return (
    <div>{media.length > 0 ? (
      <img className="w-full h-64 object-cover" src={media[0]} alt={name} />
    ) : (
      <img
        className="w-full h-64 object-cover"
        src={NoImage}
        alt={imageNotAvailable}
      />
    )}</div>
  )
}

export default MediaComponent