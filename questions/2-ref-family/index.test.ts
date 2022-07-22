import type { Ref } from "vue"
import { mount } from "@vue/test-utils"
import { describe, it, expect, vi } from "vitest"

import RefFamily from "./App.vue"

interface RefFamilyType {
  count: Ref<number>
  initial: Ref<number>
  update: (value: number) => void
  initialCount: (value: number | Ref<number>) => number
  state: {foo: number; bar: number}
  fooRef: Ref<number>
}

describe("RefFamily", () => {
  it("update ref function", () => {
    const wrapper = mount(RefFamily);
    (wrapper.vm as unknown as RefFamilyType).update(996)
    expect((wrapper.vm as unknown as RefFamilyType).count).toBe(996)
  })

  it("should work", () => {
    const result: string[] = []
    console.log = vi.fn((log: string) => {
      result.push(log)
    })
    mount(RefFamily)
    expect(JSON.stringify(result)).toBe(JSON.stringify([
      1, true, true, true,
    ]))
  })
})
