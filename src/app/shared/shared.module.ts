import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { BannerTwoComponent } from './banner-two/banner-two.component';
import {RouterModule} from "@angular/router";



@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        BannerComponent,
        BannerTwoComponent
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        BannerComponent,
        BannerTwoComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class SharedModule { }
