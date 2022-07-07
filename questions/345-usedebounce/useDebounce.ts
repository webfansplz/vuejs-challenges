import type { Ref} from 'vue'

interface UseDebounceOptions {
  leading?: boolean // Specify invoking on the leading edge of the timeout.
  maxWait?: number // The maximum time func is allowed to be delayed before it's invoked.
  trailing?: boolean // Specify invoking on the trailing edge of the timeout.
}

type MaybeRef<T> = T | Ref<T>
type UseDebounce = <T extends (...args: any[]) => any>(fn: T, wait: MaybeRef<number>, options?: UseDebounceOptions) => T

/**
 * useDebounce
 * @param fn The function to debounce.
 * @param wait The number of milliseconds to delay.
 * @param options The options object.
 * @return Returns the new debounced function.
 */
const useDebounce: UseDebounce = (fn, wait, options) => {
  // do someting...
}