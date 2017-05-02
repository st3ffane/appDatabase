import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {TableComponent} from "./components/tables";
import {FieldComponent} from "./components/field";
// import {RelationComponent} from "./components/relation";
import {MenuComponent} from "./components/menu";

import {DBInfosPipe} from "./pipes/db.infos.pipe";
import {BypassCSSPipe} from "./pipes/bypass.css.pipe";
import {Relation2PointsPipe} from "./pipes/relation.to.points.pipe";
import {DialogComponent} from "./components/dialog";

import {DBProvider} from './providers/db.provider';
import {DialogProvider} from "./providers/dialog.provider";
import {MenuProvider} from './providers/menu.provider';

import DIALOGS from "./components/dialogs/dialogs";

@NgModule({
  declarations: [
    DBInfosPipe,
    BypassCSSPipe,
    Relation2PointsPipe,
    ...DIALOGS,
    
    AppComponent,
    TableComponent,
    FieldComponent,
    MenuComponent,
    DialogComponent
    // RelationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DBProvider,DialogProvider, MenuProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
