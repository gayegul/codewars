function solution(string,limit) {
    return limit >= string.length ? string : string.slice(0,limit) + '...';
}
