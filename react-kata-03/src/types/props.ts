/* This file defines the types for the props used in the React components.
* It includes a generic ListProps type that can be used with any data type.
*/
export type ListProps<T> = {
    data: T[];
};