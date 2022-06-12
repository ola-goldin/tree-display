import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Folder, PERMISSIONS, ROLES } from 'src/app/models/interfaces';
import { generateData } from 'src/app/models/mock-data';
import {TriggersService } from '../services/triggers.service'

@Component({
	selector: 'app-display',
	templateUrl: './display.component.html',
	styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit{
	permitedRole = PERMISSIONS.VIEWER;
	public expandedFolders: string[] = [];
	public rootFolder: Folder;
	constructor(private triggers :TriggersService ) {
	}
	public collapseAll(): void {
		this.expandedFolders = [];
	}

	public expandAll(): void {
		var uids: string[] = [];
		var foldersToExplore: Folder[] = [this.rootFolder];

		while (foldersToExplore.length) {
			var folder = foldersToExplore.shift()!;
			uids.push(folder.uid);
			foldersToExplore.push(...folder.folders);
		}
		this.expandedFolders = uids;
	}

	public ngOnInit(): void {
		this.rootFolder = generateData();
	}

	public toggleFolder(target: Folder): void {
		var index = this.expandedFolders.indexOf(target.uid);
		if (index === -1) {
			this.expandedFolders = this.expandedFolders.concat(target.uid);
		} else {
			this.expandedFolders = [
				...this.expandedFolders.slice(0, index),
				...this.expandedFolders.slice(index + 1)
			];
		}
	}

	disabledFunc(e) {this.triggers.cancelOperation.next(true)}

	enableFunc(e) {this.triggers.cancelOperation.next(false)}

}
