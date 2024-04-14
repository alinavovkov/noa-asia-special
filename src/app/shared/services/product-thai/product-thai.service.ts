import {Injectable} from '@angular/core';
import {
  addDoc,
  collectionData,
  CollectionReference,
  deleteDoc,
  doc,
  docData,
  Firestore,
  updateDoc, DocumentData, collection
} from "@angular/fire/firestore";
import {catchError, map} from 'rxjs/operators';
import {IProductRequest} from "../../interfaces/product/product.interface";

@Injectable({
  providedIn: 'root'
})
export class ProductThaiService {
  private productCollection!: CollectionReference<DocumentData>;

  constructor(
    private afs: Firestore
  ) {
    this.productCollection = collection(this.afs, 'products-thai');

  }

  getAllFirebase() {
    return collectionData(this.productCollection, {idField: 'id'});
  }


  getAllByCategory(categoryName: string) {
    return collectionData(this.productCollection, { idField: 'id' }).pipe(
      map(products =>
        products.filter(product => product['category'].way === categoryName)
      )
    );
  }

  getOneFirebase(id: string | number) {
    const productDocumentReference = doc(this.afs, `products-thai/${id}`);
    console.log(productDocumentReference)
    return docData(productDocumentReference, {idField: 'id'});
  }

  createFirebase(product: IProductRequest) {
    return addDoc(this.productCollection, product);
  }

  updateFirebase(product: IProductRequest, id: string) {
    const productDocumentReference = doc(this.afs, `products-thai/${id}`);
    return updateDoc(productDocumentReference, {...product});
  }

  deleteFirebase(id: string) {
    const productDocumentReference = doc(this.afs, `products-thai/${id}`);
    return deleteDoc(productDocumentReference);
  }
}
