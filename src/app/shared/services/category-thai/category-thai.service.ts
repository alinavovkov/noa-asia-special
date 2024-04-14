import { Injectable } from '@angular/core';
import {
  Firestore,
  CollectionReference,
  addDoc,
  collectionData,
  doc,
  updateDoc,
  deleteDoc, docData
} from "@angular/fire/firestore";
import { DocumentData, collection } from "@firebase/firestore"
import {ICategoryRequest} from "../../interfaces/category/category.interface";

@Injectable({
  providedIn: 'root'
})
export class CategoryThaiService {

  private categoryCollection!: CollectionReference<DocumentData>;
  constructor(
    private afs: Firestore
  ) {
    this.categoryCollection = collection(this.afs, 'categories-thai');
  }

  getAllFirebase() {
    return collectionData(this.categoryCollection, { idField: 'id' });
  }

  getOneFirebase(id: string) {
    const categoryDocumentReference = doc(this.afs, `categories-thai/${id}`);
    return docData(categoryDocumentReference, { idField: 'id' });
  }

  createFirebase(category: ICategoryRequest) {
    return addDoc(this.categoryCollection, category);
  }

  updateFirebase(category: ICategoryRequest, id: string) {
    const categoryDocumentReference = doc(this.afs, `categories-thai/${id}`);
    return updateDoc(categoryDocumentReference, {...category});
  }

  deleteFirebase(id: string) {
    const categoryDocumentReference = doc(this.afs, `categories-thai/${id}`);
    return deleteDoc(categoryDocumentReference);
  }
}
