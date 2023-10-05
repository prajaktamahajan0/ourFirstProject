import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-product",
    templateUrl: "./product.component.html",
    styleUrls: ["./product.component.scss"]

    // template:
    //     `  <p> the product is {{pName}} with id {{pId}} and status is {{pStatus}} </p>`,
    // styles: [
    //     `
    // p{
    //     background-color: aqua;
    //     color: navy;
    //     padding: 20px;
    //     border-radius : 5px;
    // }
    // `
    // ]
})
export class ProductComponent  implements OnInit {
    pName: string = "Samsung 31";
    pId: number = 123;
    pStatus: string = "Dispatched";
    public Iphone = "Iphone 14 Pro";
    bgColor : string = "gold";
    isProdAvl !: boolean;
    constructor(){}

    ngOnInit(): void {
        this.isProdAvl = Math.random() >= .5 ? true : false;
        console.log(this.isProdAvl);
    } 

    getBgColor(){
        return  this.isProdAvl ? 'orange' : '#eee';
    }
}


// Directive  >> structual, attribute and components
//Document object : innerHTML, innerText, textContent, value