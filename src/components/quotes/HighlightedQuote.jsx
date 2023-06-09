const HighlightedQuote = (props) => {
  return (
    <figure>
      <h1>"{props.text}"</h1>
      <figcaption>__ {props.author}</figcaption>
    </figure>
  );
};

export default HighlightedQuote;
