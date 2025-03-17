import axios, { type AxiosResponse } from "axios"
import { httpMethod } from "@/enums/httpMethod"
import { useSharedStore } from "@/stores/shared"
import { contentType } from "@/enums/contentType"

export const getProducts = async (featured: boolean | null): Promise<AxiosResponse> => {

    const sharedStore = useSharedStore()

    return await axios({
        method: httpMethod.get,
        url: `${sharedStore.getEcommerceAPIBaseAddressLocalHost}Product/V1/GetProducts`,
        headers: {
            'Content-Type': contentType.json
        },
        params: {
            'featured': featured
        }
    }).then(response => response)
}