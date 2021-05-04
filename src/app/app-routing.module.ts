import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CorporateComponent } from './components/services/corporate/corporate.component';
import { ServiceComponent } from './components/services/service/service.component';
import { AccountingAndAuditingComponent } from './components/services/accounting-and-auditing/accounting-and-auditing.component';
import { FinanceComponent } from './components/services/finance/finance.component';
import { LegalAdviceComponent } from './components/services/legal-advice/legal-advice.component';
import { RealStateInvestmentComponent } from './components/services/real-state-investment/real-state-investment.component';
import { BankComponent } from './components/services/bank/bank.component';
import { WealthManagementComponent } from './components/services/wealth-management/wealth-management.component';
import { ContatUsComponent } from './components/contat-us/contat-us.component';
import { CookiePolicyComponent } from './components/cookie-policy/cookie-policy.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "about-us", component: AboutUsComponent },
  { path: "contact-us", component: ContatUsComponent },
  { path: "real-state-investment", component: RealStateInvestmentComponent },
  { path: "cookie-policy", component: CookiePolicyComponent },

  { path: "services", component: ServiceComponent },
  { path: "services/corporate", component: CorporateComponent },
  { path: "services/bank", component: BankComponent },
  { path: "services/account-&-auditing", component: AccountingAndAuditingComponent },
  { path: "services/finance", component: FinanceComponent },
  { path: "services/legal-advice", component: LegalAdviceComponent },
  { path: "services/wealth-management", component: WealthManagementComponent },
  { path: "footer", component: FooterComponent },
  { path: "navbar", component: NavbarComponent },


  { path: "", redirectTo: "/home", pathMatch: "full" }
];


@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: "enabled"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
