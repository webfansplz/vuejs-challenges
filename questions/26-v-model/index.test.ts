import { mount } from "@vue/test-utils"
import { describe, it, expect } from "vitest"

import App from "./App.vue"

function delay(timeout: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout)
  })
}

describe("v-model", () => {
  it("should work", async() => {
    const wrapper = mount(App)
    const input = wrapper.find("input")
    const p = wrapper.find("p")

    expect(input.element.value).toBe("Hello Vue.js")
    expect(p.text()).toBe(input.element.value)

    await input.setValue("Hello World")
    expect(input.element.value).toBe("Hello World")
    expect(p.text()).toBe(input.element.value)

    await delay(2000)
    expect(input.element.value).toBe("Hello World!!!")
    expect(p.text()).toBe(input.element.value)
  })
})
