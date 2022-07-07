import { mount } from "@vue/test-utils"
import { describe, it, expect } from "vitest"

import HelloWorld from "./App.vue"

describe("HelloWorld", () => {
  it("renders a 'Hello World'", () => {
    const wrapper = mount(HelloWorld)
    expect(wrapper.text()).toBe("Hello World")
  })
})
