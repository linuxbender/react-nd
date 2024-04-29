import React from "react";
import { render } from "@testing-library/react";
import { waitFor } from '@testing-library/react';
import useTimeout from "./useTimeout";

describe("useTimeout", () => {
  it("should call the callback after the specified delay", async () => {
    const callback = jest.fn();
    const delay = 300;

    render(<UseTimeoutComponent callback={callback} delay={delay} />);

    expect(callback).not.toHaveBeenCalled();

    await waitFor(() => {
      expect(callback).toHaveBeenCalledTimes(1);
    });

  });

  it("should clear the timeout when the component is unmounted", () => {
    const callback = jest.fn();
    const delay = 1000;

    const { unmount } = render(
      <UseTimeoutComponent callback={callback} delay={delay} />
    );

    unmount();

    expect(callback).not.toHaveBeenCalled();
  });
});

const UseTimeoutComponent = ({ callback, delay }) => {
  const ready = useTimeout(callback, delay);

  return <div>{ready ? "Ready" : "Not ready"}</div>;
};
