import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../../shared/models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  providers: [HttpClient],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  
  productsList: IProduct[] = [];
  private readonly _apiService = inject(ApiService);
  private readonly _router = inject(Router);


  ngOnInit(): void {
    this._apiService.getProducts().subscribe((data: IProduct[]) => {
      console.log(data);
      this.productsList = data;
    });
  }

  navegate(id: number) : void {
    this._router.navigate(['/products', id]);
  }

}
