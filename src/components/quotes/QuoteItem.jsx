import { Link } from "react-router-dom";

const QuoteItem = (props) => {
  return (
    <li>
      <figure>
        <blockquote>
          <h1>{props.text}</h1>
        </blockquote>

        <figcaption>{props.author}</figcaption>
      </figure>
      <Link to={`/quotes/${props.id}`}>View Fullscreen</Link>
    </li>
  );
};

export default QuoteItem;
