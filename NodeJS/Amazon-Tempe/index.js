// Design and implement a system that assigns different size(S / M / L) lockers to different size packages(S / M / L).
// Design and implement a system that assigns different size(S / M / L) lockers to different size packages(S / M / L).
// List of available lockers.

let allLocker = []; let smallLockers = 0; let mediumLockers = 0; let largeLockers = 0;
let lockers = { small: [], medium: [], large: [], used: [] }
let locker = { isvailable: false, type: 's' }

const assignLocker = (type) => {
    getAllLockers();
    if (allLocker.length <= 0) { return console.log('No Locker Avaialble'); }
    if (type === 's' && lockers.small.length > 0) { return assignNewLocker(lockers.small); }
    if (type === 's' || type === 'm' && mediumLockers.length > 0) { return assignNewLocker(lockers.medium); }
    if (type === 's' || type === 'm' || type === 'l' && largeLockers.length > 0) { return assignNewLocker(lockers.large); } f
    return console.log('No Locker Avaialble');
}
const assignNewLocker = (lockers) => { const locker = lockers.pop(); locker.isassigned = true; lockers.used.push(locker); return; }
const getAllLockers = () => { smallLockers = getAvailableLockers('s'); mediumLockers = getAvailableLockers('m'); largeLockers = getAvailableLockers('l'); }
const getAvailableLockers = (type) => { return lo.filter(s => { return s.isvailable === true && s.type === type; }); }
assignLocker('s');