const MovieCard = (props) => {
  return (
    <div className="screen-2">
      <div className="top-image">
        <img src={props.el.image} alt="poster" />
      </div>

      <div className="main-heading">
        <h1 className="title">{props.el.name}</h1>
        <div className="row">
          <span>{props.el.date}</span>
          <span className="r">R</span>
          <span></span>
          <span className="hd">HD</span>
        </div>
      </div>

      <div className="categories">
        <a href="#" className="active">
          Description
        </a>
        <a href="#">Episodes</a>
        <a href="#">Reviews</a>
      </div>

      <p className="description">{props.el.description}</p>
      <div className="btn-play">
        <span>
          {" "}
          <ion-icon className="icon" name="play"></ion-icon>{" "}
        </span>
        Play
      </div>
    </div>
  );
};
export default MovieCard;
