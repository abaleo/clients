import { NgModule } from "@angular/core";

import { SharedOrganizationModule } from "../../organizations/shared";

import { CoreOrganizationModule } from "./core";
import { GroupAddEditComponent } from "./manage/group-add-edit.component";
import { GroupsComponent } from "./manage/groups.component";
import { OrganizationsRoutingModule } from "./organization-routing.module";
import { AccessSelectorModule } from "./shared/components/access-selector";

@NgModule({
  imports: [
    SharedOrganizationModule,
    AccessSelectorModule,
    CoreOrganizationModule,
    OrganizationsRoutingModule,
  ],
  declarations: [GroupsComponent, GroupAddEditComponent],
})
export class OrganizationModule {}