import { render, screen } from "@testing-library/react";
import Home from "../Home";
// import Login from "../login";
// import Register from "../Register";

test("render judul halaman", () => {
  render(<Home />);
  const linkElement = screen.getByText(/Sewa/i);
  expect(linkElement).toBeInTheDocument();
});
