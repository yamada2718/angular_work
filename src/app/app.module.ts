import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
// import { HttpClientModule } from '@angular/common/http';

// Angular Material Modules
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator'
import { CustomPaginator } from './shared/mat-paginator-ja'; // paginator日本語化
import { MatSortModule } from '@angular/material/sort';

// my components
import { HogeComponent } from './hoge/hoge.component';
import { SearchButtonComponent } from './search-button/search-button.component';
import { FugaComponent } from './fuga/fuga.component';
import { PiyopiyoComponent } from './piyopiyo/piyopiyo.component';

@NgModule({
  declarations: [
    AppComponent,
    HogeComponent,
    SearchButtonComponent,
    FugaComponent,
    PiyopiyoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatSortModule,
  // HttpClientModule,
  ],
  providers: [
    { provide: MatPaginatorIntl, useValue: CustomPaginator() },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
