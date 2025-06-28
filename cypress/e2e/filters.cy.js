import login_page from "./pages/login_page";
import product_pages from "./pages/product_pages";
describe("validar filtros", () => {

beforeEach(()=>{

login_page.visit()
login_page.performLogin()

})


it("validar mayor-menor precio",()=>{

product_pages.elements.filter().select("hilo")
product_pages.elements.cardsElements().then($prices=>{
  const prices =   [...$prices].map(p=> parseFloat(p.innerText.replace("$","")))
  const sorted_prices = prices.sort((a,b)=> b-a)
  expect(prices).to.deep.equal(sorted_prices 
  
  )





})


})

})