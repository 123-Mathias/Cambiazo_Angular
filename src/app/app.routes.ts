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
import {RegisterComponent} from "./pages/register/register.component";

import {HomeAdminComponent} from "./admin/pages/home-admin/home-admin.component";
import {OngsCategoriesAdminComponent} from "./admin/pages/ongs-categories-admin/ongs-categories-admin.component";
import {OngsAdminComponent} from "./admin/pages/ongs-admin/ongs-admin.component";
import {
  ProductsCategoriesAdminComponent
} from "./admin/pages/products-categories-admin/products-categories-admin.component";
import {ProductsAdminComponent} from "./admin/pages/products-admin/products-admin.component";
import {MembershipsAdminComponent} from "./admin/pages/memberships-admin/memberships-admin.component";
import {UsersAdminComponent} from "./admin/pages/users-admin/users-admin.component";

export const routes: Routes = [

  {path:'home',component: HomeComponent},
  {path:'privacy-policy', component: PrivacyPolicyComponent},
  {path:'help', component: HelpComponent},
  {path:'terms-of-use', component: TermsOfUseComponent},
  {path:'contact', component: ContactComponent},
  {path:'memberships', component:MembershipsComponent},
  {path:'donations',component: DonationsComponent},
  {path:'login',component: LoginComponent },
  {path:'register',component: RegisterComponent },
  {path:'home/post',component:PostComponent},

  /**************   Admin    *********************/
  {path: 'admin', component: HomeAdminComponent},
  {path: 'admin/ongs-categories', component: OngsCategoriesAdminComponent},
  {path: 'admin/ongs', component: OngsAdminComponent},
  {path: 'admin/products-categories', component: ProductsCategoriesAdminComponent},
  {path: 'admin/products', component: ProductsAdminComponent},
  {path: 'admin/memberships', component: MembershipsAdminComponent},
  {path: 'admin/users', component: UsersAdminComponent},

  {path:'',pathMatch:'full',redirectTo:'home'},
  {path:'**',pathMatch:'full',redirectTo:'home'}

];

