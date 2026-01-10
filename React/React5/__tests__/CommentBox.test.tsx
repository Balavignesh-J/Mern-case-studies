import { render, screen, fireEvent } from "@testing-library/react";
import { CommentBox } from "../src/components/CommentBox";

test("posts a comment and clears the input", () => {
  const mockPost = jest.fn();

  render(<CommentBox onPost={mockPost} />);

  const input = screen.getByPlaceholderText("Write a comment");
  const button = screen.getByText("Post");

  fireEvent.change(input, { target: { value: "Hello World" } });
  fireEvent.click(button);

  expect(mockPost).toHaveBeenCalledWith("Hello World");
  expect(input).toHaveValue("");
});