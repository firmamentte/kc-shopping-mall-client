import { defineStore } from "pinia"
import { useStorage } from '@vueuse/core'

export const useSharedStore = defineStore("sharedStore", {
    state: () => ({
        appSettings: {
            companyName: 'KC Shopping Mall' as string,
            urls: {
                ecommerceAPIBaseAddressLocalHost: 'https://localhost:44364/' as string
            }
        },
        errorMessage: '' as string,
        listMessage: useStorage('listMessage', '' as string),
        //okAction: {} as OkAction,
    }),
    getters: {
        getEcommerceAPIBaseAddressLocalHost(state): string {
            return state.appSettings.urls.ecommerceAPIBaseAddressLocalHost
        },
        getListViewMessage(state): string {
            return state.listMessage
        },
        getCompanyName(state): string {
            return state.appSettings.companyName
        },
        getErrorMessage(state): string {
            return state.errorMessage //== "" ? "Unknown error occurred." : state.errorMessage
        }
    },
    actions: {
        setMessage(errorMessage: string) {
            this.errorMessage = errorMessage
        },
        appendMessage(errorMessage: string) {
            this.errorMessage += `→ ${errorMessage} <br/>`
        },
        setListViewMessage(listMessage: string) {
            this.listMessage = listMessage
        },
        // setOkAction(okIcon: string, okMessage: string) {
        //     this.okAction.okIcon = okIcon
        //     this.okAction.okMessage = okMessage
        // },
        clearErrorMessage() {
            this.errorMessage = '' as string
        }
    }
})