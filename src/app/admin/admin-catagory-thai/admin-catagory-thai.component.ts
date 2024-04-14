import {Component, OnInit} from '@angular/core';
import {ICategoryResponse} from "../../shared/interfaces/category/category.interface";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CategoryService} from "../../shared/services/category/category.service";
import {ToastrService} from "ngx-toastr";
import { deleteObject, getDownloadURL, percentage, ref, Storage, uploadBytesResumable } from '@angular/fire/storage';
import {ImageService} from "../../shared/services/image/image.service";
import {CategoryThaiService} from "../../shared/services/category-thai/category-thai.service";

@Component({
  selector: 'app-admin-catagory-thai',
  templateUrl: './admin-catagory-thai.component.html',
  styleUrl: './admin-catagory-thai.component.scss'
})
export class AdminCatagoryThaiComponent {

  public adminCategoriesThai: Array<ICategoryResponse> = [];
  public categoryForm!: FormGroup;
  public clickerSave!: boolean;
  public clickerOpenForm!: boolean;
  public uploadPercent!: number;
  public isUploaded = false;
  private currentCategoryId!: number | string;

  constructor(
    private fb: FormBuilder,
    private storage: Storage,
    private toastr: ToastrService,
    private imageService: ImageService,
    private categoryThaiService: CategoryThaiService,
  ) { }

  ngOnInit(): void {
    this.initCategoryForm();
    this.loadCategories();
  }

  initCategoryForm(): void {
    this.categoryForm = this.fb.group({
      name: [null, Validators.required],
      path: [null, Validators.required],
      imagePath: [null, Validators.required]
    });
  }

  openForm(): void {
    this.clickerOpenForm = !this.clickerOpenForm;
  }

  loadCategories(): void {
    this.categoryThaiService.getAllFirebase().subscribe(data => {
      this.adminCategoriesThai = data as ICategoryResponse[];
      console.log(this.adminCategoriesThai)
    })
  }

  addPost(): void {
    if (this.clickerSave) {
      this.categoryThaiService.updateFirebase(this.categoryForm.value, this.currentCategoryId as string).then(() => {
        this.loadCategories();
        this.toastr.success('Category successfully updated');
      })
    } else {
      this.categoryThaiService.createFirebase(this.categoryForm.value).then(() => {
        this.toastr.success('Category successfully created');
      })
    }
    this.clickerSave = false;
    this.categoryForm.reset();
    this.isUploaded = false;
    this.uploadPercent = 0;
  }

  editPost(category: ICategoryResponse): void {
    this.categoryForm.patchValue({
      name: category.name,
      path: category.path,
      imagePath: category.imagePath
    });
    this.currentCategoryId = category.id;
    this.isUploaded = true;
    this.clickerSave = true;
  }

  deletePost(category: ICategoryResponse): void {
    this.categoryThaiService.deleteFirebase(category.id as string).then(() => {
      this.loadCategories();
      this.toastr.success('Category successfully deleted');
    })
  }
  upload(event: any): void {
    const file = event.target.files[0];
    this.imageService.uploadFile('images', file.name, file)
      .then(data => {
        this.categoryForm.patchValue({
          imagePath: data
        });
        this.isUploaded = true;
      })
      .catch(err => {
        console.log(err);
      })
  }
  deleteImage(): void {
    this.imageService.deleteUploadFile(this.valueByControl('imagePath')).then(() => {
      console.log('File deleted');
      this.isUploaded = false;
      this.uploadPercent = 0;
      this.categoryForm.patchValue({
        imagePath: null
      })
    })
  }

  valueByControl(control: string): string {
    return this.categoryForm.get(control)?.value;
  }
}
