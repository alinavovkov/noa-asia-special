import {Component, OnInit} from '@angular/core';
import {IProductResponse} from "../../shared/interfaces/product/product.interface";
import {CategoryService} from "../../shared/services/category/category.service";
import {ProductService} from "../../shared/services/product/product.service";
import {OrderService} from "../../shared/services/order/order.service";

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrl: './delivery.component.scss'
})
export class DeliveryComponent implements OnInit {
  public productItems: Array<IProductResponse> = [];
  constructor(
    private productService: ProductService,
    private orderService: OrderService
  ) {
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getAllFirebase().subscribe(data => {
      this.productItems = data as IProductResponse[];
      console.log(this.productItems.map(product => product.category.path))

    })
  }

  productCount(product: IProductResponse, value: boolean): void {
    console.log(product, value)
    if (value) {
      ++product.count;
    } else if (!value && product.count > 1) {
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
