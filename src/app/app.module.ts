import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CorporateComponent } from './components/services/corporate/corporate.component';
import { ServiceComponent } from './components/services/service/service.component';
import { ExploreOurServicesComponent } from './components/shared/explore-our-services/explore-our-services.component';
import { MiniContactUsComponent } from './components/shared/mini-contact-us/mini-contact-us.component';
import { AccountingAndAuditingComponent } from './components/services/accounting-and-auditing/accounting-and-auditing.component';
import { FinanceComponent } from './components/services/finance/finance.component';
import { LegalAdviceComponent } from './components/services/legal-advice/legal-advice.component';
import { RealStateInvestmentComponent } from './components/services/real-state-investment/real-state-investment.component';
import { BankComponent } from './components/services/bank/bank.component';
import { WealthManagementComponent } from './components/services/wealth-management/wealth-management.component';
import { ContatUsComponent } from './components/contat-us/contat-us.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { CookiePolicyComponent } from './components/cookie-policy/cookie-policy.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutUsComponent,
    CorporateComponent,
    ServiceComponent,
    ExploreOurServicesComponent,
    MiniContactUsComponent,
    AccountingAndAuditingComponent,
    FinanceComponent,
    LegalAdviceComponent,
    RealStateInvestmentComponent,
    BankComponent,
    WealthManagementComponent,
    ContatUsComponent,
    FooterComponent,
    CookiePolicyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
