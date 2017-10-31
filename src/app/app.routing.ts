

import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {WelcomeComponent} from "./welcome/welcome.component";
import {DynamicComponentComponent} from "./dynamic-component/dynamic-component.component";
import {FormBuilderComponent} from "./form-builder/form-builder.component";

const appRoutes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'form-builder', component: FormBuilderComponent },

  { path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  },
  { path: '**', component: WelcomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
