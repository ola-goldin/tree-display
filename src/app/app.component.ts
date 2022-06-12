import { Component } from '@angular/core';
import { NgxPermissionsService, NgxRolesService } from 'ngx-permissions';
import { PERMISSIONS, ROLES } from './models/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tree-display';
  name:string;
  permissions$;
  roles$
  constructor(private rolesService: NgxRolesService, private permissionsService: NgxPermissionsService) {
    this.permissions$ = permissionsService.permissions$
    this.roles$ = rolesService.roles$
    this.allowView()
  }
  
  allowView() {
    this.permissionsService.addPermission(ROLES.ADMIN);
    this.rolesService.addRole(PERMISSIONS.VIEWER, [ROLES.ADMIN]);

  }
  
  prohibitTab() {
    // this.permissionsService.removePermission('Nice')
    this.rolesService.removeRole('Nice');

  }
}
