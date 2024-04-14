import {Component, OnInit} from '@angular/core';
import {IProductResponse} from "../../shared/interfaces/product/product.interface";
import {trigger, state, style, transition, animate} from '@angular/animations';
import {ICategoryResponse} from "../../shared/interfaces/category/category.interface";
import {CategoryService} from "../../shared/services/category/category.service";
import {ProductService} from "../../shared/services/product/product.service";
import {OrderService} from "../../shared/services/order/order.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '100%',
        opacity: 1,
        overflow: 'visible'
      })),
      state('closed', style({
        height: '0',
        opacity: 0,
        overflow: 'hidden'
      })),
      transition('open <=> closed', [
        animate('500ms ease-in-out')
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  public productItems: Array<IProductResponse> = [];
  counter: number = 0;
  public categoriesItems: Array<ICategoryResponse> = [];
  showAdditionalContent: boolean = false;

  toggleAdditionalContent(): void {
    this.showAdditionalContent = !this.showAdditionalContent;
  }

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private orderService: OrderService
  ) {
  }

  ngOnInit(): void {
    this.getCategories();
    this.getProducts();
  }

  increment() {
    this.counter++;
  }

  decrement() {
    if (this.counter > 0) {
      this.counter--;
    }
  }

  getCategories(): void {
    this.categoryService.getAllFirebase().subscribe(data => {
      this.categoriesItems = data as IProductResponse[];
      console.log(this.categoriesItems.map(category => category.path))

    })
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
