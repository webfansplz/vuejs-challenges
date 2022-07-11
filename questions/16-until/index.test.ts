import { mount } from "@vue/test-utils"
import { describe, it, expect, vi } from "vitest"

import App from "./App.vue"

function delay(timeout: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout)
  })
}

describe("until", () => {
  it("should work", async() => {
    const result: string[] = []
    console.log = vi.fn((log: string) => {
      result.push(log)
    })

    const wrapper = mount(App)

    await wrapper.find("p").trigger("click")
    await delay(4000)
    expect(JSON.stringify(result)).toBe("[true]")
  })
})
