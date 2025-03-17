export class Product {
    constructor(
        productId: string,
        productName: string,
        stockKeepingUnit: string,
        price: number,
        availableQuantity: number,
        productImage: string,
        productImageBase64String: string,
        featured: boolean,
        onSpecial: boolean) {
        this.productId = productId
        this.productName = productName
        this.stockKeepingUnit = stockKeepingUnit
        this.price = price
        this.availableQuantity = availableQuantity
        this.productImage = productImage
        this.productImageBase64String = productImageBase64String
        this.featured = featured
        this.onSpecial = onSpecial
    }
    productId: string
    productName: string
    stockKeepingUnit: string
    price: number
    availableQuantity: number
    productImage: string
    productImageBase64String: string
    featured: boolean
    onSpecial: boolean
}