import { mount } from "@vue/test-utils"
import { describe, it, expect } from "vitest"

import App from "./App.vue"

describe("functional-component", () => {
  it("should work", async() => {
    const wrapper = mount(App)
    const list = wrapper.findComponent({ name: "list-component" })
    expect(list.vm).toBeUndefined()

    const item1 = list.findAll("li")[0]
    const item2 = list.findAll("li")[1]
    expect(item1.attributes("style")).toBe("color: red;")
    expect(item2.attributes("style")).toBeUndefined()

    await item2.trigger("click")

    expect(item1.attributes("style")).toBeUndefined()
    expect(item2.attributes("style")).toBe("color: red;")
  })
})
