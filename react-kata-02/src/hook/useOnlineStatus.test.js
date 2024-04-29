import { render, fireEvent, screen } from "@testing-library/react";
import React from "react";
import useOnlineStatus from "./useOnlineStatus";

describe("useOnlineStatus", () => {
  let originalNavigator;

  const TestComponent = () => {
    const isOnline = useOnlineStatus();
    return <div>{isOnline ? "Online" : "Offline"}</div>;
  };

  beforeAll(() => {
    originalNavigator = { ...navigator };
  });

  beforeEach(() => {
    Object.defineProperty(window, "navigator", {
      value: {
        onLine: true,
      },
      writable: true,
    });
  });

  afterAll(() => {
    Object.defineProperty(window, "navigator", {
      value: originalNavigator,
    });
  });

  it("should return true if online", () => {
    render(<TestComponent />);
    expect(screen.getByText("Online")).toBeInTheDocument();
  });

  it("should return false if offline", () => {
    Object.defineProperty(window, "navigator", {
      value: {
        onLine: false,
      },
      writable: true,
    });

    render(<TestComponent />);
    expect(screen.getByText("Offline")).toBeInTheDocument();
  });

  it("should update online status when browser goes online", () => {
    render(<TestComponent />);
    fireEvent(window, new Event("online"));
    expect(screen.getByText("Online")).toBeInTheDocument();
  });
});
