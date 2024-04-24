import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {PrivacyPolicyComponent} from "./pages/privacy-policy/privacy-policy.component";
import {HelpComponent} from "./pages/help/help.component";
import {TermsOfUseComponent} from "./pages/terms-of-use/terms-of-use.component";
import {ContactComponent} from "./pages/contact/contact.component";

export const routes: Routes = [
  {path:'home',component: HomeComponent},
  {path:'privacy-policy', component: PrivacyPolicyComponent},
  {path:'help', component: HelpComponent},
  {path:'terms-of-use', component: TermsOfUseComponent},
  {path:'contact', component: ContactComponent},
  {path:'',pathMatch:'full',redirectTo:'home'}
];
