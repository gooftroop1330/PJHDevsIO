import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {IdeaCreateComponent} from './idea-create/idea-create.component';
import { MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {HeaderComponent} from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FooterComponent} from './footer/footer.component';
import {JumbotronComponent} from './jumbotron/jumbotron.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatMenuModule} from "@angular/material/menu";
import {WebDevComponent} from "./web-dev/web-dev.component";
import {LegacyComponent} from "./legacy/legacy.component";
import {MobiDevComponent} from "./mobi-dev/mobi-dev.component";
import {EnterpriseComponent} from "./enterprise/enterprise.component";
import { NgxMaskModule } from 'ngx-mask';
import {PrivacyComponent} from "./privacy/privacy.component";
import {NdaComponent} from "./nondisclosure/nda.component";
import {HomeComponent} from "./home/home.component";
import {ContactComponent} from "./contact/contact.component";
import {TermsComponent} from "./terms/terms.component";

@NgModule({
  declarations: [
    AppComponent,
    IdeaCreateComponent,
    HeaderComponent,
    FooterComponent,
    JumbotronComponent,
    WebDevComponent,
    LegacyComponent,
    MobiDevComponent,
    EnterpriseComponent,
    PrivacyComponent,
    NdaComponent,
    HomeComponent,
    ContactComponent,
    TermsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MDBBootstrapModule.forRoot(),
    MatCheckboxModule,
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
