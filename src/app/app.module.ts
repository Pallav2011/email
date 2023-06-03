import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatButtonModule, MatIconModule, MatTabsModule, MatMenuModule } from '@angular/material';
import { ToolsComponent } from './tools/tools.component';
import { MessagemenuComponent } from './messagemenu/messagemenu.component';
import { MessagelistComponent } from './messagelist/messagelist.component';
import { EmailstableComponent } from './emailstable/emailstable.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolsComponent,
    MessagemenuComponent,
    MessagelistComponent,
    EmailstableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule, 
    MatIconModule,
    MatTabsModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
