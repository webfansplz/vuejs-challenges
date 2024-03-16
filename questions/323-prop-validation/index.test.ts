import { mount } from "@vue/test-utils"
import { describe, it, expect } from "vitest"

import Button from "./Button.vue"

describe("prop-validation", () => {
  it("should have a default type prop of 'default'", () => {
    const wrapper = mount(Button)
    expect(wrapper.vm.type).toBe("default")
  })
  it("should only accept specific values for the type prop", () => {
    const wrapper = mount(Button, {
    })
    expect(wrapper.vm.$options.props.type.validator("invalid")).toBe(false)
    const validTypes = ["primary", "ghost", "dashed", "link", "text", "default"]
    const randomType = validTypes[Math.floor(Math.random() * validTypes.length)]
    expect(wrapper.vm.$options.props.type.validator(randomType)).toBe(true)
  })
})
