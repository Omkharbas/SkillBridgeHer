import { describe, expect, it } from "vitest";
import { shouldDismissNotification } from "../client/src/lib/notificationInteraction";

describe("notification swipe dismissal", () => {
  it("dismisses at or beyond the horizontal swipe threshold", () => {
    expect(shouldDismissNotification(95)).toBe(false);
    expect(shouldDismissNotification(96)).toBe(true);
    expect(shouldDismissNotification(140)).toBe(true);
  });
});
