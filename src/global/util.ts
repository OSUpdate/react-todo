export function findPropIndex(arr: any[], prop: string, value: any): number {
    return arr.findIndex(v => v?.[prop] === value);
}
