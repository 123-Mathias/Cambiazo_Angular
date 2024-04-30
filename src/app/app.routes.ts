import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {PrivacyPolicyComponent} from "./pages/privacy-policy/privacy-policy.component";
import {HelpComponent} from "./pages/help/help.component";
import {TermsOfUseComponent} from "./pages/terms-of-use/terms-of-use.component";
import {ContactComponent} from "./pages/contact/contact.component";
  import {MembershipsComponent} from "./pages/memberships/components/memberships.component";
import {DonationsComponent} from "./pages/donations/donations.component";
import {PostComponent} from "./pages/post/post.component";
import {LoginComponent} from "./pages/login/login.component";

export const routes: Routes = [
  {path:'home',component: HomeComponent},
  {path:'privacy-policy', component: PrivacyPolicyComponent},
  {path:'help', component: HelpComponent},
  {path:'terms-of-use', component: TermsOfUseComponent},
  {path:'contact', component: ContactComponent},
  {path:'memberships', component:MembershipsComponent},
  {path:'donations',component: DonationsComponent},
  {path:'login',component: LoginComponent },
  {path:'home/post',component:PostComponent},

  {path:'',pathMatch:'full',redirectTo:'home'},
  {path:'**',pathMatch:'full',redirectTo:'home'}
];
