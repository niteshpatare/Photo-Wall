import { render, screen } from "@testing-library/react";
import Comments from "./Comments";
describe("Comments component", () => {
  test("Comments text to be in the doc", () => {
    render(<Comments />);
    const textElement = screen.getByText("Comments");
    expect(textElement).toBeInTheDocument();
  });
});
