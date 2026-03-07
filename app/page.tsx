import CommentPopup from './components/CommentPopup';

export default function Home() {
  return (
    <div>
      <h1>My Video Page</h1>
      <CommentPopup videoId="video-123" />
    </div>
  );
}

