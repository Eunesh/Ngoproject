import "./Css/Paragraph.css";
import "../Global css/Style.css";
import "../Global css/util.css";

interface propstype {
  paragraph: string;
}

const Paragraph = (props: propstype) => {
  return (
    <div>
      <p class="container paragraph">
        {props.paragraph}
        <br />
        <a>Read More</a>
      </p>
    </div>
  );
};

export default Paragraph;
