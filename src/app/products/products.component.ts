import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";


@Component({
    selector: "app-products",
    templateUrl: "./products.component.html",
    styleUrls: ["./products.component.scss"]
})
export class ProductsComponent implements OnInit {
    isFormvalid: boolean = false;
    productsStatus: string = `No Product is Added!!!`
    productSearchValue: string = '';
    count: number = 0;
    @ViewChild('username')  getusername  !: ElementRef   //decorator
    constructor() {}
    ngOnInit(): void {
        console.log(`Component products is INIT`);

        setInterval(() => {
            this.isFormvalid = true;
        }, 1000)
    }

    onProductAdd() {
        // console.log(`Btn Clicked`);
        this.count++;
        this.productsStatus = ` ${this.count} Products are added to the cart`
    }

    onProductRemove() {
        if (this.count === 1) {
            this.productsStatus = `No Products are added to the cart`;
            return
        }

        this.count--;
        this.productsStatus = ` ${this.count} Products are removed to the cart`;
    }

    onProductSearch(eve: Event) {
        // console.log(eve);
        let val = (eve.target as HTMLInputElement).value;
        console.log(val);
        this.productSearchValue = val;
    }
    onClick(username: HTMLInputElement) {
        // console.log(username);    //get input control
        console.log(username.value);
    }
    getUsername() {
       let val =  this.getusername.nativeElement.value;
       console.log(val)
    }
}
