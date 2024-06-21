export interface user {
    name: string,
    password: any,
    fullName: any,
    rbacs : any[]
}

export const UserTable: user[] = [
    { name: 'guna', password: 'xoxo', fullName: 'Guna', rbacs : ['VEHICLE','XML','IMAGE_TEST']},
    { name: 'harii', password: 'harry', fullName: 'Hari', rbacs : []},
    { name: 'velu', password: 'vels', fullName: 'Velu' ,rbacs : []},
]


