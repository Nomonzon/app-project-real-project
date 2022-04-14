import {RouterModule, Routes} from "@angular/router";
import {TutorialListComponent} from "./components/tutorial-list/tutorial-list.component";
import {AddTutorialComponent} from "./components/add-tutorial/add-tutorial.component";
import {TutorialDetailsComponent} from "./components/tutorial-details/tutorial-details.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {path: '', redirectTo: 'tutorial', pathMatch: 'full'},
  {path: 'tutorials', component: TutorialListComponent},
  {path: 'tutorials/:id', component: TutorialDetailsComponent},
  {path: 'add', component: AddTutorialComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
