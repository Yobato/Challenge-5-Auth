import { render, screen } from "@testing-library/react";
import Home from "../Home";
// import Login from "../login";
// import Register from "../Register";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

test("render Loading", () => {
  render(<Home />);
  const linkElement = screen.getByText(/Loading/i);
  expect(linkElement).toBeInTheDocument();
});