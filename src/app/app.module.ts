import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule}    from '@angular/common/http';

import {AppComponent} from './app.component';
import {DataDisplayComponent} from './data-display/data-display.component';
import {ApiDataService} from './api-data.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [
        AppComponent,
        DataDisplayComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        NgbModule.forRoot()
    ],
    providers: [ApiDataService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
