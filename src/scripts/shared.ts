
import { useSharedStore } from "@/stores/shared"

export const getClientErrorRESTfulAPI = (error: any): string => {

    const sharedStore = useSharedStore()

    sharedStore.clearErrorMessage()

    const data = error.response?.data

    if (data != null) {
        for (const errorMessage of data.errors) {
            sharedStore.appendMessage(errorMessage)
        }
    }
    else {
        sharedStore.setMessage(`${error.code}, ${error.message}`)
    }
    return sharedStore.getErrorMessage
}


