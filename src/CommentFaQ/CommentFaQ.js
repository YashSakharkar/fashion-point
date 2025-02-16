import React, { useState, useEffect, useRef } from "react";
import "./CommentFaQ.css";
import { Star } from "lucide-react";

const CommentFaQ = () => {
  const [submit, setSubmit] = useState(false);
  const [comments, setComments] = useState([
    {
      name: "John Doe",
      rating: 5,
      message: "Great product! Highly recommend.",
    },
    {
      name: "Jane Smith",
      rating: 4,
      message: "Good quality, but delivery was slow.",
    },
    { name: "Mike Johnson", rating: 5, message: "Perfect for hiking trips." },
  ]);

  const [newComment, setNewComment] = useState("");
  const [userName, setUserName] = useState("");
  const [userRating, setUserRating] = useState(0);
  const ratingRef = useRef(null);
  const submitButtonRef = useRef(null);

  const handleStarClick = (rating) => {
    setUserRating(rating);
  };

  const handleAddComment = () => {
    if (userName && newComment && userRating > 0) {
      setSubmit(true);

      setTimeout(() => {
        setComments([
          ...comments,
          { name: userName, rating: userRating, message: newComment },
        ]);

        setNewComment("");
        setUserName("");
        setUserRating(0);
        setSubmit(false);
      }, 1000);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        ratingRef.current &&
        !ratingRef.current.contains(event.target) &&
        submitButtonRef.current !== event.target 
      ) {
        setUserRating(0);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="cfaq">
      <div className="CommentFaQ">
        <div className="review-card">
          <div className="comment-section-parent">
            <div className="comment-section">
              <h3 className="comment-title">Leave a Comment</h3>
              <input
                type="text"
                placeholder="Your Name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="comment-input"
              />
              <textarea
                placeholder="Write a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="comment-textarea"
                rows="6"
              ></textarea>

     
              <div className="rating-container" ref={ratingRef}>
                <b>Rating: </b>
                <div className="star-rating">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <Star
                      key={num}
                      size={24}
                      className="rating-star"
                      fill={num <= userRating ? "#FFD700" : "#ccc"}
                      stroke="none"
                      onClick={() => handleStarClick(num)}
                    />
                  ))}
                </div>
              </div>

              <button
                ref={submitButtonRef}
                onClick={handleAddComment}
                className="comment-button"
              >
                {submit ? "Submitting..." : "Submit"}
              </button>
            </div>
          </div>

          <div className="comment-list">
            <h3 className="comment-title">Comments</h3>
            {comments.map((comment, index) => (
              <div key={index} className="comment-item">
                <div className="comment-header">
                  <div className="avatar-small"></div>
                  <div>
                    <h4 className="comment-name">{comment.name}</h4>
                    <div className="review-stars">
                      {[1, 2, 3, 4, 5].map((num) => (
                        <Star
                          key={num}
                          size={16}
                          fill={num <= comment.rating ? "#FFD700" : "#ccc"}
                          stroke="none"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="comment-message">{comment.message}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentFaQ;
