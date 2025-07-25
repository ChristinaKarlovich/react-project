import createFetchMock from "vitest-fetch-mock";
import { render, screen } from "@testing-library/react";

import Main from "./Main";
import { describe, it } from "vitest";

const fetchMocker = createFetchMock(vi);
fetchMocker.enableMocks();

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
