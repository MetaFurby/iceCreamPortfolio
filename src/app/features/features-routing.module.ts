import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "../shared/layout/layout.component";
import { FeatureContainerComponent } from "./feature-container/feature-container.component";

const routes: Routes = [
    {
      path: "",
      component: LayoutComponent,
      children: [
        {
            path: "home",
            component: FeatureContainerComponent,
          },
          {
            path: "",
            redirectTo: "home",
            pathMatch: "full",
          }
      ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class FeaturesRoutingModule { }