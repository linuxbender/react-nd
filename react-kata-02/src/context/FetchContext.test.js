// react-kata-02/src/context/FetchContext.test.js
import React from "react";
import {act, render, screen} from "@testing-library/react";
import useFetch, {FetchProvider} from "./FetchContext";

// Mock fetch global
beforeEach(() => {
    global.fetch = jest.fn();
});
afterEach(() => {
    jest.resetAllMocks();
});

const mockData = {foo: "bar"};

const TestComponent = ({url, options}) => {
    const [data, loading] = useFetch(url, options);
    return (
        <div>
            <span data-testid="loading">{loading ? "loading" : "done"}</span>
            <span data-testid="data">{data ? JSON.stringify(data) : ""}</span>
        </div>
    );
};

describe("FetchProvider & useFetch", () => {
    it("liefert Daten und setzt loading korrekt", async () => {
        fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => mockData,
        });

        await act(async () => {
            render(
                <FetchProvider basePath="/api">
                    <TestComponent url="/test"/>
                </FetchProvider>
            );
        });

        expect(screen.getByTestId("loading").textContent).toBe("done");
        expect(screen.getByTestId("data").textContent).toBe(JSON.stringify(mockData));
        expect(fetch).toHaveBeenCalledWith("/api/test", expect.any(Object));
    });

    it("setzt Fehler, wenn fetch fehlschlägt", async () => {
        fetch.mockResolvedValueOnce({
            ok: false,
            status: 500,
            json: async () => ({}),
        });

        await act(async () => {
            render(
                <FetchProvider basePath="/api">
                    <TestComponent url="/fail"/>
                </FetchProvider>
            );
        });

        expect(screen.getByTestId("data").textContent).toBe("");
    });

    it("ruft pre- und postInterceptors auf", async () => {
        const pre = jest.fn();
        const post = jest.fn();
        fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => mockData,
        });

        await act(async () => {
            render(
                <FetchProvider
                    basePath="/api"
                    preInterceptors={[pre]}
                    postInterceptors={[post]}
                >
                    <TestComponent url="/intercept"/>
                </FetchProvider>
            );
        });

        expect(pre).toHaveBeenCalled();
        expect(post).toHaveBeenCalled();
    });

    it("wirft Fehler, wenn basePath fehlt", () => {
        const spy = jest.spyOn(console, "error").mockImplementation(() => {
        });
        expect(() =>
            render(
                <FetchProvider>
                    <TestComponent url="/fail"/>
                </FetchProvider>
            )
        ).toThrow("FetchContext.Provider basePath must be set");
        spy.mockRestore();
    });
});