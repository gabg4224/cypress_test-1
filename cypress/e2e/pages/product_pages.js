class product_page {
    elements = {
        filter: () => cy.get('[data-test=product-sort-container]'),
        cardsElements: () => cy.get('[data-test=inventory-item-price]')
    }


    visit() {
        cy.visit("/inventory.html")

    }







}

export default new product_page()



