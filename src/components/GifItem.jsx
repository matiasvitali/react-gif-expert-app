export const GifItem = ({ title, url, id }) => {
  return (
    <div className='card' id={id}>
      <p>{title}</p>
      <img src={url} alt={title} />
    </div>
  );
};
