import React from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = (props) => {
	// 🔥 Make sure the parent of Comments is passing the right props!
	// const { comments } = props.comments;
	console.log('comments', props.comments);
	return (
		<div>
			{/* map through the comments prop and render a Comment for every piece of data */}
			{props.comments.map((item, index) => {
				return <Comment data={item} key={index} />;
			})}
		</div>
	);
};

export default Comments;
