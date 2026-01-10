import { render, screen, fireEvent } from "@testing-library/react";
import { ArticleApproval } from "../src/components/ArticleApproval";

test("shows Approved! after clicking approve", () => {
  render(
    <ArticleApproval
      article={{ title: "Breaking News", author: "Jane Doe" }}
    />
  );

  fireEvent.click(screen.getByText("Approve"));

  expect(screen.getByText("Approved!")).toBeInTheDocument();
});