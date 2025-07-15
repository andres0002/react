// Este archivo NO debe tener ningún export/import

interface Array<T> {
    toSorted(compareFn?: (a: T, b: T) => number): T[];
}