import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { test, expect, vi } from "vitest";
import Button from "./Button";

test("renders 버튼과 클릭", async () => {
  const onClick = vi.fn();
  render(<Button onClick={onClick}>클릭</Button>);
  const btn = screen.getByRole("button", { name: /클릭/i });
  await userEvent.click(btn);
  expect(onClick).toHaveBeenCalled();
});
