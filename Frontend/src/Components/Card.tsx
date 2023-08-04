import "./Css/Card.css";
import profile from "./Images/Profile.png";

interface proptype {
  source: string;
}
const Card = (props: proptype) => {
  return (
    <>
      <div class="card_wrapper">
        <img class="profile_pic" src={props.source} alt="img" />
      </div>
    </>
  );
};

export default Card;
