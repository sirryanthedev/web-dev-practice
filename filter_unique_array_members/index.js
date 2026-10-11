function unique(arr) {
    let uniques = [];
    for (let item of arr) {
        if (!uniques.includes(item)) {
            uniques.push(item);
        }
    }
    return uniques;
}