export enum PermissionActionsEnum {
    VIEWALL = 'VIEWALL',
    VIEW = 'VIEW',
    VIEW_LIST = 'VIEW_LIST',
    CREATE = 'CREATE',
    DELETE = 'DELETE',
    UPDATE = 'UPDATE',
    IMPORT = 'IMPORT',
    EXPORT = 'EXPORT',
    APPROVE = 'APPROVE',
    PUBLISH = 'PUBLISH',
    CONVERT = 'CONVERT',
    CLOSE = 'CLOSE',
    REOPEN = 'REOPEN',
    GENERATE = 'GENERATE',
    ASSIGN = 'ASSIGN',
    VERIFY = 'VERIFY',
    UPLOAD = 'UPLOAD',
    permissionName = "permissionName"
}

export enum PermissionComponentsEnum {

    USER = 'USER',
    PRODUCT_MANAGEMENT = 'PRODUCT_MANAGEMENT',
    CATEGORY_MANAGEMENT = 'CATEGORY_MANAGEMENT',
    ORDER_MANAGEMENT = 'ORDER_MANAGEMENT',
    DELIVERY_PARTNER = 'DELIVERY_PARTNER',
    DELIVERY_TRANSACTION = 'DELIVERY_TRANSACTION',
    FEATURE_SELLER = 'FEATURE_SELLER',
    FEATURE_PRODUCT = 'FEATURE_PRODUCT'

}

export const GROCEY_PERMISSIONS = [
    {
        component: PermissionComponentsEnum.USER,
        action: PermissionActionsEnum.VIEW,
        keyName: 'USER_VIEW',
        value: 'View All user',
    },
    {
        component: PermissionComponentsEnum.USER,
        action: PermissionActionsEnum.CREATE,
        keyName: 'USER_CREATE',
        value: ' create user',
    },
    {
        component: PermissionComponentsEnum.USER,
        action: PermissionActionsEnum.UPDATE,
        keyName: 'USER_UPDATE',
        value: ' update  user',
    },

    {
        component: PermissionComponentsEnum.PRODUCT_MANAGEMENT,
        action: PermissionActionsEnum.VIEW,
        keyName: 'PRODUCT_VIEW',
        value: 'View All product',
    },
    {
        component: PermissionComponentsEnum.PRODUCT_MANAGEMENT,
        action: PermissionActionsEnum.CREATE,
        keyName: 'PRODUCT_CREATE',
        value: ' create product',
    },
    {
        component: PermissionComponentsEnum.PRODUCT_MANAGEMENT,
        action: PermissionActionsEnum.UPDATE,
        keyName: 'PRODUCT_UPDATE',
        value: ' update  product',
    }
]