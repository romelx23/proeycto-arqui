
export interface Role {
    roles: RoleElement[];
}

export interface RoleElement {
    estado?: boolean;
    _id?:    string;
    rol:    string;
    __v?:   number;
}
