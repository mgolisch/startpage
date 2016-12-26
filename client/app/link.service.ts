import {Injectable} from '@angular/core'
import { Http } from '@angular/http'
import {Link} from './link.model'
import {Category} from './category.model'

@Injectable()
export class LinkService {

    private linkurl = "http://localhost:3000/api/links"
    private categoryurl = "http://localhost:3000/api/categories"

    constructor(private _http: Http) { }

    getCategories() {
        return this._http.get(this.categoryurl)
            .map((res) => {
                return res.json()
            })
    }


    insertCategory(newcategory: Category) {
        return this._http.post(this.categoryurl, newcategory)
    }

    getCategory(id: string) {
        return this._http.get(this.categoryurl + '/' + id)
    }

    removeCategory(id: string) {
        return this._http.delete(this.categoryurl + '/' + id)
    }

    updateCategory(category: Category) {
        var id = category._id
        return this._http.put(this.categoryurl + '/' + id, category)
    }
    getLinks() {
        return this._http.get(this.linkurl)
    }

    getLink(id: string) {
        return this._http.get(this.linkurl + '/' + id)
    }
    updateLink(link: Link) {
        var id = link._id
        return this._http.put(this.linkurl + '/' + id, link)
    }

    insertLink(newlink: Link) {
        return this._http.post(this.linkurl, newlink)
    }

    removeLink(id: string) {
        return this._http.delete(this.linkurl + '/' + id)
    }
}