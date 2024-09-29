const Platform = ({ platformData }) => {
  const { name, url } = platformData;
  return (
    <div className="platform-card">
      <img src={url} alt="" className="platform-img" />
      <p className="platform-name">{name}</p>
    </div>
  );
};
export default Platform;
