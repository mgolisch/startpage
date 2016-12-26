import { Component, OnInit } from "@angular/core"
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Link } from './link.model'
import {Category} from './category.model'
import {LinkService} from './link.service'
@Component({
    selector: 'new-link',
    template: `
    <div class="container">
    <h2>Create Link</h2>
    <form (ngSubmit)="onSubmit()">
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title" required
        [(ngModel)]="newLink.title" name="title">
      </div>
      <div class="form-group">
        <label for="url">Url</label>
        <input type="text" class="form-control" id="url" required
        [(ngModel)]="newLink.url" name="url">
      </div>
      <div class="form-group">
        <label for="icon">Icon Url</label>
        <input type="text" class="form-control" id="icon"
        [(ngModel)]="newLink.icon" name="icon">
      </div>
      <div class="form-group">
        <label for="icon">Link Category</label>
        <select [(ngModel)]="newLink.category" name=category>
        <option *ngFor="let c of categories" [ngValue]="c._id">{{c.name}}</option>
        </select>
      </div>
      <button type="submit" class="btn btn-default">Submit</button>
    </form>
</div>

    `,
    providers: [LinkService]
})
export class CreateLinkComponent implements OnInit {
    newLink: Link
    categories: Array<Category>
    mode:string = 'create'
    constructor(private _linkService: LinkService, private _router: Router, private _route: ActivatedRoute) {

    }

    UpdateCategoriesArray(){
        
         return  this._linkService.getCategories()
         .map((categories: Array<any>) => {
      let result:Array<Category> = [];
      if (categories) {
        categories.forEach((category) => {
          result.push({_id:category._id, 
                              name:category.name});
        });
      }
      return result;
    }).subscribe( (data)=> this.categories = data,(error)=> alert(error))
}

    ngOnInit() {
        this.newLink = new Link('', '', '','')
        this.UpdateCategoriesArray()
        this._route.params.forEach((params: Params) => {
            let id = params['id']; // (+) converts string 'id' to a number
            console.log(id)
            if (id) {
                this._linkService.getLink(id).subscribe((link) => this.newLink = link.json())
                this.mode = "edit"
            }
        });
    }

    onSubmit() {
        if (this.mode == "create") {
            this._linkService.insertLink(this.newLink).subscribe(
                null,
                (error) => console.log(error),
                () => this._router.navigate(['startpage'])
            )
        }
        else {

            this._linkService.updateLink(this.newLink).subscribe(
                null,
                (error) => console.log(error),
                () => this._router.navigate(['startpage']))
        }

    }

}