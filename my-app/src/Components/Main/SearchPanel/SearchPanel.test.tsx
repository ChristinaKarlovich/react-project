import { fireEvent, render, screen } from "@testing-library/react";

import SearchPannel from "./SearchPanel";
import { describe, expect, it, vi } from "vitest";

describe("SearchPannel", () => {
  afterEach(() => {
    localStorage.clear();
  });

  it("renders SearchPannel", () => {
    render(
      <SearchPannel
        searchText={null}
        showResult={function (): void {
          throw new Error("Function not implemented.");
        }}
      />,
    );

    screen.debug();
  });

  it("renders search panel textbox", () => {
    render(
      <SearchPannel
        searchText={null}
        showResult={function (): void {
          throw new Error("Function not implemented.");
        }}
      />,
    );

    expect(screen.getByRole("textbox")).toBeInTheDocument();
    screen.debug();
  });

  it("renders search panel button", () => {
    render(
      <SearchPannel
        searchText={null}
        showResult={function (): void {
          throw new Error("Function not implemented.");
        }}
      />,
    );

    expect(screen.getByRole("button", { name: "Search" })).toBeInTheDocument();
    screen.debug();
  });

  it("renders change input text", () => {
    render(
      <SearchPannel
        searchText={null}
        showResult={function (): void {
          throw new Error("Function not implemented.");
        }}
      />,
    );

    expect(screen.queryByDisplayValue("trouble")).toBeNull();

    screen.debug();

    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "trouble" },
    });

    screen.debug();

    expect(screen.queryByDisplayValue("trouble")).toBeInTheDocument();

    screen.debug();
  });

  it("calls the onChange callback handler", () => {
    const onChange = vi.fn();

    render(<SearchPannel searchText={null} showResult={onChange} />);
    fireEvent.submit(screen.getByRole("button"));

    expect(onChange).toHaveBeenCalledTimes(1);
    screen.debug();
  });

  it("get value from local storage", () => {
    //getItemSpy.mockReturnValue("trouble");
    localStorage.setItem("searchText", "time");

    render(
      <SearchPannel
        searchText={null}
        showResult={function (): void {
          throw new Error("Function not implemented.");
        }}
      />,
    );

    expect(screen.queryByDisplayValue("time")).toBeInTheDocument();
  });
});
