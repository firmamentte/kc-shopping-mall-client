import { defineStore } from "pinia"
import { useStorage } from '@vueuse/core'
import type { Product } from "@/dataContract/product"
import { CartItem, CartSummary } from "@/dataContract/cart"
import { productMenu } from "@/enums/productMenu"

export const useProductStore = defineStore("productStore", {
    state: () => ({
        selectedMenu: useStorage("selectedMenu", productMenu.featured as string),
        featured: useStorage("featured", true as boolean | null),
        products: useStorage("products", [] as Product[]),
        cartItem: useStorage("cartItem", {} as CartItem),
        cartSummary: useStorage("cartSummary", new CartSummary(0, 0)),
        cartItems: useStorage("cartItems", [] as CartItem[]),
        productMenu: useStorage('productMenu', [
            productMenu.featured,
            productMenu.all
        ]),
    }),
    getters: {
        getFeatured(state): boolean | null {
            return state.featured
        },
        getSelectedMenu(state): string {
            return state.selectedMenu
        },
        getProducts(state): Product[] {
            return state.products
        },
        getCartItem(state): CartItem {
            return state.cartItem
        },
        getCartSummary(state): CartSummary {
            return state.cartSummary
        },
        getCartItems(state): CartItem[] {
            return state.cartItems
        },
        getProductMenu(state): productMenu[] {
            return state.productMenu
        },
        isCartItemsEmpty(state): boolean {
            return state.cartItems.length == 0
        },
    },
    actions: {
        setFeatured(featured: boolean | null) {
            this.featured = featured
        },
        setSelectedMenu(menuName: string) {
            this.selectedMenu = menuName
        },
        setProducts(products: Product[]) {
            this.products = products
        },
        setCartItem(productId: string) {

            const product = this.products.find(x => x.productId == productId)!

            this.cartItem = new CartItem(
                productId,
                product.productName,
                product.productImage,
                product.productImageBase64String,
                0,
                product.price,
                product.stockKeepingUnit,
                product.availableQuantity,
                product.featured,
                product.onSpecial)
        },
        updateCartItemQuantity(productId: string, quantity: number) {

            const cartItem = this.cartItems.find(x => x.productId == productId)!

            if (cartItem.quantity <= 0) {
                this.cartItems = this.cartItems.filter(x => x.productId != productId)
            }

            this.updateCartSummary()
        },
        addCartItem(cartItem: CartItem) {

            const _cartItem = this.cartItems.find(x => x.productId == cartItem.productId)!
            if (_cartItem == undefined)
                this.cartItems.unshift(cartItem)
            else {
                _cartItem.quantity = +_cartItem.quantity + +cartItem.quantity
            }

            this.updateCartSummary()
        },
        updateCartSummary() {
            this.cartSummary = new CartSummary(0, 0)

            for (const cartItem of this.cartItems) {
                this.cartSummary.quantity = +this.cartSummary.quantity + +cartItem.quantity
                this.cartSummary.subTotal = +this.cartSummary.subTotal + (+cartItem.price * +cartItem.quantity)
            }
        }
    }
})