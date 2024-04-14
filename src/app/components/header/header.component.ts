import {Component, OnInit, Input, Inject} from '@angular/core';
import { TypeDeliveryDialogComponent } from '../type-delivery-dialog/type-delivery-dialog.component';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {AuthDialogComponent} from "../auth-dialog/auth-dialog.component";
import {ROLE} from "../../shared/constants/role.constante";
import {AccountService} from "../../shared/services/account/account.service";
import {ICategoryResponse} from "../../shared/interfaces/category/category.interface";
import {ProductService} from "../../shared/services/product/product.service";
import {IProductResponse} from "../../shared/interfaces/product/product.interface";
import {CategoryService} from "../../shared/services/category/category.service";
import {CategoryThaiService} from "../../shared/services/category-thai/category-thai.service";
import {OrderService} from "../../shared/services/order/order.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  @Input() selectedDeliveryType: string = '';
//  showFiller = false;
  private dialogOpened: boolean = false;
   public isMenuActive: boolean = false;
  public loginPage = '';
  public isLogin = false;
  public loginUrl = '';
  public categoriesItems: Array<ICategoryResponse> = [];
  public categoriesThaiItems: Array<ICategoryResponse> = [];
  public total = 0;
  public totalCount = 0;
  public basket: Array<IProductResponse> = [];
  public productItems: any;

  constructor(
    public dialog: MatDialog,
    private orderService: OrderService,
    private accountService: AccountService,
    private productService: ProductService,
    private categoryService: CategoryService,
    private categoryThaiService: CategoryThaiService,

  ) {}
  ngOnInit(): void {
     this.openDialog();
    this.checkUserLogin();
    this.checkUpdatesUserLogin();
    this.getCategories();
    this.getCategoriesThai();
    this.loadBasket();
    this.updateBasket();

  }
  openDialog(): void {
    this.dialog.open(TypeDeliveryDialogComponent, {
      backdropClass: 'dialog-back',
      panelClass: 'type-delivery-dialog',
      autoFocus: false,
      data: { selectedDeliveryType: this.selectedDeliveryType },
      disableClose: true
    }).afterClosed().subscribe(result => {
      if (result) {
        this.selectedDeliveryType = result; // Update selected delivery type after dialog is closed
      }
    });
  }

  openLoginDialog(): void {
    this.dialog.open(AuthDialogComponent, {
      backdropClass: 'dialog-back',
      panelClass: 'auth-dialog',
      autoFocus: false,
      data: { },
      disableClose: true
    }).afterClosed().subscribe(result => {
      console.log(result);

    })
  }
  checkUserLogin(): void {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') as string);
    if (currentUser && currentUser.role === ROLE.ADMIN) {
      this.isLogin = true;
      this.loginUrl = 'admin';
      this.loginPage = 'Admin';
    } else if (currentUser && currentUser.role === ROLE.USER) {
      this.isLogin = true;
      this.loginUrl = 'cabinet';
      this.loginPage = 'Cabinet';
    } else {
      this.isLogin = false;
      this.loginUrl = '';
      this.loginPage = '';
    }
  }


  checkUpdatesUserLogin(): void {
    this.accountService.isUserLogin$.subscribe(() => {
      this.checkUserLogin();
    })
  }

  toggleMenu() {
    this.isMenuActive = !this.isMenuActive;
  }

  getCategories(): void {
    this.categoryService.getAllFirebase().subscribe(data => {
      this.categoriesItems = data as IProductResponse[];
      console.log(this.categoriesItems.map(category => category.path))

    })
  }

  getCategoriesThai(): void {
    this.categoryThaiService.getAllFirebase().subscribe(data => {
      this.categoriesThaiItems = data as IProductResponse[];
      console.log(this.categoriesThaiItems.map(category => category.path))

    })
  }


  loadBasket(): void {
    const basketData = localStorage.getItem('basket');
    if (basketData) {
      this.basket = JSON.parse(basketData);
      this.productItems = this.basket; // Assign parsed JSON array to productItems
    }
    this.getTotalPrice();
    this.getTotalCount();
  }

  getTotalPrice(): void {
    this.total = this.basket
      .reduce((total: number, prod: IProductResponse) => total + prod.count * prod.price, 0);
  }
  getTotalCount(): void {
    this.totalCount = this.basket.reduce((total: number, prod: IProductResponse) => {
      const productCount = isNaN(prod.count) ? 0 : prod.count;
      return this.totalCount + productCount;
    }, 0);
  }
  updateBasket(): void {
    this.orderService.changeBasket.subscribe(() => {
      this.loadBasket();
    });
  }

}

