import type {Role} from "../types/Role.ts";


export const Roles: Role[] = [
    {
        id: 1,
        application: 'META',
        assets: [
            {name: 'Asset 1', action: ['read', 'write']},
            {name: 'Asset 2', action: ['read']}
        ]
    },
    {
        id: 2,
        application: 'META',
        assets: [
            {name: 'Asset 3', action: ['write']},
            {name: 'Asset 4', action: ['read', 'write']}
        ]
    },
    {
        id: 3,
        application: 'META',
        assets: [
            {name: 'Asset 5', action: ['read']},
            {name: 'Asset 6', action: ['write']}
        ]
    },
    {
        id: 4,
        application: 'ICP',
        assets: [
            {name: 'Asset 7', action: ['read', 'write']},
            {name: 'Asset 8', action: ['read']}
        ]
    },
    {
        id: 5,
        application: 'SCQ',
        assets: [
            {name: 'Asset 9', action: ['write']},
            {name: 'Asset 10', action: ['read', 'write']}
        ]
    },
];