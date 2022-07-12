import { mount } from "@vue/test-utils"
import { describe, it, expect } from "vitest"
import { nextTick } from "vue"

import App from "./App.vue"

describe("useMouse", () => {
  it("should work", async() => {
    const wrapper = mount(App)
    expect(wrapper.html()).toBe("Mouse position is at: 0, 0")

    const mousemove = new MouseEvent("mousemove", {
      screenX: 10,
      screenY: 20,
      clientX: 10,
      clientY: 20,
    })
    window.dispatchEvent(mousemove)

    await nextTick()
    expect(wrapper.html()).toBe("Mouse position is at: 10, 20")
  })
})
