import { mount } from "@vue/test-utils"
import { describe, it, expect } from "vitest"

import App from "./App.vue"

describe("useLocalStorage", () => {
  it("should work", async() => {
    let wrapper = mount(App)
    expect(wrapper.find("p").text()).toBe("Counter: 0")
    await wrapper.find("button").trigger("click")
    expect(wrapper.find("p").text()).toBe("Counter: 1")

    wrapper.unmount()

    wrapper = mount(App)
    expect(wrapper.find("p").text()).toBe("Counter: 1")
  })
})
