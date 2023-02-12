import { SharedModule } from "src/app/shared/shared.module";
import { CourseComponent } from "./course.component";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [ CourseComponent ],
    exports: [ CourseComponent ],
    imports: [ CommonModule, SharedModule ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
  })
  
export class CoursesModule {  }