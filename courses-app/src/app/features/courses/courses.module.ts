import { SharedModule } from "src/app/shared/shared.module";
import { CoursesComponent } from "./courses.component";
import { NgModule } from "@angular/core";

@NgModule({
    declarations: [CoursesComponent, SharedModule],
    imports: [
        SharedModule,
    ],
    exports: [CoursesComponent]
  })
export class CoursesModule { }