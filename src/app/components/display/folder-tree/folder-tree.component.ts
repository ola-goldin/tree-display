import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { Folder } from 'src/app/models/interfaces';

@Component({
	selector: "my-folder-tree",
	inputs: ["expandedFolders", "rootFolder"],
	outputs: ["toggleFolderEvents: toggleFolder"],
	changeDetection: ChangeDetectionStrategy.OnPush,
	styleUrls: ["./folder-tree.component.scss"],
	templateUrl: './folder-tree.component.html'
})
export class FolderTreeComponent implements OnInit {

	public expandedFolders!: string[];
	public rootFolder!: Folder;
	public toggleFolderEvents: EventEmitter<Folder>;
	private destroyed$ = new Subject();
	private folder = null;

	ngOnInit() {
		this.router.events
			.pipe(
				filter((event: RouterEvent) => event instanceof NavigationEnd),
				takeUntil(this.destroyed$),
			)
			.subscribe((event: NavigationEnd) => {
				this.toggleFolderEvents.emit(this.folder);
			});
	}

	constructor(private router: Router) {
		this.toggleFolderEvents = new EventEmitter();
	}

	public toggleFolder(target: Folder): void {
		this.folder = target
		this.router.url.indexOf(target.uid) === -1 ? this.router.navigate([this.router.url, target.uid]) : this.router.navigate([this.router.url.replace(target.uid, '')])
	}

}
