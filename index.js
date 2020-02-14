function countSignals(frequencies, filterRanges) {
    //return just the count of frequencies that fall within ALL filters
    // frequencies are an array, filterRanges is an array of arrays
    //check low end of filters for highest common and high end of filters for lowest common
    let count = 0
    let lowestcommon = 0
    let highestcommon = 100000000000000
    for(let i=0; i<filterRanges.length; i++){
        //if lowest frequency is grteater than current lowest, it becomes lowest common
        if(filterRanges[i][0] >= lowestcommon){
            lowestcommon = filterRanges[i][0]
        // otherwise is highest frequency is less than the highest current, it becomes the highest common
        } else if (filterRanges[i][1] <= highestcommon){
            highestcommon = filterRanges[i][1]
        }
    }
    // if the frequency falls between highest and lowest, increase the count
    for(let i=0; i<frequencies.length; i++){
        if(frequencies[i] >= lowestcommon && frequencies[i] <= highestcommon){
            count ++
        }
    }
    return count
}