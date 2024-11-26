import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { IProduct } from '../../shared/models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent implements OnInit {
  loading: boolean = true;
  public product?: IProduct;

  private readonly _route = inject(ActivatedRoute);

  private readonly _apiService = inject(ApiService);

  ngOnInit(): void {
    this._route.params.subscribe((params) => {
      this._apiService.getProduct(params['id']).subscribe((data : IProduct) => {
        this.product = data;
        this.loading = false;
      }
    );
  });
  }
}
