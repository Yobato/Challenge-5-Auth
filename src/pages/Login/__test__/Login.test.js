import { render, screen } from "@testing-library/react";
import Login from "../login";
// import Register from "../Register";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

test("render judul halaman", () => {
  render(<Login />);
  const linkElement = screen.getByText(/Welcome, Admin BCR/i);
  expect(linkElement).toBeInTheDocument();
});

test("render label login", () => {
  render(<Login />);
  const linkElement = screen.getByText(/Email/i);
  expect(linkElement).toBeInTheDocument();
});

test("render label login 2", () => {
  render(<Login />);
  const linkElement = screen.getByText(/Password/i);
  expect(linkElement).toBeInTheDocument();
});
