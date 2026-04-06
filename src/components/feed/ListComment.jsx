import { useState } from "react";

export default function ListComment({ comments, setComments }) {

  const likeComment = (id) => {
    const updated = comments.map(c =>
      c.id === id ? { ...c, likes: c.likes + 1 } : c
    );
    setComments(updated);
  };

  const replyComment = (id, text) => {
    const updated = comments.map(c => {
      if (c.id === id) {
        return {
          ...c,
          replies: [...c.replies, { id: Date.now(), text }]
        };
      }
      return c;
    });
    setComments(updated);
  };

  return (
    <div>

      {comments.map(comment => (
        <div key={comment.id} className="w3-margin w3-padding w3-border">

          <p>{comment.text}</p>

          <button onClick={() => likeComment(comment.id)}>
            👍 {comment.likes}
          </button>

          {/* RESPONDER */}
          <ReplyBox comment={comment} replyComment={replyComment} />

          {/* RESPUESTAS */}
          {comment.replies.map(r => (
            <div key={r.id} style={{ marginLeft: "20px" }}>
              ↳ {r.text}
            </div>
          ))}

        </div>
      ))}

    </div>
  );
}


// SUBCOMPONENTE
function ReplyBox({ comment, replyComment }) {

  const [reply, setReply] = useState("");

  return (
    <div>
      <input
        value={reply}
        onChange={(e) => setReply(e.target.value)}
        placeholder="Responder..."
      />

      <button onClick={() => {
        if (reply.trim() === "") return;
        replyComment(comment.id, reply);
        setReply("");
      }}>
        Responder
      </button>
    </div>
  );
}