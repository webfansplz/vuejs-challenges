import { mount } from "@vue/test-utils"
import { describe, it, expect, vi } from "vitest"

import App from "./App.vue"

function delay(timeout: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout)
  })
}

describe("custom-ref", () => {
  it("should work", async() => {
    let printLog = ''
    console.log = vi.fn((log: string) => {
      printLog = log?.toString()?.trim()
    })

    const wrapper = mount(App)

    await wrapper.find("input").setValue("hello!")
    expect(printLog).toMatchInlineSnapshot('""')
    await delay(200)
    expect(printLog).toMatchInlineSnapshot('"hello!"')

    await wrapper.find("input").setValue("world")
    expect(printLog).toMatchInlineSnapshot('"hello!"')
    await delay(200)
    expect(printLog).toMatchInlineSnapshot('"world"')
  })
})
