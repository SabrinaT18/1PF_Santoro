export interface Usuario {
id: string;
username: string;
email: string;
password: string;
admin: boolean;
canActivateChild: boolean;
canLoad: boolean;
canDeactivate: boolean;
}