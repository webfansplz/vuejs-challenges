import { mount } from "@vue/test-utils"
import { describe, it, expect, vi } from "vitest"

import App from "./App.vue"

function delay(timeout: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout)
  })
}

describe("EffectScope", () => {
  it("should work", async() => {
    const result: string[] = []
    console.log = vi.fn((log: string) => {
      result.push(log)
    })
    mount(App)
    await delay(1000)
    expect(JSON.stringify(result)).toBe(JSON.stringify([
      "Count: 2", 4, "Count: 4",
    ]))
  })
})
