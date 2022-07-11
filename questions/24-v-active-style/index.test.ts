import { mount } from "@vue/test-utils"
import { describe, it, expect } from "vitest"

import App from "./App.vue"

describe("v-active-style", () => {
  it("should work", async() => {
    const wrapper = mount(App)
    const list = wrapper.findAll('li')

    expect(list[0].attributes("style")).toBe("color: red;")
    expect(list[1].attributes("style")).toBeUndefined()

    await list[1].trigger("click")

    expect(list[0].attributes("style")).toBe("")
    expect(list[1].attributes("style")).toBe("color: red;")
  })
})
