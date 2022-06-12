import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FolderTreeComponent } from './components/display/folder-tree/folder-tree.component';
import { FolderComponent } from './components/display/folder/folder.component';
import { DisplayComponent } from './components/display/display.component';
import { NgxPermissionsModule } from 'ngx-permissions';
import { PermissionBuilderComponent } from './components/permissions-manager/permission-builder/permission-builder.component';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    FolderTreeComponent,
    FolderComponent,
    DisplayComponent,
    PermissionBuilderComponent,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ToastrModule.forRoot(),
    NgxPermissionsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
