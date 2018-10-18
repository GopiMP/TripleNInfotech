import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule  } from '@ionic/storage';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { OnboardingPage } from '../pages/onboarding/onboarding';
import { ProjectsPage } from '../pages/projects/projects';
import { TrainingPage } from '../pages/training/training';
import { ContactsPage } from '../pages/contacts/contacts';
import { ProjectListPage } from '../pages/project-list/project-list';
import { MailPage } from '../pages/mail/mail';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    OnboardingPage,
    ProjectsPage,
    TrainingPage,
    ContactsPage,
    ProjectListPage,
    MailPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    OnboardingPage,
    ProjectsPage,
    TrainingPage,
    ContactsPage,
    ProjectListPage,
    MailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    
  ]
})
export class AppModule {}
