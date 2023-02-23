import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MusicLandingComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { TodolistComponent } from './todolist/todolist.component';
import { VolumenControlComponent } from './volumen-control/volumen-control.component';
import { PomodoroComponent } from './pomodoro/pomodoro.component';
import { WeatherComponent } from './weather/weather.component';
import { PopupComponent } from './popup/popup.component';
import { DialogComponent } from './dialog/dialog.component';
import { RandomSentenceComponent } from './random-sentence/random-sentence.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PlayerContainerComponent } from './player-container/player-container.component';
import { ScreenContainerComponent } from './screen-container/screen-container.component';

@NgModule({
  declarations: [
    MusicLandingComponent,
    TodolistComponent,
    VolumenControlComponent,
    PomodoroComponent,
    WeatherComponent,
    PopupComponent,
    DialogComponent,
    RandomSentenceComponent,
    NavbarComponent,
    PlayerContainerComponent,
    ScreenContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatDividerModule,
    MatMenuModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatDialogModule,
    MatExpansionModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [MusicLandingComponent]
})
export class AppModule { }
