import { describe, it, expect } from "vitest"

import AppRaw from "./App.vue?raw"

describe("DomPortal", () => {
  it("render to body", () => {
    expect(AppRaw).toContain(atob("Y29sb3I6IHYtYmluZCh0aGVtZSk="))
  })
})
