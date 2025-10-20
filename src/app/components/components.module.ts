import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { RouterModule } from "@angular/router";
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        FormsModule
    ],
    exports: [
        HeaderComponent,
        FooterComponent
    ]
})
export class ComponentsModule { }