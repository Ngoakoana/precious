import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  You: any, 3}
