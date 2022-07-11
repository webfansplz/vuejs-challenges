import { mount } from "@vue/test-utils"
import { describe, it, expect } from "vitest"

import App from "./App.vue"

describe("useToggle", () => {
  it("toggle state", async() => {
    const wrapper = mount(App)
    const p1 = wrapper.findAll("p")[0]
    const p2 = wrapper.findAll("p")[1]
    expect(p1.text()).toBe("State: OFF")

    await p2.trigger("click")
    expect(p1.text()).toBe("State: ON")

    await p2.trigger("click")
    expect(p1.text()).toBe("State: OFF")
  })
})
