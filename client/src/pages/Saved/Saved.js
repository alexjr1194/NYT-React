import React from "react";

const Saved = props => {

  // Conditional rendering
  if (!props.saved.length) {
    return (
      <p>No saved articles!</p>
    )
  } else {
    return (
      <div className="container">
        {props.saved.map(article => (
          <p>{article.headline}</p>
        ))}
      </div>

    );
  }
};

export default Saved;
