import { mount } from "@vue/test-utils"
import { describe, it, expect } from "vitest"

import LifecycleFather from "./App.vue"
import LifecycleChild from "./Child.vue"

function delay(timeout: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout)
  })
}

interface InjectType {
  count: number
  timer: number
}

describe("Lifecycle", () => {
  it("The timer will work abnormally when the child component is toggled", async() => {
    const fatherWrapper = mount(LifecycleFather)
    const childWrapper = fatherWrapper.findComponent(LifecycleChild)
    const button = fatherWrapper.find("button")
    expect(childWrapper.exists()).toBeTruthy()

    await delay(1000)
    const firstchildCount = (childWrapper.vm as unknown as InjectType).count
    expect(firstchildCount).toMatchInlineSnapshot("1")

    await button.trigger("click")
    expect(childWrapper.exists()).not.toBeTruthy()

    await delay(1000)
    const secondChildCount = (childWrapper.vm as unknown as InjectType).count
    expect(secondChildCount).toMatchInlineSnapshot("1")

    await button.trigger("click")
    expect(fatherWrapper.findComponent(LifecycleChild).exists()).toBeTruthy()

    await delay(1000)
    const thirdChildCount = (childWrapper.vm as unknown as InjectType).count
    expect(thirdChildCount).toMatchInlineSnapshot("2")

    await delay(1000)
    const fourthChildCount = (childWrapper.vm as unknown as InjectType).count
    expect(fourthChildCount).toMatchInlineSnapshot("3")
  })
})
