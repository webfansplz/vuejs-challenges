import { mount } from "@vue/test-utils"
import { describe, it, expect, vi } from "vitest"

import App from "./App.vue"

describe("key modifiers", () => {
  it("should work", async() => {
    let printLog = ""
    console.log = vi.fn(
      (log: string) => {
        printLog = log?.toString()?.trim()
      })
    const wrapper = mount(App)
    const buttons = wrapper.findAll("button")

    await buttons[0].trigger('click')
    expect(printLog).toMatchInlineSnapshot('""')
    await buttons[0].trigger('click.alt')
    expect(printLog).toMatchInlineSnapshot('"onClick1"')
    await buttons[0].trigger('click.shift')
    expect(printLog).toMatchInlineSnapshot('"onClick1"')

    await buttons[1].trigger('click')
    expect(printLog).toMatchInlineSnapshot('"onClick1"')
    await buttons[1].trigger('click.shift')
    expect(printLog).toMatchInlineSnapshot('"onCtrlClick"')

    await buttons[2].trigger('click')
    expect(printLog).toMatchInlineSnapshot('"onClick2"')
  })
})
