import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { SharedModule } from './modules/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { GlobalInterceptor } from './modules/shared/interceptors/global-interceptor';
import { WelcomeModule } from './modules/welcome/welcome.module';
import { ArtistReducer } from './modules/shared/store/reducers/artist';
import { AlbumReducer } from './modules/shared/store/reducers/album';
import { TrackReducer } from './modules/shared/store/reducers/track';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    WelcomeModule,
    HttpClientModule,
    SharedModule,
    StoreModule.forRoot({
      artist: ArtistReducer,
      album: AlbumReducer,
      track: TrackReducer,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: GlobalInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
