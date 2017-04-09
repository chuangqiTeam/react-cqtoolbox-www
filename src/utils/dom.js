const win = typeof window !== 'undefined' && window;
const doc = typeof document !== 'undefined' && document;
const docElem = doc && doc.documentElement;

export function viewportW() {
    const a = docElem['clientWidth'];
    const b = win['innerWidth'];
    return a < b ? b : a;
}

export function viewportH() {
    const a = docElem['clientHeight'];
    const b = win['innerHeight'];
    return a < b ? b : a;
}
