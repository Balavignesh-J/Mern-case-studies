import { ArticleCard } from "./ArticleCard";
import { useApproval } from "../hooks/useApproval";

interface Article {
  title: string;
  author: string;
}

interface ArticleApprovalProps {
  article: Article;
}

export function ArticleApproval({ article }: ArticleApprovalProps) {
  const { approved, approve } = useApproval();

  return (
    <div>
      <ArticleCard
        title={article.title}
        author={article.author}
        onApprove={approve}
      />
      {approved && <span>Approved!</span>}
    </div>
  );
}