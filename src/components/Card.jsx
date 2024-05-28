export default function Card({
  id,
  name,
  universe,
  alterego,
  occupation,
  friends,
  superpowers,
  url,
  info,
}) {
  return (
    <div className="item">
      <h3 className="itemTitle" id={id}>
        {name}
      </h3>
      <p className="itemParagraph">
        Вселенная: <span>{universe}</span>
      </p>
      <p className="itemParagraph">
        Альтер-эго: <span>{alterego}</span>
      </p>
      <p className="itemParagraph">
        Род деятельности: <span>{occupation}</span>
      </p>
      <p className="itemParagraph">
        Друзья: <span>{friends}</span>
      </p>
      <p className="itemParagraph">
        Суперсилы: <span>{superpowers}</span>
      </p>
      <div className="itemImgContainer">
        <img src={url} alt={name} />
      </div>
      <button className="itemBtn">Подробнее</button>
      <div className="itemPopup">{info}</div>
    </div>
  );
}
