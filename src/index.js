// import the react & reactDOM libraries
import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

// create react component
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h3>Danger!</h3>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4:05PM"
          content="Nice Post"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Fred"
          timeAgo="Today at 12:30PM"
          content="Lunch hour huh?"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Joe"
          timeAgo="Yesterday at 9:30PM"
          content="You're up late"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

// take react component & show on screen
ReactDOM.render(<App />, document.querySelector("#root"));
