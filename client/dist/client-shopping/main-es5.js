(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-product/add-product.component.html": 
        /*!*********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-product/add-product.component.html ***!
          \*********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>Add Product</p>\n\n<!-- Add product form by admin -->\n<form #addProductForm=\"ngForm\">\n    <table>\n        <tr>\n            <td class=\"input-td\">\n                <input type=\"text\" name=\"productName\" placeholder=\"Product name\" required #productNameInfo=\"ngModel\" \n                       [(ngModel)]=\"product.productName\" minlength=\"2\" pattern=\"[a-zA-Z \\-\\d\\%]*\">\n                <small *ngIf=\"productNameInfo.errors?.required && productNameInfo.touched\" class=\"err-msg text-center\">Product's name is required.</small>\n                <small *ngIf=\"productNameInfo.errors?.minlength&& productNameInfo.touched\" class=\"err-msg text-center\">Product's name must contain at least 2 characters.</small>\n                <small *ngIf=\"productNameInfo.errors?.pattern && productNameInfo.touched\" class=\"err-msg text-center\">Product's name can only contain letters, number and a dash \"-\" and \"%\".</small>\n            </td>\n        </tr>\n        <tr>\n            <td class=\"input-td\">\n                <input type=\"number\" name=\"price\" placeholder=\"Price\" (keyup)=\"noZero()\" pattern=\"\\d+([.]\\d+)?\" required #priceInfo=\"ngModel\" [(ngModel)]=\"product.price\">\n                <small *ngIf=\"priceInfo.errors?.required && priceInfo.touched\" class=\"err-msg text-center\">Price is required</small>\n                <small *ngIf=\"priceInfo.errors?.pattern && priceInfo.touched\" class=\"err-msg text-center\">Only numbers higher than zero are allowed</small>\n                <small *ngIf=\"zero\" class=\"err-msg text-center\">Price cannot be zero</small>\n            </td>\n        </tr>\n        <tr>\n            <td class=\"input-td\">\n                <label class=\"upload-image-button\">Choose Image\n                    <input type=\"file\" accept=\"image/*\" placeholder=\"upload image\" required name=\"image\" (change)=\"onImageSelected($event)\" #imageInfo=\"ngModel\" [(ngModel)]=\"image\">\n                </label>\n                <small *ngIf=\"selectedImage\" class=\"err-msg text-center\">{{selectedImage.name}}</small>\n                <small *ngIf=\"imageInfo.errors?.required && imageInfo.touched\" class=\"err-msg text-center\">Image is required</small>\n            </td>\n        </tr>\n        <tr>\n            <td class=\"input-td\">\n                <select name=\"category\" [(ngModel)]=\"product.category._id\" #selectCategory=\"ngModel\" required>\n                    <option value=\"category\" [disabled]=\"true\" [selected]=true>Category</option>\n                    <option [value]=\"c._id\" *ngFor=\"let c of categories\">{{c.category}}</option>\n                </select>\n                <small *ngIf=\"selectCategory.errors?.required && selectCategory.touched\" class=\"err-msg text-center\">Must choose category</small>\n            </td>\n        </tr>\n        <tr>\n            <td>\n                <button type=\"button\" [disabled]=\"addProductForm.form.invalid || zero || product.category._id === 'category'\" (click)=\"addProduct()\">Add product</button>\n                <button type=\"button\" (click)=\"sendCancelAdding()\">Cancel</button>\n            </td>\n        </tr>\n    </table>    \n</form>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin-page/admin-page.component.html": 
        /*!*******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin-page/admin-page.component.html ***!
          \*******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"master-div\">\n    <div *ngIf=\"admin\" class=\"top-page-div\">\n        <p class=\"hello-class text-left\">Hello Admin {{admin.firstName}}</p>\n        <div class=\"search-class text-center\">\n            <app-search-products (noSearchResultEvent)=\"receiveNoSearchResult($event)\"></app-search-products>\n        </div>\n    </div>\n    \n    <div *ngIf=\"admin\" class=\"sidebar-div\">\n        <div class=\"add-button-div\">\n            <span (click)=\"addProduct()\" class=\"search-button\">\n                <img src=\"/assets/icons/05.png\" class=\"add-button\">\n            </span>\n        </div>\n        <div *ngIf=\"showAdd\">\n            <app-add-product (closeAddEvent)=\"receiveCancelAdding($event)\"></app-add-product>\n        </div>\n        <div *ngIf=\"showUpdate\">\n            <app-update-product [productToUpdate]=\"productToUpdate\" (closeUpdateEvent)=\"receiveCancelUpdate($event)\">\n            </app-update-product>\n        </div>\n    </div>\n\n    <div class=\"products-master-div\">\n        <div class=\"categories-div\">\n            <button *ngFor=\"let c of categories\" class=\"category-button\" (click)=\"getAllProductsByCategory(c._id)\">{{c.category}}</button>\n        </div>\n        <div class=\"products-section\">\n            <div *ngFor=\"let p of products\" class=\"product-div\" (click)=\"updateProduct(p)\">\n                <img src=\"http://localhost:3001/assets/images/{{p.image}}\" class=\"product-image\">\n                <p class=\"product-p\">{{p.productName}}</p>\n                <p class=\"product-p\">{{p.price | currency : 'ILS'}}</p> \n            </div>\n            <div *ngIf=\"noSearchResult\">\n                <p class=\"sorry\">Sorry!</p> \n                <p class=\"no-result\">No search results were found</p>\n            </div>\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cart/cart.component.html": 
        /*!*******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cart/cart.component.html ***!
          \*******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p class=\"cart-title\">Your Cart</p>\n<div *ngIf=\"cartsItems\" class=\"shopping-list-div\">\n    <button *ngIf=\"!beforeOrder\" (click)=\"goBackToShoppingPage()\" class=\"btn btn-link back-button\">Back to Shop</button>\n    <div class=\"cart-items-div\">\n        <table>\n                <tr *ngFor=\"let c of cartsItems\">\n                    <td class=\"trash-td\">\n                        <span *ngIf=\"beforeOrder\" class=\"trash-button\" (click)=\"removeCartItem(c._id)\" title=\"remove item\">\n                            <img src=\"/assets/icons/01.png\" class=\"trash-icon\">\n                        </span>\n                    </td>\n                    <td>\n                        <img src=\"http://localhost:3001/assets/images/{{c.product.image}}\" class=\"product-image\">\n                    </td>\n                    <td>\n                        <p class=\"shopping-list\">{{c.product.productName}}: {{c.quantity}} X\n                            {{c.product.price | currency: 'ILS'}}</p>\n                    </td>\n                    <td>\n                        <p class=\"shopping-list\">{{c.price | currency: 'ILS'}}</p>\n                    </td>\n                </tr>\n        </table>\n    </div>\n    <div class=\"bottom-div\">\n        <p class=\"total-p text-left\">Total Amount: {{totalAmount | currency: 'ILS'}}</p>\n        <button *ngIf=\"beforeOrder\" class=\"cart-button\" type=\"button\"\n                (click)=\"removeAllCartsItems()\">Remove All</button>\n        <button *ngIf=\"beforeOrder\" type=\"button\" class=\"cart-button\" [disabled]=\"buttonDisabled\"\n                (click)=\"order()\">Order</button>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html": 
        /*!*******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
          \*******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"home-top-div\">\n    <div class=\"login\">\n        <div *ngIf=\"!loggedIn\">\n            <app-login (loggedInEvent)=\"receiveLoggedIn($event)\"></app-login>\n        </div>\n        <div *ngIf=\"loggedIn\">\n            <div *ngIf=\"customer\" class=\"hello-customer-div\">\n                <h2 class=\"hello-customer text-center\">Hello {{customer.firstName}}</h2>\n                <img src=\"/assets/images/26.png\" class=\"divider\">\n            </div>\n        </div>\n    </div>\n\n    <div class=\"welcome-div\">\n        <h2 class=\"welcome-title\">Welcome to Shopping Smart</h2>\n        <p class=\"welcome-p\">Here you would be able to buy your groceries from the comfort of your home.<br>\n                            All you have to do is lean back, log in and start clicking and your delivery would be at your doorstep in no time.<br>\n                            Let's get started.</p>\n        <img src=\"/assets/images/20.png\" class=\"image\">\n    </div>\n\n    <div class=\"panelC\">\n        <div class=\"panelC-above-count\">\n            <div *ngIf=\"customer\" class=\"panelC-top-div\">\n                <div *ngIf=\"carts\">\n                    <div *ngIf=\"cart && cart.open\">\n                        <p class=\"welcome-back-title text-center\">Welcome back {{customer.firstName}}</p>\n                        <p class=\"panelC-text text-center\">You have an open cart from <br> {{cart.date | date: 'MMM d, y, h:mm a'}}</p>\n                        <p *ngIf=\"cartsItems\" class=\"panelC-text text-center\">For the total amount of {{totalAmount | currency: 'ILS'}}</p>\n                        <button (click)=\"goToShoppingPage()\">Resume shopping</button>\n                    </div>\n                    <div *ngIf=\"!cart && latestOrder\">\n                        <p class=\"welcome-back-title text-center\">Welcome back {{customer.firstName}} </p>\n                        <p class=\"panelC-text text-center\">Your last purchase was made on <br> {{latestOrder.orderDate | date: 'MMM d, y, h:mm a'}}</p>\n                        <p class=\"panelC-text text-center\">For the total amount of {{latestOrder.price | currency: 'ILS'}}</p>\n                        <button (click)=\"createNewCart()\">Start shopping</button>\n                    </div>\n                </div>\n                <div *ngIf=\"customer.newCustomer\">\n                    <p class=\"panelC-title text-center\">Welcome {{customer.firstName}} </p>\n                    <p class=\"panelC-text text-center\">to your first time shopping at our website.</p>\n                    <p class=\"panelC-text text-center\">Please press on \"Start Shopping\" to start.</p>\n                    <button (click)=\"createNewCart()\">Start Shopping</button>\n                </div>\n                <div class=\"total-count-div-customer\">\n                    <p class=\"total-count text-left\">Orders made on the site: {{countOrders}}</p>\n                    <p class=\"total-count text-left\">Products available: {{countProducts}}</p>\n                </div>\n            </div>\n        </div>\n        <div *ngIf=\"!customer\" class=\"total-count-div\">\n            <p class=\"total-count text-left\">Orders made on the site: {{countOrders}}</p>\n            <p class=\"total-count text-left\">Products available: {{countProducts}}</p>\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/layout/layout.component.html": 
        /*!***********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/layout/layout.component.html ***!
          \***********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<section>\n    <header>\n        <div class=\"logo-div\">\n            <app-site-menu></app-site-menu>\n        </div>\n            <div class=\"contact-div\">\n                <h2 class=\"contact-us-title text-center\">Contact Us</h2>\n                <p class=\"contact-us text-left\">\n                    <img src=\"/assets/icons/03.png\" class=\"email-icon\"> noinfo@shopsmart.com</p>\n                <p class=\"contact-us text-left\">\n                    <img src=\"/assets/icons/04.png\" class=\"phone-icon\"> 01-1111111</p>\n            </div>\n    </header>\n    <main>\n        <router-outlet></router-outlet>\n    </main>\n</section>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html": 
        /*!*********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
          \*********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<form #formInfo=\"ngForm\">\n    <table>\n        <tr>\n            <td>\n                <h2>Login</h2>\n            </td>\n        </tr>\n        <tr>\n            <td>\n                <input type=\"checkbox\" name=\"admin\" #isAdmin=\"ngModel\" [(ngModel)]=\"login.isAdmin\">\n                <small class=\"checkbox-text\">Admin? Please check the check box</small>\n            </td>\n        </tr>\n        <tr>\n            <td class=\"input-login\">\n                <input type=\"email\" name=\"email\" email=\"true\" required #emailInfo=\"ngModel\" class=\"login-input text-left\"\n                       [(ngModel)]=\"login.email\" placeholder=\"Email\" autofocus>\n                <small *ngIf=\"emailInfo.errors?.required && emailInfo.touched\" class=\"err-msg \">Email is required</small>\n            </td>\n        </tr>\n        <tr>\n            <td class=\"input-login\">\n                <input type=\"password\" name=\"password\" required #passwordInfo=\"ngModel\" [(ngModel)]=\"login.password\"\n                       placeholder=\"Password\" class=\"login-input text-left\">\n                <small *ngIf=\"passwordInfo.errors?.required && passwordInfo.touched\" class=\"err-msg \">Password is required</small>\n            </td>\n        </tr>\n        <tr>\n            <td>\n                <button [disabled]=\"formInfo.form.invalid\" (click)=\"logIn()\" >Login</button>\n            </td>\n        </tr>\n        <tr>\n            <td>\n                <p>Not a member yet? Please register here</p>\n                <button (click)=\"goToRegister()\" >Register</button>\n            </td>\n        </tr>\n    </table>\n</form>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/order-page/order-page.component.html": 
        /*!*******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/order-page/order-page.component.html ***!
          \*******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"customer\" class=\"top-page-div\">\n    <p class=\"hello-class text-center\">Hello {{customer.firstName}}</p>\n</div>\n\n<div class=\"cart-div\">\n    <app-cart [beforeOrder]=\"beforeOrder\"></app-cart>\n</div>\n\n<div class=\"order-div\" *ngIf=\"cities\">\n    <p class=\"order-title\">Your Order</p>\n    <form #orderForm=\"ngForm\">\n        <table>\n            <tr>\n                <td class=\"input-td\">\n                    <select name=\"city\" [(ngModel)]=\"order.city\" #selectCity=\"ngModel\" required>\n                        <option [value]=\"\" [disabled]=\"true\" [selected]=true>City</option>\n                        <option [value]=\"c._id\" *ngFor=\"let c of cities\">{{c.english_name | titlecase}}</option>\n                    </select>\n                    <small class=\"order-lable text-left\">City</small>\n                    <small *ngIf=\"selectCity.errors?.required && selectCity.touched\" class=\"err-msg\">Must choose city.</small>\n                </td>\n            </tr>\n            <tr>\n                <td class=\"input-td\">\n                    <input type=\"number\" required name=\"houseNumber\" pattern=\"^[0-9]+$\" (keyup)=\"noZero()\"\n                           [(ngModel)]=\"order.houseNumber\" #houseNumberInfo=\"ngModel\" placeholder=\"House number\">\n                    <small class=\"order-lable text-left\">House number</small>\n                    <small *ngIf=\"houseNumberInfo.errors?.required && houseNumberInfo.touched\" class=\"err-msg\">House number is requierd.<br>\n                           Only numbers are allowed. </small>\n                    <small *ngIf=\"houseNumberInfo.errors?.pattern && houseNumberInfo.touched\" class=\"err-msg\">Only numbers are allowed.</small>\n                    <small *ngIf=\"isZero\" class=\"err-msg\">House number cannot be zero</small>\n                </td>\n            </tr>\n            <tr>\n                <td class=\"input-td\">\n                    <input type=\"text\" placeholder=\"Street\" required [(ngModel)]=\"order.street\" #streetInfo=\"ngModel\"\n                           name=\"street\" minlength=\"2\" pattern=\"[a-zA-Z \\-]*\">\n                    <small class=\"order-lable text-left\">Street</small>\n                    <small *ngIf=\"streetInfo.errors?.required && streetInfo.touched\" class=\"err-msg\">Street is requierd.</small>\n                    <small *ngIf=\"streetInfo.errors?.minlength && streetInfo.touched\" class=\"err-msg\">Street name must containe at least two letters.</small>\n                    <small *ngIf=\"streetInfo.errors?.pattern&& streetInfo.touched\" class=\"err-msg\">Only letters are allowed.</small>\n                </td>\n            </tr>\n            <tr>\n                <td class=\"input-td\">\n                    <input type=\"date\" name=\"deliveryDate\" min=\"{{currentDate}}\" required [(ngModel)]=\"order.deliveryDate\" \n                           #deliveryDateInfo=\"ngModel\">\n                    <small class=\"order-lable text-left\">Delivery Date</small>\n                    <small *ngIf=\"deliveryDateInfo.errors?.required && deliveryDateInfo.touched\" class=\"err-msg\">Must pick a date.</small>\n                </td>\n            </tr>\n            <tr>\n                <td class=\"input-td\">\n                    <input type=\"number\" name=\"ccNumber\" placeholder=\"Credit Card\" required #ccNumberInfo=\"ngModel\"\n                           [(ngModel)]=\"order.cc\" pattern=\"^[0-9]{14,16}$\">\n                    <small class=\"order-lable text-left\">Credit Card number</small>\n                    <small *ngIf=\"ccNumberInfo.errors?.required && ccNumberInfo.touched\" class=\"err-msg\">Missing credit card number.<br>\n                           Only numbers are allowed</small>\n                    <small *ngIf=\"ccNumberInfo.errors?.pattern && ccNumberInfo.touched\" class=\"err-msg\">Invalid Credit card number. <br>\n                           Must contain between 14-16 numbers. <br> Only numbers are allowed </small>\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    <div class=\"input-td\">\n                        <button type=\"button\" [disabled]=\"orderForm.form.invalid || isZero\" (click)=\"makeOrder()\"\n                            class=\"order-button\">Order</button>\n                        <button type=\"button\" (click)=\"goBackToShoppingPage()\" class=\"cancel-button\">Cancel Order</button>\n                    </div>\n                </td>\n            </tr>\n        </table>\n    </form>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/page404/page404.component.html": 
        /*!*************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/page404/page404.component.html ***!
          \*************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h2>Sorry! Something went wrong</h2>\n<p>click here to go back to Home page</p>\n<button (click)=\"goHome()\">Home</button>\n<br>\n<img src=\"/assets/images/19.jpg\">");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/popup-order-confirmation/popup-order-confirmation.component.html": 
        /*!***********************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/popup-order-confirmation/popup-order-confirmation.component.html ***!
          \***********************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-container\" >\n    <div class=\"modal-body\">\n        <div *ngIf=\"errorMessage\">\n            <p class=\"title\">Your order was successfully placed.</p>\n            <p class=\"text\"> Click here to go back home. </p>\n            <button type=\"button\" (click)=\"goHome()\">Home</button>\n        </div>\n        <div *ngIf=\"!errorMessage\">\n            <p class=\"title\">Sorry! Something went wrong.</p>\n            <p class=\"text\">Your order request has faild.</p> \n            <p class=\"text\">Please try again later</p> \n            <button type=\"button\" (click)=\"closePopup()\">Close</button>\n        </div>\n    </div>\n</div>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/popups-products/popups-products.component.html": 
        /*!*****************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/popups-products/popups-products.component.html ***!
          \*****************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-container\">\n  <form #addCartItemForm=\"ngForm\">\n    <div class=\"modal-body\">\n      <div *ngIf=\"product\">\n        <img src=\"http://localhost:3001/assets/images/{{product.image}}\">\n        <p class=\"product-name\">{{product.productName}}</p>\n        <p class=\"product-price\">{{product.price | currency: 'ILS'}}</p>\n      </div>\n      <input type=\"number\" required name=\"quantity\" pattern=\"\\d+\" (keyup)=\"noZero()\" [(ngModel)]=\"cartItem.quantity\" \n             #quantityInfo=\"ngModel\" placeholder=\"Quantity\">\n      <small *ngIf=\"quantityInfo.errors?.required && quantityInfo.dirty\" class=\"err-msg\">Quantity is required.</small>\n      <small *ngIf=\"quantityInfo.errors?.pattern && quantityInfo.touched\" class=\"err-msg\">Only numbers are allowed</small>\n      <small *ngIf=\"isZero\" class=\"err-msg\">Only numbers from 1 and higher are allowed</small>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" [disabled]=\"addCartItemForm.form.invalid || isZero\" (click)=\"addToCart()\">Add to cart</button>\n      <button type=\"button\" (click)=\"activeModal.dismiss('Cross click')\">Cancel</button>\n    </div>\n  </form>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html": 
        /*!***************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html ***!
          \***************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- Register form: -->\n<h3 class=\"register-title\">Register</h3>\n<div class=\"register-top-div\">\n       <form #registerForm=\"ngForm\">\n              <table>\n                     <tr>\n                        <td class=\"input-td\">\n                            <input type=\"text\" name=\"firstName\" #firstNameInfo=\"ngModel\" placeholder=\"First Name\"\n                                   [(ngModel)]=\"customer.firstName\" required pattern=\"[a-zA-Z\\-\\s]*\"minlength=\"2\">\n                            <small *ngIf=\"firstNameInfo.errors?.required && firstNameInfo.touched\"\n                                   class=\"err-msg\">First name is required.</small>\n                            <small *ngIf=\"firstNameInfo.errors?.pattern && firstNameInfo.touched\"\n                                   class=\"err-msg\">Only letters are allowed.</small>\n                            <small *ngIf=\"firstNameInfo.errors?.minlength && firstNameInfo.touched\"\n                                   class=\"err-msg\">First name must have at least two letters.</small>\n                        </td>\n                     </tr>\n                     <tr>\n                        <td class=\"input-td\">\n                            <input type=\"text\" name=\"lastName\" #lastNameInfo=\"ngModel\" placeholder=\"Last Name\"\n                                   [(ngModel)]=\"customer.lastName\" required pattern=\"[a-zA-Z\\-\\s]*\"\n                                   minlength=\"2\">\n                            <small *ngIf=\"lastNameInfo.errors?.required && lastNameInfo.touched\"\n                                   class=\"err-msg\">Last name is requierd.</small>\n                            <small *ngIf=\"lastNameInfo.errors?.pattern && lastNameInfo.touched\"\n                                   class=\"err-msg\">Only letters are allowed.</small>\n                            <small *ngIf=\"lastNameInfo.errors?.minlength&& lastNameInfo.touched\"\n                                   class=\"err-msg\">Last name must have at least two letters.</small>\n                        </td>\n                     </tr>\n                     <tr>\n                        <td class=\"input-td\">\n                            <input type=\"email\" email=\"true\" name=\"email\" #emailInfo=\"ngModel\"\n                                   placeholder=\"Email\" [(ngModel)]=\"customer.email\" required\n                                   pattern=\"^([a-z]|\\d)+([_]|[-]|[a-z]|\\d)*@([a-z]|\\d)+([_]|[-]|[a-z]|\\d)*\\.[a-z]{2,3}((\\.)([a-z]{2,3}))?$\">\n                            <small *ngIf=\"emailInfo.errors?.required && emailInfo.touched\" class=\"err-msg\">Email is requierd.</small>\n                            <small *ngIf=\"emailInfo.errors?.pattern && emailInfo.touched\" class=\"err-msg\">Email is not valid.<br> Capital letters are not allowed</small>\n                        </td>\n                     </tr>\n                     <tr>\n                        <td class=\"input-td\">\n                            <input type=\"password\" name=\"password\" (keyup)=\"noAngularbrackets($event)\"\n                                   #passwordInfo=\"ngModel\" placeholder=\"Password\" [(ngModel)]=\"customer.password\"\n                                   required minlength=\"6\" pattern=\"^[a-zA-Z0-9!@#$%^&*()_\\+\\-\\=[\\][?]+$\">\n                            <small *ngIf=\"passwordInfo.errors?.required && passwordInfo.touched\"\n                                   class=\"err-msg\">Password is required.</small>\n                            <small *ngIf=\"passwordInfo.errors?.minlength && passwordInfo.touched\"\n                                   class=\"err-msg\">Password must contain at least 6 characters.</small>\n                            <small *ngIf=\"passwordInfo.errors?.pattern && passwordInfo.touched\"\n                                   class=\"err-msg\">Only letters,number, and !@#$%^&*()_-+=\\? are allowed.</small>\n                            <small *ngIf=\"isAgularBrackets\" class=\"err-msg\">Angular brackets \"<\" are not allowed.</small> </td> </tr> <tr>\n                        <td class=\"input-td\">\n                            <input type=\"tel\" name=\"phone\" #phoneInfo=\"ngModel\" placeholder=\"Phone Number\"\n                                   [(ngModel)]=\"customer.phone\" required pattern=\"^0[2345789]\\d?[-]?\\d{7}$\">\n                            <small *ngIf=\"phoneInfo.errors?.required && phoneInfo.touched\" class=\"err-msg\">Phone number is required.</small>\n                            <small *ngIf=\"phoneInfo.errors?.pattern && phoneInfo.touched\" class=\"err-msg\">Phone must start with 0 and contain between 9-10 digits.\n                                   <br> No letters are allowed.</small>\n                        </td>\n                     </tr>\n                     <tr>\n                        <td class=\"input-td\">\n                            <select name=\"city\" [(ngModel)]=\"customer.city._id\" #selectCity=\"ngModel\" required>\n                                   <option value=\"city\" [disabled]=\"true\" [selected]=true>City</option>\n                                   <option [value]=\"city._id\" *ngFor=\"let city of cities\">{{city.english_name | titlecase}}</option>\n                            </select>\n                            <small *ngIf=\"selectCity.errors?.required && selectCity.touched\" class=\"err-msg\">Must select city.</small>\n                        </td>\n                     </tr>\n                     <tr>\n                        <td class=\"input-td\">\n                            <input type=\"number\" required name=\"houseNumber\" (keyup)=\"noZero()\"\n                                   [(ngModel)]=\"customer.houseNumber\" #houseNumberInfo=\"ngModel\"\n                                   placeholder=\"House number\" pattern=\"^[0-9]+$\">\n                            <small *ngIf=\"houseNumberInfo.errors?.required && houseNumberInfo.touched\"\n                                   class=\"err-msg\">House number is required.<br>Only numbers are allowed</small>\n                            <small *ngIf=\"houseNumberInfo.errors?.pattern && houseNumberInfo.touched\"\n                                   class=\"err-msg\">Only numbers are allowed.</small>\n                            <small *ngIf=\"isZero\" class=\"err-msg\">House number cannot be zero</small>\n                        </td>\n                     </tr>\n                     <tr>\n                        <td class=\"input-td\">\n                            <input type=\"text\" placeholder=\"Street\" required [(ngModel)]=\"customer.street\"\n                                   #streetInfo=\"ngModel\" name=\"street\" minlength=\"2\" pattern=\"[a-zA-Z\\-\\s]*\">\n                            <small *ngIf=\"streetInfo.errors?.required && streetInfo.touched\"\n                                   class=\"err-msg\">Street name is requierd.</small>\n                            <small *ngIf=\"streetInfo.errors?.minlength && streetInfo.touched\"\n                                   class=\"err-msg\">Street name must contain at least 2 characters.</small>\n                            <small *ngIf=\"streetInfo.errors?.pattern && streetInfo.touched\" class=\"err-msg\">Only letters and dash \"-\" are allowed.</small>\n                        </td>\n                     </tr>\n                     <tr>\n                        <td>\n                            <div class=\"input-td\">\n                                <button type=\"button\"\n                                        [disabled]=\"registerForm.form.invalid || isZero || isAgularBrackets || customer.city._id === 'city' \"\n                                        class=\"register-button\" (click)=\"addCustomer()\">Register</button>\n                                <button type=\"button\" (click)=\"cancelRegistration()\"\n                                        class=\"register-button\">Cancel</button>\n                            </div>\n                        </td>\n                     </tr>\n              </table>\n       </form>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/search-products/search-products.component.html": 
        /*!*****************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/search-products/search-products.component.html ***!
          \*****************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<form #searchProductForm=\"ngForm\">\n    <input type=\"text\" name=\"searchProducts\" [(ngModel)]=\"search\" required #searchWordInfo=\"ngModel\" placeholder=\"Search\">\n    <small *ngIf='searchWordInfo.errors?.required && searchWordInfo.touched'></small>\n    <button type=\"button\" [disabled]=\"searchProductForm.form.invalid\" (click)=\"searchProductsBySearchWord()\" class=\"search-button\">\n        <img src=\"/assets/icons/02.png\">\n    </button>\n    <button type=\"button\" [disabled]=\"buttonDisabled\" (click)=\"clearSearchResult()\">Clear</button>\n</form>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shopping-page/shopping-page.component.html": 
        /*!*************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shopping-page/shopping-page.component.html ***!
          \*************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"master-div\">\n    <div *ngIf=\"customer\" class=\"top-page-div\">\n        <p class=\"hello-class text-left\">Hello {{customer.firstName}}</p>\n        <div class=\"search-class text-center\">\n            <app-search-products (noSearchResultEvent)=\"receiveNoSearchResult($event)\"></app-search-products>\n        </div>\n    </div>\n\n    <div class=\"container\">\n        <div class=\"cart-div\" *ngIf=\"cart\">\n            <app-cart [cartsItems]=\"cartsItems\" [totalAmount]=\"totalAmount\"></app-cart>\n        </div>\n        <div class=\"products-master-div\">\n            <div class=\"categories-div\">\n                <button *ngFor=\"let c of categories\" class=\"category-button\" (click)=\"getAllProductsByCategory(c._id)\">{{c.category}}</button>\n            </div>\n            <div class=\"products-section\">\n                <div *ngFor=\"let p of products\" class=\"product-div\" (click)=\"selectProduct(p)\">\n                    <img src=\"http://localhost:3001/assets/images/{{p.image}}\" class=\"product-image\">\n                    <p class=\"product-p\">{{p.productName}}</p>\n                    <p class=\"product-p\">{{p.price | currency : 'ILS'}}</p>\n                </div>\n                <div *ngIf=\"noSearchResult\">\n                    <p class=\"sorry\">Sorry!</p> \n                    <p class=\"no-result\">No search results were found</p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/site-menu/site-menu.component.html": 
        /*!*****************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/site-menu/site-menu.component.html ***!
          \*****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"logo-div\">\n    <img src=\"/assets/icons/08.png\">\n    <p>Shopping Smart</p>\n</div>\n<nav *ngIf=\"customer\">\n    <a routerLink=\"/home\" routerLinkActive=\"current-link\">Home</a>\n</nav>\n<span *ngIf=\"customer\"> | </span>\n<div *ngIf=\"customer || admin\">\n    <button class=\"btn btn-link logout-button\" type=\"button\" (click)=\"logout($event)\">Logout</button>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/update-product/update-product.component.html": 
        /*!***************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/update-product/update-product.component.html ***!
          \***************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>Update Product</p>\n<form #updateProductForm=\"ngForm\">\n    <table>\n        <tr>\n            <td class=\"input-td\">\n                <input type=\"text\" name=\"productName\" placeholder=\"Product name\" required #productNameInfo=\"ngModel\"\n                       [(ngModel)]=\"productToUpdate.productName\"  minlength=\"2\" pattern=\"[a-zA-Z \\-\\d]*\">\n                <small *ngIf=\"productNameInfo.errors?.required && productNameInfo.touched\" class=\"err-msg text-center\">Product's name is required</small>\n                <small *ngIf=\"productNameInfo.errors?.minlength&& productNameInfo.touched\" class=\"err-msg text-center\">Product's name must contain at least 2 characters.</small>\n                <small *ngIf=\"productNameInfo.errors?.pattern && productNameInfo.touched\" class=\"err-msg text-center\">Product's name can only contain letters, number and a dash \"-\".</small>\n            </td>\n        </tr>\n        <tr>\n            <td class=\"input-td\">\n                <input type=\"number\" name=\"price\" placeholder=\"Price\" required (keyup)=\"noZero()\" pattern=\"\\d+([.]\\d+)?\" #priceInfo=\"ngModel\" [(ngModel)]=\"productToUpdate.price\">\n                <small *ngIf=\"priceInfo.errors?.required && priceInfo.touched\" class=\"err-msg text-center\">Price is required</small>\n                <small *ngIf=\"priceInfo.errors?.pattern && priceInfo.touched\" class=\"err-msg text-center\">Only numbers higher than zero are allowed</small>\n                <small *ngIf=\"zero\" class=\"err-msg text-center\">Price need to be higher than zero</small>\n            </td>\n        </tr>\n        <tr>\n            <td class=\"input-td\">\n                <label class=\"upload-image-button\">Choose Image\n                    <input type=\"file\" accept=\"image/*\" placeholder=\"Upload image\" name=\"productImage\" (change)=\"onImageSelected($event)\">\n                </label>\n                <small *ngIf=\"selectedImage\" class=\"err-msg text-center\">{{selectedImage.name}}</small>\n            </td>\n        </tr>\n        <tr>\n            <td class=\"input-td\">\n                <select name=\"category\" [(ngModel)]=\"productToUpdate.category._id\" #selectCategory=\"ngModel\" required>\n                    <option [value]=\"\" [disabled]=\"true\" [selected]=true>Category</option>\n                    <option [value]=\"c._id\" *ngFor=\"let c of categories\">{{c.category}}</option>\n                </select>\n                <small *ngIf=\"selectCategory.errors?.required && selectCategory.touched\" class=\"err-msg text-center\">Must choose category</small>\n            </td>\n        </tr>\n        <tr>\n            <td>\n                <button type=\"button\" [disabled]=\"updateProductForm.form.invalid || zero\" (click)=\"updateProduct()\">Update product</button>\n                <button type=\"button\" (click)=\"sendCancelUpdate()\">Cancel</button>\n            </td>\n        </tr>\n    </table>\n</form>");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
            /* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
            /* harmony import */ var _components_page404_page404_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/page404/page404.component */ "./src/app/components/page404/page404.component.ts");
            /* harmony import */ var _components_shopping_page_shopping_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/shopping-page/shopping-page.component */ "./src/app/components/shopping-page/shopping-page.component.ts");
            /* harmony import */ var _components_admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/admin-page/admin-page.component */ "./src/app/components/admin-page/admin-page.component.ts");
            /* harmony import */ var _components_order_page_order_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/order-page/order-page.component */ "./src/app/components/order-page/order-page.component.ts");
            var routes = [
                { path: "home", component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
                { path: "register", component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
                { path: "admin-page", component: _components_admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_7__["AdminPageComponent"] },
                { path: "shopping-page/:userID", component: _components_shopping_page_shopping_page_component__WEBPACK_IMPORTED_MODULE_6__["ShoppingPageComponent"] },
                { path: "order-page/:cartID", component: _components_order_page_order_page_component__WEBPACK_IMPORTED_MODULE_8__["OrderPageComponent"] },
                { path: "", redirectTo: "/home", pathMatch: "full" },
                { path: "**", component: _components_page404_page404_component__WEBPACK_IMPORTED_MODULE_5__["Page404Component"] }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/layout/layout.component */ "./src/app/components/layout/layout.component.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
            /* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
            /* harmony import */ var _components_page404_page404_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/page404/page404.component */ "./src/app/components/page404/page404.component.ts");
            /* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
            /* harmony import */ var _components_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/add-product/add-product.component */ "./src/app/components/add-product/add-product.component.ts");
            /* harmony import */ var _components_update_product_update_product_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/update-product/update-product.component */ "./src/app/components/update-product/update-product.component.ts");
            /* harmony import */ var _components_admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/admin-page/admin-page.component */ "./src/app/components/admin-page/admin-page.component.ts");
            /* harmony import */ var _components_shopping_page_shopping_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/shopping-page/shopping-page.component */ "./src/app/components/shopping-page/shopping-page.component.ts");
            /* harmony import */ var _components_site_menu_site_menu_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/site-menu/site-menu.component */ "./src/app/components/site-menu/site-menu.component.ts");
            /* harmony import */ var ng2_redux__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng2-redux */ "./node_modules/ng2-redux/lib/index.js");
            /* harmony import */ var ng2_redux__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/ __webpack_require__.n(ng2_redux__WEBPACK_IMPORTED_MODULE_16__);
            /* harmony import */ var _redux_appState__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./redux/appState */ "./src/app/redux/appState.ts");
            /* harmony import */ var _redux_reducer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./redux/reducer */ "./src/app/redux/reducer.ts");
            /* harmony import */ var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/cart/cart.component */ "./src/app/components/cart/cart.component.ts");
            /* harmony import */ var _components_popups_products_popups_products_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/popups-products/popups-products.component */ "./src/app/components/popups-products/popups-products.component.ts");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var _components_order_page_order_page_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/order-page/order-page.component */ "./src/app/components/order-page/order-page.component.ts");
            /* harmony import */ var _components_search_products_search_products_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/search-products/search-products.component */ "./src/app/components/search-products/search-products.component.ts");
            /* harmony import */ var _components_popup_order_confirmation_popup_order_confirmation_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/popup-order-confirmation/popup-order-confirmation.component */ "./src/app/components/popup-order-confirmation/popup-order-confirmation.component.ts");
            var AppModule = /** @class */ (function () {
                function AppModule(ngRedux) {
                    ngRedux.configureStore(_redux_reducer__WEBPACK_IMPORTED_MODULE_18__["Reducer"].reduce, new _redux_appState__WEBPACK_IMPORTED_MODULE_17__["AppState"]());
                }
                return AppModule;
            }());
            AppModule.ctorParameters = function () { return [
                { type: ng2_redux__WEBPACK_IMPORTED_MODULE_16__["NgRedux"] }
            ]; };
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_4__["LayoutComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _components_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"], _components_page404_page404_component__WEBPACK_IMPORTED_MODULE_9__["Page404Component"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"], _components_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_11__["AddProductComponent"], _components_update_product_update_product_component__WEBPACK_IMPORTED_MODULE_12__["UpdateProductComponent"], _components_admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_13__["AdminPageComponent"], _components_shopping_page_shopping_page_component__WEBPACK_IMPORTED_MODULE_14__["ShoppingPageComponent"], _components_site_menu_site_menu_component__WEBPACK_IMPORTED_MODULE_15__["SiteMenuComponent"], _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_19__["CartComponent"], _components_popups_products_popups_products_component__WEBPACK_IMPORTED_MODULE_20__["PopupsProductsComponent"], _components_order_page_order_page_component__WEBPACK_IMPORTED_MODULE_22__["OrderPageComponent"], _components_search_products_search_products_component__WEBPACK_IMPORTED_MODULE_23__["SearchProductsComponent"], _components_popup_order_confirmation_popup_order_confirmation_component__WEBPACK_IMPORTED_MODULE_24__["PopupOrderConfirmationComponent"]],
                    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], ng2_redux__WEBPACK_IMPORTED_MODULE_16__["NgReduxModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__["NgbModule"]],
                    entryComponents: [_components_popups_products_popups_products_component__WEBPACK_IMPORTED_MODULE_20__["PopupsProductsComponent"], _components_popup_order_confirmation_popup_order_confirmation_component__WEBPACK_IMPORTED_MODULE_24__["PopupOrderConfirmationComponent"]],
                    providers: [],
                    bootstrap: [_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_4__["LayoutComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/components/add-product/add-product.component.css": 
        /*!******************************************************************!*\
          !*** ./src/app/components/add-product/add-product.component.css ***!
          \******************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/* button design */\nbutton{\n    margin:2px;\n    color: white;\n    background-image: radial-gradient( rgb(121, 50, 74),  rgb(126, 39, 59));\n    border-radius: 5px;\n}\n/* button disabled design */\nbutton:disabled{\n    margin:0;\n    color: rgb(146, 146, 146);\n    background-image: radial-gradient( rgb(121, 93, 101), rgb(88, 54, 63));\n    border-radius: 5px;\n}\n/* Add Product Title design */\np{\n    color:white;\n    font-family: myTitle;\n    font-size: 35px;\n    margin: 0;\n    padding: 0;\n}\n/* table, td, tr design */\ntable, tr, td{\n    margin: 0;\n    padding: 0;\n}\n/* table design */\ntable{\n    margin: auto;\n}\n/* td with inputs design */\n.input-td{\n    padding: 0;\n    width: 250px;\n    height: 60px;\n    vertical-align: baseline;\n}\n/* Choose image button design */\n.upload-image-button{\n    width: 120px;\n    height: 30px;\n    margin:0;\n    color: white;\n    background-image: radial-gradient( rgb(121, 50, 74),  rgb(126, 39, 59));\n    border-radius: 4px;\n    border-top: 2px solid white;\n    border-left: 2px solid white;\n    border-right: 2px solid rgb(80, 80, 80);\n    border-bottom: 2px solid rgb(80, 80, 80);\n}\n/* Choose image button when hover design */\n.upload-image-button:hover{\n    width: 120px;\n    height: 30px;\n    margin:0;\n    color: white;\n    background-image: radial-gradient( rgb(121, 50, 74),  rgb(126, 39, 59));\n    border-radius: 4px;\n    border-top: 2px solid white;\n    border-left: 2px solid white;\n    border-right: 2px solid rgb(80, 80, 80);\n    border-bottom: 2px solid rgb(80, 80, 80);\n    cursor: pointer;\n}\n/* Choose image button when clicking on it design */\n.upload-image-button:active{\n    width: 120px;\n    height: 30px;\n    margin:0;\n    color: white;\n    background-image: radial-gradient( rgb(121, 50, 74),  rgb(126, 39, 59));\n    border-radius: 4px;\n    border-top: 2px solid rgb(80, 80, 80);\n    border-left: 2px solid rgb(80, 80, 80);\n    border-right: 2px solid white;\n    border-bottom: 2px solid white;\n    cursor: pointer;\n}\n/* Error messages and small text design */\n.err-msg{\n    color: white;\n    display: block;\n    font-weight: 500;\n    text-shadow: 1px 1px 2px rgb(24, 6, 11); \n    padding-left: 0px 3px;\n    font-size: 11px;\n}\n/* Input and select design */\ninput, select{\n    width:190px;\n    height: 30px;\n    border-radius: 3px;\n    box-shadow: 3px 2px 5px rgb(53, 22, 31);\n    border: none;\n    background-color: rgba(255, 255, 255, 0.589);\n}\n/* Doesn't display the default type=\"file\" design */\ninput[type=\"file\"]{\n    display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQtcHJvZHVjdC9hZGQtcHJvZHVjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtCQUFrQjtBQUNsQjtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osdUVBQXVFO0lBQ3ZFLGtCQUFrQjtBQUN0QjtBQUVBLDJCQUEyQjtBQUMzQjtJQUNJLFFBQVE7SUFDUix5QkFBeUI7SUFDekIsc0VBQXNFO0lBQ3RFLGtCQUFrQjtBQUN0QjtBQUVBLDZCQUE2QjtBQUM3QjtJQUNJLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7QUFFQSx5QkFBeUI7QUFDekI7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkO0FBRUEsaUJBQWlCO0FBQ2pCO0lBQ0ksWUFBWTtBQUNoQjtBQUVBLDBCQUEwQjtBQUMxQjtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osWUFBWTtJQUNaLHdCQUF3QjtBQUM1QjtBQUVBLCtCQUErQjtBQUMvQjtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osUUFBUTtJQUNSLFlBQVk7SUFDWix1RUFBdUU7SUFDdkUsa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsdUNBQXVDO0lBQ3ZDLHdDQUF3QztBQUM1QztBQUVBLDBDQUEwQztBQUMxQztJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osUUFBUTtJQUNSLFlBQVk7SUFDWix1RUFBdUU7SUFDdkUsa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsdUNBQXVDO0lBQ3ZDLHdDQUF3QztJQUN4QyxlQUFlO0FBQ25CO0FBRUEsbURBQW1EO0FBQ25EO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixRQUFRO0lBQ1IsWUFBWTtJQUNaLHVFQUF1RTtJQUN2RSxrQkFBa0I7SUFDbEIscUNBQXFDO0lBQ3JDLHNDQUFzQztJQUN0Qyw2QkFBNkI7SUFDN0IsOEJBQThCO0lBQzlCLGVBQWU7QUFDbkI7QUFFQSx5Q0FBeUM7QUFDekM7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLGdCQUFnQjtJQUNoQix1Q0FBdUM7SUFDdkMscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7QUFFQSw0QkFBNEI7QUFDNUI7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix1Q0FBdUM7SUFDdkMsWUFBWTtJQUNaLDRDQUE0QztBQUNoRDtBQUVBLG1EQUFtRDtBQUNuRDtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkZC1wcm9kdWN0L2FkZC1wcm9kdWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBidXR0b24gZGVzaWduICovXG5idXR0b257XG4gICAgbWFyZ2luOjJweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KCByZ2IoMTIxLCA1MCwgNzQpLCAgcmdiKDEyNiwgMzksIDU5KSk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4vKiBidXR0b24gZGlzYWJsZWQgZGVzaWduICovXG5idXR0b246ZGlzYWJsZWR7XG4gICAgbWFyZ2luOjA7XG4gICAgY29sb3I6IHJnYigxNDYsIDE0NiwgMTQ2KTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoIHJnYigxMjEsIDkzLCAxMDEpLCByZ2IoODgsIDU0LCA2MykpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLyogQWRkIFByb2R1Y3QgVGl0bGUgZGVzaWduICovXG5we1xuICAgIGNvbG9yOndoaXRlO1xuICAgIGZvbnQtZmFtaWx5OiBteVRpdGxlO1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuLyogdGFibGUsIHRkLCB0ciBkZXNpZ24gKi9cbnRhYmxlLCB0ciwgdGR7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbi8qIHRhYmxlIGRlc2lnbiAqL1xudGFibGV7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4vKiB0ZCB3aXRoIGlucHV0cyBkZXNpZ24gKi9cbi5pbnB1dC10ZHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG4vKiBDaG9vc2UgaW1hZ2UgYnV0dG9uIGRlc2lnbiAqL1xuLnVwbG9hZC1pbWFnZS1idXR0b257XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBtYXJnaW46MDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KCByZ2IoMTIxLCA1MCwgNzQpLCAgcmdiKDEyNiwgMzksIDU5KSk7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCB3aGl0ZTtcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHdoaXRlO1xuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHJnYig4MCwgODAsIDgwKTtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiKDgwLCA4MCwgODApO1xufVxuXG4vKiBDaG9vc2UgaW1hZ2UgYnV0dG9uIHdoZW4gaG92ZXIgZGVzaWduICovXG4udXBsb2FkLWltYWdlLWJ1dHRvbjpob3ZlcntcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIG1hcmdpbjowO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoIHJnYigxMjEsIDUwLCA3NCksICByZ2IoMTI2LCAzOSwgNTkpKTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHdoaXRlO1xuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgd2hpdGU7XG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgcmdiKDgwLCA4MCwgODApO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2IoODAsIDgwLCA4MCk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiBDaG9vc2UgaW1hZ2UgYnV0dG9uIHdoZW4gY2xpY2tpbmcgb24gaXQgZGVzaWduICovXG4udXBsb2FkLWltYWdlLWJ1dHRvbjphY3RpdmV7XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBtYXJnaW46MDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KCByZ2IoMTIxLCA1MCwgNzQpLCAgcmdiKDEyNiwgMzksIDU5KSk7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCByZ2IoODAsIDgwLCA4MCk7XG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCByZ2IoODAsIDgwLCA4MCk7XG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgd2hpdGU7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogRXJyb3IgbWVzc2FnZXMgYW5kIHNtYWxsIHRleHQgZGVzaWduICovXG4uZXJyLW1zZ3tcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggcmdiKDI0LCA2LCAxMSk7IFxuICAgIHBhZGRpbmctbGVmdDogMHB4IDNweDtcbiAgICBmb250LXNpemU6IDExcHg7XG59XG5cbi8qIElucHV0IGFuZCBzZWxlY3QgZGVzaWduICovXG5pbnB1dCwgc2VsZWN0e1xuICAgIHdpZHRoOjE5MHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYm94LXNoYWRvdzogM3B4IDJweCA1cHggcmdiKDUzLCAyMiwgMzEpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTg5KTtcbn1cblxuLyogRG9lc24ndCBkaXNwbGF5IHRoZSBkZWZhdWx0IHR5cGU9XCJmaWxlXCIgZGVzaWduICovXG5pbnB1dFt0eXBlPVwiZmlsZVwiXXtcbiAgICBkaXNwbGF5OiBub25lO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/add-product/add-product.component.ts": 
        /*!*****************************************************************!*\
          !*** ./src/app/components/add-product/add-product.component.ts ***!
          \*****************************************************************/
        /*! exports provided: AddProductComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductComponent", function () { return AddProductComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_models_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/product */ "./src/app/models/product.ts");
            /* harmony import */ var src_app_services_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/products.service */ "./src/app/services/products.service.ts");
            /* harmony import */ var src_app_models_category__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/category */ "./src/app/models/category.ts");
            /* harmony import */ var src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/categories.service */ "./src/app/services/categories.service.ts");
            /* harmony import */ var ng2_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-redux */ "./node_modules/ng2-redux/lib/index.js");
            /* harmony import */ var ng2_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(ng2_redux__WEBPACK_IMPORTED_MODULE_6__);
            var AddProductComponent = /** @class */ (function () {
                function AddProductComponent(productsService, categoriesService, redux) {
                    this.productsService = productsService;
                    this.categoriesService = categoriesService;
                    this.redux = redux;
                    this.closeAddEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.showAdd = false;
                    this.zero = false;
                    this.product = new src_app_models_product__WEBPACK_IMPORTED_MODULE_2__["Product"]();
                    this.product.category = new src_app_models_category__WEBPACK_IMPORTED_MODULE_4__["Category"]();
                    this.product.category._id = "category";
                    this.selectedImage = null;
                }
                // Inviked at the beginning of the component's lifecycle:
                AddProductComponent.prototype.ngOnInit = function () {
                    this.subscribeToStore();
                    // Get all categories:
                    if (this.redux.getState().categories.length === 0) {
                        this.categoriesService.getAllCategories();
                    }
                    else {
                        this.categories = this.redux.getState().categories;
                    }
                };
                // Subscribe to store:
                AddProductComponent.prototype.subscribeToStore = function () {
                    var _this = this;
                    this.unsubscribe = this.redux.subscribe(function () {
                        _this.categories = _this.redux.getState().categories;
                    });
                };
                // Unsubscribe to store - Invoked a moment before the component's lifecycle ends:
                AddProductComponent.prototype.ngOnDestroy = function () {
                    this.unsubscribe();
                };
                // Saving the image uploaded from admin in a variable 
                AddProductComponent.prototype.onImageSelected = function (event) {
                    this.selectedImage = event.target.files[0];
                };
                // Add product:
                AddProductComponent.prototype.addProduct = function () {
                    var fd = new FormData();
                    fd.append('productImage', this.selectedImage, this.selectedImage.name);
                    fd.append('product', JSON.stringify(this.product));
                    this.productsService.addProduct(fd);
                    this.closeAddEvent.emit(this.showAdd);
                };
                // Cancel adding a new product:
                AddProductComponent.prototype.sendCancelAdding = function () {
                    this.closeAddEvent.emit(this.showAdd);
                };
                // Is Larger than zero:
                AddProductComponent.prototype.noZero = function () {
                    if (this.product.price > 0 || this.product.price === null) {
                        this.zero = false;
                    }
                    else if (this.product.price === 0) {
                        this.zero = true;
                    }
                };
                return AddProductComponent;
            }());
            AddProductComponent.ctorParameters = function () { return [
                { type: src_app_services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"] },
                { type: src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_5__["CategoriesService"] },
                { type: ng2_redux__WEBPACK_IMPORTED_MODULE_6__["NgRedux"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], AddProductComponent.prototype, "closeAddEvent", void 0);
            AddProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-add-product',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-product.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-product/add-product.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-product.component.css */ "./src/app/components/add-product/add-product.component.css")).default]
                })
            ], AddProductComponent);
            /***/ 
        }),
        /***/ "./src/app/components/admin-page/admin-page.component.css": 
        /*!****************************************************************!*\
          !*** ./src/app/components/admin-page/admin-page.component.css ***!
          \****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/* The container div of the component: */\n.master-div{\n    position: relative;\n    height:100%;\n}\n/*Hello and Search div:  */\n.top-page-div{\n    margin:2px;\n    padding: 2px;\n}\n/* Product's div */\n.product-div{\n    display: inline-block;\n    border: 2px solid rgb(187, 187, 187);\n    box-shadow: 2px 2px 3px rgb(97, 97, 97);\n    background-color: rgba(255, 255, 255, 0.37);\n    margin: 5px;\n    padding: 5px;\n    width: 200px;\n    height:160px;\n    border-radius: 5px;   \n    cursor: pointer; \n}\n/* Product's div when hover*/\n.product-div:hover{\n    display: inline-block;\n    border: 2px solid rgb(211, 211, 211);\n    box-shadow: 2px 2px 3px rgb(97, 97, 97);\n    background-color: rgba(255, 255, 255, 0.678);\n    margin: 5px;\n    padding: 5px;\n    width: 200px;\n    height:160px;\n    border-radius: 5px;   \n    cursor: pointer; \n}\n/* Section - display all products */\n.products-section{\n    overflow-y: auto;\n    height:70%;\n    margin: 20px 5px;\n}\n/* Product's image */\n.product-image{\n    width:100px;\n    height: 100px;\n    -webkit-filter: drop-shadow(2px 2px 3px rgb(29, 5, 14));\n            filter: drop-shadow(2px 2px 3px rgb(29, 5, 14));\n}\n/* Product's text */\n.product-p{\n    color: rgb(51, 20, 20);\n    font-size: 14px;\n    margin: 2px;\n}\n/* Categories div */\n.categories-div{\n    overflow-x: auto;\n    overflow-y: hidden;\n    height: 15%;\n    margin: 5px;\n}\n/* Categories buttons */\n.category-button{\n    margin:2px;\n    color: white;\n    background-image: radial-gradient( rgb(121, 50, 74),  rgb(126, 39, 59));\n    border-radius: 5px;\n}\n/* Section of products and categories together */\n.products-master-div{\n    border: 1px solid rgb(133, 132, 132);\n    width:70%;\n    margin-top: 10px;\n    height:85%;\n    float: left;\n    box-shadow: 3px 3px 5px rgb(48, 48, 48);\n    border-radius: 7px;\n}\n/* Sidebar div */\n.sidebar-div{\n    border: 1px solid rgb(153, 153, 153);\n    float: left;\n    width:25%;\n    margin: 10px;\n    height:85%;\n    overflow-y: auto;\n    box-shadow: 3px 3px 5px rgb(88, 88, 88);\n    border-radius: 7px;\n}\n/* Default search button */\n.search-button{\n    visibility: none;\n}\n/* Add button */\n.add-button{\n    width:30px;\n    height:30px;\n    text-align: center;\n    -webkit-filter: brightness(200%);\n            filter: brightness(200%);\n    margin: 3px;\n    padding-top: 3px;\n}\n/* Add button hover*/\n.add-button:hover{\n    width:35px;\n    height:35px;\n    text-align: center;\n    -webkit-filter: brightness(200%);\n            filter: brightness(200%);\n    cursor: pointer;\n    margin: 3px;\n    padding-top: 1px;\n}\n/* Add button div*/\n.add-button-div{\n    height:40px;\n}\n/* Hello Admin title */\n.hello-class{\n    display: inline-block;\n    position: absolute;\n    left: 55px;\n    padding:2px;\n    margin: 2px;\n    font-family: myTitle;\n    font-size: 35px;\n    color: white;\n}\n/* Search div */\n.search-class{\n    display: inline-block;\n    padding:2px;\n    margin: 2px;\n}\n/* Sorry title- when no products were found on search */\n.sorry{\n    color: white;\n    font-family: myTitle;\n    font-size: 40px;\n    padding: 0;\n    margin: 0;\n}\n/* Text- when no products were found on search */\n.no-result{\n    color: white;\n    padding: 0;\n    margin: 0;\n    font-size: 18px;\n    text-shadow: 2px 2px 3px rgb(24, 6, 14);\n}\n/* Design for screen smaller than 575px */\n@media screen and (max-width: 575px) {\n\n    /* Hello Admin title */\n    .hello-class{\n        margin: auto;\n        padding: 0;\n        font-size: 30px;\n        display: block;\n        width: 80%;\n        position: relative;\n        left: auto;\n    }\n\n    /* Search div */\n    .search-class {\n        display: block;\n        margin: 3px;\n        width: 80%;\n    }\n\n    /* Sidebar div */\n    .sidebar-div{\n        width: 85%;\n        height:280px;\n    }\n\n    /* Section of products and categories together */\n    .products-master-div{\n        width: 85%;\n        margin-left:3px ;\n    }\n\n    /* Categories div */\n    .categories-div{\n        height: 20%;\n        overflow-y: auto;\n    }\n\n    /* Product's div */\n    .product-div{\n        width: 175px;\n    }\n    \n    /* Product's div hover */\n    .product-div:hover{\n        width:175px;\n    }\n\n}\n/* Design for screen larger than 575px and smaller than 991px (including 991px) */\n@media screen and (max-width: 991px) and (min-width: 576px) {\n    /* Sidebar div */\n    .sidebar-div{\n        width: 35%;\n        height: 80%;\n    }\n\n    /* Section of products and categories together */\n    .products-master-div{\n        width: 55%;\n        height: 80%;\n        margin-left: 5px;\n    }\n\n    /* Product's div */\n    .product-div{\n        width: 160px;\n        height: 140px;\n    }\n    \n    /* Product's div hover*/\n    .product-div:hover{\n        width:160px;\n        height: 140px;\n    }\n\n    /* Product's text */\n    .product-p{\n        font-size: 10px;\n    }\n\n    /* Search div */\n    .search-class{\n        padding-left: 100px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi1wYWdlL2FkbWluLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esd0NBQXdDO0FBQ3hDO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjtBQUVBLDBCQUEwQjtBQUMxQjtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCO0FBRUEsa0JBQWtCO0FBQ2xCO0lBQ0kscUJBQXFCO0lBQ3JCLG9DQUFvQztJQUNwQyx1Q0FBdUM7SUFDdkMsMkNBQTJDO0lBQzNDLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUVBLDRCQUE0QjtBQUM1QjtJQUNJLHFCQUFxQjtJQUNyQixvQ0FBb0M7SUFDcEMsdUNBQXVDO0lBQ3ZDLDRDQUE0QztJQUM1QyxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7QUFFQSxtQ0FBbUM7QUFDbkM7SUFDSSxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjtBQUVBLG9CQUFvQjtBQUNwQjtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsdURBQStDO1lBQS9DLCtDQUErQztBQUNuRDtBQUVBLG1CQUFtQjtBQUNuQjtJQUNJLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsV0FBVztBQUNmO0FBRUEsbUJBQW1CO0FBQ25CO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVztBQUNmO0FBRUEsdUJBQXVCO0FBQ3ZCO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWix1RUFBdUU7SUFDdkUsa0JBQWtCO0FBQ3RCO0FBRUEsZ0RBQWdEO0FBQ2hEO0lBQ0ksb0NBQW9DO0lBQ3BDLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLFdBQVc7SUFDWCx1Q0FBdUM7SUFDdkMsa0JBQWtCO0FBQ3RCO0FBRUEsZ0JBQWdCO0FBQ2hCO0lBQ0ksb0NBQW9DO0lBQ3BDLFdBQVc7SUFDWCxTQUFTO0lBQ1QsWUFBWTtJQUNaLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsdUNBQXVDO0lBQ3ZDLGtCQUFrQjtBQUN0QjtBQUVBLDBCQUEwQjtBQUMxQjtJQUNJLGdCQUFnQjtBQUNwQjtBQUVBLGVBQWU7QUFDZjtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGdDQUF3QjtZQUF4Qix3QkFBd0I7SUFDeEIsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjtBQUVBLG9CQUFvQjtBQUNwQjtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGdDQUF3QjtZQUF4Qix3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7QUFFQSxrQkFBa0I7QUFDbEI7SUFDSSxXQUFXO0FBQ2Y7QUFFQSxzQkFBc0I7QUFDdEI7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0lBQ1gsV0FBVztJQUNYLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsWUFBWTtBQUNoQjtBQUVBLGVBQWU7QUFDZjtJQUNJLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsV0FBVztBQUNmO0FBRUEsdURBQXVEO0FBQ3ZEO0lBQ0ksWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsVUFBVTtJQUNWLFNBQVM7QUFDYjtBQUVBLGdEQUFnRDtBQUNoRDtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsU0FBUztJQUNULGVBQWU7SUFDZix1Q0FBdUM7QUFDM0M7QUFFQSx5Q0FBeUM7QUFDekM7O0lBRUksc0JBQXNCO0lBQ3RCO1FBQ0ksWUFBWTtRQUNaLFVBQVU7UUFDVixlQUFlO1FBQ2YsY0FBYztRQUNkLFVBQVU7UUFDVixrQkFBa0I7UUFDbEIsVUFBVTtJQUNkOztJQUVBLGVBQWU7SUFDZjtRQUNJLGNBQWM7UUFDZCxXQUFXO1FBQ1gsVUFBVTtJQUNkOztJQUVBLGdCQUFnQjtJQUNoQjtRQUNJLFVBQVU7UUFDVixZQUFZO0lBQ2hCOztJQUVBLGdEQUFnRDtJQUNoRDtRQUNJLFVBQVU7UUFDVixnQkFBZ0I7SUFDcEI7O0lBRUEsbUJBQW1CO0lBQ25CO1FBQ0ksV0FBVztRQUNYLGdCQUFnQjtJQUNwQjs7SUFFQSxrQkFBa0I7SUFDbEI7UUFDSSxZQUFZO0lBQ2hCOztJQUVBLHdCQUF3QjtJQUN4QjtRQUNJLFdBQVc7SUFDZjs7QUFFSjtBQUVBLGlGQUFpRjtBQUNqRjtJQUNJLGdCQUFnQjtJQUNoQjtRQUNJLFVBQVU7UUFDVixXQUFXO0lBQ2Y7O0lBRUEsZ0RBQWdEO0lBQ2hEO1FBQ0ksVUFBVTtRQUNWLFdBQVc7UUFDWCxnQkFBZ0I7SUFDcEI7O0lBRUEsa0JBQWtCO0lBQ2xCO1FBQ0ksWUFBWTtRQUNaLGFBQWE7SUFDakI7O0lBRUEsdUJBQXVCO0lBQ3ZCO1FBQ0ksV0FBVztRQUNYLGFBQWE7SUFDakI7O0lBRUEsbUJBQW1CO0lBQ25CO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQSxlQUFlO0lBQ2Y7UUFDSSxtQkFBbUI7SUFDdkI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4tcGFnZS9hZG1pbi1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qIFRoZSBjb250YWluZXIgZGl2IG9mIHRoZSBjb21wb25lbnQ6ICovXG4ubWFzdGVyLWRpdntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OjEwMCU7XG59XG5cbi8qSGVsbG8gYW5kIFNlYXJjaCBkaXY6ICAqL1xuLnRvcC1wYWdlLWRpdntcbiAgICBtYXJnaW46MnB4O1xuICAgIHBhZGRpbmc6IDJweDtcbn1cblxuLyogUHJvZHVjdCdzIGRpdiAqL1xuLnByb2R1Y3QtZGl2e1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTg3LCAxODcsIDE4Nyk7XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAzcHggcmdiKDk3LCA5NywgOTcpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNyk7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6MTYwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4OyAgIFxuICAgIGN1cnNvcjogcG9pbnRlcjsgXG59XG5cbi8qIFByb2R1Y3QncyBkaXYgd2hlbiBob3ZlciovXG4ucHJvZHVjdC1kaXY6aG92ZXJ7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyMTEsIDIxMSwgMjExKTtcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDNweCByZ2IoOTcsIDk3LCA5Nyk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY3OCk7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6MTYwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4OyAgIFxuICAgIGN1cnNvcjogcG9pbnRlcjsgXG59XG5cbi8qIFNlY3Rpb24gLSBkaXNwbGF5IGFsbCBwcm9kdWN0cyAqL1xuLnByb2R1Y3RzLXNlY3Rpb257XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBoZWlnaHQ6NzAlO1xuICAgIG1hcmdpbjogMjBweCA1cHg7XG59XG5cbi8qIFByb2R1Y3QncyBpbWFnZSAqL1xuLnByb2R1Y3QtaW1hZ2V7XG4gICAgd2lkdGg6MTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDJweCAycHggM3B4IHJnYigyOSwgNSwgMTQpKTtcbn1cblxuLyogUHJvZHVjdCdzIHRleHQgKi9cbi5wcm9kdWN0LXB7XG4gICAgY29sb3I6IHJnYig1MSwgMjAsIDIwKTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luOiAycHg7XG59XG5cbi8qIENhdGVnb3JpZXMgZGl2ICovXG4uY2F0ZWdvcmllcy1kaXZ7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gICAgaGVpZ2h0OiAxNSU7XG4gICAgbWFyZ2luOiA1cHg7XG59XG5cbi8qIENhdGVnb3JpZXMgYnV0dG9ucyAqL1xuLmNhdGVnb3J5LWJ1dHRvbntcbiAgICBtYXJnaW46MnB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoIHJnYigxMjEsIDUwLCA3NCksICByZ2IoMTI2LCAzOSwgNTkpKTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi8qIFNlY3Rpb24gb2YgcHJvZHVjdHMgYW5kIGNhdGVnb3JpZXMgdG9nZXRoZXIgKi9cbi5wcm9kdWN0cy1tYXN0ZXItZGl2e1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMzMsIDEzMiwgMTMyKTtcbiAgICB3aWR0aDo3MCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBoZWlnaHQ6ODUlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGJveC1zaGFkb3c6IDNweCAzcHggNXB4IHJnYig0OCwgNDgsIDQ4KTtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG59XG5cbi8qIFNpZGViYXIgZGl2ICovXG4uc2lkZWJhci1kaXZ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE1MywgMTUzLCAxNTMpO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOjI1JTtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgaGVpZ2h0Ojg1JTtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIGJveC1zaGFkb3c6IDNweCAzcHggNXB4IHJnYig4OCwgODgsIDg4KTtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG59XG5cbi8qIERlZmF1bHQgc2VhcmNoIGJ1dHRvbiAqL1xuLnNlYXJjaC1idXR0b257XG4gICAgdmlzaWJpbGl0eTogbm9uZTtcbn0gXG5cbi8qIEFkZCBidXR0b24gKi9cbi5hZGQtYnV0dG9ue1xuICAgIHdpZHRoOjMwcHg7XG4gICAgaGVpZ2h0OjMwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygyMDAlKTtcbiAgICBtYXJnaW46IDNweDtcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xufVxuXG4vKiBBZGQgYnV0dG9uIGhvdmVyKi9cbi5hZGQtYnV0dG9uOmhvdmVye1xuICAgIHdpZHRoOjM1cHg7XG4gICAgaGVpZ2h0OjM1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygyMDAlKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luOiAzcHg7XG4gICAgcGFkZGluZy10b3A6IDFweDtcbn1cblxuLyogQWRkIGJ1dHRvbiBkaXYqL1xuLmFkZC1idXR0b24tZGl2e1xuICAgIGhlaWdodDo0MHB4O1xufVxuXG4vKiBIZWxsbyBBZG1pbiB0aXRsZSAqL1xuLmhlbGxvLWNsYXNze1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTVweDtcbiAgICBwYWRkaW5nOjJweDtcbiAgICBtYXJnaW46IDJweDtcbiAgICBmb250LWZhbWlseTogbXlUaXRsZTtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4vKiBTZWFyY2ggZGl2ICovXG4uc2VhcmNoLWNsYXNze1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOjJweDtcbiAgICBtYXJnaW46IDJweDtcbn1cblxuLyogU29ycnkgdGl0bGUtIHdoZW4gbm8gcHJvZHVjdHMgd2VyZSBmb3VuZCBvbiBzZWFyY2ggKi9cbi5zb3JyeXtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6IG15VGl0bGU7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4vKiBUZXh0LSB3aGVuIG5vIHByb2R1Y3RzIHdlcmUgZm91bmQgb24gc2VhcmNoICovXG4ubm8tcmVzdWx0e1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggM3B4IHJnYigyNCwgNiwgMTQpO1xufVxuXG4vKiBEZXNpZ24gZm9yIHNjcmVlbiBzbWFsbGVyIHRoYW4gNTc1cHggKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XG5cbiAgICAvKiBIZWxsbyBBZG1pbiB0aXRsZSAqL1xuICAgIC5oZWxsby1jbGFzc3tcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGxlZnQ6IGF1dG87XG4gICAgfVxuXG4gICAgLyogU2VhcmNoIGRpdiAqL1xuICAgIC5zZWFyY2gtY2xhc3Mge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luOiAzcHg7XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgfVxuXG4gICAgLyogU2lkZWJhciBkaXYgKi9cbiAgICAuc2lkZWJhci1kaXZ7XG4gICAgICAgIHdpZHRoOiA4NSU7XG4gICAgICAgIGhlaWdodDoyODBweDtcbiAgICB9XG5cbiAgICAvKiBTZWN0aW9uIG9mIHByb2R1Y3RzIGFuZCBjYXRlZ29yaWVzIHRvZ2V0aGVyICovXG4gICAgLnByb2R1Y3RzLW1hc3Rlci1kaXZ7XG4gICAgICAgIHdpZHRoOiA4NSU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OjNweCA7XG4gICAgfVxuXG4gICAgLyogQ2F0ZWdvcmllcyBkaXYgKi9cbiAgICAuY2F0ZWdvcmllcy1kaXZ7XG4gICAgICAgIGhlaWdodDogMjAlO1xuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIH1cblxuICAgIC8qIFByb2R1Y3QncyBkaXYgKi9cbiAgICAucHJvZHVjdC1kaXZ7XG4gICAgICAgIHdpZHRoOiAxNzVweDtcbiAgICB9XG4gICAgXG4gICAgLyogUHJvZHVjdCdzIGRpdiBob3ZlciAqL1xuICAgIC5wcm9kdWN0LWRpdjpob3ZlcntcbiAgICAgICAgd2lkdGg6MTc1cHg7XG4gICAgfVxuXG59XG5cbi8qIERlc2lnbiBmb3Igc2NyZWVuIGxhcmdlciB0aGFuIDU3NXB4IGFuZCBzbWFsbGVyIHRoYW4gOTkxcHggKGluY2x1ZGluZyA5OTFweCkgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSBhbmQgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgICAvKiBTaWRlYmFyIGRpdiAqL1xuICAgIC5zaWRlYmFyLWRpdntcbiAgICAgICAgd2lkdGg6IDM1JTtcbiAgICAgICAgaGVpZ2h0OiA4MCU7XG4gICAgfVxuXG4gICAgLyogU2VjdGlvbiBvZiBwcm9kdWN0cyBhbmQgY2F0ZWdvcmllcyB0b2dldGhlciAqL1xuICAgIC5wcm9kdWN0cy1tYXN0ZXItZGl2e1xuICAgICAgICB3aWR0aDogNTUlO1xuICAgICAgICBoZWlnaHQ6IDgwJTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICB9XG5cbiAgICAvKiBQcm9kdWN0J3MgZGl2ICovXG4gICAgLnByb2R1Y3QtZGl2e1xuICAgICAgICB3aWR0aDogMTYwcHg7XG4gICAgICAgIGhlaWdodDogMTQwcHg7XG4gICAgfVxuICAgIFxuICAgIC8qIFByb2R1Y3QncyBkaXYgaG92ZXIqL1xuICAgIC5wcm9kdWN0LWRpdjpob3ZlcntcbiAgICAgICAgd2lkdGg6MTYwcHg7XG4gICAgICAgIGhlaWdodDogMTQwcHg7XG4gICAgfVxuXG4gICAgLyogUHJvZHVjdCdzIHRleHQgKi9cbiAgICAucHJvZHVjdC1we1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgfVxuXG4gICAgLyogU2VhcmNoIGRpdiAqL1xuICAgIC5zZWFyY2gtY2xhc3N7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTAwcHg7XG4gICAgfVxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/admin-page/admin-page.component.ts": 
        /*!***************************************************************!*\
          !*** ./src/app/components/admin-page/admin-page.component.ts ***!
          \***************************************************************/
        /*! exports provided: AdminPageComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPageComponent", function () { return AdminPageComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_models_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/product */ "./src/app/models/product.ts");
            /* harmony import */ var src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/categories.service */ "./src/app/services/categories.service.ts");
            /* harmony import */ var src_app_services_products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/products.service */ "./src/app/services/products.service.ts");
            /* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/admin.service */ "./src/app/services/admin.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var ng2_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-redux */ "./node_modules/ng2-redux/lib/index.js");
            /* harmony import */ var ng2_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(ng2_redux__WEBPACK_IMPORTED_MODULE_7__);
            /* harmony import */ var src_app_redux_actionType__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/redux/actionType */ "./src/app/redux/actionType.ts");
            var AdminPageComponent = /** @class */ (function () {
                function AdminPageComponent(categoriesService, productsService, adminService, router, redux) {
                    this.categoriesService = categoriesService;
                    this.productsService = productsService;
                    this.adminService = adminService;
                    this.router = router;
                    this.redux = redux;
                    this.product = new src_app_models_product__WEBPACK_IMPORTED_MODULE_2__["Product"]();
                    this.productToUpdate = new src_app_models_product__WEBPACK_IMPORTED_MODULE_2__["Product"]();
                    this.showAdd = false;
                    this.showUpdate = false;
                    this.noSearchResult = false;
                }
                // Invoked at the beginning of the component's lifecycle:
                AdminPageComponent.prototype.ngOnInit = function () {
                    // if admin logged in:
                    if (this.isAdminLoggedIn()) {
                        this.subscribeToStore();
                        this.getCategories();
                        this.getAdmin();
                    }
                    // if not:
                    else {
                        this.logout();
                    }
                };
                // Get admin:
                AdminPageComponent.prototype.getAdmin = function () {
                    var _this = this;
                    this.adminService.getAdmin()
                        .subscribe(function (admin) {
                        var action = { type: src_app_redux_actionType__WEBPACK_IMPORTED_MODULE_8__["ActionType"].GetAdmin, payload: admin };
                        _this.redux.dispatch(action);
                    }, function (err) { return alert(err.message); });
                };
                // Subscribe to store:
                AdminPageComponent.prototype.subscribeToStore = function () {
                    var _this = this;
                    this.unsubscribe = this.redux.subscribe(function () {
                        _this.products = _this.redux.getState().products;
                        _this.admin = _this.redux.getState().admin;
                        _this.categories = _this.redux.getState().categories;
                    });
                };
                // Get all categories
                AdminPageComponent.prototype.getCategories = function () {
                    if (this.redux.getState().categories.length === 0) {
                        this.categoriesService.getAllCategories();
                    }
                    else {
                        this.categories = this.redux.getState().categories;
                    }
                };
                // Check if admin is logged in:
                AdminPageComponent.prototype.isAdminLoggedIn = function () {
                    return sessionStorage.getItem("admin") !== null;
                };
                // Logout admin:
                AdminPageComponent.prototype.logout = function () {
                    sessionStorage.clear();
                    var action = { type: src_app_redux_actionType__WEBPACK_IMPORTED_MODULE_8__["ActionType"].LogOut, payload: undefined };
                    this.redux.dispatch(action);
                    this.router.navigate(["/home"]);
                };
                // Unsubscribe to store - Invoked a moment before the component's lifecycle ends:
                AdminPageComponent.prototype.ngOnDestroy = function () {
                    if (this.unsubscribe) {
                        this.unsubscribe();
                    }
                };
                // Get all products by category:
                AdminPageComponent.prototype.getAllProductsByCategory = function (_id) {
                    this.noSearchResult = false;
                    this.productsService.getAllProductsByCategory(_id);
                };
                // Replace displays - hides "update" and reveals "add":
                AdminPageComponent.prototype.addProduct = function () {
                    this.showUpdate = false;
                    this.showAdd = true;
                };
                // Replace displays - hides "add" and reveals "update":
                AdminPageComponent.prototype.updateProduct = function (prod) {
                    this.showAdd = false;
                    this.productToUpdate = Object.assign({}, prod);
                    this.showUpdate = true;
                };
                // Receive data from child component: add
                AdminPageComponent.prototype.receiveCancelAdding = function ($event) {
                    this.showAdd = $event;
                };
                // Receive data from child component: update
                AdminPageComponent.prototype.receiveCancelUpdate = function ($event) {
                    this.showUpdate = $event;
                };
                // Receive data from child component: search-product
                AdminPageComponent.prototype.receiveNoSearchResult = function ($event) {
                    this.noSearchResult = $event;
                };
                return AdminPageComponent;
            }());
            AdminPageComponent.ctorParameters = function () { return [
                { type: src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_3__["CategoriesService"] },
                { type: src_app_services_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"] },
                { type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
                { type: ng2_redux__WEBPACK_IMPORTED_MODULE_7__["NgRedux"] }
            ]; };
            AdminPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-admin-page',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin-page/admin-page.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-page.component.css */ "./src/app/components/admin-page/admin-page.component.css")).default]
                })
            ], AdminPageComponent);
            /***/ 
        }),
        /***/ "./src/app/components/cart/cart.component.css": 
        /*!****************************************************!*\
          !*** ./src/app/components/cart/cart.component.css ***!
          \****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/* Cart's div */\n.shopping-list-div{\n    height: 80%;\n}\n/* Shopping list */\n.shopping-list{\n    font-size: 14px;\n    display: inline-block;\n    color:white;\n    text-shadow: 1px 1px 2px rgb(0, 0, 0);\n}\n/* Back to shop button */\n.back-button{\n    color: white;\n    text-decoration: underline;\n}\n/* Trash icon */\n.trash-icon{\n    width: 25px;\n    height: 25px;\n    -webkit-filter:brightness(400%) ;\n            filter:brightness(400%) ;\n}\n/* Trash icon hover */\n.trash-icon:hover{\n    width: 28px;\n    height: 28px;\n    -webkit-filter:brightness(500%) ;\n            filter:brightness(500%) ;\n}\n/* td where trash icon is */\n.trash-td{\n    width: 40px;\n    height: 40px;\n}\n/* table, tr, td design: */\ntable, tr, td{\n    margin:5px;\n    padding: 2px;\n    text-align: center;\n}\n/* Section where all the carts items are at */\n.cart-items-div{\n    text-align: center;\n    overflow-y: auto;\n    height:75%;\n    box-shadow: inset 0 0 20px rgba(37, 9, 21, 0.705);\n    background-color: rgba(46, 46, 46, 0.075);\n    border-radius: 5px;\n    padding: 3px;\n}\n/* Cart title */\n.cart-title{\n    color: white;\n    font-family: myTitle;\n    font-size: 30px;\n    padding: 0;\n    margin: 0;\n    text-shadow: 1px 1px 2px rgb(46, 45, 45);\n}\n/* Bottom div where buttons and total amount are at */\n.bottom-div{\n    position: absolute;\n    height:22%;\n    width: 20%;\n    padding: 3px;\n    margin-top: 5px;\n    margin-left: 5px;\n}\n/* Product image design  */\n.product-image{\n    width: 40px;\n    height: 40px;\n    -webkit-filter: drop-shadow(2px 2px 3px rgb(29, 5, 14));\n            filter: drop-shadow(2px 2px 3px rgb(29, 5, 14));\n}\n/* Total amount design */\n.total-p{\n    font-size:28px;\n    margin:2px;\n    font-family: myTitle;\n    color: white;\n    text-shadow: 2px 2px 3px rgb(20, 5, 10);\n}\n/* Buttons design */\n.cart-button{\n    margin:0;\n    color: white;\n    background-image: radial-gradient( rgb(121, 50, 74),  rgb(126, 39, 59));\n    border-radius: 5px;\n}\n/* Buttons desabled design */\n.cart-button:disabled{\n    margin:0;\n    color: rgb(146, 146, 146);\n    background-image: radial-gradient( rgb(121, 93, 101), rgb(88, 54, 63));\n    border-radius: 5px;\n}\n/* Design for screen smaller than 575px */\n@media screen and (max-width: 575px) {\n\n    /* Bottom div where buttons and total amount are at */\n    .bottom-div{\n        position: relative;\n        height:20%;\n        width: 90%;\n    }\n}\n/* Design for screen larger than 575px and smaller than 991px (including 991px) */\n@media screen and (max-width: 991px) and (min-width: 576px) {\n\n    /* Bottom div where buttons and total amount are at */\n    .bottom-div{\n        position: relative;\n        height:20%;\n        width: 80%;\n    }\n}\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJ0L2NhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxlQUFlO0FBQ2Y7SUFDSSxXQUFXO0FBQ2Y7QUFFQSxrQkFBa0I7QUFDbEI7SUFDSSxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxxQ0FBcUM7QUFDekM7QUFFQSx3QkFBd0I7QUFDeEI7SUFDSSxZQUFZO0lBQ1osMEJBQTBCO0FBQzlCO0FBRUEsZUFBZTtBQUNmO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixnQ0FBd0I7WUFBeEIsd0JBQXdCO0FBQzVCO0FBRUEscUJBQXFCO0FBQ3JCO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixnQ0FBd0I7WUFBeEIsd0JBQXdCO0FBQzVCO0FBRUEsMkJBQTJCO0FBQzNCO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFFQSwwQkFBMEI7QUFDMUI7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGtCQUFrQjtBQUN0QjtBQUVBLDZDQUE2QztBQUM3QztJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGlEQUFpRDtJQUNqRCx5Q0FBeUM7SUFDekMsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7QUFFQSxlQUFlO0FBQ2Y7SUFDSSxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixVQUFVO0lBQ1YsU0FBUztJQUNULHdDQUF3QztBQUM1QztBQUVBLHFEQUFxRDtBQUNyRDtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsVUFBVTtJQUNWLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBRUEsMEJBQTBCO0FBQzFCO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWix1REFBK0M7WUFBL0MsK0NBQStDO0FBQ25EO0FBRUEsd0JBQXdCO0FBQ3hCO0lBQ0ksY0FBYztJQUNkLFVBQVU7SUFDVixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLHVDQUF1QztBQUMzQztBQUVBLG1CQUFtQjtBQUNuQjtJQUNJLFFBQVE7SUFDUixZQUFZO0lBQ1osdUVBQXVFO0lBQ3ZFLGtCQUFrQjtBQUN0QjtBQUVBLDRCQUE0QjtBQUM1QjtJQUNJLFFBQVE7SUFDUix5QkFBeUI7SUFDekIsc0VBQXNFO0lBQ3RFLGtCQUFrQjtBQUN0QjtBQUVBLHlDQUF5QztBQUN6Qzs7SUFFSSxxREFBcUQ7SUFDckQ7UUFDSSxrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLFVBQVU7SUFDZDtBQUNKO0FBRUEsaUZBQWlGO0FBQ2pGOztJQUVJLHFEQUFxRDtJQUNyRDtRQUNJLGtCQUFrQjtRQUNsQixVQUFVO1FBQ1YsVUFBVTtJQUNkO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NhcnQvY2FydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ2FydCdzIGRpdiAqL1xuLnNob3BwaW5nLWxpc3QtZGl2e1xuICAgIGhlaWdodDogODAlO1xufVxuXG4vKiBTaG9wcGluZyBsaXN0ICovXG4uc2hvcHBpbmctbGlzdHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGNvbG9yOndoaXRlO1xuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCByZ2IoMCwgMCwgMCk7XG59XG5cbi8qIEJhY2sgdG8gc2hvcCBidXR0b24gKi9cbi5iYWNrLWJ1dHRvbntcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi8qIFRyYXNoIGljb24gKi9cbi50cmFzaC1pY29ue1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgICBmaWx0ZXI6YnJpZ2h0bmVzcyg0MDAlKSA7XG59XG5cbi8qIFRyYXNoIGljb24gaG92ZXIgKi9cbi50cmFzaC1pY29uOmhvdmVye1xuICAgIHdpZHRoOiAyOHB4O1xuICAgIGhlaWdodDogMjhweDtcbiAgICBmaWx0ZXI6YnJpZ2h0bmVzcyg1MDAlKSA7XG59XG5cbi8qIHRkIHdoZXJlIHRyYXNoIGljb24gaXMgKi9cbi50cmFzaC10ZHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG59XG5cbi8qIHRhYmxlLCB0ciwgdGQgZGVzaWduOiAqL1xudGFibGUsIHRyLCB0ZHtcbiAgICBtYXJnaW46NXB4O1xuICAgIHBhZGRpbmc6IDJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8qIFNlY3Rpb24gd2hlcmUgYWxsIHRoZSBjYXJ0cyBpdGVtcyBhcmUgYXQgKi9cbi5jYXJ0LWl0ZW1zLWRpdntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBoZWlnaHQ6NzUlO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAyMHB4IHJnYmEoMzcsIDksIDIxLCAwLjcwNSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0NiwgNDYsIDQ2LCAwLjA3NSk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDNweDtcbn1cblxuLyogQ2FydCB0aXRsZSAqL1xuLmNhcnQtdGl0bGV7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtZmFtaWx5OiBteVRpdGxlO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggcmdiKDQ2LCA0NSwgNDUpO1xufVxuXG4vKiBCb3R0b20gZGl2IHdoZXJlIGJ1dHRvbnMgYW5kIHRvdGFsIGFtb3VudCBhcmUgYXQgKi9cbi5ib3R0b20tZGl2e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6MjIlO1xuICAgIHdpZHRoOiAyMCU7XG4gICAgcGFkZGluZzogM3B4O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4vKiBQcm9kdWN0IGltYWdlIGRlc2lnbiAgKi9cbi5wcm9kdWN0LWltYWdle1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDJweCAycHggM3B4IHJnYigyOSwgNSwgMTQpKTtcbn1cblxuLyogVG90YWwgYW1vdW50IGRlc2lnbiAqL1xuLnRvdGFsLXB7XG4gICAgZm9udC1zaXplOjI4cHg7XG4gICAgbWFyZ2luOjJweDtcbiAgICBmb250LWZhbWlseTogbXlUaXRsZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggM3B4IHJnYigyMCwgNSwgMTApO1xufVxuXG4vKiBCdXR0b25zIGRlc2lnbiAqL1xuLmNhcnQtYnV0dG9ue1xuICAgIG1hcmdpbjowO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoIHJnYigxMjEsIDUwLCA3NCksICByZ2IoMTI2LCAzOSwgNTkpKTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi8qIEJ1dHRvbnMgZGVzYWJsZWQgZGVzaWduICovXG4uY2FydC1idXR0b246ZGlzYWJsZWR7XG4gICAgbWFyZ2luOjA7XG4gICAgY29sb3I6IHJnYigxNDYsIDE0NiwgMTQ2KTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoIHJnYigxMjEsIDkzLCAxMDEpLCByZ2IoODgsIDU0LCA2MykpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLyogRGVzaWduIGZvciBzY3JlZW4gc21hbGxlciB0aGFuIDU3NXB4ICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xuXG4gICAgLyogQm90dG9tIGRpdiB3aGVyZSBidXR0b25zIGFuZCB0b3RhbCBhbW91bnQgYXJlIGF0ICovXG4gICAgLmJvdHRvbS1kaXZ7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgaGVpZ2h0OjIwJTtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICB9XG59XG5cbi8qIERlc2lnbiBmb3Igc2NyZWVuIGxhcmdlciB0aGFuIDU3NXB4IGFuZCBzbWFsbGVyIHRoYW4gOTkxcHggKGluY2x1ZGluZyA5OTFweCkgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSBhbmQgKG1pbi13aWR0aDogNTc2cHgpIHtcblxuICAgIC8qIEJvdHRvbSBkaXYgd2hlcmUgYnV0dG9ucyBhbmQgdG90YWwgYW1vdW50IGFyZSBhdCAqL1xuICAgIC5ib3R0b20tZGl2e1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGhlaWdodDoyMCU7XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgfVxufVxuXG5cblxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/components/cart/cart.component.ts": 
        /*!***************************************************!*\
          !*** ./src/app/components/cart/cart.component.ts ***!
          \***************************************************/
        /*! exports provided: CartComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function () { return CartComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var ng2_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-redux */ "./node_modules/ng2-redux/lib/index.js");
            /* harmony import */ var ng2_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(ng2_redux__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */ var src_app_services_carts_items_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/carts-items.service */ "./src/app/services/carts-items.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_redux_actionType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/redux/actionType */ "./src/app/redux/actionType.ts");
            var CartComponent = /** @class */ (function () {
                function CartComponent(redux, cartsItemsService, router) {
                    this.redux = redux;
                    this.cartsItemsService = cartsItemsService;
                    this.router = router;
                    this.beforeOrder = true;
                    this.buttonDisabled = true;
                }
                // Invoked at the beginning of the component's lifecycle:
                CartComponent.prototype.ngOnInit = function () {
                    this.subscribeToStore();
                };
                // Subscribe to store:
                CartComponent.prototype.subscribeToStore = function () {
                    var _this = this;
                    this.unsubscribe = this.redux.subscribe(function () {
                        _this.cart = _this.redux.getState().cart;
                        _this.cartItem = _this.redux.getState().cartItem;
                        _this.cartsItems = _this.redux.getState().cartsItems;
                        _this.calculateQuantityToPrice();
                        _this.totalAmount = _this.calculateTotalCartAmount();
                        if (_this.totalAmount === 0) {
                            _this.buttonDisabled = true;
                        }
                        else if (_this.totalAmount > 0) {
                            _this.buttonDisabled = false;
                        }
                    });
                };
                // Calculates (price * quantity) per each cart-Item:
                CartComponent.prototype.calculateQuantityToPrice = function () {
                    for (var i = 0; i < this.cartsItems.length; i++) {
                        var quantity = this.cartsItems[i].quantity;
                        var pricePerOne = this.cartsItems[i].product.price;
                        this.cartsItems[i].price = quantity * pricePerOne;
                    }
                };
                // Calculate total amount to pay:
                CartComponent.prototype.calculateTotalCartAmount = function () {
                    var sum = 0;
                    for (var i = 0; i < this.cartsItems.length; i++) {
                        sum += this.cartsItems[i].price;
                    }
                    return sum;
                };
                // Remove one cart-item from the cart:
                CartComponent.prototype.removeCartItem = function (_id) {
                    this.cartsItemsService.deleteOneCartItem(_id);
                };
                //Rremove all cart-items from the cart:
                CartComponent.prototype.removeAllCartsItems = function () {
                    this.cartsItemsService.deleteAllCartsItems(this.cart._id);
                };
                // Continue to "Order" page:
                CartComponent.prototype.order = function () {
                    var action = { type: src_app_redux_actionType__WEBPACK_IMPORTED_MODULE_5__["ActionType"].SaveTotalAmount, payload: this.totalAmount };
                    this.redux.dispatch(action);
                    this.router.navigate(["/order-page/" + this.cart._id]);
                };
                // Unsubscribe to store - Invoked a moment before the component's lifecycle ends:
                CartComponent.prototype.ngOnDestroy = function () {
                    this.unsubscribe();
                };
                // Back to shopping page:
                CartComponent.prototype.goBackToShoppingPage = function () {
                    this.router.navigate(["/shopping-page/" + this.cart.customer._id]);
                };
                return CartComponent;
            }());
            CartComponent.ctorParameters = function () { return [
                { type: ng2_redux__WEBPACK_IMPORTED_MODULE_2__["NgRedux"] },
                { type: src_app_services_carts_items_service__WEBPACK_IMPORTED_MODULE_3__["CartsItemsService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], CartComponent.prototype, "cartsItems", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], CartComponent.prototype, "totalAmount", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], CartComponent.prototype, "beforeOrder", void 0);
            CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-cart',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cart/cart.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cart.component.css */ "./src/app/components/cart/cart.component.css")).default]
                })
            ], CartComponent);
            /***/ 
        }),
        /***/ "./src/app/components/home/home.component.css": 
        /*!****************************************************!*\
          !*** ./src/app/components/home/home.component.css ***!
          \****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/* Welcome div- introduction to website */\n.welcome-div{\n    display: inline-block;\n    width:40%;\n    height:100%;\n    text-align: center;\n    vertical-align: top;\n    margin: auto 10px;\n}\n/* Login div */\n.login{\n    margin: auto 10px;\n    display: inline-block;\n    width:25%;\n    height:100%;\n    text-align: left;\n    vertical-align: top;\n}\n/* Right side div */\n.panelC{\n    display: inline-block;\n    width:25%;\n    height:100%;\n    vertical-align: top;\n    position: relative;\n    right: 0;\n    margin: auto ;\n}\n/* Welcome title design */\n.welcome-title{\n    color: white;\n    font-family: myTitle;\n    font-size: 50px;\n    text-shadow: 2px 2px 3px rgb(36, 9, 19);\n}\n/* Welcome text design */\n.welcome-p{\n    color: white;\n}\n/* Hello customer div */\n.hello-customer-div{\n    margin-top: 40px;\n    width: 100%;\n    text-align: center;\n}\n/* Hello customer title */\n.hello-customer{\n    color: white;\n    font-family: myTitle;\n    font-size: 45px;\n}\n/* Divider image */\n.divider{\n    width: 70%;\n    height: 50px;\n    opacity: 0.7;\n    -webkit-filter: invert(100%) drop-shadow(2px 2px 5px rgb(29, 5, 14));\n            filter: invert(100%) drop-shadow(2px 2px 5px rgb(29, 5, 14));\n    margin: 3px auto;\n}\n/* Image under Welcome section */\n.image{\n    width:60%;\n    display: inline-block;\n    -webkit-filter: drop-shadow(2px 2px 3px rgb(29, 5, 14));\n            filter: drop-shadow(2px 2px 3px rgb(29, 5, 14));\n}\n/* Total Orders and Products count div- before logged in*/\n.total-count-div{\n    position: absolute;\n    display: block;\n    top: 300px;\n    left: 15px;\n    width: 90%;\n}\n/* Total Orders and Products count div- when customer is logged in*/\n.total-count-div-customer{\n    position: absolute;\n    display: block;\n    top: 300px;\n    left: 15px;\n    width: 90%;\n}\n/* Total Orders and Products count text design*/\n.total-count{\n    color: white; \n    padding: 0;\n    margin: 0;\n    font-family: totalCount;\n    font-size: 24px;\n}\n/* Div for different customer's shopping statuses */\n.panelC-top-div{\n    width: 75%;\n    position: absolute;\n    top: 40px;\n    left: 30px;\n    text-align: center;\n    display: block;\n}\n/* Wrapping div for \"panelC-top-div\" */\n.panelC-above-count{\n    display: block;\n}\n/* Button design */\nbutton{\n    margin:5px;\n    color: white;\n    background-image: radial-gradient( rgb(121, 50, 74),  rgb(126, 39, 59));\n    border-radius: 5px;\n}\n/* Right hand side - welcome title */\n.panelC-title{\n    color: white;\n    font-family: myTitle;\n    font-size: 45px;\n    margin: 0;\n    padding: 0;\n}\n/* Right hand side - welcome back title */\n.welcome-back-title{\n    color: white;\n    font-family: myTitle;\n    font-size: 32px;\n    margin: 0;\n    padding: 0;\n}\n/* Text for customer's shopping statuses */\n.panelC-text{\n    color: white;\n    padding: 0;\n    margin: 0;\n    font-size: 14px;\n}\n/* Design for screen smaller than 575px */\n@media screen and (max-width: 575px) {\n    \n    /* Top divs of the page */\n    .login, .welcome-div, .panelC {\n        float: none;\n        width: 85%;\n        margin-top: 5px;\n        display: block;\n    }\n\n    /* Total count div - before customer logged in */\n    .total-count-div{\n        width: 100%; \n        display: block;\n        bottom: 170px;\n        margin: auto;\n    }\n\n    /* Total count div - after customer logged in */\n    .total-count-div-customer{\n        width:100%;\n        bottom: 170px;\n    }\n\n    /* Welcome title design */\n    .welcome-title{\n        font-size: 40px;   \n    }\n\n    /* Hello customer title */\n    .hello-customer{\n        font-size: 30px;\n        text-align: center;\n    }\n\n    /* Divider image */\n    .divider{\n        display: none;\n    }\n\n    /* Hello customer div */\n    .hello-customer-div{\n        width: 100%;\n    }\n\n    /* Total Orders and Products count text design*/\n    .total-count{\n        font-size: 17px;\n        margin: 5px;\n    }\n\n    /* Image under Welcome section */\n    .image{\n        display: block;\n        margin: auto;\n    }\n\n    /* Div for different customer's shopping statuses */\n    .panelC-top-div{\n        display: block;\n    }\n}\n/* Design for screen larger than 575px and smaller than 991px (including 991px) */\n@media screen and (max-width: 991px) and (min-width: 576px) {\n    \n    /* Login div */\n    .login {\n        float: left;\n        width: 25%;\n        margin-top: 5px;\n        margin-left: 10px;\n    }\n\n    /* Welcome div- introduction to website */\n    .welcome-div{\n        width: 40%;\n        display: inline-block;\n    }\n\n    /* Text for customer's shopping statuses */\n    .panelC-text{\n        font-size: 12px;\n    }\n\n    /* Right side div */\n    .panelC{\n        width: 25%;\n        height: 90%;\n        display: inline-block;\n    }\n\n    /* Total Orders and Products count text design*/\n    .total-count{\n        font-size: 16px;\n    }\n\n    /* Total Orders and Products count div- when customer is logged in*/\n    .total-count-div-customer{\n        width:100%;\n    }\n\n    /* Button design */\n    button{\n        font-size: 14px;\n    }\n\n    /* Right hand side - welcome title */\n    .panelC-title{\n        font-size: 30px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5Q0FBeUM7QUFDekM7SUFDSSxxQkFBcUI7SUFDckIsU0FBUztJQUNULFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjtBQUVBLGNBQWM7QUFDZDtJQUNJLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsU0FBUztJQUNULFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCO0FBRUEsbUJBQW1CO0FBQ25CO0lBQ0kscUJBQXFCO0lBQ3JCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsYUFBYTtBQUNqQjtBQUVBLHlCQUF5QjtBQUN6QjtJQUNJLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLHVDQUF1QztBQUMzQztBQUVBLHdCQUF3QjtBQUN4QjtJQUNJLFlBQVk7QUFDaEI7QUFFQSx1QkFBdUI7QUFDdkI7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGtCQUFrQjtBQUN0QjtBQUVBLHlCQUF5QjtBQUN6QjtJQUNJLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsZUFBZTtBQUNuQjtBQUVBLGtCQUFrQjtBQUNsQjtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osWUFBWTtJQUNaLG9FQUE0RDtZQUE1RCw0REFBNEQ7SUFDNUQsZ0JBQWdCO0FBQ3BCO0FBRUEsZ0NBQWdDO0FBQ2hDO0lBQ0ksU0FBUztJQUNULHFCQUFxQjtJQUNyQix1REFBK0M7WUFBL0MsK0NBQStDO0FBQ25EO0FBRUEseURBQXlEO0FBQ3pEO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxVQUFVO0lBQ1YsVUFBVTtJQUNWLFVBQVU7QUFDZDtBQUVBLG1FQUFtRTtBQUNuRTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsVUFBVTtJQUNWLFVBQVU7SUFDVixVQUFVO0FBQ2Q7QUFFQSwrQ0FBK0M7QUFDL0M7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLFNBQVM7SUFDVCx1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjtBQUVBLG1EQUFtRDtBQUNuRDtJQUNJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjtBQUVBLHNDQUFzQztBQUN0QztJQUNJLGNBQWM7QUFDbEI7QUFFQSxrQkFBa0I7QUFDbEI7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLHVFQUF1RTtJQUN2RSxrQkFBa0I7QUFDdEI7QUFFQSxvQ0FBb0M7QUFDcEM7SUFDSSxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixTQUFTO0lBQ1QsVUFBVTtBQUNkO0FBRUEseUNBQXlDO0FBQ3pDO0lBQ0ksWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsU0FBUztJQUNULFVBQVU7QUFDZDtBQUVBLDBDQUEwQztBQUMxQztJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsU0FBUztJQUNULGVBQWU7QUFDbkI7QUFFQSx5Q0FBeUM7QUFDekM7O0lBRUkseUJBQXlCO0lBQ3pCO1FBQ0ksV0FBVztRQUNYLFVBQVU7UUFDVixlQUFlO1FBQ2YsY0FBYztJQUNsQjs7SUFFQSxnREFBZ0Q7SUFDaEQ7UUFDSSxXQUFXO1FBQ1gsY0FBYztRQUNkLGFBQWE7UUFDYixZQUFZO0lBQ2hCOztJQUVBLCtDQUErQztJQUMvQztRQUNJLFVBQVU7UUFDVixhQUFhO0lBQ2pCOztJQUVBLHlCQUF5QjtJQUN6QjtRQUNJLGVBQWU7SUFDbkI7O0lBRUEseUJBQXlCO0lBQ3pCO1FBQ0ksZUFBZTtRQUNmLGtCQUFrQjtJQUN0Qjs7SUFFQSxrQkFBa0I7SUFDbEI7UUFDSSxhQUFhO0lBQ2pCOztJQUVBLHVCQUF1QjtJQUN2QjtRQUNJLFdBQVc7SUFDZjs7SUFFQSwrQ0FBK0M7SUFDL0M7UUFDSSxlQUFlO1FBQ2YsV0FBVztJQUNmOztJQUVBLGdDQUFnQztJQUNoQztRQUNJLGNBQWM7UUFDZCxZQUFZO0lBQ2hCOztJQUVBLG1EQUFtRDtJQUNuRDtRQUNJLGNBQWM7SUFDbEI7QUFDSjtBQUVBLGlGQUFpRjtBQUNqRjs7SUFFSSxjQUFjO0lBQ2Q7UUFDSSxXQUFXO1FBQ1gsVUFBVTtRQUNWLGVBQWU7UUFDZixpQkFBaUI7SUFDckI7O0lBRUEseUNBQXlDO0lBQ3pDO1FBQ0ksVUFBVTtRQUNWLHFCQUFxQjtJQUN6Qjs7SUFFQSwwQ0FBMEM7SUFDMUM7UUFDSSxlQUFlO0lBQ25COztJQUVBLG1CQUFtQjtJQUNuQjtRQUNJLFVBQVU7UUFDVixXQUFXO1FBQ1gscUJBQXFCO0lBQ3pCOztJQUVBLCtDQUErQztJQUMvQztRQUNJLGVBQWU7SUFDbkI7O0lBRUEsbUVBQW1FO0lBQ25FO1FBQ0ksVUFBVTtJQUNkOztJQUVBLGtCQUFrQjtJQUNsQjtRQUNJLGVBQWU7SUFDbkI7O0lBRUEsb0NBQW9DO0lBQ3BDO1FBQ0ksZUFBZTtJQUNuQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFdlbGNvbWUgZGl2LSBpbnRyb2R1Y3Rpb24gdG8gd2Vic2l0ZSAqL1xuLndlbGNvbWUtZGl2e1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDo0MCU7XG4gICAgaGVpZ2h0OjEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgbWFyZ2luOiBhdXRvIDEwcHg7XG59XG5cbi8qIExvZ2luIGRpdiAqL1xuLmxvZ2lue1xuICAgIG1hcmdpbjogYXV0byAxMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDoyNSU7XG4gICAgaGVpZ2h0OjEwMCU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4vKiBSaWdodCBzaWRlIGRpdiAqL1xuLnBhbmVsQ3tcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6MjUlO1xuICAgIGhlaWdodDoxMDAlO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHJpZ2h0OiAwO1xuICAgIG1hcmdpbjogYXV0byA7XG59XG5cbi8qIFdlbGNvbWUgdGl0bGUgZGVzaWduICovXG4ud2VsY29tZS10aXRsZXtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6IG15VGl0bGU7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICAgIHRleHQtc2hhZG93OiAycHggMnB4IDNweCByZ2IoMzYsIDksIDE5KTtcbn1cblxuLyogV2VsY29tZSB0ZXh0IGRlc2lnbiAqL1xuLndlbGNvbWUtcHtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi8qIEhlbGxvIGN1c3RvbWVyIGRpdiAqL1xuLmhlbGxvLWN1c3RvbWVyLWRpdntcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLyogSGVsbG8gY3VzdG9tZXIgdGl0bGUgKi9cbi5oZWxsby1jdXN0b21lcntcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6IG15VGl0bGU7XG4gICAgZm9udC1zaXplOiA0NXB4O1xufVxuXG4vKiBEaXZpZGVyIGltYWdlICovXG4uZGl2aWRlcntcbiAgICB3aWR0aDogNzAlO1xuICAgIGhlaWdodDogNTBweDtcbiAgICBvcGFjaXR5OiAwLjc7XG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgZHJvcC1zaGFkb3coMnB4IDJweCA1cHggcmdiKDI5LCA1LCAxNCkpO1xuICAgIG1hcmdpbjogM3B4IGF1dG87XG59XG5cbi8qIEltYWdlIHVuZGVyIFdlbGNvbWUgc2VjdGlvbiAqL1xuLmltYWdle1xuICAgIHdpZHRoOjYwJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygycHggMnB4IDNweCByZ2IoMjksIDUsIDE0KSk7XG59XG5cbi8qIFRvdGFsIE9yZGVycyBhbmQgUHJvZHVjdHMgY291bnQgZGl2LSBiZWZvcmUgbG9nZ2VkIGluKi9cbi50b3RhbC1jb3VudC1kaXZ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRvcDogMzAwcHg7XG4gICAgbGVmdDogMTVweDtcbiAgICB3aWR0aDogOTAlO1xufVxuXG4vKiBUb3RhbCBPcmRlcnMgYW5kIFByb2R1Y3RzIGNvdW50IGRpdi0gd2hlbiBjdXN0b21lciBpcyBsb2dnZWQgaW4qL1xuLnRvdGFsLWNvdW50LWRpdi1jdXN0b21lcntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdG9wOiAzMDBweDtcbiAgICBsZWZ0OiAxNXB4O1xuICAgIHdpZHRoOiA5MCU7XG59XG5cbi8qIFRvdGFsIE9yZGVycyBhbmQgUHJvZHVjdHMgY291bnQgdGV4dCBkZXNpZ24qL1xuLnRvdGFsLWNvdW50e1xuICAgIGNvbG9yOiB3aGl0ZTsgXG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1mYW1pbHk6IHRvdGFsQ291bnQ7XG4gICAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4vKiBEaXYgZm9yIGRpZmZlcmVudCBjdXN0b21lcidzIHNob3BwaW5nIHN0YXR1c2VzICovXG4ucGFuZWxDLXRvcC1kaXZ7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA0MHB4O1xuICAgIGxlZnQ6IDMwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKiBXcmFwcGluZyBkaXYgZm9yIFwicGFuZWxDLXRvcC1kaXZcIiAqL1xuLnBhbmVsQy1hYm92ZS1jb3VudHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLyogQnV0dG9uIGRlc2lnbiAqL1xuYnV0dG9ue1xuICAgIG1hcmdpbjo1cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudCggcmdiKDEyMSwgNTAsIDc0KSwgIHJnYigxMjYsIDM5LCA1OSkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLyogUmlnaHQgaGFuZCBzaWRlIC0gd2VsY29tZSB0aXRsZSAqL1xuLnBhbmVsQy10aXRsZXtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6IG15VGl0bGU7XG4gICAgZm9udC1zaXplOiA0NXB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG4vKiBSaWdodCBoYW5kIHNpZGUgLSB3ZWxjb21lIGJhY2sgdGl0bGUgKi9cbi53ZWxjb21lLWJhY2stdGl0bGV7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtZmFtaWx5OiBteVRpdGxlO1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuLyogVGV4dCBmb3IgY3VzdG9tZXIncyBzaG9wcGluZyBzdGF0dXNlcyAqL1xuLnBhbmVsQy10ZXh0e1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi8qIERlc2lnbiBmb3Igc2NyZWVuIHNtYWxsZXIgdGhhbiA1NzVweCAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgICBcbiAgICAvKiBUb3AgZGl2cyBvZiB0aGUgcGFnZSAqL1xuICAgIC5sb2dpbiwgLndlbGNvbWUtZGl2LCAucGFuZWxDIHtcbiAgICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgICAgIHdpZHRoOiA4NSU7XG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgLyogVG90YWwgY291bnQgZGl2IC0gYmVmb3JlIGN1c3RvbWVyIGxvZ2dlZCBpbiAqL1xuICAgIC50b3RhbC1jb3VudC1kaXZ7XG4gICAgICAgIHdpZHRoOiAxMDAlOyBcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGJvdHRvbTogMTcwcHg7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICB9XG5cbiAgICAvKiBUb3RhbCBjb3VudCBkaXYgLSBhZnRlciBjdXN0b21lciBsb2dnZWQgaW4gKi9cbiAgICAudG90YWwtY291bnQtZGl2LWN1c3RvbWVye1xuICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICBib3R0b206IDE3MHB4O1xuICAgIH1cblxuICAgIC8qIFdlbGNvbWUgdGl0bGUgZGVzaWduICovXG4gICAgLndlbGNvbWUtdGl0bGV7XG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDsgICBcbiAgICB9XG5cbiAgICAvKiBIZWxsbyBjdXN0b21lciB0aXRsZSAqL1xuICAgIC5oZWxsby1jdXN0b21lcntcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLyogRGl2aWRlciBpbWFnZSAqL1xuICAgIC5kaXZpZGVye1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC8qIEhlbGxvIGN1c3RvbWVyIGRpdiAqL1xuICAgIC5oZWxsby1jdXN0b21lci1kaXZ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC8qIFRvdGFsIE9yZGVycyBhbmQgUHJvZHVjdHMgY291bnQgdGV4dCBkZXNpZ24qL1xuICAgIC50b3RhbC1jb3VudHtcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICBtYXJnaW46IDVweDtcbiAgICB9XG5cbiAgICAvKiBJbWFnZSB1bmRlciBXZWxjb21lIHNlY3Rpb24gKi9cbiAgICAuaW1hZ2V7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgfVxuXG4gICAgLyogRGl2IGZvciBkaWZmZXJlbnQgY3VzdG9tZXIncyBzaG9wcGluZyBzdGF0dXNlcyAqL1xuICAgIC5wYW5lbEMtdG9wLWRpdntcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxufVxuXG4vKiBEZXNpZ24gZm9yIHNjcmVlbiBsYXJnZXIgdGhhbiA1NzVweCBhbmQgc21hbGxlciB0aGFuIDk5MXB4IChpbmNsdWRpbmcgOTkxcHgpICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkgYW5kIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gICAgXG4gICAgLyogTG9naW4gZGl2ICovXG4gICAgLmxvZ2luIHtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgfVxuXG4gICAgLyogV2VsY29tZSBkaXYtIGludHJvZHVjdGlvbiB0byB3ZWJzaXRlICovXG4gICAgLndlbGNvbWUtZGl2e1xuICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfVxuXG4gICAgLyogVGV4dCBmb3IgY3VzdG9tZXIncyBzaG9wcGluZyBzdGF0dXNlcyAqL1xuICAgIC5wYW5lbEMtdGV4dHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cblxuICAgIC8qIFJpZ2h0IHNpZGUgZGl2ICovXG4gICAgLnBhbmVsQ3tcbiAgICAgICAgd2lkdGg6IDI1JTtcbiAgICAgICAgaGVpZ2h0OiA5MCU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB9XG5cbiAgICAvKiBUb3RhbCBPcmRlcnMgYW5kIFByb2R1Y3RzIGNvdW50IHRleHQgZGVzaWduKi9cbiAgICAudG90YWwtY291bnR7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG5cbiAgICAvKiBUb3RhbCBPcmRlcnMgYW5kIFByb2R1Y3RzIGNvdW50IGRpdi0gd2hlbiBjdXN0b21lciBpcyBsb2dnZWQgaW4qL1xuICAgIC50b3RhbC1jb3VudC1kaXYtY3VzdG9tZXJ7XG4gICAgICAgIHdpZHRoOjEwMCU7XG4gICAgfVxuXG4gICAgLyogQnV0dG9uIGRlc2lnbiAqL1xuICAgIGJ1dHRvbntcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cblxuICAgIC8qIFJpZ2h0IGhhbmQgc2lkZSAtIHdlbGNvbWUgdGl0bGUgKi9cbiAgICAucGFuZWxDLXRpdGxle1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgfVxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/home/home.component.ts": 
        /*!***************************************************!*\
          !*** ./src/app/components/home/home.component.ts ***!
          \***************************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var ng2_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-redux */ "./node_modules/ng2-redux/lib/index.js");
            /* harmony import */ var ng2_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(ng2_redux__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */ var src_app_models_cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/cart */ "./src/app/models/cart.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_services_carts_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/carts.service */ "./src/app/services/carts.service.ts");
            /* harmony import */ var src_app_services_customers_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/customers.service */ "./src/app/services/customers.service.ts");
            /* harmony import */ var src_app_services_products_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/products.service */ "./src/app/services/products.service.ts");
            /* harmony import */ var src_app_services_orders_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/orders.service */ "./src/app/services/orders.service.ts");
            /* harmony import */ var src_app_redux_actionType__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/redux/actionType */ "./src/app/redux/actionType.ts");
            /* harmony import */ var src_app_services_carts_items_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/carts-items.service */ "./src/app/services/carts-items.service.ts");
            var HomeComponent = /** @class */ (function () {
                function HomeComponent(redux, cartsService, productsService, ordersService, customersService, cartsItemsService, router) {
                    this.redux = redux;
                    this.cartsService = cartsService;
                    this.productsService = productsService;
                    this.ordersService = ordersService;
                    this.customersService = customersService;
                    this.cartsItemsService = cartsItemsService;
                    this.router = router;
                    this.newCart = new src_app_models_cart__WEBPACK_IMPORTED_MODULE_3__["Cart"]();
                    this.loggedIn = false;
                }
                // Check if customer is logged in:
                HomeComponent.prototype.isCustomerLoggedIn = function () {
                    return sessionStorage.getItem("customer") !== null;
                };
                // Invoked at the beginning of the component's lifecycle:
                HomeComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    // Get count- products and orders:
                    this.getOrdersNumber();
                    this.getProductsNumber();
                    this.unsubscribe2 = this.redux.subscribe(function () {
                        _this.countOrders = _this.redux.getState().countOrders;
                        _this.countProducts = _this.redux.getState().countProducts;
                    });
                    if (this.isCustomerLoggedIn()) {
                        this.loggedIn = true;
                        this.subscribeToStore();
                    }
                    else {
                        this.loggedIn = false;
                    }
                };
                // Subscribe to store:
                HomeComponent.prototype.subscribeToStore = function () {
                    var _this = this;
                    this.unsubscribe = this.redux.subscribe(function () {
                        _this.customer = _this.redux.getState().customer;
                        _this.carts = _this.redux.getState().carts;
                        _this.cart = _this.redux.getState().cart;
                        _this.cartsItems = _this.redux.getState().cartsItems;
                        _this.totalAmount = _this.redux.getState().totalAmount;
                        // get latest order:
                        if (_this.latestOrder !== null || _this.latestOrder !== undefined) {
                            _this.latestOrder = _this.redux.getState().latestOrder;
                        }
                        if (!_this.isCustomerLoggedIn()) {
                            _this.loggedIn = false;
                        }
                        // calculate total amount:
                        if (_this.cartsItems) {
                            _this.totalAmount = _this.calculateTotalCartAmount();
                        }
                        // get customer:
                        if (_this.customer === null || _this.customer === undefined) {
                            var customer = JSON.parse(sessionStorage.getItem("customer"));
                            if (customer) {
                                _this.customersService.getOneCustomer(customer._id);
                            }
                            // get carts:
                        }
                        else {
                            if ((_this.carts === null || _this.carts === undefined || _this.carts.length === 0) && !_this.customer.newCustomer) {
                                _this.getCarts(_this.customer);
                            }
                        }
                    });
                };
                // Get all customer's carts
                HomeComponent.prototype.getCarts = function (customer) {
                    var _this = this;
                    this.cartsService.getAllCartsByCutomerID(customer._id)
                        .subscribe(function (carts) {
                        var action = { type: src_app_redux_actionType__WEBPACK_IMPORTED_MODULE_9__["ActionType"].GetAllCarts, payload: carts };
                        _this.redux.dispatch(action);
                        _this.getOneCart(carts);
                        _this.getTheLatestOrder(customer._id);
                    }, function (err) {
                        // If token expired on the server side:
                        if (err.status === 401) {
                            alert("Sorry! You are no longer connected. \nPlease login again.");
                            _this.logout();
                        }
                        else {
                            alert(err.message);
                        }
                    });
                };
                // Get total amount to pay:
                HomeComponent.prototype.getTotalAmount = function () {
                    var total = this.calculateTotalCartAmount();
                    var action = { type: src_app_redux_actionType__WEBPACK_IMPORTED_MODULE_9__["ActionType"].SaveTotalAmount, payload: total };
                    this.redux.dispatch(action);
                };
                // Logout:
                HomeComponent.prototype.logout = function () {
                    sessionStorage.clear();
                    var action = { type: src_app_redux_actionType__WEBPACK_IMPORTED_MODULE_9__["ActionType"].LogOut, payload: undefined };
                    this.redux.dispatch(action);
                    this.loggedIn = false;
                    this.router.navigate(["/home"]);
                };
                // Only if customer is not new get latest order:
                HomeComponent.prototype.getTheLatestOrder = function (_id) {
                    if (!this.customer.newCustomer) {
                        if (this.latestOrder === null || this.latestOrder === undefined) {
                            this.getTheLastOrder(_id);
                        }
                        else {
                            this.latestOrder = this.redux.getState().latestOrder;
                        }
                    }
                };
                // Get the latst order:
                HomeComponent.prototype.getTheLastOrder = function (_id) {
                    this.ordersService.getLastOrder(_id);
                };
                // Get one cart where "open:true":
                HomeComponent.prototype.getOneCart = function (carts) {
                    for (var _i = 0, carts_1 = carts; _i < carts_1.length; _i++) {
                        var cart = carts_1[_i];
                        if (cart.open === true) {
                            var action = { type: src_app_redux_actionType__WEBPACK_IMPORTED_MODULE_9__["ActionType"].GetOneCart, payload: cart };
                            this.redux.dispatch(action);
                            this.getAllCartsItemsByCartId(cart._id);
                        }
                    }
                };
                // Get all carts-items by cart Id:
                HomeComponent.prototype.getAllCartsItemsByCartId = function (_id) {
                    this.cartsItemsService.getAllCartsItemsByCartID(_id);
                    if (this.cartsItems) {
                        this.getTotalAmount();
                    }
                };
                // Calculate total amount to pay:
                HomeComponent.prototype.calculateTotalCartAmount = function () {
                    var sum = 0;
                    for (var i = 0; i < this.cartsItems.length; i++) {
                        sum += this.cartsItems[i].price;
                    }
                    return sum;
                };
                // Get total number of Orders in the site:
                HomeComponent.prototype.getOrdersNumber = function () {
                    this.ordersService.getCountOrders();
                };
                // Get total number of Products in the site:
                HomeComponent.prototype.getProductsNumber = function () {
                    this.productsService.getCountProducts();
                };
                // Unsubscribe to store - invoked a moment before the component's lifecycle ends:
                HomeComponent.prototype.ngOnDestroy = function () {
                    if (this.unsubscribe) {
                        this.unsubscribe();
                    }
                    if (this.unsubscribe2) {
                        this.unsubscribe2();
                    }
                };
                // Go to shopping page:
                HomeComponent.prototype.goToShoppingPage = function () {
                    this.router.navigate(["/shopping-page/" + this.customer._id]);
                };
                // Create new cart:
                HomeComponent.prototype.createNewCart = function () {
                    var _this = this;
                    this.customer.newCustomer = false;
                    this.customersService.updateOneCustomer(this.customer);
                    this.newCart.customer = this.customer;
                    this.newCart.date = new Date();
                    this.newCart.open = true;
                    this.cartsService.addNewCart(this.newCart)
                        .subscribe(function (newCart) {
                        _this.cart = newCart;
                        _this.router.navigate(["/shopping-page/" + _this.customer._id]);
                    }, function (err) {
                        // If token expired on the server side:
                        if (err.status === 401) {
                            alert("Sorry! You are no longer connected. \nPlease login again.");
                            _this.logout();
                        }
                        else {
                            alert(err.message);
                        }
                    });
                };
                // Receive data from child component: login
                HomeComponent.prototype.receiveLoggedIn = function ($event) {
                    this.loggedIn = $event;
                    this.subscribeToStore();
                };
                return HomeComponent;
            }());
            HomeComponent.ctorParameters = function () { return [
                { type: ng2_redux__WEBPACK_IMPORTED_MODULE_2__["NgRedux"] },
                { type: src_app_services_carts_service__WEBPACK_IMPORTED_MODULE_5__["CartsService"] },
                { type: src_app_services_products_service__WEBPACK_IMPORTED_MODULE_7__["ProductsService"] },
                { type: src_app_services_orders_service__WEBPACK_IMPORTED_MODULE_8__["OrdersService"] },
                { type: src_app_services_customers_service__WEBPACK_IMPORTED_MODULE_6__["CustomersService"] },
                { type: src_app_services_carts_items_service__WEBPACK_IMPORTED_MODULE_10__["CartsItemsService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
            ]; };
            HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")).default]
                })
            ], HomeComponent);
            /***/ 
        }),
        /***/ "./src/app/components/layout/layout.component.css": 
        /*!********************************************************!*\
          !*** ./src/app/components/layout/layout.component.css ***!
          \********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/* Top div */\nsection{\n    margin:0px;\n    padding:15px;\n    display: grid;\n    border: 1px solid gray;\n    grid-template-rows: 15% 80%;\n    grid-template-columns: repeat(12,1fr);\n    text-align: center;\n    box-sizing: border-box;\n    height:100%;\n}\n/* header design */\nheader{\n    grid-column: span 12;\n    position: relative;\n}\n/* main design */\nmain{\n    grid-column: span 12;\n    overflow-y: auto;\n    overflow-x: hidden;\n    height: 100%;\n}\n/* Contact us div */\n.contact-div{\n    display: inline-block;\n    position: absolute;\n    right: 20px;\n}\n/* Contact us text design */\n.contact-us{\n    margin: 2px;\n    padding: 2px;\n    font-size: 14px;\n    color: rgb(255, 255, 255);\n    text-shadow: 2px 2px 3px rgb(26, 7, 13);\n}\n/* Contact us title */\n.contact-us-title{\n    font-size: 30px;\n    color: white;\n    font-family: myTitle;\n    margin-top: 0;\n    margin-bottom: 0;\n}\n/* Logi div: */\n.logo-div{\n    display: inline-block;\n    position: absolute;\n    left: 20px;\n}\n/* Email icon design */\n.email-icon{\n    width: 20px;\n    height: 20px;\n    -webkit-filter: brightness(800%) drop-shadow(2px 2px 3px rgb(31, 8, 19));\n            filter: brightness(800%) drop-shadow(2px 2px 3px rgb(31, 8, 19)); \n}\n/* Phone icon design  */\n.phone-icon{\n    width: 20px;\n    height: 20px;\n    -webkit-filter: invert(100%) brightness(1000%) drop-shadow(2px 2px 3px rgb(31, 8, 19));\n            filter: invert(100%) brightness(1000%) drop-shadow(2px 2px 3px rgb(31, 8, 19));\n}\n/* Design for screen smaller than 575px */\n@media screen and (max-width: 575px) {\n\n    /* Contact us title */\n    .contact-us-title{\n        font-size: 20px;\n    }\n\n    /* Contact us text design */\n    .contact-us{\n        font-size: 10px;\n    }\n\n    /* Phone icon design  */\n    .phone-icon{\n        width: 15px;\n        height: 15px; \n    }\n\n    /* Email icon design  */\n    .email-icon{\n        width: 15px;\n        height: 15px;  \n    }\n\n    /* Logo div */\n    .logo-div{\n        left: 10px;\n    }\n\n    /* Contact us div */\n    .contact-div{\n        right: 10px;\n    }\n\n    /* main design */\n    main{\n        overflow-x: hidden;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWTtBQUNaO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixxQ0FBcUM7SUFDckMsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixXQUFXO0FBQ2Y7QUFFQSxrQkFBa0I7QUFDbEI7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0FBQ3RCO0FBRUEsZ0JBQWdCO0FBQ2hCO0lBQ0ksb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjtBQUVBLG1CQUFtQjtBQUNuQjtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsV0FBVztBQUNmO0FBRUEsMkJBQTJCO0FBQzNCO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLHVDQUF1QztBQUMzQztBQUVBLHFCQUFxQjtBQUNyQjtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7QUFFQSxjQUFjO0FBQ2Q7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDtBQUVBLHNCQUFzQjtBQUN0QjtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osd0VBQWdFO1lBQWhFLGdFQUFnRTtBQUNwRTtBQUVBLHVCQUF1QjtBQUN2QjtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osc0ZBQThFO1lBQTlFLDhFQUE4RTtBQUNsRjtBQUVBLHlDQUF5QztBQUN6Qzs7SUFFSSxxQkFBcUI7SUFDckI7UUFDSSxlQUFlO0lBQ25COztJQUVBLDJCQUEyQjtJQUMzQjtRQUNJLGVBQWU7SUFDbkI7O0lBRUEsdUJBQXVCO0lBQ3ZCO1FBQ0ksV0FBVztRQUNYLFlBQVk7SUFDaEI7O0lBRUEsdUJBQXVCO0lBQ3ZCO1FBQ0ksV0FBVztRQUNYLFlBQVk7SUFDaEI7O0lBRUEsYUFBYTtJQUNiO1FBQ0ksVUFBVTtJQUNkOztJQUVBLG1CQUFtQjtJQUNuQjtRQUNJLFdBQVc7SUFDZjs7SUFFQSxnQkFBZ0I7SUFDaEI7UUFDSSxrQkFBa0I7SUFDdEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogVG9wIGRpdiAqL1xuc2VjdGlvbntcbiAgICBtYXJnaW46MHB4O1xuICAgIHBhZGRpbmc6MTVweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNSUgODAlO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEyLDFmcik7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgaGVpZ2h0OjEwMCU7XG59XG5cbi8qIGhlYWRlciBkZXNpZ24gKi9cbmhlYWRlcntcbiAgICBncmlkLWNvbHVtbjogc3BhbiAxMjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi8qIG1haW4gZGVzaWduICovXG5tYWlue1xuICAgIGdyaWQtY29sdW1uOiBzcGFuIDEyO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLyogQ29udGFjdCB1cyBkaXYgKi9cbi5jb250YWN0LWRpdntcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAyMHB4O1xufVxuXG4vKiBDb250YWN0IHVzIHRleHQgZGVzaWduICovXG4uY29udGFjdC11c3tcbiAgICBtYXJnaW46IDJweDtcbiAgICBwYWRkaW5nOiAycHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggM3B4IHJnYigyNiwgNywgMTMpO1xufVxuXG4vKiBDb250YWN0IHVzIHRpdGxlICovXG4uY29udGFjdC11cy10aXRsZXtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtZmFtaWx5OiBteVRpdGxlO1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLyogTG9naSBkaXY6ICovXG4ubG9nby1kaXZ7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAyMHB4O1xufVxuXG4vKiBFbWFpbCBpY29uIGRlc2lnbiAqL1xuLmVtYWlsLWljb257XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg4MDAlKSBkcm9wLXNoYWRvdygycHggMnB4IDNweCByZ2IoMzEsIDgsIDE5KSk7IFxufVxuXG4vKiBQaG9uZSBpY29uIGRlc2lnbiAgKi9cbi5waG9uZS1pY29ue1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKSBicmlnaHRuZXNzKDEwMDAlKSBkcm9wLXNoYWRvdygycHggMnB4IDNweCByZ2IoMzEsIDgsIDE5KSk7XG59XG5cbi8qIERlc2lnbiBmb3Igc2NyZWVuIHNtYWxsZXIgdGhhbiA1NzVweCAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcblxuICAgIC8qIENvbnRhY3QgdXMgdGl0bGUgKi9cbiAgICAuY29udGFjdC11cy10aXRsZXtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cblxuICAgIC8qIENvbnRhY3QgdXMgdGV4dCBkZXNpZ24gKi9cbiAgICAuY29udGFjdC11c3tcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgIH1cblxuICAgIC8qIFBob25lIGljb24gZGVzaWduICAqL1xuICAgIC5waG9uZS1pY29ue1xuICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgaGVpZ2h0OiAxNXB4OyBcbiAgICB9XG5cbiAgICAvKiBFbWFpbCBpY29uIGRlc2lnbiAgKi9cbiAgICAuZW1haWwtaWNvbntcbiAgICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICAgIGhlaWdodDogMTVweDsgIFxuICAgIH1cblxuICAgIC8qIExvZ28gZGl2ICovXG4gICAgLmxvZ28tZGl2e1xuICAgICAgICBsZWZ0OiAxMHB4O1xuICAgIH1cblxuICAgIC8qIENvbnRhY3QgdXMgZGl2ICovXG4gICAgLmNvbnRhY3QtZGl2e1xuICAgICAgICByaWdodDogMTBweDtcbiAgICB9XG5cbiAgICAvKiBtYWluIGRlc2lnbiAqL1xuICAgIG1haW57XG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICB9XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/components/layout/layout.component.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/components/layout/layout.component.ts ***!
          \*******************************************************/
        /*! exports provided: LayoutComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function () { return LayoutComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var LayoutComponent = /** @class */ (function () {
                function LayoutComponent() {
                }
                return LayoutComponent;
            }());
            LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-layout',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/layout/layout.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./layout.component.css */ "./src/app/components/layout/layout.component.css")).default]
                })
            ], LayoutComponent);
            /***/ 
        }),
        /***/ "./src/app/components/login/login.component.css": 
        /*!******************************************************!*\
          !*** ./src/app/components/login/login.component.css ***!
          \******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/* Title design */\nh2{\n    color: white;\n    font-family: myTitle;\n    font-size: 40px;\n    text-shadow: 2px 2px 3px rgb(39, 12, 23);\n}\n/* table, tr, td desgin */\ntable, tr, td{\n    text-align: center;\n}\n/* table design */\ntable{\n    margin-top: 30px;\n}\n/* td design */\ntd{\n    height: 30px;\n    width: 250px;\n}\n/* Error message design */\n.err-msg{\n    color: white;\n    display: block;\n    font-weight: 500;\n    text-shadow: 1px 1px 2px rgb(24, 6, 11); \n    padding-left: 0px 3px;\n    font-size: 11px;\n}\n/* button design */\nbutton{\n    margin:auto;\n    color: white;\n    background-image: radial-gradient( rgb(121, 50, 74),  rgb(126, 39, 59));\n    border-radius: 5px;\n    margin-left: 8px;\n    text-align: center;\n}\n/* button design disabled */\nbutton:disabled{\n    margin:auto;\n    color: rgb(146, 146, 146);\n    background-image: radial-gradient( rgb(121, 93, 101), rgb(88, 54, 63));\n    border-radius: 5px;\n    margin-left: 8px;\n    text-align: center;\n}\n/* Login input design */\n.login-input{\n    width:190px;\n    margin: 7px;\n    height: 26px;\n    border-radius: 3px;\n    box-shadow: 3px 2px 5px rgb(53, 22, 31);\n    border: none;\n    padding: 3px;\n    background-color: rgba(255, 255, 255, 0.589);\n    text-align: left;\n}\n/* text next to check box design */\n.checkbox-text{\n    color: white;\n    text-shadow: 1px 1px 2px rgb(24, 6, 11); \n    padding-left: 0px 3px;\n    font-size: 13px;\n}\n/* Text above register button design */\np{\n    color: white;\n    text-shadow: 1px 1px 2px rgb(24, 6, 11); \n    padding-left: 0px 3px;\n    font-size: 13px;  \n}\n/* Design for screen smaller than 575px */\n@media screen and (max-width: 575px) {\n\n    /* Title design */\n    h2 {\n        font-size: 30px;\n    }\n}\n/* Design for screen larger than 575px and smaller than 991px (including 991px) */\n@media screen and (max-width: 991px) and (min-width: 576px) {\n    \n    /* Login input design */\n    .login-input{\n        width:150px;   \n    }\n\n    /* td desgin */\n    td{\n        width: 160px;\n    }\n\n    /* text next to check box design */\n    .checkbox-text{\n        padding: 0;\n        margin: 0;\n        font-size: 12px;\n    }\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlCQUFpQjtBQUNqQjtJQUNJLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLHdDQUF3QztBQUM1QztBQUVBLHlCQUF5QjtBQUN6QjtJQUNJLGtCQUFrQjtBQUN0QjtBQUVBLGlCQUFpQjtBQUNqQjtJQUNJLGdCQUFnQjtBQUNwQjtBQUVBLGNBQWM7QUFDZDtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCO0FBRUEseUJBQXlCO0FBQ3pCO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsdUNBQXVDO0lBQ3ZDLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25CO0FBRUEsa0JBQWtCO0FBQ2xCO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWix1RUFBdUU7SUFDdkUsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFFQSwyQkFBMkI7QUFDM0I7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLHNFQUFzRTtJQUN0RSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUVBLHVCQUF1QjtBQUN2QjtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix1Q0FBdUM7SUFDdkMsWUFBWTtJQUNaLFlBQVk7SUFDWiw0Q0FBNEM7SUFDNUMsZ0JBQWdCO0FBQ3BCO0FBRUEsa0NBQWtDO0FBQ2xDO0lBQ0ksWUFBWTtJQUNaLHVDQUF1QztJQUN2QyxxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjtBQUVBLHNDQUFzQztBQUN0QztJQUNJLFlBQVk7SUFDWix1Q0FBdUM7SUFDdkMscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7QUFFQSx5Q0FBeUM7QUFDekM7O0lBRUksaUJBQWlCO0lBQ2pCO1FBQ0ksZUFBZTtJQUNuQjtBQUNKO0FBRUEsaUZBQWlGO0FBQ2pGOztJQUVJLHVCQUF1QjtJQUN2QjtRQUNJLFdBQVc7SUFDZjs7SUFFQSxjQUFjO0lBQ2Q7UUFDSSxZQUFZO0lBQ2hCOztJQUVBLGtDQUFrQztJQUNsQztRQUNJLFVBQVU7UUFDVixTQUFTO1FBQ1QsZUFBZTtJQUNuQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogVGl0bGUgZGVzaWduICovXG5oMntcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6IG15VGl0bGU7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIHRleHQtc2hhZG93OiAycHggMnB4IDNweCByZ2IoMzksIDEyLCAyMyk7XG59XG5cbi8qIHRhYmxlLCB0ciwgdGQgZGVzZ2luICovXG50YWJsZSwgdHIsIHRke1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLyogdGFibGUgZGVzaWduICovXG50YWJsZXtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4vKiB0ZCBkZXNpZ24gKi9cbnRke1xuICAgIGhlaWdodDogMzBweDtcbiAgICB3aWR0aDogMjUwcHg7XG59XG5cbi8qIEVycm9yIG1lc3NhZ2UgZGVzaWduICovXG4uZXJyLW1zZ3tcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggcmdiKDI0LCA2LCAxMSk7IFxuICAgIHBhZGRpbmctbGVmdDogMHB4IDNweDtcbiAgICBmb250LXNpemU6IDExcHg7XG59XG5cbi8qIGJ1dHRvbiBkZXNpZ24gKi9cbmJ1dHRvbntcbiAgICBtYXJnaW46YXV0bztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KCByZ2IoMTIxLCA1MCwgNzQpLCAgcmdiKDEyNiwgMzksIDU5KSk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vKiBidXR0b24gZGVzaWduIGRpc2FibGVkICovXG5idXR0b246ZGlzYWJsZWR7XG4gICAgbWFyZ2luOmF1dG87XG4gICAgY29sb3I6IHJnYigxNDYsIDE0NiwgMTQ2KTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoIHJnYigxMjEsIDkzLCAxMDEpLCByZ2IoODgsIDU0LCA2MykpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLyogTG9naW4gaW5wdXQgZGVzaWduICovXG4ubG9naW4taW5wdXR7XG4gICAgd2lkdGg6MTkwcHg7XG4gICAgbWFyZ2luOiA3cHg7XG4gICAgaGVpZ2h0OiAyNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBib3gtc2hhZG93OiAzcHggMnB4IDVweCByZ2IoNTMsIDIyLCAzMSk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDNweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTg5KTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4vKiB0ZXh0IG5leHQgdG8gY2hlY2sgYm94IGRlc2lnbiAqL1xuLmNoZWNrYm94LXRleHR7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCByZ2IoMjQsIDYsIDExKTsgXG4gICAgcGFkZGluZy1sZWZ0OiAwcHggM3B4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLyogVGV4dCBhYm92ZSByZWdpc3RlciBidXR0b24gZGVzaWduICovXG5we1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggcmdiKDI0LCA2LCAxMSk7IFxuICAgIHBhZGRpbmctbGVmdDogMHB4IDNweDtcbiAgICBmb250LXNpemU6IDEzcHg7ICBcbn1cblxuLyogRGVzaWduIGZvciBzY3JlZW4gc21hbGxlciB0aGFuIDU3NXB4ICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xuXG4gICAgLyogVGl0bGUgZGVzaWduICovXG4gICAgaDIge1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgfVxufVxuXG4vKiBEZXNpZ24gZm9yIHNjcmVlbiBsYXJnZXIgdGhhbiA1NzVweCBhbmQgc21hbGxlciB0aGFuIDk5MXB4IChpbmNsdWRpbmcgOTkxcHgpICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkgYW5kIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gICAgXG4gICAgLyogTG9naW4gaW5wdXQgZGVzaWduICovXG4gICAgLmxvZ2luLWlucHV0e1xuICAgICAgICB3aWR0aDoxNTBweDsgICBcbiAgICB9XG5cbiAgICAvKiB0ZCBkZXNnaW4gKi9cbiAgICB0ZHtcbiAgICAgICAgd2lkdGg6IDE2MHB4O1xuICAgIH1cblxuICAgIC8qIHRleHQgbmV4dCB0byBjaGVjayBib3ggZGVzaWduICovXG4gICAgLmNoZWNrYm94LXRleHR7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbn1cblxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/components/login/login.component.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/components/login/login.component.ts ***!
          \*****************************************************/
        /*! exports provided: LoginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return LoginComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_models_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/login */ "./src/app/models/login.ts");
            /* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
            /* harmony import */ var src_app_models_customer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/customer */ "./src/app/models/customer.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_models_cart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/cart */ "./src/app/models/cart.ts");
            /* harmony import */ var src_app_models_admin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/admin */ "./src/app/models/admin.ts");
            /* harmony import */ var ng2_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-redux */ "./node_modules/ng2-redux/lib/index.js");
            /* harmony import */ var ng2_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(ng2_redux__WEBPACK_IMPORTED_MODULE_8__);
            /* harmony import */ var src_app_redux_actionType__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/redux/actionType */ "./src/app/redux/actionType.ts");
            /* harmony import */ var src_app_services_carts_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/carts.service */ "./src/app/services/carts.service.ts");
            /* harmony import */ var src_app_services_orders_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/orders.service */ "./src/app/services/orders.service.ts");
            /* harmony import */ var src_app_services_carts_items_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/carts-items.service */ "./src/app/services/carts-items.service.ts");
            var LoginComponent = /** @class */ (function () {
                function LoginComponent(loginService, ordersService, router, cartsService, cartsItemsService, redux) {
                    this.loginService = loginService;
                    this.ordersService = ordersService;
                    this.router = router;
                    this.cartsService = cartsService;
                    this.cartsItemsService = cartsItemsService;
                    this.redux = redux;
                    this.loggedInEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.login = new src_app_models_login__WEBPACK_IMPORTED_MODULE_2__["Login"]();
                    this.customer = new src_app_models_customer__WEBPACK_IMPORTED_MODULE_4__["Customer"]();
                    this.admin = new src_app_models_admin__WEBPACK_IMPORTED_MODULE_7__["Admin"]();
                    this.cart = new src_app_models_cart__WEBPACK_IMPORTED_MODULE_6__["Cart"]();
                }
                // Login function:
                LoginComponent.prototype.logIn = function () {
                    var _this = this;
                    this.login.email = this.login.email.toLowerCase();
                    // if Admin check box is checked:
                    if (this.login.isAdmin === true) {
                        this.loginService.loginAdmin(this.login)
                            .subscribe(function (response) {
                            if (response === false) {
                                alert("Email or password are invalid");
                                _this.login.email = undefined;
                                _this.login.password = undefined;
                            }
                            else {
                                var action = { type: src_app_redux_actionType__WEBPACK_IMPORTED_MODULE_9__["ActionType"].GetAdmin, payload: response.admin };
                                _this.redux.dispatch(action);
                                _this.admin = response.admin;
                                // jwt- JSON Web Token:
                                sessionStorage.setItem("admin", JSON.stringify(response.admin));
                                sessionStorage.setItem("token", response.token);
                                _this.router.navigate(["/admin-page"]);
                            }
                        }, function (err) { return alert(err.message); });
                    }
                    // if Admin checkbox is not checked - cheack customer's login details: 
                    else {
                        this.loginService.loginCustomer(this.login)
                            .subscribe(function (response) {
                            if (response === false) {
                                alert("Email or password are invalid. \nAdmin must check the check box");
                                _this.login.email = undefined;
                                _this.login.password = undefined;
                                _this.loggedIn = false;
                            }
                            else {
                                var action = { type: src_app_redux_actionType__WEBPACK_IMPORTED_MODULE_9__["ActionType"].GetOneCustomer, payload: response.customer };
                                _this.redux.dispatch(action);
                                var action2 = { type: src_app_redux_actionType__WEBPACK_IMPORTED_MODULE_9__["ActionType"].GetLatestOrder, payload: null };
                                _this.redux.dispatch(action2);
                                // jwt- JSON Web Token:
                                sessionStorage.setItem("customer", JSON.stringify(response.customer));
                                sessionStorage.setItem("token", response.token);
                                _this.getCarts(response.customer);
                                _this.getTheLastOrder(response.customer._id);
                                _this.loggedIn = true;
                                _this.sendLoggedInEvent();
                            }
                        }, function (err) { return alert(err.message); });
                    }
                };
                // Get the latest order:
                LoginComponent.prototype.getTheLastOrder = function (_id) {
                    this.ordersService.getLastOrder(_id);
                };
                // Navigate to register page:
                LoginComponent.prototype.goToRegister = function () {
                    this.router.navigate(["/register"]);
                };
                // Get all customer's carts
                LoginComponent.prototype.getCarts = function (customer) {
                    var _this = this;
                    this.cartsService.getAllCartsByCutomerID(customer._id)
                        .subscribe(function (carts) {
                        var action = { type: src_app_redux_actionType__WEBPACK_IMPORTED_MODULE_9__["ActionType"].GetAllCarts, payload: carts };
                        _this.redux.dispatch(action);
                        _this.getOneCart(carts);
                    }, function (err) {
                        // If token expired on the server side:
                        if (err.status === 401) {
                            alert("Sorry! You are no longer connected. \nPlease login again.");
                            _this.logout();
                        }
                        else {
                            alert(err.message);
                        }
                    });
                };
                // Logout:
                LoginComponent.prototype.logout = function () {
                    sessionStorage.clear();
                    var action = { type: src_app_redux_actionType__WEBPACK_IMPORTED_MODULE_9__["ActionType"].LogOut, payload: undefined };
                    this.redux.dispatch(action);
                    this.router.navigate(["/home"]);
                };
                // Get one cart where "open:true":
                LoginComponent.prototype.getOneCart = function (carts) {
                    for (var _i = 0, carts_2 = carts; _i < carts_2.length; _i++) {
                        var cart = carts_2[_i];
                        if (cart.open === true) {
                            var action = { type: src_app_redux_actionType__WEBPACK_IMPORTED_MODULE_9__["ActionType"].GetOneCart, payload: cart };
                            this.redux.dispatch(action);
                            this.getAllCartsItemsByCartId(cart._id);
                        }
                    }
                };
                // Get all carts-items by cart Id:
                LoginComponent.prototype.getAllCartsItemsByCartId = function (_id) {
                    this.cartsItemsService.getAllCartsItemsByCartID(_id);
                };
                // Send data to parent component - home:
                LoginComponent.prototype.sendLoggedInEvent = function () {
                    this.loggedInEvent.emit(this.loggedIn);
                };
                return LoginComponent;
            }());
            LoginComponent.ctorParameters = function () { return [
                { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] },
                { type: src_app_services_orders_service__WEBPACK_IMPORTED_MODULE_11__["OrdersService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
                { type: src_app_services_carts_service__WEBPACK_IMPORTED_MODULE_10__["CartsService"] },
                { type: src_app_services_carts_items_service__WEBPACK_IMPORTED_MODULE_12__["CartsItemsService"] },
                { type: ng2_redux__WEBPACK_IMPORTED_MODULE_8__["NgRedux"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], LoginComponent.prototype, "loggedInEvent", void 0);
            LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-login',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")).default]
                })
            ], LoginComponent);
            /***/ 
        }),
        /***/ "./src/app/components/order-page/order-page.component.css": 
        /*!****************************************************************!*\
          !*** ./src/app/components/order-page/order-page.component.css ***!
          \****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/* Order div */\n.order-div{\n    border: 1px solid rgb(133, 132, 132);\n    width:70%;\n    margin-top: 10px;\n    height:83%;\n    float: left;\n    overflow-y: auto;\n    box-shadow: 3px 3px 5px rgb(48, 48, 48);\n    border-radius: 7px;\n}\n/* Cart div */\n.cart-div{\n    border: 1px solid rgb(153, 153, 153);\n    float: left;\n    width:25%;\n    margin: 10px;\n    height:83%;\n    overflow-y: auto;\n    box-shadow: 3px 3px 5px rgb(88, 88, 88);\n    border-radius: 7px;\n}\n/* button design */\n.order-button, .cancel-button{\n    margin:0;\n    color: white;\n    background-image: radial-gradient( rgb(121, 50, 74),  rgb(126, 39, 59));\n    border-radius: 5px;\n}\n/* button disabled desing  */\n.order-button:disabled{\n    margin:0;\n    color: rgb(146, 146, 146);\n    background-image: radial-gradient( rgb(121, 93, 101), rgb(88, 54, 63));\n    border-radius: 5px;\n}\n/* Hello customer title div */\n.top-page-div{\n    width: 50px;\n    height: 50px;\n    margin:2px;\n    padding: 2px;\n}\n/* Hello customer design */\n.hello-class{\n    display: block;\n    position: absolute;\n    left: 100px;\n    padding:2px;\n    margin: 2px;\n    font-family: myTitle;\n    font-size: 35px;\n    color: white;\n}\n/* Order title */\n.order-title{\n    color: white;\n    font-family: myTitle;\n    font-size: 30px;\n    text-shadow: 2px 2px 3px rgb(36, 8, 18);\n}\n/* Inputs labels */\n.order-lable{\n    width:190px;\n    margin: 2px;\n    padding: 0;\n    color: white;\n    display: block;\n    font-weight: 500;\n    text-shadow: 1px 1px 2px rgb(24, 6, 11);\n    font-size: 11px;\n}\n/* input and select design */\ninput, select{\n    width:190px;\n    height: 26px;\n    border-radius: 3px;\n    box-shadow: 3px 2px 5px rgb(53, 22, 31);\n    border: none;\n    padding: 3px;\n    background-color: rgba(255, 255, 255, 0.589);\n}\n/* table, tr, td design */\ntable, tr, td{\n    margin: auto;\n    padding-bottom: 5px;\n}\n/* td with inputs design */\n.input-td{\n    padding-left: 10px;\n}\n/* error message design */\n.err-msg{\n    color: white;\n    display: block;\n    font-weight: 500;\n    text-shadow: 1px 1px 2px rgb(24, 6, 11); \n    padding: 0px 3px;\n    font-size: 11px;\n}\n/* Design for screen smaller than 575px */\n@media screen and (max-width: 575px) {\n\n    /* Hello customer design */\n    .hello-class{\n        margin: auto;\n        padding: 0;\n        font-size: 30px;\n        display: block;\n        width: 90%;\n        position: relative;\n        left: 10px;\n    }\n\n    /* Hello customer title div */\n    .top-page-div{\n        width: 85%;\n       \n    }\n\n    /* Cart div */\n    .cart-div{\n        width: 85%;\n        \n    }\n\n    /* Order div */\n    .order-div{\n        width: 85%;\n        margin-left: 10px;  \n    }\n\n    /* table, tr, td design */\n    table, tr, td{\n        margin: auto;\n        padding-bottom: 5px;\n    }\n    \n    /* td with inputs design */\n    .input-td{\n        padding-left: 10px;\n    }\n}\n/* Design for screen larger than 575px and smaller than 991px (including 991px) */\n@media screen and (max-width: 991px) and (min-width: 576px) {\n    \n    /* Cart div */\n    .cart-div{\n        width: 35%;\n        height:500px;\n        display: inline-block;\n    }\n\n    /* Order div */\n    .order-div{\n        width: 55%;\n        height: 500px;\n        margin-left: 5px;\n    }\n\n    /* Hello customer design */\n    .hello-class{\n        position: relative;\n        width: 250px;\n        left: 20px;\n    }\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9vcmRlci1wYWdlL29yZGVyLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxjQUFjO0FBQ2Q7SUFDSSxvQ0FBb0M7SUFDcEMsU0FBUztJQUNULGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsV0FBVztJQUNYLGdCQUFnQjtJQUNoQix1Q0FBdUM7SUFDdkMsa0JBQWtCO0FBQ3RCO0FBRUEsYUFBYTtBQUNiO0lBQ0ksb0NBQW9DO0lBQ3BDLFdBQVc7SUFDWCxTQUFTO0lBQ1QsWUFBWTtJQUNaLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsdUNBQXVDO0lBQ3ZDLGtCQUFrQjtBQUN0QjtBQUVBLGtCQUFrQjtBQUNsQjtJQUNJLFFBQVE7SUFDUixZQUFZO0lBQ1osdUVBQXVFO0lBQ3ZFLGtCQUFrQjtBQUN0QjtBQUVBLDRCQUE0QjtBQUM1QjtJQUNJLFFBQVE7SUFDUix5QkFBeUI7SUFDekIsc0VBQXNFO0lBQ3RFLGtCQUFrQjtBQUN0QjtBQUVBLDZCQUE2QjtBQUM3QjtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osVUFBVTtJQUNWLFlBQVk7QUFDaEI7QUFFQSwwQkFBMEI7QUFDMUI7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsV0FBVztJQUNYLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsWUFBWTtBQUNoQjtBQUVBLGdCQUFnQjtBQUNoQjtJQUNJLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLHVDQUF1QztBQUMzQztBQUVBLGtCQUFrQjtBQUNsQjtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsVUFBVTtJQUNWLFlBQVk7SUFDWixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLHVDQUF1QztJQUN2QyxlQUFlO0FBQ25CO0FBRUEsNEJBQTRCO0FBQzVCO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsdUNBQXVDO0lBQ3ZDLFlBQVk7SUFDWixZQUFZO0lBQ1osNENBQTRDO0FBQ2hEO0FBRUEseUJBQXlCO0FBQ3pCO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtBQUN2QjtBQUVBLDBCQUEwQjtBQUMxQjtJQUNJLGtCQUFrQjtBQUN0QjtBQUVBLHlCQUF5QjtBQUN6QjtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLHVDQUF1QztJQUN2QyxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjtBQUVBLHlDQUF5QztBQUN6Qzs7SUFFSSwwQkFBMEI7SUFDMUI7UUFDSSxZQUFZO1FBQ1osVUFBVTtRQUNWLGVBQWU7UUFDZixjQUFjO1FBQ2QsVUFBVTtRQUNWLGtCQUFrQjtRQUNsQixVQUFVO0lBQ2Q7O0lBRUEsNkJBQTZCO0lBQzdCO1FBQ0ksVUFBVTs7SUFFZDs7SUFFQSxhQUFhO0lBQ2I7UUFDSSxVQUFVOztJQUVkOztJQUVBLGNBQWM7SUFDZDtRQUNJLFVBQVU7UUFDVixpQkFBaUI7SUFDckI7O0lBRUEseUJBQXlCO0lBQ3pCO1FBQ0ksWUFBWTtRQUNaLG1CQUFtQjtJQUN2Qjs7SUFFQSwwQkFBMEI7SUFDMUI7UUFDSSxrQkFBa0I7SUFDdEI7QUFDSjtBQUVBLGlGQUFpRjtBQUNqRjs7SUFFSSxhQUFhO0lBQ2I7UUFDSSxVQUFVO1FBQ1YsWUFBWTtRQUNaLHFCQUFxQjtJQUN6Qjs7SUFFQSxjQUFjO0lBQ2Q7UUFDSSxVQUFVO1FBQ1YsYUFBYTtRQUNiLGdCQUFnQjtJQUNwQjs7SUFFQSwwQkFBMEI7SUFDMUI7UUFDSSxrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLFVBQVU7SUFDZDtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9vcmRlci1wYWdlL29yZGVyLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIE9yZGVyIGRpdiAqL1xuLm9yZGVyLWRpdntcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTMzLCAxMzIsIDEzMik7XG4gICAgd2lkdGg6NzAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgaGVpZ2h0OjgzJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIGJveC1zaGFkb3c6IDNweCAzcHggNXB4IHJnYig0OCwgNDgsIDQ4KTtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG59XG5cbi8qIENhcnQgZGl2ICovXG4uY2FydC1kaXZ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE1MywgMTUzLCAxNTMpO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOjI1JTtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgaGVpZ2h0OjgzJTtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIGJveC1zaGFkb3c6IDNweCAzcHggNXB4IHJnYig4OCwgODgsIDg4KTtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG59XG5cbi8qIGJ1dHRvbiBkZXNpZ24gKi9cbi5vcmRlci1idXR0b24sIC5jYW5jZWwtYnV0dG9ue1xuICAgIG1hcmdpbjowO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoIHJnYigxMjEsIDUwLCA3NCksICByZ2IoMTI2LCAzOSwgNTkpKTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi8qIGJ1dHRvbiBkaXNhYmxlZCBkZXNpbmcgICovXG4ub3JkZXItYnV0dG9uOmRpc2FibGVke1xuICAgIG1hcmdpbjowO1xuICAgIGNvbG9yOiByZ2IoMTQ2LCAxNDYsIDE0Nik7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KCByZ2IoMTIxLCA5MywgMTAxKSwgcmdiKDg4LCA1NCwgNjMpKTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi8qIEhlbGxvIGN1c3RvbWVyIHRpdGxlIGRpdiAqL1xuLnRvcC1wYWdlLWRpdntcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgbWFyZ2luOjJweDtcbiAgICBwYWRkaW5nOiAycHg7XG59XG5cbi8qIEhlbGxvIGN1c3RvbWVyIGRlc2lnbiAqL1xuLmhlbGxvLWNsYXNze1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAxMDBweDtcbiAgICBwYWRkaW5nOjJweDtcbiAgICBtYXJnaW46IDJweDtcbiAgICBmb250LWZhbWlseTogbXlUaXRsZTtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4vKiBPcmRlciB0aXRsZSAqL1xuLm9yZGVyLXRpdGxle1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LWZhbWlseTogbXlUaXRsZTtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggM3B4IHJnYigzNiwgOCwgMTgpO1xufVxuXG4vKiBJbnB1dHMgbGFiZWxzICovXG4ub3JkZXItbGFibGV7XG4gICAgd2lkdGg6MTkwcHg7XG4gICAgbWFyZ2luOiAycHg7XG4gICAgcGFkZGluZzogMDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggcmdiKDI0LCA2LCAxMSk7XG4gICAgZm9udC1zaXplOiAxMXB4O1xufVxuXG4vKiBpbnB1dCBhbmQgc2VsZWN0IGRlc2lnbiAqL1xuaW5wdXQsIHNlbGVjdHtcbiAgICB3aWR0aDoxOTBweDtcbiAgICBoZWlnaHQ6IDI2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJveC1zaGFkb3c6IDNweCAycHggNXB4IHJnYig1MywgMjIsIDMxKTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogM3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41ODkpO1xufVxuXG4vKiB0YWJsZSwgdHIsIHRkIGRlc2lnbiAqL1xudGFibGUsIHRyLCB0ZHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cblxuLyogdGQgd2l0aCBpbnB1dHMgZGVzaWduICovXG4uaW5wdXQtdGR7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4vKiBlcnJvciBtZXNzYWdlIGRlc2lnbiAqL1xuLmVyci1tc2d7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IHJnYigyNCwgNiwgMTEpOyBcbiAgICBwYWRkaW5nOiAwcHggM3B4O1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuLyogRGVzaWduIGZvciBzY3JlZW4gc21hbGxlciB0aGFuIDU3NXB4ICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xuXG4gICAgLyogSGVsbG8gY3VzdG9tZXIgZGVzaWduICovXG4gICAgLmhlbGxvLWNsYXNze1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbGVmdDogMTBweDtcbiAgICB9XG5cbiAgICAvKiBIZWxsbyBjdXN0b21lciB0aXRsZSBkaXYgKi9cbiAgICAudG9wLXBhZ2UtZGl2e1xuICAgICAgICB3aWR0aDogODUlO1xuICAgICAgIFxuICAgIH1cblxuICAgIC8qIENhcnQgZGl2ICovXG4gICAgLmNhcnQtZGl2e1xuICAgICAgICB3aWR0aDogODUlO1xuICAgICAgICBcbiAgICB9XG5cbiAgICAvKiBPcmRlciBkaXYgKi9cbiAgICAub3JkZXItZGl2e1xuICAgICAgICB3aWR0aDogODUlO1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDsgIFxuICAgIH1cblxuICAgIC8qIHRhYmxlLCB0ciwgdGQgZGVzaWduICovXG4gICAgdGFibGUsIHRyLCB0ZHtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIH1cbiAgICBcbiAgICAvKiB0ZCB3aXRoIGlucHV0cyBkZXNpZ24gKi9cbiAgICAuaW5wdXQtdGR7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICB9XG59XG5cbi8qIERlc2lnbiBmb3Igc2NyZWVuIGxhcmdlciB0aGFuIDU3NXB4IGFuZCBzbWFsbGVyIHRoYW4gOTkxcHggKGluY2x1ZGluZyA5OTFweCkgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSBhbmQgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgICBcbiAgICAvKiBDYXJ0IGRpdiAqL1xuICAgIC5jYXJ0LWRpdntcbiAgICAgICAgd2lkdGg6IDM1JTtcbiAgICAgICAgaGVpZ2h0OjUwMHB4O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfVxuXG4gICAgLyogT3JkZXIgZGl2ICovXG4gICAgLm9yZGVyLWRpdntcbiAgICAgICAgd2lkdGg6IDU1JTtcbiAgICAgICAgaGVpZ2h0OiA1MDBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICB9XG5cbiAgICAvKiBIZWxsbyBjdXN0b21lciBkZXNpZ24gKi9cbiAgICAuaGVsbG8tY2xhc3N7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgICBsZWZ0OiAyMHB4O1xuICAgIH1cbn1cblxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/components/order-page/order-page.component.ts": 
        /*!***************************************************************!*\
          !*** ./src/app/components/order-page/order-page.component.ts ***!
          \***************************************************************/
        /*! exports provided: OrderPageComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPageComponent", function () { return OrderPageComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var ng2_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-redux */ "./node_modules/ng2-redux/lib/index.js");
            /* harmony import */ var ng2_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(ng2_redux__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */ var src_app_services_carts_items_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/carts-items.service */ "./src/app/services/carts-items.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_services_cities_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/cities.service */ "./src/app/services/cities.service.ts");
            /* harmony import */ var src_app_models_order__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/order */ "./src/app/models/order.ts");
            /* harmony import */ var src_app_services_customers_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/customers.service */ "./src/app/services/customers.service.ts");
            /* harmony import */ var src_app_services_carts_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/carts.service */ "./src/app/services/carts.service.ts");
            /* harmony import */ var src_app_services_orders_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/orders.service */ "./src/app/services/orders.service.ts");
            /* harmony import */ var _popup_order_confirmation_popup_order_confirmation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../popup-order-confirmation/popup-order-confirmation.component */ "./src/app/components/popup-order-confirmation/popup-order-confirmation.component.ts");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var src_app_redux_actionType__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/redux/actionType */ "./src/app/redux/actionType.ts");
            var OrderPageComponent = /** @class */ (function () {
                function OrderPageComponent(modalService, redux, cartsItemsService, citiesService, customersService, activatedRoute, ordersService, cartsService, router) {
                    this.modalService = modalService;
                    this.redux = redux;
                    this.cartsItemsService = cartsItemsService;
                    this.citiesService = citiesService;
                    this.customersService = customersService;
                    this.activatedRoute = activatedRoute;
                    this.ordersService = ordersService;
                    this.cartsService = cartsService;
                    this.router = router;
                    this.beforeOrder = false;
                    this.isZero = false;
                    this.order = new src_app_models_order__WEBPACK_IMPORTED_MODULE_6__["Order"]();
                    this.modalOptions = {
                        backdrop: 'static',
                        keyboard: false,
                        backdropClass: 'customBackdrop'
                    };
                }
                // Invoked at the beginning of the component's lifecycle:
                OrderPageComponent.prototype.ngOnInit = function () {
                    // if customer is logged in:
                    if (this.isCustomerLoggedIn()) {
                        this.getCurrentDate();
                        this.subscribeToStore();
                        var cartID = this.activatedRoute.snapshot.params.cartID;
                        // get all carts items:
                        if (this.redux.getState().cartsItems.length === 0) {
                            this.cartsItemsService.getAllCartsItemsByCartID(cartID);
                        }
                        // get cart:
                        this.getCart(cartID);
                        // get all cities:
                        if (this.redux.getState().cities.length === 0) {
                            this.citiesService.getAllCities();
                        }
                        // get customer:
                        if (this.cart !== undefined) {
                            this.customersService.getOneCustomer(this.cart.customer._id);
                        }
                    }
                    // if customer is not logged in:
                    else {
                        this.logout();
                    }
                };
                // Subscribe to store:
                OrderPageComponent.prototype.subscribeToStore = function () {
                    var _this = this;
                    this.unsubscribe = this.redux.subscribe(function () {
                        _this.cart = _this.redux.getState().cart;
                        _this.cartsItems = _this.redux.getState().cartsItems;
                        _this.customer = _this.redux.getState().customer;
                        _this.cities = _this.redux.getState().cities;
                        _this.totalAmount = _this.redux.getState().totalAmount;
                        if (_this.customer !== null) {
                            _this.order.city = _this.customer.city;
                            _this.order.street = _this.customer.street;
                            _this.order.houseNumber = _this.customer.houseNumber;
                        }
                    });
                };
                // Check if customer is logged in:
                OrderPageComponent.prototype.isCustomerLoggedIn = function () {
                    return sessionStorage.getItem("customer") !== null;
                };
                // Unsubscribe to store - Invoked a moment before the component's lifecycle ends:
                OrderPageComponent.prototype.ngOnDestroy = function () {
                    if (this.unsubscribe) {
                        this.unsubscribe();
                    }
                };
                // Calculate total amount to pay:
                OrderPageComponent.prototype.calculateTotalCartAmount = function () {
                    var sum = 0;
                    for (var i = 0; i < this.cartsItems.length; i++) {
                        sum += this.cartsItems[i].price;
                    }
                    return sum;
                };
                // Get cart:
                OrderPageComponent.prototype.getCart = function (cartID) {
                    if (this.cart === undefined) {
                        this.cartsService.getOneCartByCartID(cartID);
                    }
                    else {
                        this.cart = this.redux.getState().cart;
                    }
                };
                // get current date:
                OrderPageComponent.prototype.getCurrentDate = function () {
                    var today = new Date();
                    var dd = ("0" + today.getDate()).slice(-2);
                    var mm = ("0" + (today.getMonth() + 1)).slice(-2);
                    var yyyy = today.getFullYear();
                    this.currentDate = yyyy + "-" + mm + "-" + dd;
                };
                // Open modal function - after executing an order
                OrderPageComponent.prototype.makeOrder = function () {
                    var _this = this;
                    this.order.cart = this.cart;
                    this.order.customer = this.customer;
                    this.order.price = this.totalAmount;
                    this.order.orderDate = new Date();
                    this.ordersService.addOrder(this.order)
                        .subscribe(function (addedOrder) {
                        _this.cart.open = false;
                        _this.cartsService.updateCart(_this.cart);
                        var modalRef = _this.modalService.open(_popup_order_confirmation_popup_order_confirmation_component__WEBPACK_IMPORTED_MODULE_10__["PopupOrderConfirmationComponent"], _this.modalOptions);
                        modalRef.componentInstance.order = _this.order;
                        modalRef.componentInstance.customer = _this.customer;
                    }, function (err) {
                        // If token expired on the serve side
                        if (err.status === 401) {
                            alert("Sorry! You are no longer connected. \nPlease login again.");
                            _this.logout();
                        }
                        else {
                            console.log(err.message);
                            var modalRef = _this.modalService.open(_popup_order_confirmation_popup_order_confirmation_component__WEBPACK_IMPORTED_MODULE_10__["PopupOrderConfirmationComponent"], _this.modalOptions);
                            modalRef.componentInstance.errorMessage = false;
                            modalRef.componentInstance.order = _this.order;
                            modalRef.componentInstance.customer = _this.customer;
                        }
                    });
                };
                // Navigate back to shopping page:
                OrderPageComponent.prototype.goBackToShoppingPage = function () {
                    this.router.navigate(["/shopping-page/" + this.customer._id]);
                };
                // Make sure no zero allowed:
                OrderPageComponent.prototype.noZero = function () {
                    this.isZero = this.order.houseNumber === 0;
                };
                // Logout:
                OrderPageComponent.prototype.logout = function () {
                    sessionStorage.clear();
                    var action = { type: src_app_redux_actionType__WEBPACK_IMPORTED_MODULE_12__["ActionType"].LogOut, payload: undefined };
                    this.redux.dispatch(action);
                    this.router.navigate(["/home"]);
                };
                return OrderPageComponent;
            }());
            OrderPageComponent.ctorParameters = function () { return [
                { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModal"] },
                { type: ng2_redux__WEBPACK_IMPORTED_MODULE_2__["NgRedux"] },
                { type: src_app_services_carts_items_service__WEBPACK_IMPORTED_MODULE_3__["CartsItemsService"] },
                { type: src_app_services_cities_service__WEBPACK_IMPORTED_MODULE_5__["CitiesService"] },
                { type: src_app_services_customers_service__WEBPACK_IMPORTED_MODULE_7__["CustomersService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
                { type: src_app_services_orders_service__WEBPACK_IMPORTED_MODULE_9__["OrdersService"] },
                { type: src_app_services_carts_service__WEBPACK_IMPORTED_MODULE_8__["CartsService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
            ]; };
            OrderPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-order-page',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./order-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/order-page/order-page.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./order-page.component.css */ "./src/app/components/order-page/order-page.component.css")).default]
                })
            ], OrderPageComponent);
            /***/ 
        }),
        /***/ "./src/app/components/page404/page404.component.css": 
        /*!**********************************************************!*\
          !*** ./src/app/components/page404/page404.component.css ***!
          \**********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/* Image design */\nimg{\n    width:700px;\n    margin: 10px;\n    border-radius: 3px;\n    box-shadow: 2px 2px 5px rgb(39, 12, 23);\n}\n/* button design */\nbutton{\n    margin:0;\n    color: white;\n    background-image: radial-gradient( rgb(121, 50, 74),  rgb(126, 39, 59));\n    border-radius: 5px;\n}\n/* Text design */\np{\n    color: white;\n}\n/* Title design */\nh2{\n    color: white;\n    font-family: myTitle;\n    font-size: 50px;\n}\n/* Design for screen smaller than 575px */\n@media screen and (max-width: 575px) {\n    /* Title design */\n    h2{\n        font-size: 35px;\n    }\n\n    /* Image design */\n    img{\n        width:85%;\n    }\n\n    /* Text design */\n    p{\n        font-size: 15px;\n    }\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlNDA0L3BhZ2U0MDQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUI7QUFDakI7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix1Q0FBdUM7QUFDM0M7QUFFQSxrQkFBa0I7QUFDbEI7SUFDSSxRQUFRO0lBQ1IsWUFBWTtJQUNaLHVFQUF1RTtJQUN2RSxrQkFBa0I7QUFDdEI7QUFFQSxnQkFBZ0I7QUFDaEI7SUFDSSxZQUFZO0FBQ2hCO0FBRUEsaUJBQWlCO0FBQ2pCO0lBQ0ksWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixlQUFlO0FBQ25CO0FBRUEseUNBQXlDO0FBQ3pDO0lBQ0ksaUJBQWlCO0lBQ2pCO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQSxpQkFBaUI7SUFDakI7UUFDSSxTQUFTO0lBQ2I7O0lBRUEsZ0JBQWdCO0lBQ2hCO1FBQ0ksZUFBZTtJQUNuQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYWdlNDA0L3BhZ2U0MDQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEltYWdlIGRlc2lnbiAqL1xuaW1ne1xuICAgIHdpZHRoOjcwMHB4O1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggcmdiKDM5LCAxMiwgMjMpO1xufVxuXG4vKiBidXR0b24gZGVzaWduICovXG5idXR0b257XG4gICAgbWFyZ2luOjA7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudCggcmdiKDEyMSwgNTAsIDc0KSwgIHJnYigxMjYsIDM5LCA1OSkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLyogVGV4dCBkZXNpZ24gKi9cbnB7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4vKiBUaXRsZSBkZXNpZ24gKi9cbmgye1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LWZhbWlseTogbXlUaXRsZTtcbiAgICBmb250LXNpemU6IDUwcHg7XG59XG5cbi8qIERlc2lnbiBmb3Igc2NyZWVuIHNtYWxsZXIgdGhhbiA1NzVweCAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgICAvKiBUaXRsZSBkZXNpZ24gKi9cbiAgICBoMntcbiAgICAgICAgZm9udC1zaXplOiAzNXB4O1xuICAgIH1cblxuICAgIC8qIEltYWdlIGRlc2lnbiAqL1xuICAgIGltZ3tcbiAgICAgICAgd2lkdGg6ODUlO1xuICAgIH1cblxuICAgIC8qIFRleHQgZGVzaWduICovXG4gICAgcHtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgIH1cbn1cblxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/components/page404/page404.component.ts": 
        /*!*********************************************************!*\
          !*** ./src/app/components/page404/page404.component.ts ***!
          \*********************************************************/
        /*! exports provided: Page404Component */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page404Component", function () { return Page404Component; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var ng2_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-redux */ "./node_modules/ng2-redux/lib/index.js");
            /* harmony import */ var ng2_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(ng2_redux__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var src_app_redux_actionType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/redux/actionType */ "./src/app/redux/actionType.ts");
            var Page404Component = /** @class */ (function () {
                function Page404Component(router, redux) {
                    this.router = router;
                    this.redux = redux;
                }
                // Go back home:
                Page404Component.prototype.goHome = function () {
                    sessionStorage.clear();
                    var action = { type: src_app_redux_actionType__WEBPACK_IMPORTED_MODULE_4__["ActionType"].LogOut, payload: undefined };
                    this.redux.dispatch(action);
                    this.router.navigate(["/home"]);
                };
                return Page404Component;
            }());
            Page404Component.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: ng2_redux__WEBPACK_IMPORTED_MODULE_3__["NgRedux"] }
            ]; };
            Page404Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-page404',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page404.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/page404/page404.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page404.component.css */ "./src/app/components/page404/page404.component.css")).default]
                })
            ], Page404Component);
            /***/ 
        }),
        /***/ "./src/app/components/popup-order-confirmation/popup-order-confirmation.component.css": 
        /*!********************************************************************************************!*\
          !*** ./src/app/components/popup-order-confirmation/popup-order-confirmation.component.css ***!
          \********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/* Button design */\nbutton{\n    margin:0;\n    color: white;\n    background-image: radial-gradient( rgb(121, 50, 74),  rgb(126, 39, 59));\n    border-radius: 5px;\n}\n/* Modal container div */\n.modal-container{\n    background-image: linear-gradient( 135deg, rgb(58, 16, 16), rgb(107, 107, 107),rgb(133, 133, 133),rgb(107, 107, 107),rgb(58, 16, 16));\n    background-size: cover;\n    background-repeat: no-repeat;\n    text-align: center;\n    border-radius: 3px;\n}\n/* Modal footer */\n.modal-footer{\n    border: none;\n    text-align: center;\n}\n/* Title design */\n.title{\n    color: white;\n    text-shadow: 2px 2px 3px rgb(41, 11, 23);\n    font-family: myTitle;\n    font-size: 40px;\n    padding: 0;\n    margin: 0;\n}\n/* Text design */\n.text{\n    color: white;\n    text-shadow: 2px 2px 3px rgb(41, 11, 23);\n    font-size: 15px;\n}\n/* Design for screen smaller than 575px */\n@media screen and (max-width: 575px) {\n    \n    /* Title design */\n    .title{\n        color: white;\n        text-shadow: 2px 2px 3px rgb(41, 11, 23);\n        font-family: myTitle;\n        font-size: 30px;\n        padding: 0;\n        margin: 0;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3B1cC1vcmRlci1jb25maXJtYXRpb24vcG9wdXAtb3JkZXItY29uZmlybWF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0JBQWtCO0FBQ2xCO0lBQ0ksUUFBUTtJQUNSLFlBQVk7SUFDWix1RUFBdUU7SUFDdkUsa0JBQWtCO0FBQ3RCO0FBRUEsd0JBQXdCO0FBQ3hCO0lBQ0kscUlBQXFJO0lBQ3JJLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0QjtBQUVBLGlCQUFpQjtBQUNqQjtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7QUFFQSxpQkFBaUI7QUFDakI7SUFDSSxZQUFZO0lBQ1osd0NBQXdDO0lBQ3hDLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsVUFBVTtJQUNWLFNBQVM7QUFDYjtBQUVBLGdCQUFnQjtBQUNoQjtJQUNJLFlBQVk7SUFDWix3Q0FBd0M7SUFDeEMsZUFBZTtBQUNuQjtBQUVBLHlDQUF5QztBQUN6Qzs7SUFFSSxpQkFBaUI7SUFDakI7UUFDSSxZQUFZO1FBQ1osd0NBQXdDO1FBQ3hDLG9CQUFvQjtRQUNwQixlQUFlO1FBQ2YsVUFBVTtRQUNWLFNBQVM7SUFDYjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wb3B1cC1vcmRlci1jb25maXJtYXRpb24vcG9wdXAtb3JkZXItY29uZmlybWF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBCdXR0b24gZGVzaWduICovXG5idXR0b257XG4gICAgbWFyZ2luOjA7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudCggcmdiKDEyMSwgNTAsIDc0KSwgIHJnYigxMjYsIDM5LCA1OSkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLyogTW9kYWwgY29udGFpbmVyIGRpdiAqL1xuLm1vZGFsLWNvbnRhaW5lcntcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIDEzNWRlZywgcmdiKDU4LCAxNiwgMTYpLCByZ2IoMTA3LCAxMDcsIDEwNykscmdiKDEzMywgMTMzLCAxMzMpLHJnYigxMDcsIDEwNywgMTA3KSxyZ2IoNTgsIDE2LCAxNikpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4vKiBNb2RhbCBmb290ZXIgKi9cbi5tb2RhbC1mb290ZXJ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLyogVGl0bGUgZGVzaWduICovXG4udGl0bGV7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtc2hhZG93OiAycHggMnB4IDNweCByZ2IoNDEsIDExLCAyMyk7XG4gICAgZm9udC1mYW1pbHk6IG15VGl0bGU7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4vKiBUZXh0IGRlc2lnbiAqL1xuLnRleHR7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtc2hhZG93OiAycHggMnB4IDNweCByZ2IoNDEsIDExLCAyMyk7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4vKiBEZXNpZ24gZm9yIHNjcmVlbiBzbWFsbGVyIHRoYW4gNTc1cHggKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gICAgXG4gICAgLyogVGl0bGUgZGVzaWduICovXG4gICAgLnRpdGxle1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHRleHQtc2hhZG93OiAycHggMnB4IDNweCByZ2IoNDEsIDExLCAyMyk7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBteVRpdGxlO1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/components/popup-order-confirmation/popup-order-confirmation.component.ts": 
        /*!*******************************************************************************************!*\
          !*** ./src/app/components/popup-order-confirmation/popup-order-confirmation.component.ts ***!
          \*******************************************************************************************/
        /*! exports provided: PopupOrderConfirmationComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupOrderConfirmationComponent", function () { return PopupOrderConfirmationComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var ng2_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-redux */ "./node_modules/ng2-redux/lib/index.js");
            /* harmony import */ var ng2_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(ng2_redux__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */ var src_app_redux_actionType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/redux/actionType */ "./src/app/redux/actionType.ts");
            var PopupOrderConfirmationComponent = /** @class */ (function () {
                function PopupOrderConfirmationComponent(activeModal, router, redux) {
                    this.activeModal = activeModal;
                    this.router = router;
                    this.redux = redux;
                    this.errorMessage = true;
                }
                // Go home:
                PopupOrderConfirmationComponent.prototype.goHome = function () {
                    this.activeModal.close();
                    var action = { type: src_app_redux_actionType__WEBPACK_IMPORTED_MODULE_5__["ActionType"].GetOneCart, payload: null };
                    this.redux.dispatch(action);
                    var action2 = { type: src_app_redux_actionType__WEBPACK_IMPORTED_MODULE_5__["ActionType"].GetLatestOrder, payload: this.order };
                    this.redux.dispatch(action2);
                    var action3 = { type: src_app_redux_actionType__WEBPACK_IMPORTED_MODULE_5__["ActionType"].GetAllProducts, payload: [] };
                    this.redux.dispatch(action3);
                    this.router.navigate(["/home"]);
                };
                // Close popup:
                PopupOrderConfirmationComponent.prototype.closePopup = function () {
                    this.activeModal.close();
                    sessionStorage.clear();
                    var action = { type: src_app_redux_actionType__WEBPACK_IMPORTED_MODULE_5__["ActionType"].LogOut, payload: undefined };
                    this.redux.dispatch(action);
                    this.router.navigate(["/home"]);
                };
                return PopupOrderConfirmationComponent;
            }());
            PopupOrderConfirmationComponent.ctorParameters = function () { return [
                { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: ng2_redux__WEBPACK_IMPORTED_MODULE_4__["NgRedux"] }
            ]; };
            PopupOrderConfirmationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-popup-order-confirmation',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./popup-order-confirmation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/popup-order-confirmation/popup-order-confirmation.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./popup-order-confirmation.component.css */ "./src/app/components/popup-order-confirmation/popup-order-confirmation.component.css")).default]
                })
            ], PopupOrderConfirmationComponent);
            /***/ 
        }),
        /***/ "./src/app/components/popups-products/popups-products.component.css": 
        /*!**************************************************************************!*\
          !*** ./src/app/components/popups-products/popups-products.component.css ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/* Modal container div */\n.modal-container{\n    background-image: linear-gradient( 135deg, rgb(58, 16, 16), rgb(107, 107, 107),rgb(133, 133, 133),rgb(107, 107, 107),rgb(58, 16, 16));\n    background-size: cover;\n    background-repeat: no-repeat;\n    text-align: center;\n    border-radius: 3px;\n}\n/* Image design */\nimg{\n    width: 130px;\n    height: 130px;\n    -webkit-filter: drop-shadow(2px 2px 5px rgb(34, 6, 19));\n            filter: drop-shadow(2px 2px 5px rgb(34, 6, 19));\n    display: inline-block;\n}\n/* Product name design */\n.product-name{\n    padding: 0;\n    margin: 3px;\n    color: rgb(252, 252, 252);\n    text-shadow: 2px 2px 3px rgb(41, 10, 29);\n    font-size: 16px;\n}\n/* Product price design */\n.product-price{\n    padding: 0;\n    margin: 3px;\n    color: rgb(252, 252, 252);\n    text-shadow: 2px 2px 3px rgb(41, 10, 29);\n    font-size: 14px;\n}\n/* button design */\nbutton{\n    margin:0;\n    color: white;\n    background-image: radial-gradient( rgb(121, 50, 74),  rgb(126, 39, 59));\n    border-radius: 5px;\n}\n/* button disabled design */\nbutton:disabled{\n    margin:0;\n    color: rgb(146, 146, 146);\n    background-image: radial-gradient( rgb(121, 93, 101), rgb(88, 54, 63));\n    border-radius: 5px;\n}\n/* Modal footer design */\n.modal-footer{\n    border: none;\n}\n/* Input design */\ninput{\n    width:190px;\n    height: 26px;\n    border-radius: 3px;\n    box-shadow: 3px 2px 5px rgb(53, 22, 31);\n    border: none;\n    padding: 3px;\n    background-color: rgba(255, 255, 255, 0.589);\n}\n/* Error message design */\n.err-msg{\n    color: white;\n    display: block;\n    font-weight: 500;\n    text-shadow: 1px 1px 2px rgb(24, 6, 11); \n    padding-left: 0px 3px;\n    font-size: 11px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3B1cHMtcHJvZHVjdHMvcG9wdXBzLXByb2R1Y3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0JBQXdCO0FBQ3hCO0lBQ0kscUlBQXFJO0lBQ3JJLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0QjtBQUVBLGlCQUFpQjtBQUNqQjtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsdURBQStDO1lBQS9DLCtDQUErQztJQUMvQyxxQkFBcUI7QUFDekI7QUFFQSx3QkFBd0I7QUFDeEI7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLHlCQUF5QjtJQUN6Qix3Q0FBd0M7SUFDeEMsZUFBZTtBQUNuQjtBQUVBLHlCQUF5QjtBQUN6QjtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLHdDQUF3QztJQUN4QyxlQUFlO0FBQ25CO0FBRUEsa0JBQWtCO0FBQ2xCO0lBQ0ksUUFBUTtJQUNSLFlBQVk7SUFDWix1RUFBdUU7SUFDdkUsa0JBQWtCO0FBQ3RCO0FBRUEsMkJBQTJCO0FBQzNCO0lBQ0ksUUFBUTtJQUNSLHlCQUF5QjtJQUN6QixzRUFBc0U7SUFDdEUsa0JBQWtCO0FBQ3RCO0FBRUEsd0JBQXdCO0FBQ3hCO0lBQ0ksWUFBWTtBQUNoQjtBQUVBLGlCQUFpQjtBQUNqQjtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHVDQUF1QztJQUN2QyxZQUFZO0lBQ1osWUFBWTtJQUNaLDRDQUE0QztBQUNoRDtBQUVBLHlCQUF5QjtBQUN6QjtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLHVDQUF1QztJQUN2QyxxQkFBcUI7SUFDckIsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9wdXBzLXByb2R1Y3RzL3BvcHVwcy1wcm9kdWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogTW9kYWwgY29udGFpbmVyIGRpdiAqL1xuLm1vZGFsLWNvbnRhaW5lcntcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIDEzNWRlZywgcmdiKDU4LCAxNiwgMTYpLCByZ2IoMTA3LCAxMDcsIDEwNykscmdiKDEzMywgMTMzLCAxMzMpLHJnYigxMDcsIDEwNywgMTA3KSxyZ2IoNTgsIDE2LCAxNikpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4vKiBJbWFnZSBkZXNpZ24gKi9cbmltZ3tcbiAgICB3aWR0aDogMTMwcHg7XG4gICAgaGVpZ2h0OiAxMzBweDtcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDJweCAycHggNXB4IHJnYigzNCwgNiwgMTkpKTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi8qIFByb2R1Y3QgbmFtZSBkZXNpZ24gKi9cbi5wcm9kdWN0LW5hbWV7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDNweDtcbiAgICBjb2xvcjogcmdiKDI1MiwgMjUyLCAyNTIpO1xuICAgIHRleHQtc2hhZG93OiAycHggMnB4IDNweCByZ2IoNDEsIDEwLCAyOSk7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4vKiBQcm9kdWN0IHByaWNlIGRlc2lnbiAqL1xuLnByb2R1Y3QtcHJpY2V7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDNweDtcbiAgICBjb2xvcjogcmdiKDI1MiwgMjUyLCAyNTIpO1xuICAgIHRleHQtc2hhZG93OiAycHggMnB4IDNweCByZ2IoNDEsIDEwLCAyOSk7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4vKiBidXR0b24gZGVzaWduICovXG5idXR0b257XG4gICAgbWFyZ2luOjA7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudCggcmdiKDEyMSwgNTAsIDc0KSwgIHJnYigxMjYsIDM5LCA1OSkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLyogYnV0dG9uIGRpc2FibGVkIGRlc2lnbiAqL1xuYnV0dG9uOmRpc2FibGVke1xuICAgIG1hcmdpbjowO1xuICAgIGNvbG9yOiByZ2IoMTQ2LCAxNDYsIDE0Nik7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KCByZ2IoMTIxLCA5MywgMTAxKSwgcmdiKDg4LCA1NCwgNjMpKTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi8qIE1vZGFsIGZvb3RlciBkZXNpZ24gKi9cbi5tb2RhbC1mb290ZXJ7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG4vKiBJbnB1dCBkZXNpZ24gKi9cbmlucHV0e1xuICAgIHdpZHRoOjE5MHB4O1xuICAgIGhlaWdodDogMjZweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYm94LXNoYWRvdzogM3B4IDJweCA1cHggcmdiKDUzLCAyMiwgMzEpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiAzcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU4OSk7XG59XG5cbi8qIEVycm9yIG1lc3NhZ2UgZGVzaWduICovXG4uZXJyLW1zZ3tcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggcmdiKDI0LCA2LCAxMSk7IFxuICAgIHBhZGRpbmctbGVmdDogMHB4IDNweDtcbiAgICBmb250LXNpemU6IDExcHg7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/components/popups-products/popups-products.component.ts": 
        /*!*************************************************************************!*\
          !*** ./src/app/components/popups-products/popups-products.component.ts ***!
          \*************************************************************************/
        /*! exports provided: PopupsProductsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupsProductsComponent", function () { return PopupsProductsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var src_app_models_cartItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/cartItem */ "./src/app/models/cartItem.ts");
            /* harmony import */ var src_app_services_carts_items_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/carts-items.service */ "./src/app/services/carts-items.service.ts");
            var PopupsProductsComponent = /** @class */ (function () {
                function PopupsProductsComponent(activeModal, cartsItemsService) {
                    this.activeModal = activeModal;
                    this.cartsItemsService = cartsItemsService;
                    this.totalAmount = null;
                    this.isZero = false;
                    this.cartItem = new src_app_models_cartItem__WEBPACK_IMPORTED_MODULE_3__["CartItem"]();
                }
                // Invoked at the beginning of the component's lifecycle:
                PopupsProductsComponent.prototype.ngOnInit = function () {
                    this.cartItem.cart = this.currentCart;
                };
                // Add the selected product to cart - product would become "cartItem":
                PopupsProductsComponent.prototype.addToCart = function () {
                    this.cartItem.price = this.calculateQuantityToPrice();
                    this.cartItem.product = this.product;
                    this.cartsItemsService.addProductToCart(this.cartItem);
                    this.activeModal.close();
                };
                // Close popup
                PopupsProductsComponent.prototype.close = function () {
                    this.activeModal.close();
                };
                // Calculates price * quantity:
                PopupsProductsComponent.prototype.calculateQuantityToPrice = function () {
                    var pricePerOne = this.product.price;
                    var quantity = this.cartItem.quantity;
                    return pricePerOne * quantity;
                };
                // Calculate total amount to pay:
                PopupsProductsComponent.prototype.calculateTotalCartAmount = function () {
                    var sum = 0;
                    for (var i = 0; i < this.cartsItems.length; i++) {
                        sum += this.cartsItems[i].price;
                    }
                    return sum;
                };
                // Make sure that zero is not allowed:
                PopupsProductsComponent.prototype.noZero = function () {
                    this.isZero = this.cartItem.quantity < 1;
                };
                return PopupsProductsComponent;
            }());
            PopupsProductsComponent.ctorParameters = function () { return [
                { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] },
                { type: src_app_services_carts_items_service__WEBPACK_IMPORTED_MODULE_4__["CartsItemsService"] }
            ]; };
            PopupsProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-popups-products',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./popups-products.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/popups-products/popups-products.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./popups-products.component.css */ "./src/app/components/popups-products/popups-products.component.css")).default]
                })
            ], PopupsProductsComponent);
            /***/ 
        }),
        /***/ "./src/app/components/register/register.component.css": 
        /*!************************************************************!*\
          !*** ./src/app/components/register/register.component.css ***!
          \************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/* Button design */\n.register-button{\n    margin:0;\n    color: white;\n    background-image: radial-gradient( rgb(121, 50, 74),  rgb(126, 39, 59));\n    border-radius: 5px;\n}\n/* Button disabled design */\n.register-button:disabled{\n    margin:0;\n    color: rgb(146, 146, 146);\n    background-image: radial-gradient( rgb(121, 93, 101), rgb(88, 54, 63));\n    border-radius: 5px;\n}\n/* Table,tr,td design */\ntable, tr, td{\n    margin: auto;\n}\n/* Input and select design */\ninput, select{\n    width:190px;\n    margin: 7px;\n    height: 26px;\n    border-radius: 3px;\n    box-shadow: 3px 2px 5px rgb(53, 22, 31);\n    border: none;\n    padding: 3px;\n    background-color: rgba(255, 255, 255, 0.589);\n}\n/* td design with inputs */\n.input-td{\n    padding-left: 10px;\n}\n/* Error message design */\n.err-msg{\n    color: white;\n    display: block;\n    font-weight: 500;\n    text-shadow: 1px 1px 2px rgb(24, 6, 11); \n    padding-left: 0px 3px;\n    font-size: 11px;\n}\n/* register title design */\n.register-title{\n    font-family: myTitle;\n    color: white;\n    font-size: 45px;\n    margin: 0;\n    padding: 0;\n    text-shadow: 2px 2px 3px rgb(32, 9, 20);\n}\n/* Register top div */\n.register-top-div{\n    height: 90%;\n}\n/* Design for screen smaller than 575px */\n@media screen and (max-width: 575px) { \n    \n    /* td design with inputs */\n    .input-td{\n        padding-left: 10px;\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtCQUFrQjtBQUNsQjtJQUNJLFFBQVE7SUFDUixZQUFZO0lBQ1osdUVBQXVFO0lBQ3ZFLGtCQUFrQjtBQUN0QjtBQUVBLDJCQUEyQjtBQUMzQjtJQUNJLFFBQVE7SUFDUix5QkFBeUI7SUFDekIsc0VBQXNFO0lBQ3RFLGtCQUFrQjtBQUN0QjtBQUVBLHVCQUF1QjtBQUN2QjtJQUNJLFlBQVk7QUFDaEI7QUFFQSw0QkFBNEI7QUFDNUI7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsdUNBQXVDO0lBQ3ZDLFlBQVk7SUFDWixZQUFZO0lBQ1osNENBQTRDO0FBQ2hEO0FBRUEsMEJBQTBCO0FBQzFCO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBRUEseUJBQXlCO0FBQ3pCO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsdUNBQXVDO0lBQ3ZDLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25CO0FBRUEsMEJBQTBCO0FBQzFCO0lBQ0ksb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixlQUFlO0lBQ2YsU0FBUztJQUNULFVBQVU7SUFDVix1Q0FBdUM7QUFDM0M7QUFFQSxxQkFBcUI7QUFDckI7SUFDSSxXQUFXO0FBQ2Y7QUFFQSx5Q0FBeUM7QUFDekM7O0lBRUksMEJBQTBCO0lBQzFCO1FBQ0ksa0JBQWtCO0lBQ3RCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBCdXR0b24gZGVzaWduICovXG4ucmVnaXN0ZXItYnV0dG9ue1xuICAgIG1hcmdpbjowO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoIHJnYigxMjEsIDUwLCA3NCksICByZ2IoMTI2LCAzOSwgNTkpKTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi8qIEJ1dHRvbiBkaXNhYmxlZCBkZXNpZ24gKi9cbi5yZWdpc3Rlci1idXR0b246ZGlzYWJsZWR7XG4gICAgbWFyZ2luOjA7XG4gICAgY29sb3I6IHJnYigxNDYsIDE0NiwgMTQ2KTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoIHJnYigxMjEsIDkzLCAxMDEpLCByZ2IoODgsIDU0LCA2MykpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLyogVGFibGUsdHIsdGQgZGVzaWduICovXG50YWJsZSwgdHIsIHRke1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLyogSW5wdXQgYW5kIHNlbGVjdCBkZXNpZ24gKi9cbmlucHV0LCBzZWxlY3R7XG4gICAgd2lkdGg6MTkwcHg7XG4gICAgbWFyZ2luOiA3cHg7XG4gICAgaGVpZ2h0OiAyNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBib3gtc2hhZG93OiAzcHggMnB4IDVweCByZ2IoNTMsIDIyLCAzMSk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDNweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTg5KTtcbn1cblxuLyogdGQgZGVzaWduIHdpdGggaW5wdXRzICovXG4uaW5wdXQtdGR7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4vKiBFcnJvciBtZXNzYWdlIGRlc2lnbiAqL1xuLmVyci1tc2d7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IHJnYigyNCwgNiwgMTEpOyBcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAzcHg7XG4gICAgZm9udC1zaXplOiAxMXB4O1xufVxuXG4vKiByZWdpc3RlciB0aXRsZSBkZXNpZ24gKi9cbi5yZWdpc3Rlci10aXRsZXtcbiAgICBmb250LWZhbWlseTogbXlUaXRsZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiA0NXB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHRleHQtc2hhZG93OiAycHggMnB4IDNweCByZ2IoMzIsIDksIDIwKTtcbn1cblxuLyogUmVnaXN0ZXIgdG9wIGRpdiAqL1xuLnJlZ2lzdGVyLXRvcC1kaXZ7XG4gICAgaGVpZ2h0OiA5MCU7XG59XG5cbi8qIERlc2lnbiBmb3Igc2NyZWVuIHNtYWxsZXIgdGhhbiA1NzVweCAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHsgXG4gICAgXG4gICAgLyogdGQgZGVzaWduIHdpdGggaW5wdXRzICovXG4gICAgLmlucHV0LXRke1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgfVxufVxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/components/register/register.component.ts": 
        /*!***********************************************************!*\
          !*** ./src/app/components/register/register.component.ts ***!
          \***********************************************************/
        /*! exports provided: RegisterComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () { return RegisterComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_models_customer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/customer */ "./src/app/models/customer.ts");
            /* harmony import */ var src_app_models_city__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/city */ "./src/app/models/city.ts");
            /* harmony import */ var src_app_services_cities_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/cities.service */ "./src/app/services/cities.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_services_register_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/register.service */ "./src/app/services/register.service.ts");
            /* harmony import */ var src_app_models_cart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/cart */ "./src/app/models/cart.ts");
            /* harmony import */ var ng2_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-redux */ "./node_modules/ng2-redux/lib/index.js");
            /* harmony import */ var ng2_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(ng2_redux__WEBPACK_IMPORTED_MODULE_8__);
            /* harmony import */ var src_app_redux_actionType__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/redux/actionType */ "./src/app/redux/actionType.ts");
            var RegisterComponent = /** @class */ (function () {
                function RegisterComponent(citiesService, registerService, router, redux) {
                    this.citiesService = citiesService;
                    this.registerService = registerService;
                    this.router = router;
                    this.redux = redux;
                    this.isZero = false;
                    this.isAgularBrackets = false;
                    this.customer = new src_app_models_customer__WEBPACK_IMPORTED_MODULE_2__["Customer"]();
                    this.customer.city = new src_app_models_city__WEBPACK_IMPORTED_MODULE_3__["City"]();
                    this.customer.city._id = "city";
                    this.cities = [];
                    this.cart = new src_app_models_cart__WEBPACK_IMPORTED_MODULE_7__["Cart"]();
                }
                // Invoked at the beginning of the component's lifecycle:
                RegisterComponent.prototype.ngOnInit = function () {
                    this.subscribeToStore();
                    // get all cities:
                    if (this.redux.getState().cities.length === 0) {
                        this.citiesService.getAllCities();
                    }
                };
                // Subscribe to store:
                RegisterComponent.prototype.subscribeToStore = function () {
                    var _this = this;
                    this.unsubscribe = this.redux.subscribe(function () {
                        _this.cart = _this.redux.getState().cart;
                        _this.cities = _this.redux.getState().cities;
                    });
                };
                // Unsubscribe to store - Invoked a moment before the component's lifecycle ends:
                RegisterComponent.prototype.ngOnDestroy = function () {
                    this.unsubscribe();
                };
                // Add new customer:
                RegisterComponent.prototype.addCustomer = function () {
                    var _this = this;
                    this.customer.newCustomer = true;
                    this.registerService.registerCustomer(this.customer)
                        .subscribe(function (response) {
                        if (response !== false) {
                            _this.customer = response.addedCustomer;
                            var action = { type: src_app_redux_actionType__WEBPACK_IMPORTED_MODULE_9__["ActionType"].GetOneCustomer, payload: _this.customer };
                            _this.redux.dispatch(action);
                            var action2 = { type: src_app_redux_actionType__WEBPACK_IMPORTED_MODULE_9__["ActionType"].GetLatestOrder, payload: null };
                            _this.redux.dispatch(action2);
                            // jwt - JSON Web Token:
                            sessionStorage.setItem("customer", JSON.stringify(_this.customer));
                            sessionStorage.setItem("token", response.token);
                            _this.router.navigate(["/home"]);
                        }
                        else {
                            alert("Email already exists");
                            _this.customer.email = "";
                        }
                    }, function (err) { return alert(err.message); });
                };
                // Cancel registration and go back to home page:
                RegisterComponent.prototype.cancelRegistration = function () {
                    this.router.navigate(["/home"]);
                };
                // Check - is zero:
                RegisterComponent.prototype.noZero = function () {
                    this.isZero = this.customer.houseNumber === 0;
                };
                // Make sure that customer can't use the angular brackets "<" in his password:
                RegisterComponent.prototype.noAngularbrackets = function ($event) {
                    var password = $event.target.value;
                    if (password.includes("<")) {
                        this.isAgularBrackets = true;
                    }
                    else {
                        this.isAgularBrackets = false;
                    }
                };
                return RegisterComponent;
            }());
            RegisterComponent.ctorParameters = function () { return [
                { type: src_app_services_cities_service__WEBPACK_IMPORTED_MODULE_4__["CitiesService"] },
                { type: src_app_services_register_service__WEBPACK_IMPORTED_MODULE_6__["RegisterService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
                { type: ng2_redux__WEBPACK_IMPORTED_MODULE_8__["NgRedux"] }
            ]; };
            RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-register',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")).default]
                })
            ], RegisterComponent);
            /***/ 
        }),
        /***/ "./src/app/components/search-products/search-products.component.css": 
        /*!**************************************************************************!*\
          !*** ./src/app/components/search-products/search-products.component.css ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/* Default search button */\n.search-button{\n    visibility: none;\n}\n/* Magnifying glass design */\nimg{\n    width: 19px;\n    height:19px;\n    text-align: center;\n    -webkit-filter: brightness(50%);\n            filter: brightness(50%);\n}\n/* Input box design */\ninput{\n    border-radius: 5px;\n    background-color: rgba(255, 255, 255, 0.253);\n    padding: 2px;\n    margin: 2px;\n}\n/* Button design */\nbutton{\n    border-radius: 4px;\n    background-color: rgba(255, 255, 255, 0.692);\n    height: 30px;\n    margin: 1px;\n}\n/* Design for screen smaller than 575px */\n@media screen and (max-width: 575px) {\n\n    /* Magnifying glass design */\n    img{\n        width: 17px;\n        height:17px;        \n    }\n    \n    /* Input box design */\n    input{\n        border-radius: 3px;\n        width: 100px;\n        height: 25px;\n    }\n    \n    /* Button design */\n    button{\n        height: 28px;\n    }\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gtcHJvZHVjdHMvc2VhcmNoLXByb2R1Y3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMEJBQTBCO0FBQzFCO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBRUEsNEJBQTRCO0FBQzVCO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsK0JBQXVCO1lBQXZCLHVCQUF1QjtBQUMzQjtBQUVBLHFCQUFxQjtBQUNyQjtJQUNJLGtCQUFrQjtJQUNsQiw0Q0FBNEM7SUFDNUMsWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUVBLGtCQUFrQjtBQUNsQjtJQUNJLGtCQUFrQjtJQUNsQiw0Q0FBNEM7SUFDNUMsWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUVBLHlDQUF5QztBQUN6Qzs7SUFFSSw0QkFBNEI7SUFDNUI7UUFDSSxXQUFXO1FBQ1gsV0FBVztJQUNmOztJQUVBLHFCQUFxQjtJQUNyQjtRQUNJLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osWUFBWTtJQUNoQjs7SUFFQSxrQkFBa0I7SUFDbEI7UUFDSSxZQUFZO0lBQ2hCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NlYXJjaC1wcm9kdWN0cy9zZWFyY2gtcHJvZHVjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIERlZmF1bHQgc2VhcmNoIGJ1dHRvbiAqL1xuLnNlYXJjaC1idXR0b257XG4gICAgdmlzaWJpbGl0eTogbm9uZTtcbn1cblxuLyogTWFnbmlmeWluZyBnbGFzcyBkZXNpZ24gKi9cbmltZ3tcbiAgICB3aWR0aDogMTlweDtcbiAgICBoZWlnaHQ6MTlweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDUwJSk7XG59XG5cbi8qIElucHV0IGJveCBkZXNpZ24gKi9cbmlucHV0e1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUzKTtcbiAgICBwYWRkaW5nOiAycHg7XG4gICAgbWFyZ2luOiAycHg7XG59XG5cbi8qIEJ1dHRvbiBkZXNpZ24gKi9cbmJ1dHRvbntcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY5Mik7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIG1hcmdpbjogMXB4O1xufVxuXG4vKiBEZXNpZ24gZm9yIHNjcmVlbiBzbWFsbGVyIHRoYW4gNTc1cHggKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XG5cbiAgICAvKiBNYWduaWZ5aW5nIGdsYXNzIGRlc2lnbiAqL1xuICAgIGltZ3tcbiAgICAgICAgd2lkdGg6IDE3cHg7XG4gICAgICAgIGhlaWdodDoxN3B4OyAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIC8qIElucHV0IGJveCBkZXNpZ24gKi9cbiAgICBpbnB1dHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIGhlaWdodDogMjVweDtcbiAgICB9XG4gICAgXG4gICAgLyogQnV0dG9uIGRlc2lnbiAqL1xuICAgIGJ1dHRvbntcbiAgICAgICAgaGVpZ2h0OiAyOHB4O1xuICAgIH1cbn1cblxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/components/search-products/search-products.component.ts": 
        /*!*************************************************************************!*\
          !*** ./src/app/components/search-products/search-products.component.ts ***!
          \*************************************************************************/
        /*! exports provided: SearchProductsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchProductsComponent", function () { return SearchProductsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/products.service */ "./src/app/services/products.service.ts");
            /* harmony import */ var ng2_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-redux */ "./node_modules/ng2-redux/lib/index.js");
            /* harmony import */ var ng2_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(ng2_redux__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var src_app_redux_actionType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/redux/actionType */ "./src/app/redux/actionType.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var SearchProductsComponent = /** @class */ (function () {
                function SearchProductsComponent(productsService, redux, router) {
                    this.productsService = productsService;
                    this.redux = redux;
                    this.router = router;
                    this.noSearchResultEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.buttonDisabled = true;
                    this.search = "";
                    this.noSearchResult = false;
                }
                // Search product by search word:
                SearchProductsComponent.prototype.searchProductsBySearchWord = function () {
                    var _this = this;
                    var action = { type: src_app_redux_actionType__WEBPACK_IMPORTED_MODULE_4__["ActionType"].GetAllProducts, payload: [] };
                    this.redux.dispatch(action);
                    this.productsService.getAllProductsBySearchWord(this.search)
                        .subscribe(function (products) {
                        if (products.length === 0) {
                            _this.noSearchResult = true;
                            _this.buttonDisabled = true;
                            _this.sendNoSearchResultEvent();
                        }
                        else {
                            var action_1 = { type: src_app_redux_actionType__WEBPACK_IMPORTED_MODULE_4__["ActionType"].GetAllProducts, payload: products };
                            _this.redux.dispatch(action_1);
                            _this.noSearchResult = false;
                            _this.buttonDisabled = false;
                            _this.sendNoSearchResultEvent();
                        }
                    }, function (err) {
                        // if token expired on the server side
                        if (err.status === 401) {
                            alert("Sorry! You are no longer connected. \nPlease login again.");
                            _this.logout();
                        }
                        else {
                            alert(err.message);
                        }
                    });
                    this.search = "";
                };
                // Logout:
                SearchProductsComponent.prototype.logout = function () {
                    sessionStorage.clear();
                    var action = { type: src_app_redux_actionType__WEBPACK_IMPORTED_MODULE_4__["ActionType"].LogOut, payload: undefined };
                    this.redux.dispatch(action);
                    this.router.navigate(["/home"]);
                };
                // Emit an event, send data to parent component:
                SearchProductsComponent.prototype.sendNoSearchResultEvent = function () {
                    this.noSearchResultEvent.emit(this.noSearchResult);
                };
                // Clear search result:
                SearchProductsComponent.prototype.clearSearchResult = function () {
                    var action = { type: src_app_redux_actionType__WEBPACK_IMPORTED_MODULE_4__["ActionType"].GetAllProducts, payload: [] };
                    this.redux.dispatch(action);
                    this.buttonDisabled = true;
                };
                return SearchProductsComponent;
            }());
            SearchProductsComponent.ctorParameters = function () { return [
                { type: src_app_services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"] },
                { type: ng2_redux__WEBPACK_IMPORTED_MODULE_3__["NgRedux"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], SearchProductsComponent.prototype, "noSearchResultEvent", void 0);
            SearchProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-search-products',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search-products.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/search-products/search-products.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search-products.component.css */ "./src/app/components/search-products/search-products.component.css")).default]
                })
            ], SearchProductsComponent);
            /***/ 
        }),
        /***/ "./src/app/components/shopping-page/shopping-page.component.css": 
        /*!**********************************************************************!*\
          !*** ./src/app/components/shopping-page/shopping-page.component.css ***!
          \**********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/* Top page div */\n.master-div{\n    position: relative;\n    height:90%;\n    margin-top: 13px;\n}\n/* Product div design */\n.product-div{\n    display: inline-block;\n    border: 2px solid rgb(187, 187, 187);\n    box-shadow: 2px 2px 3px rgb(97, 97, 97);\n    background-color: rgba(255, 255, 255, 0.37);\n    margin: 5px;\n    padding: 5px;\n    width: 200px;\n    height:160px;\n    border-radius: 5px;\n}\n/* Product div hover design */\n.product-div:hover{\n    display: inline-block;\n    border: 2px solid rgb(212, 212, 212);\n    box-shadow: 2px 2px 3px rgb(97, 97, 97);\n    background-color: rgba(255, 255, 255, 0.61);\n    margin: 5px;\n    padding: 5px;\n    width: 200px;\n    height:160px;\n    border-radius: 5px;\n}\n/* Product text design */\n.product-p{\n    color: rgb(51, 20, 20);\n    font-size: 14px;\n    margin: 2px;\n}\n/* Product image design */\n.product-image{\n    width:100px;\n    height: 100px;\n    -webkit-filter: drop-shadow(2px 2px 3px rgb(29, 5, 14));\n            filter: drop-shadow(2px 2px 3px rgb(29, 5, 14));\n}\n/* container div - containing cart and products section */\n.container{\n    height:90%;\n    width: 100%;\n    padding: 0;\n    margin: 0;\n}\n/* Categories div */\n.categories-div{\n    overflow-y: auto;\n    height: 15%;\n    margin: 5px;\n}\n/* Categories button design */\n.category-button{\n    margin:2px;\n    color: white;\n    background-image: radial-gradient( rgb(121, 50, 74),  rgb(126, 39, 59));\n    border-radius: 5px;\n}\n/* Products section - where products are displayed */\n.products-section{\n    overflow-y: auto;\n    height: 70%;\n    margin: 20px 5px;\n}\n/* Products and Categories div */\n.products-master-div{\n    border: 1px solid rgb(133, 132, 132);\n    width:70%;\n    margin-top: 10px;\n    height:100%;\n    float: left;\n    box-shadow: 3px 3px 5px rgb(48, 48, 48);\n    border-radius: 7px;\n}\n/* Cart div */\n.cart-div{\n    border: 1px solid rgb(153, 153, 153);\n    float: left;\n    width:25%;\n    margin: 10px;\n    height:100%;\n    box-shadow: 3px 3px 5px rgb(88, 88, 88);\n    border-radius: 7px;\n}\n/* Hello and Search div */\n.top-page-div{\n    margin:2px;\n    padding: 2px;\n}\n/* Hello title design */\n.hello-class{\n    display: inline-block;\n    position: absolute;\n    left: 90px;\n    padding:2px;\n    margin: 2px;\n    font-family: myTitle;\n    font-size: 35px;\n    color: white;\n}\n/* Search div design */\n.search-class{\n    display: inline-block;\n    padding:2px;\n    margin: 2px;\n}\n/* Sorry Title design - when no search results were found */\n.sorry{\n    color: white;\n    font-family: myTitle;\n    font-size: 40px;\n    padding: 0;\n    margin: 0;\n}\n/* Text design - when no search results were found */\n.no-result{\n    color: white;\n    padding: 0;\n    margin: 0;\n    font-size: 18px;\n    text-shadow: 2px 2px 3px rgb(24, 6, 14);\n}\n/* Design for screen smaller than 575px */\n@media screen and (max-width: 575px) {\n\n    /* Hello title design */\n    .hello-class{\n        margin: auto;\n        padding: 0;\n        font-size: 30px;\n        display: block;\n        width: 80%;\n        position: relative;\n        left: auto;\n    }\n\n    /* Search div design */\n    .search-class {\n        display: block;\n        margin: 3px;\n        width: 80%;\n    }\n\n    /* container div - containing cart and products section */\n    .container{\n        display: grid;\n        grid-template-columns: repeat(1, 1fr);\n    }\n\n    /* Cart div */\n    .cart-div{\n        grid-row:2;\n        width: 85%;\n        height:330px;\n    }\n\n    /* Products and Categories div */\n    .products-master-div{\n        width: 85%;\n        height: 330px;\n        margin-left:3px ;\n        grid-row:1;\n        float: none;\n    }\n\n    /* Categories div */\n    .categories-div{\n        height: 20%;\n    }\n\n    /* Product div design */\n    .product-div{\n        width: 175px;\n    }\n    \n    /* Product div hover design */\n    .product-div:hover{\n        width:175px;\n    }\n}\n/* Design for screen larger than 575px and smaller than 991px (including 991px) */\n@media screen and (max-width: 991px) and (min-width: 576px) {\n\n    /* Cart div */\n    .cart-div{\n        width: 35%;\n        height:500px;\n    }\n\n    /* Products and Categories div */\n    .products-master-div{\n        width: 55%;\n        height: 500px;\n        margin-left: 5px;\n    }\n\n    /* Product div design */\n    .product-div{\n        width: 160px;\n        height: 140px;\n    }\n    \n    /* Product div hover design */\n    .product-div:hover{\n        width:160px;\n        height: 140px;\n    }\n\n    /* Product text design */\n    .product-p{\n        font-size: 10px;\n    }\n\n    /* Search div design */\n    .search-class{\n        padding-left: 100px;\n    }\n\n    /* Top page div */\n    .master-div{\n        height: 100%;\n    }\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaG9wcGluZy1wYWdlL3Nob3BwaW5nLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUI7QUFDakI7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjtBQUVBLHVCQUF1QjtBQUN2QjtJQUNJLHFCQUFxQjtJQUNyQixvQ0FBb0M7SUFDcEMsdUNBQXVDO0lBQ3ZDLDJDQUEyQztJQUMzQyxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCO0FBRUEsNkJBQTZCO0FBQzdCO0lBQ0kscUJBQXFCO0lBQ3JCLG9DQUFvQztJQUNwQyx1Q0FBdUM7SUFDdkMsMkNBQTJDO0lBQzNDLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7QUFFQSx3QkFBd0I7QUFDeEI7SUFDSSxzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLFdBQVc7QUFDZjtBQUVBLHlCQUF5QjtBQUN6QjtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsdURBQStDO1lBQS9DLCtDQUErQztBQUNuRDtBQUVBLHlEQUF5RDtBQUN6RDtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsVUFBVTtJQUNWLFNBQVM7QUFDYjtBQUVBLG1CQUFtQjtBQUNuQjtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsV0FBVztBQUNmO0FBRUEsNkJBQTZCO0FBQzdCO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWix1RUFBdUU7SUFDdkUsa0JBQWtCO0FBQ3RCO0FBRUEsb0RBQW9EO0FBQ3BEO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7QUFFQSxnQ0FBZ0M7QUFDaEM7SUFDSSxvQ0FBb0M7SUFDcEMsU0FBUztJQUNULGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsV0FBVztJQUNYLHVDQUF1QztJQUN2QyxrQkFBa0I7QUFDdEI7QUFFQSxhQUFhO0FBQ2I7SUFDSSxvQ0FBb0M7SUFDcEMsV0FBVztJQUNYLFNBQVM7SUFDVCxZQUFZO0lBQ1osV0FBVztJQUNYLHVDQUF1QztJQUN2QyxrQkFBa0I7QUFDdEI7QUFFQSx5QkFBeUI7QUFDekI7SUFDSSxVQUFVO0lBQ1YsWUFBWTtBQUNoQjtBQUVBLHVCQUF1QjtBQUN2QjtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixZQUFZO0FBQ2hCO0FBRUEsc0JBQXNCO0FBQ3RCO0lBQ0kscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7QUFFQSwyREFBMkQ7QUFDM0Q7SUFDSSxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixVQUFVO0lBQ1YsU0FBUztBQUNiO0FBRUEsb0RBQW9EO0FBQ3BEO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVixTQUFTO0lBQ1QsZUFBZTtJQUNmLHVDQUF1QztBQUMzQztBQUVBLHlDQUF5QztBQUN6Qzs7SUFFSSx1QkFBdUI7SUFDdkI7UUFDSSxZQUFZO1FBQ1osVUFBVTtRQUNWLGVBQWU7UUFDZixjQUFjO1FBQ2QsVUFBVTtRQUNWLGtCQUFrQjtRQUNsQixVQUFVO0lBQ2Q7O0lBRUEsc0JBQXNCO0lBQ3RCO1FBQ0ksY0FBYztRQUNkLFdBQVc7UUFDWCxVQUFVO0lBQ2Q7O0lBRUEseURBQXlEO0lBQ3pEO1FBQ0ksYUFBYTtRQUNiLHFDQUFxQztJQUN6Qzs7SUFFQSxhQUFhO0lBQ2I7UUFDSSxVQUFVO1FBQ1YsVUFBVTtRQUNWLFlBQVk7SUFDaEI7O0lBRUEsZ0NBQWdDO0lBQ2hDO1FBQ0ksVUFBVTtRQUNWLGFBQWE7UUFDYixnQkFBZ0I7UUFDaEIsVUFBVTtRQUNWLFdBQVc7SUFDZjs7SUFFQSxtQkFBbUI7SUFDbkI7UUFDSSxXQUFXO0lBQ2Y7O0lBRUEsdUJBQXVCO0lBQ3ZCO1FBQ0ksWUFBWTtJQUNoQjs7SUFFQSw2QkFBNkI7SUFDN0I7UUFDSSxXQUFXO0lBQ2Y7QUFDSjtBQUVBLGlGQUFpRjtBQUNqRjs7SUFFSSxhQUFhO0lBQ2I7UUFDSSxVQUFVO1FBQ1YsWUFBWTtJQUNoQjs7SUFFQSxnQ0FBZ0M7SUFDaEM7UUFDSSxVQUFVO1FBQ1YsYUFBYTtRQUNiLGdCQUFnQjtJQUNwQjs7SUFFQSx1QkFBdUI7SUFDdkI7UUFDSSxZQUFZO1FBQ1osYUFBYTtJQUNqQjs7SUFFQSw2QkFBNkI7SUFDN0I7UUFDSSxXQUFXO1FBQ1gsYUFBYTtJQUNqQjs7SUFFQSx3QkFBd0I7SUFDeEI7UUFDSSxlQUFlO0lBQ25COztJQUVBLHNCQUFzQjtJQUN0QjtRQUNJLG1CQUFtQjtJQUN2Qjs7SUFFQSxpQkFBaUI7SUFDakI7UUFDSSxZQUFZO0lBQ2hCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Nob3BwaW5nLXBhZ2Uvc2hvcHBpbmctcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogVG9wIHBhZ2UgZGl2ICovXG4ubWFzdGVyLWRpdntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OjkwJTtcbiAgICBtYXJnaW4tdG9wOiAxM3B4O1xufVxuXG4vKiBQcm9kdWN0IGRpdiBkZXNpZ24gKi9cbi5wcm9kdWN0LWRpdntcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDE4NywgMTg3LCAxODcpO1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggM3B4IHJnYig5NywgOTcsIDk3KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzcpO1xuICAgIG1hcmdpbjogNXB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OjE2MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLyogUHJvZHVjdCBkaXYgaG92ZXIgZGVzaWduICovXG4ucHJvZHVjdC1kaXY6aG92ZXJ7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyMTIsIDIxMiwgMjEyKTtcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDNweCByZ2IoOTcsIDk3LCA5Nyk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYxKTtcbiAgICBtYXJnaW46IDVweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDoxNjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi8qIFByb2R1Y3QgdGV4dCBkZXNpZ24gKi9cbi5wcm9kdWN0LXB7XG4gICAgY29sb3I6IHJnYig1MSwgMjAsIDIwKTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luOiAycHg7XG59XG5cbi8qIFByb2R1Y3QgaW1hZ2UgZGVzaWduICovXG4ucHJvZHVjdC1pbWFnZXtcbiAgICB3aWR0aDoxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMnB4IDJweCAzcHggcmdiKDI5LCA1LCAxNCkpO1xufVxuXG4vKiBjb250YWluZXIgZGl2IC0gY29udGFpbmluZyBjYXJ0IGFuZCBwcm9kdWN0cyBzZWN0aW9uICovXG4uY29udGFpbmVye1xuICAgIGhlaWdodDo5MCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG59XG5cbi8qIENhdGVnb3JpZXMgZGl2ICovXG4uY2F0ZWdvcmllcy1kaXZ7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBoZWlnaHQ6IDE1JTtcbiAgICBtYXJnaW46IDVweDtcbn1cblxuLyogQ2F0ZWdvcmllcyBidXR0b24gZGVzaWduICovXG4uY2F0ZWdvcnktYnV0dG9ue1xuICAgIG1hcmdpbjoycHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudCggcmdiKDEyMSwgNTAsIDc0KSwgIHJnYigxMjYsIDM5LCA1OSkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLyogUHJvZHVjdHMgc2VjdGlvbiAtIHdoZXJlIHByb2R1Y3RzIGFyZSBkaXNwbGF5ZWQgKi9cbi5wcm9kdWN0cy1zZWN0aW9ue1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgaGVpZ2h0OiA3MCU7XG4gICAgbWFyZ2luOiAyMHB4IDVweDtcbn1cblxuLyogUHJvZHVjdHMgYW5kIENhdGVnb3JpZXMgZGl2ICovXG4ucHJvZHVjdHMtbWFzdGVyLWRpdntcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTMzLCAxMzIsIDEzMik7XG4gICAgd2lkdGg6NzAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgaGVpZ2h0OjEwMCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgYm94LXNoYWRvdzogM3B4IDNweCA1cHggcmdiKDQ4LCA0OCwgNDgpO1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cblxuLyogQ2FydCBkaXYgKi9cbi5jYXJ0LWRpdntcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTUzLCAxNTMsIDE1Myk7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6MjUlO1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBoZWlnaHQ6MTAwJTtcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDVweCByZ2IoODgsIDg4LCA4OCk7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuXG4vKiBIZWxsbyBhbmQgU2VhcmNoIGRpdiAqL1xuLnRvcC1wYWdlLWRpdntcbiAgICBtYXJnaW46MnB4O1xuICAgIHBhZGRpbmc6IDJweDtcbn1cblxuLyogSGVsbG8gdGl0bGUgZGVzaWduICovXG4uaGVsbG8tY2xhc3N7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA5MHB4O1xuICAgIHBhZGRpbmc6MnB4O1xuICAgIG1hcmdpbjogMnB4O1xuICAgIGZvbnQtZmFtaWx5OiBteVRpdGxlO1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi8qIFNlYXJjaCBkaXYgZGVzaWduICovXG4uc2VhcmNoLWNsYXNze1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOjJweDtcbiAgICBtYXJnaW46IDJweDtcbn1cblxuLyogU29ycnkgVGl0bGUgZGVzaWduIC0gd2hlbiBubyBzZWFyY2ggcmVzdWx0cyB3ZXJlIGZvdW5kICovXG4uc29ycnl7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtZmFtaWx5OiBteVRpdGxlO1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbn1cblxuLyogVGV4dCBkZXNpZ24gLSB3aGVuIG5vIHNlYXJjaCByZXN1bHRzIHdlcmUgZm91bmQgKi9cbi5uby1yZXN1bHR7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCAzcHggcmdiKDI0LCA2LCAxNCk7XG59XG5cbi8qIERlc2lnbiBmb3Igc2NyZWVuIHNtYWxsZXIgdGhhbiA1NzVweCAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcblxuICAgIC8qIEhlbGxvIHRpdGxlIGRlc2lnbiAqL1xuICAgIC5oZWxsby1jbGFzc3tcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGxlZnQ6IGF1dG87XG4gICAgfVxuXG4gICAgLyogU2VhcmNoIGRpdiBkZXNpZ24gKi9cbiAgICAuc2VhcmNoLWNsYXNzIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbjogM3B4O1xuICAgICAgICB3aWR0aDogODAlO1xuICAgIH1cblxuICAgIC8qIGNvbnRhaW5lciBkaXYgLSBjb250YWluaW5nIGNhcnQgYW5kIHByb2R1Y3RzIHNlY3Rpb24gKi9cbiAgICAuY29udGFpbmVye1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xuICAgIH1cblxuICAgIC8qIENhcnQgZGl2ICovXG4gICAgLmNhcnQtZGl2e1xuICAgICAgICBncmlkLXJvdzoyO1xuICAgICAgICB3aWR0aDogODUlO1xuICAgICAgICBoZWlnaHQ6MzMwcHg7XG4gICAgfVxuXG4gICAgLyogUHJvZHVjdHMgYW5kIENhdGVnb3JpZXMgZGl2ICovXG4gICAgLnByb2R1Y3RzLW1hc3Rlci1kaXZ7XG4gICAgICAgIHdpZHRoOiA4NSU7XG4gICAgICAgIGhlaWdodDogMzMwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OjNweCA7XG4gICAgICAgIGdyaWQtcm93OjE7XG4gICAgICAgIGZsb2F0OiBub25lO1xuICAgIH1cblxuICAgIC8qIENhdGVnb3JpZXMgZGl2ICovXG4gICAgLmNhdGVnb3JpZXMtZGl2e1xuICAgICAgICBoZWlnaHQ6IDIwJTtcbiAgICB9XG5cbiAgICAvKiBQcm9kdWN0IGRpdiBkZXNpZ24gKi9cbiAgICAucHJvZHVjdC1kaXZ7XG4gICAgICAgIHdpZHRoOiAxNzVweDtcbiAgICB9XG4gICAgXG4gICAgLyogUHJvZHVjdCBkaXYgaG92ZXIgZGVzaWduICovXG4gICAgLnByb2R1Y3QtZGl2OmhvdmVye1xuICAgICAgICB3aWR0aDoxNzVweDtcbiAgICB9XG59XG5cbi8qIERlc2lnbiBmb3Igc2NyZWVuIGxhcmdlciB0aGFuIDU3NXB4IGFuZCBzbWFsbGVyIHRoYW4gOTkxcHggKGluY2x1ZGluZyA5OTFweCkgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSBhbmQgKG1pbi13aWR0aDogNTc2cHgpIHtcblxuICAgIC8qIENhcnQgZGl2ICovXG4gICAgLmNhcnQtZGl2e1xuICAgICAgICB3aWR0aDogMzUlO1xuICAgICAgICBoZWlnaHQ6NTAwcHg7XG4gICAgfVxuXG4gICAgLyogUHJvZHVjdHMgYW5kIENhdGVnb3JpZXMgZGl2ICovXG4gICAgLnByb2R1Y3RzLW1hc3Rlci1kaXZ7XG4gICAgICAgIHdpZHRoOiA1NSU7XG4gICAgICAgIGhlaWdodDogNTAwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgfVxuXG4gICAgLyogUHJvZHVjdCBkaXYgZGVzaWduICovXG4gICAgLnByb2R1Y3QtZGl2e1xuICAgICAgICB3aWR0aDogMTYwcHg7XG4gICAgICAgIGhlaWdodDogMTQwcHg7XG4gICAgfVxuICAgIFxuICAgIC8qIFByb2R1Y3QgZGl2IGhvdmVyIGRlc2lnbiAqL1xuICAgIC5wcm9kdWN0LWRpdjpob3ZlcntcbiAgICAgICAgd2lkdGg6MTYwcHg7XG4gICAgICAgIGhlaWdodDogMTQwcHg7XG4gICAgfVxuXG4gICAgLyogUHJvZHVjdCB0ZXh0IGRlc2lnbiAqL1xuICAgIC5wcm9kdWN0LXB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICB9XG5cbiAgICAvKiBTZWFyY2ggZGl2IGRlc2lnbiAqL1xuICAgIC5zZWFyY2gtY2xhc3N7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTAwcHg7XG4gICAgfVxuXG4gICAgLyogVG9wIHBhZ2UgZGl2ICovXG4gICAgLm1hc3Rlci1kaXZ7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG59XG5cbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/shopping-page/shopping-page.component.ts": 
        /*!*********************************************************************!*\
          !*** ./src/app/components/shopping-page/shopping-page.component.ts ***!
          \*********************************************************************/
        /*! exports provided: ShoppingPageComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingPageComponent", function () { return ShoppingPageComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/categories.service */ "./src/app/services/categories.service.ts");
            /* harmony import */ var src_app_services_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/products.service */ "./src/app/services/products.service.ts");
            /* harmony import */ var ng2_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-redux */ "./node_modules/ng2-redux/lib/index.js");
            /* harmony import */ var ng2_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(ng2_redux__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_services_customers_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/customers.service */ "./src/app/services/customers.service.ts");
            /* harmony import */ var src_app_redux_actionType__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/redux/actionType */ "./src/app/redux/actionType.ts");
            /* harmony import */ var src_app_services_carts_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/carts.service */ "./src/app/services/carts.service.ts");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var _popups_products_popups_products_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../popups-products/popups-products.component */ "./src/app/components/popups-products/popups-products.component.ts");
            /* harmony import */ var src_app_services_carts_items_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/carts-items.service */ "./src/app/services/carts-items.service.ts");
            var ShoppingPageComponent = /** @class */ (function () {
                function ShoppingPageComponent(modalService, categoriesService, productsService, customersService, cartsItemsService, cartsService, router, activatedRoute, redux) {
                    this.modalService = modalService;
                    this.categoriesService = categoriesService;
                    this.productsService = productsService;
                    this.customersService = customersService;
                    this.cartsItemsService = cartsItemsService;
                    this.cartsService = cartsService;
                    this.router = router;
                    this.activatedRoute = activatedRoute;
                    this.redux = redux;
                    this.noSearchResult = false;
                }
                // Invoked at the beginning of the component's lifecycle:
                ShoppingPageComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    // if customer is logged in:
                    if (this.isCustomerLoggedIn()) {
                        this.subscribeToStore();
                        // get all categories:
                        if (this.redux.getState().categories.length === 0) {
                            this.categoriesService.getAllCategories();
                        }
                        var userID = this.activatedRoute.snapshot.params.userID;
                        // get customer by Id:
                        if (this.customer === null || this.customer === undefined) {
                            this.customersService.getOneCustomer(userID);
                        }
                        //get all users carts: 
                        if (this.carts === null || this.carts === undefined || this.cartsItems.length === 0) {
                            this.cartsService.getAllCartsByCutomerID(userID)
                                .subscribe(function (carts) {
                                var action = { type: src_app_redux_actionType__WEBPACK_IMPORTED_MODULE_7__["ActionType"].GetAllCarts, payload: carts };
                                _this.redux.dispatch(action);
                                _this.getOneCart(carts);
                            }, function (err) {
                                // if token expired on the server side
                                if (err.status === 401) {
                                    alert("Sorry! You are no longer connected. \nPlease login again.");
                                    _this.logout();
                                }
                                else {
                                    alert(err.message);
                                }
                            });
                        }
                    }
                    // if customer is not logged in:
                    else {
                        this.logout();
                    }
                };
                // Subscribe to store:
                ShoppingPageComponent.prototype.subscribeToStore = function () {
                    var _this = this;
                    this.unsubscribe = this.redux.subscribe(function () {
                        _this.products = _this.redux.getState().products;
                        _this.customer = _this.redux.getState().customer;
                        _this.carts = _this.redux.getState().carts;
                        _this.cart = _this.redux.getState().cart;
                        _this.cartsItems = _this.redux.getState().cartsItems;
                        _this.categories = _this.redux.getState().categories;
                    });
                };
                // Logout:
                ShoppingPageComponent.prototype.logout = function () {
                    sessionStorage.clear();
                    var action = { type: src_app_redux_actionType__WEBPACK_IMPORTED_MODULE_7__["ActionType"].LogOut, payload: undefined };
                    this.redux.dispatch(action);
                    this.router.navigate(["/home"]);
                };
                // Check if customer is logged in:
                ShoppingPageComponent.prototype.isCustomerLoggedIn = function () {
                    return sessionStorage.getItem("customer") !== null;
                };
                // Unsubscribe to store - Invoked a moment before the component's life cycle ends:
                ShoppingPageComponent.prototype.ngOnDestroy = function () {
                    if (this.unsubscribe) {
                        this.unsubscribe();
                    }
                };
                // Get all products by category:
                ShoppingPageComponent.prototype.getAllProductsByCategory = function (_id) {
                    this.noSearchResult = false;
                    this.productsService.getAllProductsByCategory(_id);
                };
                // Get one cart by status "open:true" :
                ShoppingPageComponent.prototype.getOneCart = function (carts) {
                    for (var _i = 0, carts_3 = carts; _i < carts_3.length; _i++) {
                        var cart = carts_3[_i];
                        if (cart.open === true) {
                            var action = { type: src_app_redux_actionType__WEBPACK_IMPORTED_MODULE_7__["ActionType"].GetOneCart, payload: cart };
                            this.redux.dispatch(action);
                            this.getAllCartsItemsByCartId(cart._id);
                        }
                    }
                };
                // Get all carts-items by cart Id:
                ShoppingPageComponent.prototype.getAllCartsItemsByCartId = function (_id) {
                    this.cartsItemsService.getAllCartsItemsByCartID(_id);
                };
                // Open modal function - for selecting a product to add to cart
                ShoppingPageComponent.prototype.selectProduct = function (prod) {
                    var modalRef = this.modalService.open(_popups_products_popups_products_component__WEBPACK_IMPORTED_MODULE_10__["PopupsProductsComponent"]);
                    modalRef.componentInstance.product = prod;
                    modalRef.componentInstance.currentCart = this.cart;
                    this.totalAmount = this.calculateTotalCartAmount();
                    modalRef.componentInstance.totalAmount = this.totalAmount;
                };
                // Calculate total amount to pay:
                ShoppingPageComponent.prototype.calculateTotalCartAmount = function () {
                    var sum = 0;
                    for (var i = 0; i < this.cartsItems.length; i++) {
                        sum += this.cartsItems[i].price;
                    }
                    return sum;
                };
                // Receive true or false from search result
                ShoppingPageComponent.prototype.receiveNoSearchResult = function ($event) {
                    this.noSearchResult = $event;
                };
                return ShoppingPageComponent;
            }());
            ShoppingPageComponent.ctorParameters = function () { return [
                { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModal"] },
                { type: src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"] },
                { type: src_app_services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"] },
                { type: src_app_services_customers_service__WEBPACK_IMPORTED_MODULE_6__["CustomersService"] },
                { type: src_app_services_carts_items_service__WEBPACK_IMPORTED_MODULE_11__["CartsItemsService"] },
                { type: src_app_services_carts_service__WEBPACK_IMPORTED_MODULE_8__["CartsService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
                { type: ng2_redux__WEBPACK_IMPORTED_MODULE_4__["NgRedux"] }
            ]; };
            ShoppingPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-shopping-page',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./shopping-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shopping-page/shopping-page.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./shopping-page.component.css */ "./src/app/components/shopping-page/shopping-page.component.css")).default]
                })
            ], ShoppingPageComponent);
            /***/ 
        }),
        /***/ "./src/app/components/site-menu/site-menu.component.css": 
        /*!**************************************************************!*\
          !*** ./src/app/components/site-menu/site-menu.component.css ***!
          \**************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/* Nav design */\nnav{\n    display: inline-block;\n}\n/* Div design */\ndiv{\n    display: inline-block;\n}\n/* \"Navigation bar\" - logout, home, ans span design */\n.logout-button, a, span{\n    color: rgb(255, 255, 255);\n    text-decoration: none;\n    font-size: 15px;\n}\n/* Logout button design */\n.logout-button{\n    margin: 0;\n    padding: 0;\n    padding-bottom: 4px;\n    font-size: 15px;\n}\n/* Logo image */\nimg{\n    width:30px;\n    height:25px;\n    display: block;\n    -webkit-filter: invert(100%) drop-shadow(2px 2px 3px rgb(20, 3, 9));\n            filter: invert(100%) drop-shadow(2px 2px 3px rgb(20, 3, 9));\n    margin: auto;\n}\n/* Site name- part of logo design */\np{\n    color: white;\n    text-shadow: 2px 2px 3px rgb(22, 5, 12);\n    font-family: myTitle;\n    font-size: 27px;\n    margin: 0;\n}\n/* Logo div */\n.logo-div{\n    display: block;\n}\n/* Design for screen smaller than 575px */\n@media screen and (max-width: 575px) {\n\n    /* Logo image */\n    img {\n        width: 25px;\n        height: 20px;\n    }\n\n    /* Site name- part of logo design */\n    p{\n        font-size: 20px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaXRlLW1lbnUvc2l0ZS1tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZUFBZTtBQUNmO0lBQ0kscUJBQXFCO0FBQ3pCO0FBRUEsZUFBZTtBQUNmO0lBQ0kscUJBQXFCO0FBQ3pCO0FBRUEscURBQXFEO0FBQ3JEO0lBQ0kseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25CO0FBRUEseUJBQXlCO0FBQ3pCO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjtBQUVBLGVBQWU7QUFDZjtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsY0FBYztJQUNkLG1FQUEyRDtZQUEzRCwyREFBMkQ7SUFDM0QsWUFBWTtBQUNoQjtBQUVBLG1DQUFtQztBQUNuQztJQUNJLFlBQVk7SUFDWix1Q0FBdUM7SUFDdkMsb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixTQUFTO0FBQ2I7QUFFQSxhQUFhO0FBQ2I7SUFDSSxjQUFjO0FBQ2xCO0FBRUEseUNBQXlDO0FBQ3pDOztJQUVJLGVBQWU7SUFDZjtRQUNJLFdBQVc7UUFDWCxZQUFZO0lBQ2hCOztJQUVBLG1DQUFtQztJQUNuQztRQUNJLGVBQWU7SUFDbkI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2l0ZS1tZW51L3NpdGUtbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogTmF2IGRlc2lnbiAqL1xubmF2e1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLyogRGl2IGRlc2lnbiAqL1xuZGl2e1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLyogXCJOYXZpZ2F0aW9uIGJhclwiIC0gbG9nb3V0LCBob21lLCBhbnMgc3BhbiBkZXNpZ24gKi9cbi5sb2dvdXQtYnV0dG9uLCBhLCBzcGFue1xuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLyogTG9nb3V0IGJ1dHRvbiBkZXNpZ24gKi9cbi5sb2dvdXQtYnV0dG9ue1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4vKiBMb2dvIGltYWdlICovXG5pbWd7XG4gICAgd2lkdGg6MzBweDtcbiAgICBoZWlnaHQ6MjVweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKSBkcm9wLXNoYWRvdygycHggMnB4IDNweCByZ2IoMjAsIDMsIDkpKTtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi8qIFNpdGUgbmFtZS0gcGFydCBvZiBsb2dvIGRlc2lnbiAqL1xucHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggM3B4IHJnYigyMiwgNSwgMTIpO1xuICAgIGZvbnQtZmFtaWx5OiBteVRpdGxlO1xuICAgIGZvbnQtc2l6ZTogMjdweDtcbiAgICBtYXJnaW46IDA7XG59XG5cbi8qIExvZ28gZGl2ICovXG4ubG9nby1kaXZ7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qIERlc2lnbiBmb3Igc2NyZWVuIHNtYWxsZXIgdGhhbiA1NzVweCAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcblxuICAgIC8qIExvZ28gaW1hZ2UgKi9cbiAgICBpbWcge1xuICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgIH1cblxuICAgIC8qIFNpdGUgbmFtZS0gcGFydCBvZiBsb2dvIGRlc2lnbiAqL1xuICAgIHB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/components/site-menu/site-menu.component.ts": 
        /*!*************************************************************!*\
          !*** ./src/app/components/site-menu/site-menu.component.ts ***!
          \*************************************************************/
        /*! exports provided: SiteMenuComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteMenuComponent", function () { return SiteMenuComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var ng2_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-redux */ "./node_modules/ng2-redux/lib/index.js");
            /* harmony import */ var ng2_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(ng2_redux__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var src_app_redux_actionType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/redux/actionType */ "./src/app/redux/actionType.ts");
            var SiteMenuComponent = /** @class */ (function () {
                function SiteMenuComponent(router, redux) {
                    this.router = router;
                    this.redux = redux;
                }
                // Invoked at the beginning of the component's lifecycle:
                SiteMenuComponent.prototype.ngOnInit = function () {
                    this.subscribeToStore();
                };
                // Subscribe to store:
                SiteMenuComponent.prototype.subscribeToStore = function () {
                    var _this = this;
                    this.unsubscribe = this.redux.subscribe(function () {
                        _this.admin = _this.redux.getState().admin;
                        _this.customer = _this.redux.getState().customer;
                    });
                };
                // Unsubscribe to store - Invoked a moment before the component' lifecycle ends:
                SiteMenuComponent.prototype.ngOnDestroy = function () {
                    this.unsubscribe();
                };
                // Logout:
                SiteMenuComponent.prototype.logout = function ($event) {
                    $event.preventDefault();
                    sessionStorage.clear();
                    var action = { type: src_app_redux_actionType__WEBPACK_IMPORTED_MODULE_4__["ActionType"].LogOut, payload: undefined };
                    this.redux.dispatch(action);
                    this.router.navigate(["/home"]);
                };
                return SiteMenuComponent;
            }());
            SiteMenuComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: ng2_redux__WEBPACK_IMPORTED_MODULE_3__["NgRedux"] }
            ]; };
            SiteMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-site-menu',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./site-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/site-menu/site-menu.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./site-menu.component.css */ "./src/app/components/site-menu/site-menu.component.css")).default]
                })
            ], SiteMenuComponent);
            /***/ 
        }),
        /***/ "./src/app/components/update-product/update-product.component.css": 
        /*!************************************************************************!*\
          !*** ./src/app/components/update-product/update-product.component.css ***!
          \************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/* Button design */\nbutton{\n    margin:2px;\n    color: white;\n    background-image: radial-gradient( rgb(121, 50, 74),  rgb(126, 39, 59));\n    border-radius: 5px;\n}\n/* Button disabled design */\nbutton:disabled{\n    margin:0;\n    color: rgb(146, 146, 146);\n    background-image: radial-gradient( rgb(121, 93, 101), rgb(88, 54, 63));\n    border-radius: 5px;\n}\n/* Title design */\np{\n    color:white;\n    font-family: myTitle;\n    font-size: 35px;\n    margin: 0;\n    padding: 0;\n}\n/* Table, tr, td design */\ntable, tr, td{\n    margin: 0;\n    padding: 0;\n}\n/* Table design */\ntable{\n    margin: auto;\n}\n/* td with input design */\n.input-td{\n    padding: 0;\n    width: 250px;\n    height: 60px;\n    vertical-align: baseline;\n}\n/* Customized upload image button */\n.upload-image-button{\n    width: 120px;\n    height: 30px;\n    margin:0;\n    color: white;\n    background-image: radial-gradient( rgb(121, 50, 74),  rgb(126, 39, 59));\n    border-radius: 4px;\n    border-top: 2px solid white;\n    border-left: 2px solid white;\n    border-right: 2px solid rgb(80, 80, 80);\n    border-bottom: 2px solid rgb(80, 80, 80);\n}\n/* Customized upload image button when hover */\n.upload-image-button:hover{\n    width: 120px;\n    height: 30px;\n    margin:0;\n    color: white;\n    background-image: radial-gradient( rgb(121, 50, 74),  rgb(126, 39, 59));\n    border-radius: 4px;\n    border-top: 2px solid white;\n    border-left: 2px solid white;\n    border-right: 2px solid rgb(80, 80, 80);\n    border-bottom: 2px solid rgb(80, 80, 80);\n    cursor: pointer;\n}\n/* Customized upload image button when clicking on it*/\n.upload-image-button:active{\n    width: 120px;\n    height: 30px;\n    margin:0;\n    color: white;\n    background-image: radial-gradient( rgb(121, 50, 74),  rgb(126, 39, 59));\n    border-radius: 4px;\n    border-top: 2px solid rgb(80, 80, 80);\n    border-left: 2px solid rgb(80, 80, 80);\n    border-right: 2px solid white;\n    border-bottom: 2px solid white;\n    cursor: pointer;\n}\n/* Error message design */\n.err-msg{\n    color: white;\n    display: block;\n    font-weight: 500;\n    text-shadow: 1px 1px 2px rgb(24, 6, 11); \n    padding-left: 0px 3px;\n    font-size: 11px;\n}\n/* Input and Select boxs design */\ninput, select{\n    width:190px;\n    height: 30px;\n    border-radius: 3px;\n    box-shadow: 3px 2px 5px rgb(53, 22, 31);\n    border: none;\n    background-color: rgba(255, 255, 255, 0.589);\n}\n/* Doesn't display the file select button and the text next to it */\ninput[type=\"file\"]{\n    display: none;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91cGRhdGUtcHJvZHVjdC91cGRhdGUtcHJvZHVjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtCQUFrQjtBQUNsQjtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osdUVBQXVFO0lBQ3ZFLGtCQUFrQjtBQUN0QjtBQUVBLDJCQUEyQjtBQUMzQjtJQUNJLFFBQVE7SUFDUix5QkFBeUI7SUFDekIsc0VBQXNFO0lBQ3RFLGtCQUFrQjtBQUN0QjtBQUVBLGlCQUFpQjtBQUNqQjtJQUNJLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7QUFFQSx5QkFBeUI7QUFDekI7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkO0FBRUEsaUJBQWlCO0FBQ2pCO0lBQ0ksWUFBWTtBQUNoQjtBQUVBLHlCQUF5QjtBQUN6QjtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osWUFBWTtJQUNaLHdCQUF3QjtBQUM1QjtBQUVBLG1DQUFtQztBQUNuQztJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osUUFBUTtJQUNSLFlBQVk7SUFDWix1RUFBdUU7SUFDdkUsa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsdUNBQXVDO0lBQ3ZDLHdDQUF3QztBQUM1QztBQUVBLDhDQUE4QztBQUM5QztJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osUUFBUTtJQUNSLFlBQVk7SUFDWix1RUFBdUU7SUFDdkUsa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsdUNBQXVDO0lBQ3ZDLHdDQUF3QztJQUN4QyxlQUFlO0FBQ25CO0FBRUEsc0RBQXNEO0FBQ3REO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixRQUFRO0lBQ1IsWUFBWTtJQUNaLHVFQUF1RTtJQUN2RSxrQkFBa0I7SUFDbEIscUNBQXFDO0lBQ3JDLHNDQUFzQztJQUN0Qyw2QkFBNkI7SUFDN0IsOEJBQThCO0lBQzlCLGVBQWU7QUFDbkI7QUFFQSx5QkFBeUI7QUFDekI7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLGdCQUFnQjtJQUNoQix1Q0FBdUM7SUFDdkMscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7QUFFQSxpQ0FBaUM7QUFDakM7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix1Q0FBdUM7SUFDdkMsWUFBWTtJQUNaLDRDQUE0QztBQUNoRDtBQUdBLG1FQUFtRTtBQUNuRTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VwZGF0ZS1wcm9kdWN0L3VwZGF0ZS1wcm9kdWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBCdXR0b24gZGVzaWduICovXG5idXR0b257XG4gICAgbWFyZ2luOjJweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KCByZ2IoMTIxLCA1MCwgNzQpLCAgcmdiKDEyNiwgMzksIDU5KSk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4vKiBCdXR0b24gZGlzYWJsZWQgZGVzaWduICovXG5idXR0b246ZGlzYWJsZWR7XG4gICAgbWFyZ2luOjA7XG4gICAgY29sb3I6IHJnYigxNDYsIDE0NiwgMTQ2KTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoIHJnYigxMjEsIDkzLCAxMDEpLCByZ2IoODgsIDU0LCA2MykpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLyogVGl0bGUgZGVzaWduICovXG5we1xuICAgIGNvbG9yOndoaXRlO1xuICAgIGZvbnQtZmFtaWx5OiBteVRpdGxlO1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuLyogVGFibGUsIHRyLCB0ZCBkZXNpZ24gKi9cbnRhYmxlLCB0ciwgdGR7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbi8qIFRhYmxlIGRlc2lnbiAqL1xudGFibGV7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4vKiB0ZCB3aXRoIGlucHV0IGRlc2lnbiAqL1xuLmlucHV0LXRke1xuICAgIHBhZGRpbmc6IDA7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGhlaWdodDogNjBweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbi8qIEN1c3RvbWl6ZWQgdXBsb2FkIGltYWdlIGJ1dHRvbiAqL1xuLnVwbG9hZC1pbWFnZS1idXR0b257XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBtYXJnaW46MDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KCByZ2IoMTIxLCA1MCwgNzQpLCAgcmdiKDEyNiwgMzksIDU5KSk7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCB3aGl0ZTtcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHdoaXRlO1xuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHJnYig4MCwgODAsIDgwKTtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiKDgwLCA4MCwgODApO1xufVxuXG4vKiBDdXN0b21pemVkIHVwbG9hZCBpbWFnZSBidXR0b24gd2hlbiBob3ZlciAqL1xuLnVwbG9hZC1pbWFnZS1idXR0b246aG92ZXJ7XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBtYXJnaW46MDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KCByZ2IoMTIxLCA1MCwgNzQpLCAgcmdiKDEyNiwgMzksIDU5KSk7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCB3aGl0ZTtcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHdoaXRlO1xuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHJnYig4MCwgODAsIDgwKTtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiKDgwLCA4MCwgODApO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogQ3VzdG9taXplZCB1cGxvYWQgaW1hZ2UgYnV0dG9uIHdoZW4gY2xpY2tpbmcgb24gaXQqL1xuLnVwbG9hZC1pbWFnZS1idXR0b246YWN0aXZle1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgbWFyZ2luOjA7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudCggcmdiKDEyMSwgNTAsIDc0KSwgIHJnYigxMjYsIDM5LCA1OSkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgcmdiKDgwLCA4MCwgODApO1xuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgcmdiKDgwLCA4MCwgODApO1xuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHdoaXRlO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIEVycm9yIG1lc3NhZ2UgZGVzaWduICovXG4uZXJyLW1zZ3tcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggcmdiKDI0LCA2LCAxMSk7IFxuICAgIHBhZGRpbmctbGVmdDogMHB4IDNweDtcbiAgICBmb250LXNpemU6IDExcHg7XG59XG5cbi8qIElucHV0IGFuZCBTZWxlY3QgYm94cyBkZXNpZ24gKi9cbmlucHV0LCBzZWxlY3R7XG4gICAgd2lkdGg6MTkwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBib3gtc2hhZG93OiAzcHggMnB4IDVweCByZ2IoNTMsIDIyLCAzMSk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41ODkpO1xufVxuXG5cbi8qIERvZXNuJ3QgZGlzcGxheSB0aGUgZmlsZSBzZWxlY3QgYnV0dG9uIGFuZCB0aGUgdGV4dCBuZXh0IHRvIGl0ICovXG5pbnB1dFt0eXBlPVwiZmlsZVwiXXtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/components/update-product/update-product.component.ts": 
        /*!***********************************************************************!*\
          !*** ./src/app/components/update-product/update-product.component.ts ***!
          \***********************************************************************/
        /*! exports provided: UpdateProductComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateProductComponent", function () { return UpdateProductComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/products.service */ "./src/app/services/products.service.ts");
            /* harmony import */ var src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/categories.service */ "./src/app/services/categories.service.ts");
            /* harmony import */ var ng2_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-redux */ "./node_modules/ng2-redux/lib/index.js");
            /* harmony import */ var ng2_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(ng2_redux__WEBPACK_IMPORTED_MODULE_4__);
            var UpdateProductComponent = /** @class */ (function () {
                function UpdateProductComponent(productsService, categoriesService, redux) {
                    this.productsService = productsService;
                    this.categoriesService = categoriesService;
                    this.redux = redux;
                    this.closeUpdateEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.showUpdate = false;
                    this.zero = false;
                }
                // Invoked at the beginning of the component's lifecycle:
                UpdateProductComponent.prototype.ngOnInit = function () {
                    this.prevImage = this.productToUpdate.image;
                    this.subscribeToStore();
                    // get all categories:
                    if (this.redux.getState().categories.length === 0) {
                        this.categoriesService.getAllCategories();
                    }
                    else {
                        this.categories = this.redux.getState().categories;
                    }
                };
                // Subscribe to store:
                UpdateProductComponent.prototype.subscribeToStore = function () {
                    var _this = this;
                    this.unsubscribe = this.redux.subscribe(function () {
                        _this.categories = _this.redux.getState().categories;
                    });
                };
                // Unsubscribe to store - Invoked a moment before the component's lifecycle ends:
                UpdateProductComponent.prototype.ngOnDestroy = function () {
                    this.unsubscribe();
                };
                // On image selected:
                UpdateProductComponent.prototype.onImageSelected = function (event) {
                    this.selectedImage = event.target.files[0];
                };
                // Update product
                UpdateProductComponent.prototype.updateProduct = function () {
                    var fd = new FormData();
                    // if a new image was selected:
                    if (this.selectedImage !== undefined) {
                        fd.append('product', JSON.stringify(this.productToUpdate));
                        fd.append('prevImage', this.prevImage);
                        fd.append('productImage', this.selectedImage, this.selectedImage.name);
                        this.productsService.updateProduct(fd);
                        this.closeUpdateEvent.emit(this.showUpdate);
                    }
                    // if changes were made but a new image was not selected:
                    else {
                        fd.append('product', JSON.stringify(this.productToUpdate));
                        fd.append('prevImage', this.prevImage);
                        this.productsService.updateProduct(fd);
                        this.closeUpdateEvent.emit(this.showUpdate);
                    }
                };
                // Emit an event- sends data to parent component:
                UpdateProductComponent.prototype.sendCancelUpdate = function () {
                    this.closeUpdateEvent.emit(this.showUpdate);
                };
                // is Larger than zero:
                UpdateProductComponent.prototype.noZero = function () {
                    if (this.productToUpdate.price > 0 || this.productToUpdate.price === null) {
                        this.zero = false;
                    }
                    else if (this.productToUpdate.price === 0) {
                        this.zero = true;
                    }
                };
                return UpdateProductComponent;
            }());
            UpdateProductComponent.ctorParameters = function () { return [
                { type: src_app_services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"] },
                { type: src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_3__["CategoriesService"] },
                { type: ng2_redux__WEBPACK_IMPORTED_MODULE_4__["NgRedux"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], UpdateProductComponent.prototype, "closeUpdateEvent", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], UpdateProductComponent.prototype, "productToUpdate", void 0);
            UpdateProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-update-product',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./update-product.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/update-product/update-product.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./update-product.component.css */ "./src/app/components/update-product/update-product.component.css")).default]
                })
            ], UpdateProductComponent);
            /***/ 
        }),
        /***/ "./src/app/models/admin.ts": 
        /*!*********************************!*\
          !*** ./src/app/models/admin.ts ***!
          \*********************************/
        /*! exports provided: Admin */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Admin", function () { return Admin; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Admin = /** @class */ (function () {
                function Admin(_id, firstName, lastName, email, password) {
                    this._id = _id;
                    this.firstName = firstName;
                    this.lastName = lastName;
                    this.email = email;
                    this.password = password;
                }
                return Admin;
            }());
            /***/ 
        }),
        /***/ "./src/app/models/cart.ts": 
        /*!********************************!*\
          !*** ./src/app/models/cart.ts ***!
          \********************************/
        /*! exports provided: Cart */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cart", function () { return Cart; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Cart = /** @class */ (function () {
                function Cart(_id, customer, date, open) {
                    this._id = _id;
                    this.customer = customer;
                    this.date = date;
                    this.open = open;
                }
                return Cart;
            }());
            /***/ 
        }),
        /***/ "./src/app/models/cartItem.ts": 
        /*!************************************!*\
          !*** ./src/app/models/cartItem.ts ***!
          \************************************/
        /*! exports provided: CartItem */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartItem", function () { return CartItem; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var CartItem = /** @class */ (function () {
                function CartItem(_id, product, quantity, price, cart) {
                    this._id = _id;
                    this.product = product;
                    this.quantity = quantity;
                    this.price = price;
                    this.cart = cart;
                }
                return CartItem;
            }());
            /***/ 
        }),
        /***/ "./src/app/models/category.ts": 
        /*!************************************!*\
          !*** ./src/app/models/category.ts ***!
          \************************************/
        /*! exports provided: Category */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function () { return Category; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Category = /** @class */ (function () {
                function Category(_id, category) {
                    this._id = _id;
                    this.category = category;
                }
                return Category;
            }());
            /***/ 
        }),
        /***/ "./src/app/models/city.ts": 
        /*!********************************!*\
          !*** ./src/app/models/city.ts ***!
          \********************************/
        /*! exports provided: City */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "City", function () { return City; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var City = /** @class */ (function () {
                function City(_id, english_name) {
                    this._id = _id;
                    this.english_name = english_name;
                }
                return City;
            }());
            /***/ 
        }),
        /***/ "./src/app/models/customer.ts": 
        /*!************************************!*\
          !*** ./src/app/models/customer.ts ***!
          \************************************/
        /*! exports provided: Customer */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customer", function () { return Customer; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Customer = /** @class */ (function () {
                function Customer(_id, firstName, lastName, email, password, confirmPassword, phone, city, street, houseNumber, newCustomer) {
                    this._id = _id;
                    this.firstName = firstName;
                    this.lastName = lastName;
                    this.email = email;
                    this.password = password;
                    this.confirmPassword = confirmPassword;
                    this.phone = phone;
                    this.city = city;
                    this.street = street;
                    this.houseNumber = houseNumber;
                    this.newCustomer = newCustomer;
                }
                return Customer;
            }());
            /***/ 
        }),
        /***/ "./src/app/models/login.ts": 
        /*!*********************************!*\
          !*** ./src/app/models/login.ts ***!
          \*********************************/
        /*! exports provided: Login */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function () { return Login; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Login = /** @class */ (function () {
                function Login(email, password, isAdmin) {
                    this.email = email;
                    this.password = password;
                    this.isAdmin = isAdmin;
                }
                return Login;
            }());
            /***/ 
        }),
        /***/ "./src/app/models/order.ts": 
        /*!*********************************!*\
          !*** ./src/app/models/order.ts ***!
          \*********************************/
        /*! exports provided: Order */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function () { return Order; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Order = /** @class */ (function () {
                function Order(_id, customer, cart, price, city, street, houseNumber, deliveryDate, orderDate, cc) {
                    this._id = _id;
                    this.customer = customer;
                    this.cart = cart;
                    this.price = price;
                    this.city = city;
                    this.street = street;
                    this.houseNumber = houseNumber;
                    this.deliveryDate = deliveryDate;
                    this.orderDate = orderDate;
                    this.cc = cc;
                }
                return Order;
            }());
            /***/ 
        }),
        /***/ "./src/app/models/product.ts": 
        /*!***********************************!*\
          !*** ./src/app/models/product.ts ***!
          \***********************************/
        /*! exports provided: Product */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function () { return Product; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Product = /** @class */ (function () {
                function Product(_id, productName, category, price, image) {
                    this._id = _id;
                    this.productName = productName;
                    this.category = category;
                    this.price = price;
                    this.image = image;
                }
                return Product;
            }());
            /***/ 
        }),
        /***/ "./src/app/redux/actionType.ts": 
        /*!*************************************!*\
          !*** ./src/app/redux/actionType.ts ***!
          \*************************************/
        /*! exports provided: ActionType */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionType", function () { return ActionType; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var ActionType;
            (function (ActionType) {
                ActionType[ActionType["LogOut"] = 0] = "LogOut";
                ActionType[ActionType["GetAllProducts"] = 1] = "GetAllProducts";
                ActionType[ActionType["GetCategories"] = 2] = "GetCategories";
                ActionType[ActionType["CountAllProducts"] = 3] = "CountAllProducts";
                ActionType[ActionType["CountAllOrders"] = 4] = "CountAllOrders";
                ActionType[ActionType["GetAdmin"] = 5] = "GetAdmin";
                ActionType[ActionType["UpdateCustomer"] = 6] = "UpdateCustomer";
                ActionType[ActionType["GetOneCart"] = 7] = "GetOneCart";
                ActionType[ActionType["GetAllCarts"] = 8] = "GetAllCarts";
                ActionType[ActionType["GetLatestOrder"] = 9] = "GetLatestOrder";
                ActionType[ActionType["AddCartItem"] = 10] = "AddCartItem";
                ActionType[ActionType["GetAllCartsItems"] = 11] = "GetAllCartsItems";
                ActionType[ActionType["DeleteOneCartItem"] = 12] = "DeleteOneCartItem";
                ActionType[ActionType["DeleteCartsItems"] = 13] = "DeleteCartsItems";
                ActionType[ActionType["GetOneCustomer"] = 14] = "GetOneCustomer";
                ActionType[ActionType["GetCities"] = 15] = "GetCities";
                ActionType[ActionType["SaveTotalAmount"] = 16] = "SaveTotalAmount";
                ActionType[ActionType["UpdateOneCart"] = 17] = "UpdateOneCart";
            })(ActionType || (ActionType = {}));
            /***/ 
        }),
        /***/ "./src/app/redux/appState.ts": 
        /*!***********************************!*\
          !*** ./src/app/redux/appState.ts ***!
          \***********************************/
        /*! exports provided: AppState */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppState", function () { return AppState; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var AppState = /** @class */ (function () {
                function AppState() {
                    this.products = [];
                    this.customer = null;
                    this.admin = null;
                    this.categories = [];
                    this.cartsItems = [];
                    this.cartItem = null;
                    this.cart = null;
                    this.carts = [];
                    this.cities = [];
                    this.totalAmount = null;
                    this.latestOrder = null;
                    this.countProducts = 0;
                    this.countOrders = 0;
                }
                return AppState;
            }());
            /***/ 
        }),
        /***/ "./src/app/redux/reducer.ts": 
        /*!**********************************!*\
          !*** ./src/app/redux/reducer.ts ***!
          \**********************************/
        /*! exports provided: Reducer */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reducer", function () { return Reducer; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _actionType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actionType */ "./src/app/redux/actionType.ts");
            var Reducer = /** @class */ (function () {
                function Reducer() {
                }
                Reducer.reduce = function (oldState, action) {
                    var newState = Object.assign({}, oldState);
                    switch (action.type) {
                        // Logout case:
                        case _actionType__WEBPACK_IMPORTED_MODULE_1__["ActionType"].LogOut:
                            newState.products = [];
                            newState.customer = null;
                            newState.admin = null;
                            newState.categories = [];
                            newState.cartsItems = [];
                            newState.cartItem = null;
                            newState.cart = null;
                            newState.cities = [];
                            newState.totalAmount = 0;
                            newState.latestOrder = null;
                            break;
                        // Get all products case:
                        case _actionType__WEBPACK_IMPORTED_MODULE_1__["ActionType"].GetAllProducts:
                            newState.products = action.payload;
                            break;
                        // Get all cartsItems by cartID case:
                        case _actionType__WEBPACK_IMPORTED_MODULE_1__["ActionType"].CountAllProducts:
                            newState.countProducts = action.payload;
                            break;
                        // Get all cartsItems by cartID case:
                        case _actionType__WEBPACK_IMPORTED_MODULE_1__["ActionType"].CountAllOrders:
                            newState.countOrders = action.payload;
                            break;
                        // Get all cartsItems by cartID case:
                        case _actionType__WEBPACK_IMPORTED_MODULE_1__["ActionType"].GetAllCartsItems:
                            newState.cartsItems = action.payload;
                            break;
                        // Add one product to cart Item:
                        case _actionType__WEBPACK_IMPORTED_MODULE_1__["ActionType"].AddCartItem:
                            newState.cartsItems.push(action.payload);
                            break;
                        //Get one customer case:
                        case _actionType__WEBPACK_IMPORTED_MODULE_1__["ActionType"].GetOneCustomer:
                            newState.customer = action.payload;
                            break;
                        // Get all carts case:
                        case _actionType__WEBPACK_IMPORTED_MODULE_1__["ActionType"].GetAllCarts:
                            newState.carts = action.payload;
                            break;
                        // Get one cart case:
                        case _actionType__WEBPACK_IMPORTED_MODULE_1__["ActionType"].GetOneCart:
                            newState.cart = action.payload;
                            break;
                        // Get admin case:
                        case _actionType__WEBPACK_IMPORTED_MODULE_1__["ActionType"].GetAdmin:
                            newState.admin = action.payload;
                            break;
                        // Get all categories case:
                        case _actionType__WEBPACK_IMPORTED_MODULE_1__["ActionType"].GetCategories:
                            newState.categories = action.payload;
                            break;
                        // Delete one cartItem case:
                        case _actionType__WEBPACK_IMPORTED_MODULE_1__["ActionType"].DeleteOneCartItem:
                            var index2 = -1;
                            for (var i = 0; i < newState.cartsItems.length; i++) {
                                if (newState.cartsItems[i]._id === action.payload) {
                                    index2 = i;
                                }
                            }
                            if (index2 !== -1) {
                                newState.cartsItems.splice(index2, 1);
                            }
                            break;
                        // Delete all cartsItems from cart case:
                        case _actionType__WEBPACK_IMPORTED_MODULE_1__["ActionType"].DeleteCartsItems:
                            for (var i = 0; i < newState.cartsItems.length; i++) {
                                if (newState.cartsItems[i].cart._id === action.payload) {
                                    newState.cartsItems = [];
                                }
                            }
                            break;
                        // Get all cities case:
                        case _actionType__WEBPACK_IMPORTED_MODULE_1__["ActionType"].GetCities:
                            newState.cities = action.payload;
                            break;
                        // Save total amount:
                        case _actionType__WEBPACK_IMPORTED_MODULE_1__["ActionType"].SaveTotalAmount:
                            newState.totalAmount = action.payload;
                            break;
                        // Update cart status from "open:true" to "open:false" case:
                        case _actionType__WEBPACK_IMPORTED_MODULE_1__["ActionType"].UpdateOneCart:
                            for (var i = 0; i < newState.carts.length; i++) {
                                if (newState.carts[i]._id === action.payload._id) {
                                    newState.carts[i] = action.payload;
                                }
                            }
                            break;
                        // Update customer status from "newCustomer:true" to "newCustomer:false" case:
                        case _actionType__WEBPACK_IMPORTED_MODULE_1__["ActionType"].UpdateCustomer:
                            newState.customer = action.payload;
                            break;
                        // get usrtomer's latest order:
                        case _actionType__WEBPACK_IMPORTED_MODULE_1__["ActionType"].GetLatestOrder:
                            newState.latestOrder = action.payload;
                            break;
                    }
                    return newState;
                };
                return Reducer;
            }());
            /***/ 
        }),
        /***/ "./src/app/services/admin.service.ts": 
        /*!*******************************************!*\
          !*** ./src/app/services/admin.service.ts ***!
          \*******************************************/
        /*! exports provided: AdminService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function () { return AdminService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var AdminService = /** @class */ (function () {
                function AdminService(httpClient) {
                    this.httpClient = httpClient;
                }
                // Get admin:
                AdminService.prototype.getAdmin = function () {
                    return this.httpClient.get("http://localhost:3001/api/admin");
                };
                return AdminService;
            }());
            AdminService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            AdminService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AdminService);
            /***/ 
        }),
        /***/ "./src/app/services/carts-items.service.ts": 
        /*!*************************************************!*\
          !*** ./src/app/services/carts-items.service.ts ***!
          \*************************************************/
        /*! exports provided: CartsItemsService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartsItemsService", function () { return CartsItemsService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var ng2_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-redux */ "./node_modules/ng2-redux/lib/index.js");
            /* harmony import */ var ng2_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(ng2_redux__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _redux_actionType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/actionType */ "./src/app/redux/actionType.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var CartsItemsService = /** @class */ (function () {
                function CartsItemsService(httpClient, redux, router) {
                    this.httpClient = httpClient;
                    this.redux = redux;
                    this.router = router;
                }
                //  Get header with the current token:
                CartsItemsService.prototype.getHeaders = function () {
                    return {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': "" + sessionStorage.getItem("token") })
                    };
                };
                // Logout:
                CartsItemsService.prototype.logout = function () {
                    sessionStorage.clear();
                    var action = { type: _redux_actionType__WEBPACK_IMPORTED_MODULE_4__["ActionType"].LogOut, payload: undefined };
                    this.redux.dispatch(action);
                    this.router.navigate(["/home"]);
                };
                // Add product to cart. result: product would become cartItem:
                CartsItemsService.prototype.addProductToCart = function (cartItem) {
                    var _this = this;
                    this.httpClient.post("http://localhost:3001/api/carts-items", cartItem, this.getHeaders())
                        .subscribe(function (addedCartItem) {
                        cartItem._id = addedCartItem._id;
                        var action = { type: _redux_actionType__WEBPACK_IMPORTED_MODULE_4__["ActionType"].AddCartItem, payload: cartItem };
                        _this.redux.dispatch(action);
                    }, function (err) {
                        // if token expired on the server side:
                        if (err.status === 401) {
                            alert("Sorry! You are no longer connected. \nPlease login again.");
                            _this.logout();
                        }
                        else {
                            alert(err.message);
                        }
                    });
                };
                // Get all cartsItems by cartID:
                CartsItemsService.prototype.getAllCartsItemsByCartID = function (cartID) {
                    var _this = this;
                    this.httpClient.get("http://localhost:3001/api/carts-items/cartID/" + cartID, this.getHeaders())
                        .subscribe(function (cartsItems) {
                        var action = { type: _redux_actionType__WEBPACK_IMPORTED_MODULE_4__["ActionType"].GetAllCartsItems, payload: cartsItems };
                        _this.redux.dispatch(action);
                    }, function (err) {
                        // if token expired on the server side:
                        if (err.status === 401) {
                            alert("Sorry! You are no longer connected. \nPlease login again.");
                            _this.logout();
                        }
                        else {
                            alert(err.message);
                        }
                    });
                };
                // Delete one cartItem:
                CartsItemsService.prototype.deleteOneCartItem = function (cartItemID) {
                    var _this = this;
                    this.httpClient.delete("http://localhost:3001/api/carts-items/" + cartItemID, this.getHeaders())
                        .subscribe(function () {
                        var action = { type: _redux_actionType__WEBPACK_IMPORTED_MODULE_4__["ActionType"].DeleteOneCartItem, payload: cartItemID };
                        _this.redux.dispatch(action);
                    }, function (err) {
                        // if token expired on the server side:
                        if (err.status === 401) {
                            alert("Sorry! You are no longer connected. \nPlease login again.");
                            _this.logout();
                        }
                        else {
                            alert(err.message);
                        }
                    });
                };
                // Delete all cartsItems from cart:
                CartsItemsService.prototype.deleteAllCartsItems = function (cartID) {
                    var _this = this;
                    this.httpClient.delete("http://localhost:3001/api/carts-items/delete-by-cartID/" + cartID, this.getHeaders())
                        .subscribe(function () {
                        var action = { type: _redux_actionType__WEBPACK_IMPORTED_MODULE_4__["ActionType"].DeleteCartsItems, payload: cartID };
                        _this.redux.dispatch(action);
                    }, function (err) {
                        // if token expired on the server side:
                        if (err.status === 401) {
                            alert("Sorry! You are no longer connected. \nPlease login again.");
                            _this.logout();
                        }
                        else {
                            alert(err.message);
                        }
                    });
                };
                return CartsItemsService;
            }());
            CartsItemsService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
                { type: ng2_redux__WEBPACK_IMPORTED_MODULE_3__["NgRedux"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
            ]; };
            CartsItemsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], CartsItemsService);
            /***/ 
        }),
        /***/ "./src/app/services/carts.service.ts": 
        /*!*******************************************!*\
          !*** ./src/app/services/carts.service.ts ***!
          \*******************************************/
        /*! exports provided: CartsService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartsService", function () { return CartsService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _redux_actionType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/actionType */ "./src/app/redux/actionType.ts");
            /* harmony import */ var ng2_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-redux */ "./node_modules/ng2-redux/lib/index.js");
            /* harmony import */ var ng2_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(ng2_redux__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */ var _customers_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customers.service */ "./src/app/services/customers.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var CartsService = /** @class */ (function () {
                function CartsService(httpClient, redux, router, customersService) {
                    this.httpClient = httpClient;
                    this.redux = redux;
                    this.router = router;
                    this.customersService = customersService;
                }
                // Get header with the current token:
                CartsService.prototype.getHeaders = function () {
                    return {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': "" + sessionStorage.getItem("token") })
                    };
                };
                // Logout:
                CartsService.prototype.logout = function () {
                    sessionStorage.clear();
                    var action = { type: _redux_actionType__WEBPACK_IMPORTED_MODULE_3__["ActionType"].LogOut, payload: undefined };
                    this.redux.dispatch(action);
                    this.router.navigate(["/home"]);
                };
                // Add new cart:
                CartsService.prototype.addNewCart = function (cart) {
                    return this.httpClient.post("http://localhost:3001/api/carts", cart, this.getHeaders());
                };
                // Get all carts by customer id:
                CartsService.prototype.getAllCartsByCutomerID = function (_id) {
                    return this.httpClient.get("http://localhost:3001/api/carts/" + _id, this.getHeaders());
                };
                // Get one cart by cart ID:
                CartsService.prototype.getOneCartByCartID = function (_id) {
                    var _this = this;
                    this.httpClient.get("http://localhost:3001/api/carts/cart-by-cartID/" + _id, this.getHeaders())
                        .subscribe(function (cart) {
                        var action = { type: _redux_actionType__WEBPACK_IMPORTED_MODULE_3__["ActionType"].GetOneCart, payload: cart };
                        _this.redux.dispatch(action);
                        if (cart !== undefined) {
                            _this.customersService.getOneCustomer(cart.customer._id);
                        }
                    }, function (err) {
                        // if token expired on the server side:
                        if (err.status === 401) {
                            alert("Sorry! You are no longer connected. \nPlease login again.");
                            _this.logout();
                        }
                        else {
                            alert(err.message);
                        }
                    });
                };
                // Update cart status to be "open: false":
                CartsService.prototype.updateCart = function (cart) {
                    var _this = this;
                    this.httpClient.patch("http://localhost:3001/api/carts/" + cart._id, cart, this.getHeaders())
                        .subscribe(function (updatedCart) {
                        var action = { type: _redux_actionType__WEBPACK_IMPORTED_MODULE_3__["ActionType"].UpdateOneCart, payload: updatedCart };
                        _this.redux.dispatch(action);
                    }, function (err) {
                        // if token expired on the server side:
                        if (err.status === 401) {
                            alert("Sorry! You are no longer connected. \nPlease login again.");
                            _this.logout();
                        }
                        else {
                            alert(err.message);
                        }
                    });
                };
                return CartsService;
            }());
            CartsService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
                { type: ng2_redux__WEBPACK_IMPORTED_MODULE_4__["NgRedux"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
                { type: _customers_service__WEBPACK_IMPORTED_MODULE_5__["CustomersService"] }
            ]; };
            CartsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], CartsService);
            /***/ 
        }),
        /***/ "./src/app/services/categories.service.ts": 
        /*!************************************************!*\
          !*** ./src/app/services/categories.service.ts ***!
          \************************************************/
        /*! exports provided: CategoriesService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesService", function () { return CategoriesService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _redux_actionType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/actionType */ "./src/app/redux/actionType.ts");
            /* harmony import */ var ng2_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-redux */ "./node_modules/ng2-redux/lib/index.js");
            /* harmony import */ var ng2_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(ng2_redux__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var CategoriesService = /** @class */ (function () {
                function CategoriesService(httpClient, redux, router) {
                    this.httpClient = httpClient;
                    this.redux = redux;
                    this.router = router;
                }
                // Get header with the current token:
                CategoriesService.prototype.getHeaders = function () {
                    return {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': "" + sessionStorage.getItem("token") })
                    };
                };
                // Logout:
                CategoriesService.prototype.logout = function () {
                    sessionStorage.clear();
                    var action = { type: _redux_actionType__WEBPACK_IMPORTED_MODULE_3__["ActionType"].LogOut, payload: undefined };
                    this.redux.dispatch(action);
                    this.router.navigate(["/home"]);
                };
                // Get all categories:
                CategoriesService.prototype.getAllCategories = function () {
                    var _this = this;
                    this.httpClient.get("http://localhost:3001/api/categories", this.getHeaders())
                        .subscribe(function (categories) {
                        var action = { type: _redux_actionType__WEBPACK_IMPORTED_MODULE_3__["ActionType"].GetCategories, payload: categories };
                        _this.redux.dispatch(action);
                    }, function (err) {
                        // if token expired on the server side:
                        if (err.status === 401) {
                            alert("Sorry! You are no longer connected. \nPlease login again.");
                            _this.logout();
                        }
                        else {
                            alert(err.message);
                        }
                    });
                };
                return CategoriesService;
            }());
            CategoriesService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
                { type: ng2_redux__WEBPACK_IMPORTED_MODULE_4__["NgRedux"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
            ]; };
            CategoriesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], CategoriesService);
            /***/ 
        }),
        /***/ "./src/app/services/cities.service.ts": 
        /*!********************************************!*\
          !*** ./src/app/services/cities.service.ts ***!
          \********************************************/
        /*! exports provided: CitiesService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitiesService", function () { return CitiesService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _redux_actionType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/actionType */ "./src/app/redux/actionType.ts");
            /* harmony import */ var ng2_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-redux */ "./node_modules/ng2-redux/lib/index.js");
            /* harmony import */ var ng2_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(ng2_redux__WEBPACK_IMPORTED_MODULE_4__);
            var CitiesService = /** @class */ (function () {
                function CitiesService(httpClient, redux) {
                    this.httpClient = httpClient;
                    this.redux = redux;
                }
                // Get all cities:
                CitiesService.prototype.getAllCities = function () {
                    var _this = this;
                    this.httpClient.get("http://localhost:3001/api/cities")
                        .subscribe(function (cities) {
                        var action = { type: _redux_actionType__WEBPACK_IMPORTED_MODULE_3__["ActionType"].GetCities, payload: cities };
                        _this.redux.dispatch(action);
                    }, function (err) {
                        alert(err.message);
                    });
                };
                return CitiesService;
            }());
            CitiesService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
                { type: ng2_redux__WEBPACK_IMPORTED_MODULE_4__["NgRedux"] }
            ]; };
            CitiesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], CitiesService);
            /***/ 
        }),
        /***/ "./src/app/services/customers.service.ts": 
        /*!***********************************************!*\
          !*** ./src/app/services/customers.service.ts ***!
          \***********************************************/
        /*! exports provided: CustomersService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersService", function () { return CustomersService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var ng2_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-redux */ "./node_modules/ng2-redux/lib/index.js");
            /* harmony import */ var ng2_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(ng2_redux__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _redux_actionType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/actionType */ "./src/app/redux/actionType.ts");
            var CustomersService = /** @class */ (function () {
                function CustomersService(httpClient, redux) {
                    this.httpClient = httpClient;
                    this.redux = redux;
                }
                // Get one customer:
                CustomersService.prototype.getOneCustomer = function (_id) {
                    var _this = this;
                    this.httpClient.get("http://localhost:3001/api/customers/" + _id)
                        .subscribe(function (customer) {
                        var action = { type: _redux_actionType__WEBPACK_IMPORTED_MODULE_4__["ActionType"].GetOneCustomer, payload: customer };
                        _this.redux.dispatch(action);
                    }, function (err) { return alert(err.message); });
                };
                // Update customer status:
                CustomersService.prototype.updateOneCustomer = function (customer) {
                    var _this = this;
                    this.httpClient.patch("http://localhost:3001/api/customers/" + customer._id, customer)
                        .subscribe(function (updatedCustomer) {
                        var action = { type: _redux_actionType__WEBPACK_IMPORTED_MODULE_4__["ActionType"].UpdateCustomer, payload: updatedCustomer };
                        _this.redux.dispatch(action);
                    }, function (err) { return alert(err.message); });
                };
                return CustomersService;
            }());
            CustomersService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
                { type: ng2_redux__WEBPACK_IMPORTED_MODULE_3__["NgRedux"] }
            ]; };
            CustomersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], CustomersService);
            /***/ 
        }),
        /***/ "./src/app/services/login.service.ts": 
        /*!*******************************************!*\
          !*** ./src/app/services/login.service.ts ***!
          \*******************************************/
        /*! exports provided: LoginService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function () { return LoginService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var LoginService = /** @class */ (function () {
                function LoginService(httpClient) {
                    this.httpClient = httpClient;
                }
                // Login customer service:
                LoginService.prototype.loginCustomer = function (login) {
                    return this.httpClient.post("http://localhost:3001/api/customers/login", login);
                };
                // Login admin service:
                LoginService.prototype.loginAdmin = function (login) {
                    return this.httpClient.post("http://localhost:3001/api/admin/login", login);
                };
                return LoginService;
            }());
            LoginService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], LoginService);
            /***/ 
        }),
        /***/ "./src/app/services/orders.service.ts": 
        /*!********************************************!*\
          !*** ./src/app/services/orders.service.ts ***!
          \********************************************/
        /*! exports provided: OrdersService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersService", function () { return OrdersService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _redux_actionType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/actionType */ "./src/app/redux/actionType.ts");
            /* harmony import */ var ng2_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-redux */ "./node_modules/ng2-redux/lib/index.js");
            /* harmony import */ var ng2_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(ng2_redux__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var OrdersService = /** @class */ (function () {
                function OrdersService(httpClient, redux, router) {
                    this.httpClient = httpClient;
                    this.redux = redux;
                    this.router = router;
                }
                // Get header with the current token:
                OrdersService.prototype.getHeaders = function () {
                    return {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': "" + sessionStorage.getItem("token") })
                    };
                };
                // Logout:
                OrdersService.prototype.logout = function () {
                    sessionStorage.clear();
                    var action = { type: _redux_actionType__WEBPACK_IMPORTED_MODULE_3__["ActionType"].LogOut, payload: undefined };
                    this.redux.dispatch(action);
                    this.router.navigate(["/home"]);
                };
                // Get customer's latest order:
                OrdersService.prototype.getLastOrder = function (customerID) {
                    var _this = this;
                    this.httpClient.get("http://localhost:3001/api/orders/latest-order/" + customerID, this.getHeaders())
                        .subscribe(function (order) {
                        var action = { type: _redux_actionType__WEBPACK_IMPORTED_MODULE_3__["ActionType"].GetLatestOrder, payload: order };
                        _this.redux.dispatch(action);
                    }, function (err) {
                        // if token expired on the server side:
                        if (err.status === 401) {
                            alert("Sorry! You are no longer connected. \nPlease login again.");
                            _this.logout();
                        }
                        else {
                            alert(err.message);
                        }
                    });
                };
                // Add order:
                OrdersService.prototype.addOrder = function (order) {
                    return this.httpClient.post("http://localhost:3001/api/orders", order, this.getHeaders());
                };
                // Count number of orders throughout the site:
                OrdersService.prototype.getCountOrders = function () {
                    var _this = this;
                    this.httpClient.get("http://localhost:3001/api/count/count-orders")
                        .subscribe(function (count) {
                        var action = { type: _redux_actionType__WEBPACK_IMPORTED_MODULE_3__["ActionType"].CountAllOrders, payload: count };
                        _this.redux.dispatch(action);
                    }, function (err) { return alert(err.message); });
                };
                return OrdersService;
            }());
            OrdersService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
                { type: ng2_redux__WEBPACK_IMPORTED_MODULE_4__["NgRedux"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
            ]; };
            OrdersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], OrdersService);
            /***/ 
        }),
        /***/ "./src/app/services/products.service.ts": 
        /*!**********************************************!*\
          !*** ./src/app/services/products.service.ts ***!
          \**********************************************/
        /*! exports provided: ProductsService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function () { return ProductsService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var ng2_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-redux */ "./node_modules/ng2-redux/lib/index.js");
            /* harmony import */ var ng2_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(ng2_redux__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _redux_actionType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/actionType */ "./src/app/redux/actionType.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var ProductsService = /** @class */ (function () {
                function ProductsService(httpClient, redux, router) {
                    this.httpClient = httpClient;
                    this.redux = redux;
                    this.router = router;
                }
                //  Get header with the current token:
                ProductsService.prototype.getHeaders = function () {
                    return {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': "" + sessionStorage.getItem("token") })
                    };
                };
                // Logout:
                ProductsService.prototype.logout = function () {
                    sessionStorage.clear();
                    var action = { type: _redux_actionType__WEBPACK_IMPORTED_MODULE_4__["ActionType"].LogOut, payload: undefined };
                    this.redux.dispatch(action);
                    this.router.navigate(["/home"]);
                };
                // Get all products by category:
                ProductsService.prototype.getAllProductsByCategory = function (_id) {
                    var _this = this;
                    this.httpClient.get("http://localhost:3001/api/products/products-by-category/" + _id, this.getHeaders())
                        .subscribe(function (products) {
                        var action = { type: _redux_actionType__WEBPACK_IMPORTED_MODULE_4__["ActionType"].GetAllProducts, payload: products };
                        _this.redux.dispatch(action);
                    }, function (err) {
                        // if token expired on the server side:
                        if (err.status === 401) {
                            alert("Sorry! You are no longer connected. \nPlease login again.");
                            _this.logout();
                        }
                        else {
                            alert(err.message);
                        }
                    });
                };
                // Add product:
                ProductsService.prototype.addProduct = function (fd) {
                    var _this = this;
                    this.httpClient.post("http://localhost:3001/api/images/upload-image", fd, this.getHeaders())
                        .subscribe(function (product) {
                        _this.getAllProductsByCategory(product.category._id);
                    }, function (err) {
                        // if token expired on the server side:
                        if (err.status === 401) {
                            alert("Sorry! You are no longer connected. \nPlease login again.");
                            _this.logout();
                        }
                        else {
                            alert(err.message);
                        }
                    });
                };
                // Update product:
                ProductsService.prototype.updateProduct = function (fd) {
                    var _this = this;
                    this.httpClient.put("http://localhost:3001/api/images/update-image", fd, this.getHeaders())
                        .subscribe(function (product) {
                        _this.getAllProductsByCategory(product.category._id);
                    }, function (err) {
                        // if token expired on the server side:
                        if (err.status === 401) {
                            alert("Sorry! You are no longer connected. \nPlease login again.");
                            _this.logout();
                        }
                        else {
                            alert(err.message);
                        }
                    });
                };
                // Get all products by search word:
                ProductsService.prototype.getAllProductsBySearchWord = function (search) {
                    return this.httpClient.get("http://localhost:3001/api/products/products-by-search/" + search, this.getHeaders());
                };
                // Get count- number of products on the site:
                ProductsService.prototype.getCountProducts = function () {
                    var _this = this;
                    this.httpClient.get("http://localhost:3001/api/count/count-products")
                        .subscribe(function (count) {
                        var action = { type: _redux_actionType__WEBPACK_IMPORTED_MODULE_4__["ActionType"].CountAllProducts, payload: count };
                        _this.redux.dispatch(action);
                    }, function (err) { return alert(err.message); });
                };
                return ProductsService;
            }());
            ProductsService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
                { type: ng2_redux__WEBPACK_IMPORTED_MODULE_3__["NgRedux"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
            ]; };
            ProductsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], ProductsService);
            /***/ 
        }),
        /***/ "./src/app/services/register.service.ts": 
        /*!**********************************************!*\
          !*** ./src/app/services/register.service.ts ***!
          \**********************************************/
        /*! exports provided: RegisterService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function () { return RegisterService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var RegisterService = /** @class */ (function () {
                function RegisterService(httpClient) {
                    this.httpClient = httpClient;
                }
                // Register customer:
                RegisterService.prototype.registerCustomer = function (customer) {
                    return this.httpClient.post("http://localhost:3001/api/customers/register", customer);
                };
                return RegisterService;
            }());
            RegisterService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            RegisterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], RegisterService);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Users\UserPc\Documents\JohnBryce\GettingReadyForInterviews\Deploying on Heroku\Angular-Shopping-Online\shopping-online\client\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map