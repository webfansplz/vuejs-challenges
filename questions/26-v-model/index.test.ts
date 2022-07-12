import { mount } from "@vue/test-utils"
import { describe, it, expect } from "vitest"

import App from "./App.vue"

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
  })
})
