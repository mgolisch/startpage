import { Component, OnInit, Pipe, PipeTransform } from "@angular/core"
import { Router } from '@angular/router'
import {Link } from './link.model'
import {Category} from './category.model'
import {LinkService} from './link.service'
import { Observable } from 'rxjs/Rx';
@Component({
    selector: 'linklist',
    template: ` 
            <div class="row">
            <div class="col-sm-offset-4 col-sm-12">
            <h1>Links</h1>
            <button (click)="toggleEdit()" class="btn btn-primary btn-xs">Toggle Edit</button>
            </div><!-- col -->
            </div><!-- row -->
            <div class="row">
            <div *ngFor="let cat of categories;let i = index">
                <div *ngIf="i % 3 == 0" class="clearfix"></div>
                <div class="col-sm-4">
                <div class="well">
                <h3 *ngIf="cat">{{cat.name}}</h3>
                 <a *ngIf="editing" (click)="deleteCategory(cat._id)">
                    <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
                </a>
            <ul *ngIf="cat">
            <li  *ngFor="let link of filterLinks(cat)">
            <img *ngIf="link.icon" width="20" height="20" [src]="link.icon" class="img-circle"/>
            <a href="#" (click)="openLink(link.url)">{{link.title}}</a>
            <a *ngIf="editing" (click)="editLink(link)">
             <span class="glyphicon glyphicon-edit" aria-hidden="true"></span>
            </a>
            <a *ngIf="editing" (click)="deleteLink(link._id)">
             <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
            </a>
            </li>
            </ul>
            </div>
            </div><!-- col -->
            </div><!-- category -->
            </div><!-- row -->
    `,
    providers: [LinkService]
})
export class LinkListComponent implements OnInit {
    public links: Link[] = []
    private editing = false
    public categories: Category[]
    constructor(private _linkService: LinkService, private _router: Router) {

    }

    filterLinks(category: Category) {
        return this.links.filter((link: Link) => link.category == category._id)
    }
    toggleEdit() {
        this.editing = !this.editing
    }
    openLink(url: string) {
        window.open(url)
    }
    editLink(link: Link) {
        this._router.navigate(['createlink', link._id])
    }

    deleteLink(id: string) {
        this._linkService.removeLink(id).subscribe(null, (error) => alert(error), () => this.refreshLinks())
        //todo: remove link from local array instead of refreshing array from api

    }

    refreshLinks() {
        this._linkService.getLinks().subscribe(
            (data) => this.links = data.json(),
            (error) => alert(error)
        )
    }


    refreshCategory() {
         this._linkService.getCategories().subscribe( (data) => this.categories = data,(error)=>alert(error),()=>console.log(this.categories))
    }

    refreshAll(){
        this.refreshCategory()
        this.refreshLinks()
    }

    deleteCategory(id: string) {
        this._linkService.removeCategory(id).subscribe(null, (error) => alert(error), () => this.refreshAll())
        //todo: remove link from local array instead of refreshing array from api

    }
    ngOnInit() {
        this.refreshAll()
    }
}