
export interface Folder {
	uid: string;
	name: string;
	folders: Folder[];
	files: File[];
	icon?:string
}

export interface File {
	uid: string;
	name: string;
}

export const ROLES = {ADMIN:'ADMIN'}
export const PERMISSIONS = {VIEWER:'VIEWER'}