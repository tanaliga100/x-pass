import { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import useHttp from "../hooks/use-http";
import { addComment } from "../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";
import Modal from "../UI/Modal";
import classes from "./NewCommentForm.module.css";

const NewCommentForm = (props) => {
  const commentTextRef = useRef();
  const errorRef = useRef();
  const [comment, setComment] = useState("Please put a comment...");
  const [editing, setEditing] = useState(false);
  const { sendRequest, status, error } = useHttp(addComment);
  const { onAddedComment } = props;
  const history = useHistory();

  const submitFormHandler = (event) => {
    event.preventDefault();

    // optional: Could validate here
    // send comment to server

    const enteredText = commentTextRef.current;
    if (!enteredText.value) {
      enteredText.focus();
      setEditing(true);
      return false;
    } else {
      setEditing(false);
    }
    sendRequest({
      commentData: { text: enteredText.value },
      quoteId: props.quoteId,
    });
  };
  const handleBack = () => {
    history.goBack();
  };

  useEffect(() => {
    if (status === "completed" && !error) {
      onAddedComment();
      commentTextRef.current.value = "";
    }
  }, [status, error, onAddedComment]);

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      {status === "pending" && (
        <div className="centered">
          {" "}
          <LoadingSpinner />
        </div>
      )}
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor="comment">Your Comment</label>
        <textarea
          id="comment"
          rows="5"
          ref={commentTextRef}
          placeholder="make a comment..."
        ></textarea>
        <div ref={errorRef}>{editing && <Modal comment={comment} />}</div>
      </div>
      <div
        className={classes.actions}
        style={{
          display: "flex",
          flexBasis: "60%",
          gap: "1rem",
        }}
      >
        <button className="btn" onClick={handleBack}>
          Back
        </button>
        <button className="btn">Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
