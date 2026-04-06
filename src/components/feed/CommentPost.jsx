import { useState } from "react";
import ListComment from "./ListComment";

export default function CommentPost() {

  const [like, setLike] = useState(false);
  const [countLike, setCountLike] = useState(0);
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");
  const [showComments, setShowComments] = useState(false);

  const handleLike = () => {
    if (like) {
      setCountLike(countLike - 1);
    } else {
      setCountLike(countLike + 1);
    }
    setLike(!like);
  };

  const addComment = () => {
    if (text.trim() === "") return;

    const newComment = {
      id: Date.now(),
      text: text,
      likes: 0,
      replies: []
    };

    setComments([...comments, newComment]);
    setText("");
  };

  return (
    <div>

      <hr />

      {/* LIKE */}
      <button 
        className="w3-button w3-theme-d1 w3-margin-bottom"
        onClick={handleLike}
      >
        👍 Like ({countLike})
      </button>

      {/* COMMENT BUTTON */}
      <button 
        className="w3-button w3-theme-d2 w3-margin-bottom"
        onClick={() => setShowComments(!showComments)}
      >
        💬 Comment ({comments.length})
      </button>

      {/* INPUT */}
      {showComments && (
        <div>
          <input
            className="w3-input w3-border"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Escribe un comentario..."
          />

          <button 
            className="w3-button w3-theme"
            onClick={addComment}
          >
            Comentar
          </button>
        </div>
      )}

      {/* LISTA */}
      {showComments && (
        <ListComment comments={comments} setComments={setComments} />
      )}

    </div>
  );
}