import login_page from "./pages/login_page";

describe("login",()=>{
    

it('login with valid credentials', () => {
login_page.visit()
login_page.performLogin()
login_page.validateSuccess()

});

it('login with invalid credentials', () => {
login_page.visit()
login_page.performLogin("123","auce")
login_page.validateFail()

});

})