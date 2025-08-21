import {defineStore} from "pinia"
import { computed, ref } from "vue"

type NewToastArgType = {
  type: "ERR"|"WARN"|"INFO"|"SUCCESS"
  message: string
}
type ToastType = NewToastArgType & {
  id: number
}

export const useToaster = defineStore("toaster", () => {
  const toaster = ref<ToastType[]>([])
  const toasts = computed(() => toaster.value)

  function newNoty(arg: NewToastArgType) {
    const id = new Date().getTime()
    if (typeof arg.message === "object") arg.message = Object.values(arg.message)[0] as string
    if (toaster.value.length > 2) toaster.value.shift()
    toaster.value.push({...arg, id})
    setTimeout(() => {
      toaster.value = toaster.value.filter((item) => item.id !== id)
    }, 3000)
  }

  function notyErr(message: string) { newNoty({type: "ERR", message}) }
  function notyWarn(message: string) { newNoty({type: "WARN", message}) }
  function notyInfo(message: string) { newNoty({type: "INFO", message}) }
  function notySuccess(message: string) { newNoty({type: "SUCCESS", message}) }
  function delNoty(id: number) { toaster.value = toaster.value.filter((item: ToastType) => item.id !== id) }

  return { toasts, notyErr, notyWarn, notyInfo, notySuccess, delNoty }
})