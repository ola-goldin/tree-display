import {Component, VERSION} from '@angular/core'
import {NgxRolesService} from 'ngx-permissions'
import {NgxPermissionsService} from 'ngx-permissions'
import { ToastrService } from 'ngx-toastr';
import { PERMISSIONS, ROLES } from 'src/app/models/interfaces';

@Component({
  selector: 'app-roles',
  templateUrl: './permission-builder.component.html',
  styleUrls:['./permission-builder.component.scss']
})

export class PermissionBuilderComponent {
  permission:string = PERMISSIONS.VIEWER;
  constructor(private roleService: NgxRolesService, 
    private toastr: ToastrService,
    private permissionService: NgxPermissionsService) {
  }
  
  addRole() {
    this.permissionService.loadPermissions([ROLES.ADMIN])
    this.roleService.addRole(PERMISSIONS.VIEWER, [ROLES.ADMIN])
    this.toastr.success('I should be able to view the folders!');
  }
  
   removeRole() {
    this.roleService.removeRole(PERMISSIONS.VIEWER)
    this.toastr.error('I VIEWER role has been removed!');
  }
}