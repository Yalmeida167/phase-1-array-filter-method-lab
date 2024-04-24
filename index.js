// Code your solution here

function findMatching(array, string) {
    return array.filter(function(name) {
        return name.toLowerCase() === string.toLowerCase()
    })
}

function fuzzyMatch(array, string) {
    return array.filter(function(nameLetter) {
        return nameLetter.slice(0,2).toLowerCase().includes(string.toLowerCase())
    })
}

function matchName(array, string) {
    return array.filter(function(obj) {
        return obj.name === string
    })
}

