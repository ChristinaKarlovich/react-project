import {render, screen } from "@testing-library/react";
import ErrorInfo from "./ErrorInfo.tsx";
import { describe, it} from "vitest";

describe("ErrorInfo", () => {

  it("renders ErrorInfo", () => {
    render(<ErrorInfo message={"Error"}/>);
    
    expect(screen.queryByText("Error")).toBeInTheDocument()
    screen.debug();
  });
});
