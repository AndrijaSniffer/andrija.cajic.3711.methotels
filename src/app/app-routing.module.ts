import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PreporukeComponent} from "./preporuke/preporuke.component";
import {PonudaComponent} from "./ponuda/ponuda.component";
import {ONamaComponent} from "./o-nama/o-nama.component";

const routes: Routes = [
  {path: "", component: PonudaComponent},
  {path: "preporuke", component: PreporukeComponent},
  {path: "onama", component: ONamaComponent},
  {path: "home", redirectTo: ""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
