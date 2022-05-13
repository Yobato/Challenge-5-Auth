import { render, screen } from "@testing-library/react";
import Dashboard from "../Dashboard";
// import Login from "../login";
// import Register from "../Register";

test("render judul halaman", () => {
  render(<Dashboard />);
  const linkElement = screen.getByText(/Car/i);
  expect(linkElement).toBeInTheDocument();
});
