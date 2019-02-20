import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui comments">
      <h3 className="ui dividing header">Comments</h3>
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4pm"
          image={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Today at 5pm"
          image={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo="Today at 6pm"
          image={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));