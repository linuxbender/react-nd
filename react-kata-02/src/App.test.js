import { render, screen } from "@testing-library/react";
import App from "./App";
import { FetchProvider } from "./context/FetchContext";

test("renders learn react link", async () => {
  render(
    <FetchProvider basePath={"127.0.0.1:8000"}>
      <App />
    </FetchProvider>
  );
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
