import { mount } from "@vue/test-utils"
import { describe, it, expect } from "vitest"

import OptimizePerfDirective from "./App.vue"

function delay(timeout: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout)
  })
}

describe("OptimizePerfDirective", () => {
  it("should work", async() => {
    const wrapper = mount(OptimizePerfDirective)
    await delay(1100)
    const content = +wrapper.vm.$el.innerHTML.replace(/\D/g, "")
    expect(content).toBe(0)
  })
})
