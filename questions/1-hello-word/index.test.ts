import { mount } from "@vue/test-utils"
import { describe, it, expect } from "vitest"

import HelloWorld from "./App.vue"

interface HelloWorldProps {
  msg: string
}

describe("HelloWorld", () => {
  it("renders a 'Hello World'", () => {
    const wrapper = mount(HelloWorld)
    const msg = (wrapper.vm as unknown as HelloWorldProps).msg
    expect(wrapper.text()).toBe(msg)
  })
})
