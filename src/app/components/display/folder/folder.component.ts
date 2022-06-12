import { Component, OnChanges, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { SimpleChanges } from "@angular/core";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Folder } from 'src/app/models/interfaces';
import { TriggersService } from '../../services/triggers.service';

@Component({
	selector: "my-folder",
	inputs: [
		"expandedFolders",
		"folder"
	],
	outputs: [
		"toggleFolderEvents: toggleFolder"
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
	styleUrls: ["./folder.component.scss"],
	templateUrl: "./folder.component.html"
})

export class FolderComponent implements OnChanges {

	public expandedFolders!: string[];
	public folder!: Folder;
	public isExpanded: boolean;
	public toggleFolderEvents: EventEmitter<Folder>;

	constructor(private router: Router, private triggers: TriggersService, private toastr: ToastrService) {
		this.isExpanded = false;
		this.toggleFolderEvents = new EventEmitter();
	}

	public ngOnChanges(changes: SimpleChanges): void {
		this.isExpanded = (this.expandedFolders.indexOf(this.folder.uid) !== -1);
	}

	public toggleFolder(target: Folder): void {
		if (!this.triggers.cancelOperation.value)
			this.toggleFolderEvents.emit(target);
		else this.toastr.error("VIEWER role not granted")

	}

}
