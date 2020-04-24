import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

/* Componentes*/
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

/* Modelos */
import { User } from './Model/user';
import { NewTweet } from './Model/tweet';

/* Servicios */
import { UserService } from './Services/user.service';
import { TweetService } from './Services/tweet.service';

import { NavPageService } from './Services/nav-page.service';
import { TweetComponent } from './tweet/tweet.component';
import { InicioComponent } from './inicio/inicio.component';
import { TweetCardComponent } from './tweet-card/tweet-card.component';
import { MistweetsComponent } from './mistweets/mistweets.component';
import { ProfileComponent } from './profile/profile.component';
import { FollowerComponent } from './follower/follower.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    TweetComponent,
    InicioComponent,
    TweetCardComponent,
    MistweetsComponent,
    ProfileComponent,
    FollowerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [User, NewTweet, NavPageService, UserService, TweetService],
  bootstrap: [AppComponent],
})
export class AppModule {}
