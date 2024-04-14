import { Component } from '@angular/core';
import {IProductResponse} from "../../shared/interfaces/product/product.interface";
import {ProductService} from "../../shared/services/product/product.service";
import {ActivatedRoute} from "@angular/router";
import {OrderService} from "../../shared/services/order/order.service";

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrl: './product-info.component.scss'
})
export class ProductInfoComponent {
  public currentProduct!: IProductResponse;
  public counter: number = 1;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(response => {
      this.currentProduct = response['productInfo'];
    });
    this.loadProduct();
  }

  loadProduct(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.productService.getOneFirebase(id as string).subscribe(data => {
      this.currentProduct = data as IProductResponse;
      console.log(data)
    })
  }

  productCount(product: IProductResponse, value: boolean): void {
    console.log(product, value)
    if(value){
      ++product.count;
    } else if(!value && product.count > 1){
      --product.count;
    }
  }
  addToBasket(product: IProductResponse): void {
    let basket: Array<IProductResponse> = [];
    if (localStorage.length > 0 && localStorage.getItem('basket')) {
      basket = JSON.parse(localStorage.getItem('basket') as string);
      if (basket.some(prod => prod.id === product.id)) {
        const index = basket.findIndex(prod => prod.id === product.id);
        // Ensure product.count is a valid number
        if (isNaN(product.count)) {
          product.count = 1; // Set default value if product.count is NaN
        }
        basket[index].count += product.count;
      } else {
        basket.push(product);
      }
    } else {
      basket.push(product);
    }
    localStorage.setItem('basket', JSON.stringify(basket));
    product.count = 1; // Reset product count to 1 after adding to basket
    this.orderService.changeBasket.next(true);
  }
}
