/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {

    // eliminating base condtions
    if (s1 === s2) {
        return true;
    }
    if (s1.length > s2.length) {
        return false;
    }

    //declaring objects
    let mapForS1 = {};
    let mapForS2 = {};
    let s1len = s1.length;

    //getting counts for each element in the s1
    s1.split("").forEach(item => {
        mapForS1[item] = mapForS1[item] ? mapForS1[item] + 1 : 1;
    })


    for (let i = 0; i < s2.length; i++) {

        //item count to added in the new obj
        let item = s2[i];

        //for first s1len elemtns, adding it to the obj
        if (i < s1len - 1) {
            mapForS2[item] = mapForS2[item] ? mapForS2[item] + 1 : 1;
        }
        else {

            //increasing count of the element at i at the new element added in the window
            mapForS2[item] = mapForS2[item] ? mapForS2[item] + 1 : 1;

            //comparing 2 objects
            if (compareObj(mapForS1, mapForS2)) {
                return true;
            }

            //removing the element went out of the window
            let itemToBeRemoved = s2[i - s1len + 1];
            mapForS2[itemToBeRemoved] = mapForS2[itemToBeRemoved] ? mapForS2[itemToBeRemoved] - 1 : 0;
        }
    }

    //no match found
    return false;
};



function compareObj(mapForS1, mapForS2) {

    //getting the keys of s1 to match
    let keys1 = Object.keys(mapForS1);

    //traversing the obj to match keys, if doesnt matches return false
    for (let i = 0; i < keys1.length; i++) {
        let item = keys1[i];
        if (mapForS1[item] !== mapForS2[item]) {
            return false;
        }
    }

    // all elements got match
    return true;
}
