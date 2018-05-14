import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CaptureImageComponent } from './capture-image/capture-image.component';
import { ProcessImageComponent } from './process-image/process-image.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { AgeResultComponent } from './age-result/age-result.component';
import { MainScreenComponent } from './main-screen/main-screen.component';


const routes: Routes = [
    { path: 'take-picture', component: CaptureImageComponent },
    { path: 'proces-picture', component: ProcessImageComponent },
    { path: 'splash-screen', component: SplashScreenComponent },
    { path: 'age-result', component: AgeResultComponent },
    { path: 'main-screen', component: MainScreenComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }