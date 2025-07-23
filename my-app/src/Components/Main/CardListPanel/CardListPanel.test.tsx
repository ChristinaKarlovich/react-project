import { render, screen } from "@testing-library/react";
import testValues from "./../../../../tests/test-utils/test-card-list-values.ts";
import CardListPanel from "./CardListPanel.tsx";
import { describe, it } from "vitest";

describe("CardListPanel", () => {
  it("renders CardListPanel", () => {
    render(<CardListPanel data={null} />);

    expect(screen.queryByText("Title 1")).toBeNull();
    screen.debug();
  });

  it("renders CardItems in CardListPanel", () => {
    render(
      <CardListPanel
        data={
          testValues as [
            {
              uid: string;
              title: string;
              season: { title: string };
              seasonNumber: string;
              episodeNumber: string;
            },
          ]
        }
      />,
    );

    expect(screen.getByText("Title 1")).toBeInTheDocument();
    expect(screen.getByText("Title 2")).toBeInTheDocument();
    screen.debug();
  });
});
