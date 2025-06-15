import {defineStore} from 'pinia'

type NewToastArgType = {
  type: 'ERR'|'WARN'|'INFO'|'SUCCESS'
  title: string
  message?: any
}
type ToastType = NewToastArgType & {
  id: number
}
type StateType = {
  TOASTS: ToastType[]
}

export const useToaster = defineStore('toaster', {
  state: (): StateType => ({
    TOASTS: [],
  }),
  getters: {
    toasts: (s) => s.TOASTS,
  },
  actions: {
    newNoty(arg: NewToastArgType) {
      const id = new Date().getTime()
      if (typeof arg.message === 'object') arg.message = Object.values(arg.message)[0]
      if (this.TOASTS.length > 2) this.TOASTS.shift()
      this.TOASTS.push({...arg, id})
      setTimeout(() => {
        this.TOASTS = this.TOASTS.filter((item) => item.id !== id)
      }, 3000)
    },
    notyErr(title: string, message?: any) { this.newNoty({type: 'ERR', title, message}) },
    notyWarn(title: string, message?: any) { this.newNoty({type: 'WARN', title, message}) },
    notyInfo(title: string, message?: any) { this.newNoty({type: 'INFO', title, message}) },
    notySuccess(title: string, message?: any) { this.newNoty({type: 'SUCCESS', title, message}) },
    delNoty(id: number) {
      this.TOASTS = this.TOASTS.filter((item: ToastType) => item.id !== id)
    }
  }
})