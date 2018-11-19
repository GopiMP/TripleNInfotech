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
import { Network } from '@ionic-native/network';
import { EmailComposer } from '@ionic-native/email-composer';
import { HttpModule } from '@angular/http';
import { CallNumber } from '@ionic-native/call-number';
import { AboutPage } from '../pages/about/about';
//import {PopoverPage} from '../pages/popover/popover';
import { GalleryPage } from '../pages/gallery/gallery';
import { MissionPage } from '../pages/about/mission_achievement/mission';
import { AchievementPage } from '../pages/about/achievement/achievement';
import { Toast } from '@ionic-native/toast';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import { PopoverPage } from '../pages/popover/popover';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    OnboardingPage,
    ProjectsPage,
    TrainingPage,
    ContactsPage,
    ProjectListPage,
    MailPage,
    AboutPage,
    GalleryPage,
    MissionPage,
    AchievementPage,
    PopoverPage

  ],
  imports: [
    BrowserModule,
    HttpModule,
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
    MailPage,
    AboutPage,
    GalleryPage,
    MissionPage,
    AchievementPage,
    PopoverPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    EmailComposer,
    CallNumber,
    LaunchNavigator,
    Network,
    NativePageTransitions,
    Toast,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    
  ]
})
export class AppModule {}
