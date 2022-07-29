import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  items = this.cartService.get();

  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clear();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    window.alert(
      (
        'Your order has been submitted to:\n  ' +
        this.checkoutForm.value.name +
        '\n  ' +
        this.checkoutForm.value.address
      ).toString()
    );
    this.checkoutForm.reset();
  }
}
