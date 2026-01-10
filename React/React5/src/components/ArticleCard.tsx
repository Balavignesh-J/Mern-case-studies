interface ArticleCardProps {
  title: string;
  author: string;
  onApprove: () => void;
}

export function ArticleCard({ title, author, onApprove }: ArticleCardProps) {
  return (
    <div>
      <h2>{title}</h2>
      <p>By {author}</p>
      <button onClick={onApprove}>Approve</button>
    </div>
  );
}