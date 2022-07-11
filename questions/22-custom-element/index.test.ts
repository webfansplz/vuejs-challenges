import { mount } from "@vue/test-utils"
import { describe, it, expect } from "vitest"

import App from "./App.vue"

describe("custom-component", () => {
  it("should work", () => {
    const wrapper = mount(App, { attachTo: document.body })
    const custom = wrapper.find('vue-js')
    expect(custom.exists()).toBeTruthy()
    expect(custom.element.shadowRoot?.innerHTML).toBe("<span>Hello Vue.js</span>")
  })
})
