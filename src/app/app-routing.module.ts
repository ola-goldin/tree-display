import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { NgxPermissionsGuard, NgxPermissionsService } from 'ngx-permissions';
import { DisplayComponent } from './components/display/display.component';
import { PermissionBuilderComponent } from './components/permissions-manager/permission-builder/permission-builder.component';
import { PERMISSIONS, ROLES } from './models/interfaces';

export function silentRedirect(state: RouterStateSnapshot) {
    return state
}

const routes: Routes = [
  { path: '', redirectTo: '/connections', pathMatch: 'full' },
  { path: 'permissions', component: PermissionBuilderComponent },
  {
    path: 'connections', component: DisplayComponent, canActivate: [NgxPermissionsGuard], data: {
      permissions: {
        only: [PERMISSIONS.VIEWER],
        redirectTo: '/permissions'
      }
    }, children: [
      {path: '**', component: DisplayComponent, canActivate: [NgxPermissionsGuard], data:{
        permissions: {
          only: [PERMISSIONS.VIEWER],
        }
      }}
    ]
  },
  { path: 'connections/:id', component: DisplayComponent },
  { path: '**', component: PermissionBuilderComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
