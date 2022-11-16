import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "서은민",
        comment: "안녕하세요.",
    },
    {
        name: "서운민",
        comment: "안녕못하세요.",
    },
    {
        name: "서은민짱",
        comment: "안녕하세요?",
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;
