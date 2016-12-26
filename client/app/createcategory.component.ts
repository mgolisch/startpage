import { Component, OnInit } from "@angular/core"
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Link } from './link.model'
import {Category} from './category.model'
import {LinkService} from './link.service'
@Component({
    selector: 'new-link',
    template: `
    <div class="container">
    <h2>Create Category</h2>
    <form (ngSubmit)="onSubmit()">
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title" required
        [(ngModel)]="newCategory.name" name="name">
      </div>
      <button type="submit" class="btn btn-default">Submit</button>
    </form>
</div>

    `,
    providers: [LinkService]
})
export class CreateCategoryComponent implements OnInit {
    newCategory: Category
    mode:string = 'create'
    constructor(private _linkService: LinkService, private _router: Router, private _route: ActivatedRoute) {

    }

    ngOnInit() {
        this.newCategory = new Category()
        this._route.params.forEach((params: Params) => {
            let id = params['id']; // (+) converts string 'id' to a number
            console.log(id)
            if (id) {
                this._linkService.getCategory(id).subscribe((category) => this.newCategory = category.json())
                this.mode = "edit"
            }
        });
    }

    onSubmit() {
        if (this.mode == "create") {
            console.log(this.newCategory)
            this._linkService.insertCategory(this.newCategory).subscribe(
                null,
                (error) => console.log(error),
                () => this._router.navigate(['startpage'])
            )
        }
        else {

            this._linkService.updateCategory(this.newCategory).subscribe(
                null,
                (error) => console.log(error),
                () => this._router.navigate(['startpage']))
        }

    }

}