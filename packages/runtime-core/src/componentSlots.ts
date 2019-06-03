import { ComponentInstance } from './component'
import { VNode, NormalizedChildren, normalizeVNode, VNodeChild } from './vnode'
import { isArray, isFunction } from '@vue/shared'
import { SLOTS_CHILDREN } from './typeFlags'

export type Slot = (...args: any[]) => VNode[]
export type Slots = Readonly<{
  [name: string]: Slot
}>
export type RawSlots = {
  [name: string]: unknown
}

const normalizeSlotValue = (value: unknown): VNode[] =>
  isArray(value)
    ? value.map(normalizeVNode)
    : [normalizeVNode(value as VNodeChild)]

const normalizeSlot = (rawSlot: Function): Slot => (props: any) =>
  normalizeSlotValue(rawSlot(props))

export function resolveSlots(
  instance: ComponentInstance,
  children: NormalizedChildren
) {
  let slots: Slots | void
  if (instance.vnode.shapeFlag & SLOTS_CHILDREN) {
    // pre-normalized slots object generated by compiler
    if ((children as any)._normalized) {
      slots = children as Slots
    } else {
      slots = {}
      for (const key in children as RawSlots) {
        let value = (children as RawSlots)[key]
        if (isFunction(value)) {
          ;(slots as any)[key] = normalizeSlot(value)
        } else {
          if (__DEV__) {
            // TODO show tip on using functions
            console.log('use function slots!')
          }
          value = normalizeSlotValue(value)
          ;(slots as any)[key] = () => value
        }
      }
    }
  } else if (children !== null) {
    // non slot object children (direct value) passed to a component
    if (__DEV__) {
      // TODO show tip on using functions
      console.log('use function slots!')
    }
    const normalized = normalizeSlotValue(children)
    slots = { default: () => normalized }
  }
  if (slots !== void 0) {
    instance.slots = slots
  }
}