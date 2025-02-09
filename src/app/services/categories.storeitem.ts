import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { StoreItem } from "../shared/shareitem";
import { CATEGERY } from "../sidecatogery/categery";
import { CategoreyService } from "../sidecatogery/categoreyservices.service";

@Injectable()
export class CategoriesStoreItem extends StoreItem<CATEGERY[]> {
    constructor(private categoryService: CategoreyService) { 
        super([]);
    }

    async loadCategories() {
        this.categoryService.getall_category_values().subscribe(categories_ARRAY => {
            this.setValue(categories_ARRAY);
        });
    }
    get categories_ARRAY$(): Observable<CATEGERY[]> {
        return this.value$;
    }
    get topLevelCategories$(): Observable<CATEGERY[]> {
        return this.value$.pipe(
            map((categories_ARRAY) =>
                categories_ARRAY.filter((category) => category.parent_categery_id === null)
            )
        );
    }
}