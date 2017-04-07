import {Injectable} from "@angular/core";
import {AngularFire, FirebaseListObservable} from "angularfire2"
import "rxjs/add/operator/map";
import {Business} from "../interfaces/businesses";
import {Categories} from "../interfaces/categories";

@Injectable()
export class FirebaseService {
  business: FirebaseListObservable<Business[]>;
  categories: FirebaseListObservable<Categories[]>;

  constructor(private af: AngularFire) {
  }

  getBusiness(category: string = null) {
    if (category != null) {
      this.business = this.af.database.list("/business", {
        query: {
          orderByChild: "category",
          equalTo: category
        }
      }) as FirebaseListObservable<Business[]>
    } else {
      this.business = this.af.database.list("/business") as FirebaseListObservable<Business[]>
    }

    return this.business;
  }

  getCategories() {
    this.categories = this.af.database.list("/categories") as FirebaseListObservable<Categories[]>
    return this.categories;
  }

  addBusiness(newBusiness) {
    return this.business.push(newBusiness);
  }

  updateBusiness(key, updBusiness) {
    return this.business.update(key, updBusiness);
  }

  deleteBusiness(key) {
    return this.business.remove(key);
  }
}




