import { mount } from "@vue/test-utils"
import { describe, it, expect } from "vitest"

import App from "./App.vue"

describe("DomPortal", () => {
  it("render to body", () => {
    const wrapper = mount(App)
    expect(wrapper.find("span").exists()).toBeFalsy()
    expect(document.body.innerHTML).toMatchInlineSnapshot("\"<span>Hello World</span>\"")
  })
})
