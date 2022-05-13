import { render, screen } from "@testing-library/react";
import Dashboard from "../Dashboard";

global.matchMedia =
  global.matchMedia ||
  function () {
    return {
      addListener: jest.fn(),
      removeListener: jest.fn(),
    };
  };

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

test("render Search", () => {
  render(<Dashboard />);
  const linkElement = screen.getByText(/Search/i);
  expect(linkElement).toBeInTheDocument();
});

test("render User", () => {
  render(<Dashboard />);
  const linkElement = screen.getByText(/Ini User/i);
  expect(linkElement).toBeInTheDocument();
});

test("render Cars", () => {
  render(<Dashboard />);
  const linkElement = screen.getByText(/Cars/i);
  expect(linkElement).toBeInTheDocument();
});
