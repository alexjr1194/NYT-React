import React from "react";

// Map through results here
const Results = props =>
  <div className="container">
    <h1 className="title">Results</h1>

        {props.results.map(article => (
          <div key={article.key}>
            Headline: {article.headline}
            <button className="button is-warning is-right">Save</button>
          </div>
        ))}

  </div>;

export default Results;
