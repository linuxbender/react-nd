import React from "react";
import {act, render} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // Für toBeInTheDocument
import useWindowSize from "./useWindowSize";

describe("useWindowSize", () => {
  let resizeEvent;

  beforeAll(() => {
    resizeEvent = new Event("resize");
    // Mocked von window.innerWidth und window.innerHeight
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 1024,
    });
    Object.defineProperty(window, "innerHeight", {
      writable: true,
      configurable: true,
      value: 768,
    });
  });

  it("should initialize window width and height", () => {
    let hookResult;
    function TestComponent() {
      hookResult = useWindowSize();
      return null;
    }

    render(<TestComponent />);

    expect(hookResult.w).toBe(1024);
    expect(hookResult.h).toBe(768);
  });

  it("should update window width and height on window resize", () => {
    let hookResult;
    function TestComponent() {
      hookResult = useWindowSize();
      return null;
    }

    render(<TestComponent />);

    act(() => {
      // Simuliere eine Änderung der Fenstergröße
      Object.defineProperty(window, "innerWidth", {
        writable: true,
        configurable: true,
        value: 800,
      });
      Object.defineProperty(window, "innerHeight", {
        writable: true,
        configurable: true,
        value: 600,
      });
      window.dispatchEvent(resizeEvent);
    });

    // Überprüfe, ob die Fensterbreite und -höhe aktualisiert wurden
    expect(hookResult.w).toBe(800);
    expect(hookResult.h).toBe(600);
  });

  it("should remove event listener on unmount", () => {
    let hookResult;
    function TestComponent() {
      hookResult = useWindowSize();
      return null;
    }

    const { unmount } = render(<TestComponent />);

    act(() => {
      unmount();
    });

    // Überprüfe, ob das Event-Listener entfernt wurde
    window.dispatchEvent(resizeEvent);
    // Überprüfe, dass die Fensterbreite und -höhe unverändert geblieben sind
    expect(hookResult.w).toBe(800);
    expect(hookResult.h).toBe(600);
  });
});
