import { render, screen } from "@testing-library/react";

import { describe, it } from "vitest";
import CardListItem from "./CardListItem";

describe("CardListItem", () => {
  it("renders CardListItem component", () => {
    render(<CardListItem uid={""} />);

    screen.debug();
  });

  it("renders CardListItem component", () => {
    const props = {
      uid: "",
      title: "Title",
      description: "desc",
      season: "1",
      episode: "1",
    };
    render(<CardListItem {...props} />);

    expect(screen.queryByText("Title")).toBeInTheDocument();
    expect(screen.queryByText("desc s1e1")).toBeInTheDocument();

    screen.debug();
  });
});
