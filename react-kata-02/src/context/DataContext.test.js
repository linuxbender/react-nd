import React from "react";
import { render, act, screen } from "@testing-library/react";
import useDataContext, { DataProvider } from "./DataContext";

describe("DataProvider", () => {
  it("renders children and provides context", () => {
    const ChildComponent = () => {
      const { demo, list, logFun } = useDataContext();
      return (
        <div>
          <span data-testid="demo">{demo}</span>
          <ul data-testid="list">
            {list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <button onClick={() => logFun("Button clicked")}>Click me</button>
        </div>
      );
    };

    render(
      <DataProvider>
        <ChildComponent />
      </DataProvider>
    );

    // Testet, ob Komponente gerendert wird und Zugriff auf Context-Daten hat
    expect(screen.getByText("Click me")).toBeInTheDocument();
    expect(screen.getByTestId("demo").textContent).toBe("");
    expect(screen.getByTestId("list").childElementCount).toBe(0);
  });

  it("provides context functions to update state", () => {
    const ChildComponent = () => {
      const { demo, setDemo, list, setList, logFun } = useDataContext();
      return (
        <div>
          <span data-testid="demo">{demo}</span>
          <ul data-testid="list">
            {list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <button onClick={() => logFun("Button clicked")}>Click me</button>
          <button onClick={() => setDemo("New demo value")}>Update demo</button>
          <button onClick={() => setList([...list, "New item"])}>
            Add item
          </button>
        </div>
      );
    };

    render(
      <DataProvider>
        <ChildComponent />
      </DataProvider>
    );

    // Testet, ob Kontextfunktionen zum Aktualisieren des Zustands funktionieren
    act(() => {
      screen.getByText("Update demo").click();
    });
    expect(screen.getByTestId("demo").textContent).toBe("New demo value");
    act(() => {
      screen.getByText("Add item").click();
    });
    expect(screen.getByTestId("list").childElementCount).toBe(1);
  });
});
