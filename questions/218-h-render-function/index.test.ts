import { mount } from "@vue/test-utils"
import { describe, it, expect } from "vitest"

import MyButton from "./MyButton"

describe("Render function h()", () => {
  it("renders a 'MyButton'", () => {
    const wrapper = mount(MyButton)
    expect(wrapper.element.tagName.toLocaleLowerCase()).toBe('button')
  })

  it("disabled", async () => {
    const wrapper = mount(MyButton, {
      props: {
        disabled: true
      }
    })
    expect(wrapper.find('button').attributes()).toBeDefined()
    
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
  })

  it("slot", () => {
    const wrapper = mount(MyButton, {
      slots: {
        default: 'my button'
      }
    })
    expect(wrapper.text()).toBe('my button')
  })

  it('custom click defined', () => {
    const wrapper = mount(MyButton)
    wrapper.trigger('click')
    expect(wrapper.emitted().customClick || wrapper.emitted()['custom-click']).toBeDefined()
  })
})
