import { render, screen } from "@testing-library/react";
import Login from "../login";
// import Register from "../Register";

test("render judul halaman", () => {
  render(<Login />);
  const linkElement = screen.getByText(/Welcome/i);
  expect(linkElement).toBeInTheDocument();
});
