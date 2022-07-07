import { Component, OnInit ,EventEmitter, Input,Output } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
@Component({
  selector: 'app-checkout-products',
  templateUrl: './checkout-products.component.html',
  styleUrls: ['./checkout-products.component.css']
})
export class CheckoutProductsComponent implements OnInit {
  @Input() checkout_products: any[] | undefined;
  @Output() deleteEvent: EventEmitter<any> = new EventEmitter()

  constructor(public shopping_cart_service: ShoppingCartService) { }

  ngOnInit(): void {
    console.log('products ', this.checkout_products)
  }
  removeItem(p: { id: any; }){
    this.shopping_cart_service.removerItem(p)
    this.deleteEvent.emit(p)
  }

}
