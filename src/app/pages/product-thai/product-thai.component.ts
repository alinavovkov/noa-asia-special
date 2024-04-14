import {Component, OnDestroy, OnInit} from '@angular/core';
import {IProductResponse} from "../../shared/interfaces/product/product.interface";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {OrderService} from "../../shared/services/order/order.service";
import {Subscription} from "rxjs";
import {ICategoryResponse} from "../../shared/interfaces/category/category.interface";
import {CategoryThaiService} from "../../shared/services/category-thai/category-thai.service";
import {ProductThaiService} from "../../shared/services/product-thai/product-thai.service";

@Component({
  selector: 'app-product-thai',
  templateUrl: './product-thai.component.html',
  styleUrl: './product-thai.component.scss'
})
export class ProductThaiComponent implements OnInit, OnDestroy {
  public currentProduct!: IProductResponse;
  public productThaiItems: Array<IProductResponse> = [];
  private eventSubscription!: Subscription;
  counter: number = 0;
  currentRoute!: any;
  public categoriesThaiItems: Array<ICategoryResponse> = [];

  constructor(
    private productThaiService: ProductThaiService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private orderService: OrderService,
    private categoryThaiService: CategoryThaiService,
  ) {
    this.eventSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.loadProducts();
      }
    })
  }

  ngOnInit(): void {
    this.loadProducts();
    this.getThaiProducts();
    this.getCategoriesThai()
  }
  getThaiProducts(): void {
    this.productThaiService.getAllFirebase().subscribe(data => {
      this.productThaiItems = data as IProductResponse[];
      console.log(this.productThaiItems);

    })
  }

  loadProducts(): void {
    const categoryName = this.activatedRoute.snapshot.paramMap.get('category-thai') as string;
    this.productThaiService.getAllByCategory(categoryName).subscribe(data => {
      this.productThaiItems = data as IProductResponse[];
    });
  }


  isActive(category: string): boolean {
    const currentRoute = this.activatedRoute.snapshot.url[1]?.path;
    return currentRoute === category;
  }

  ngOnDestroy(): void {
    this.eventSubscription.unsubscribe();
  }

  increment() {
    this.counter++;
  }

  decrement() {
    if (this.counter > 0) {
      this.counter--;
    }
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

  getCategoriesThai(): void {
    this.categoryThaiService.getAllFirebase().subscribe(data => {
      this.categoriesThaiItems = data as IProductResponse[];
      console.log(this.categoriesThaiItems.map(category => category.path))

    })
  }
}
