import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from 'src/app/layout/admin-layout/admin-layout.component';
import { AdminNavComponent } from 'src/app/nav/admin-nav/admin-nav.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { AdminArticleComponent } from './article/article/article.component';
import { ArticleAddComponent } from './article/article-add/article-add.component';
import { ArticleUpdateComponent } from './article/article-update/article-update.component';
import { ArticleListComponent } from './article/article-list/article-list.component';
import {CKEditorModule} from "@ckeditor/ckeditor5-angular"


@NgModule({
  declarations: [AdminLayoutComponent,AdminNavComponent, AdminArticleComponent, ArticleAddComponent, ArticleUpdateComponent, ArticleListComponent],
  imports: [
    CommonModule,AppRoutingModule,MaterialModule,ComponentsModule,CKEditorModule
  ]
})
export class AdminModule { }
