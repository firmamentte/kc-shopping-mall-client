export class CartSummary {
    constructor(
        quantity: number,
        subTotal: number) {
        this.quantity = quantity
        this.subTotal = subTotal
    }
    quantity: number
    subTotal: number
}

export class CartItem {
    constructor(
        productId: string,
        productName: string,
        productImage: string,
        productImageBase64String: string,
        quantity: number,
        price: number,
        stockKeepingUnit: string,
        availableQuantity: number,
        featured: boolean,
        onSpecial: boolean) {
        this.productId = productId
        this.productName = productName
        this.productImage = productImage
        this.productImageBase64String = productImageBase64String
        this.quantity = quantity
        this.price = price
        this.stockKeepingUnit = stockKeepingUnit
        this.availableQuantity = availableQuantity
        this.featured = featured
        this.onSpecial = onSpecial
    }
    productId: string
    productName: string
    productImage: string
    productImageBase64String: string
    quantity: number
    price: number
    stockKeepingUnit: string
    availableQuantity: number
    featured: boolean
    onSpecial: boolean
}