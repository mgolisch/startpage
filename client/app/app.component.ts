import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
            <nav class="navbar navbar-default">
            <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">Awesome StartPage</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a routerLink="/startpage" routerLinkActive="active" >Startpage</a></li>
      <li><a routerLink="/createlink" routerLinkActive="active">Create Link</a></li>
      <li><a routerLink="/createcategory" routerLinkActive="active">Create Category</a></li>
    </ul>
  </div>
</nav>
 <div class="container">
            <div class="row">        
              <div class="col-sm-12">
                <clock></clock>
              </div>
            </div>
            <router-outlet></router-outlet>
</div>
  `
})
export class AppComponent { }
