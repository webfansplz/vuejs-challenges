import { mount } from "@vue/test-utils"
import { describe, it, expect } from "vitest"

import App from "./App.vue"

describe("capitalize", () => {
  it("should work", async() => {
    const wrapper = mount(App)
    await wrapper.find('input').setValue("hello")
    expect(wrapper.find('input').element.value).toBe("Hello")
  })
})
