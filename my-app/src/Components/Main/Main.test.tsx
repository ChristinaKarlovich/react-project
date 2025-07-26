import { render, screen } from "@testing-library/react";

import Main from "./Main";
import { describe, it } from "vitest";

describe("Main", () => {
  beforeEach(() => {});

  it("renders Main", () => {
    render(<Main />);
    screen.debug();
  });

  it("renders error button", () => {
    render(<Main />);

    expect(screen.getByRole("button", { name: "Throw Error" })).toBeInTheDocument();
    screen.debug();
  });
});
