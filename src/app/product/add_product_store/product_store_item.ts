import { StoreItem } from "../../shared/shareitem";
import { Observable } from "rxjs";
import { ProductserviceService } from "../productallthings/productservice.service";
import { PRODUCTINTEFACE } from "../productallthings/productinteface";
import { Injectable } from "@angular/core";


@Injectable()
export class ProductsStoreItem extends StoreItem<PRODUCTINTEFACE[]> {
    constructor(private productsService: ProductserviceService) {
        super([]);
    }

    async loadProducts(query?:string) {
        this.productsService.getallproduct(query).subscribe((products) => {
            this.setValue(products);
        });
    }

    get products$(): Observable<PRODUCTINTEFACE[]> {
        return this.value$;
            }
}





