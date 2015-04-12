
// http://jsperf.com/string-hashing-methods
function str2hash(s) {

    // input length should be 6 chars or more to generate 10 digit output

    var nHash = 0;
    var imax = s.length;
    if (!imax) return nHash;

    var n = null;
    for (var i=0; i < imax; ++i) {
      n = s.charCodeAt(i);
      nHash = ((nHash << 5) - nHash) + n;
      nHash = nHash & nHash;
    }
    return Math.abs(nHash);

}


function combinations(arr, k){
    var i,
    subI,
    ret = [],
    sub,
    next;
    for(i = 0; i < arr.length; i++){
        if(k === 1){
            ret.push( [ arr[i] ] );
        }else{
            sub = combinations(arr.slice(i+1, arr.length), k-1);
            for(subI = 0; subI < sub.length; subI++ ){
                next = sub[subI];
                next.unshift(arr[i]);
                ret.push( next );
            }
        }
    }
    return ret;
}

function getRandomVars(seed) {
  var rndSrc = String(str2hash(seed))
  // console.log(rndSrc)

  rndIdx = [
    [rndSrc[0], rndSrc[1]],
    [rndSrc[1], rndSrc[2]],
    [rndSrc[2], rndSrc[3]],
    [rndSrc[3], rndSrc[4]],
    [rndSrc[4], rndSrc[5]],
    [rndSrc[5], rndSrc[6]],
    [rndSrc[6], rndSrc[7]],
    [rndSrc[7], rndSrc[8]],
    [rndSrc[8], rndSrc[9]],
    [rndSrc[9], rndSrc[0]],
    /**/
    [rndSrc[9], rndSrc[2]],
    [rndSrc[8], rndSrc[3]],
    [rndSrc[7], rndSrc[4]],
    [rndSrc[6], rndSrc[5]],
    [rndSrc[5], rndSrc[6]],
    [rndSrc[4], rndSrc[7]],
    [rndSrc[3], rndSrc[8]],
    [rndSrc[2], rndSrc[9]]
  ]

  var rndVals = rndIdx.map(function(r) {
    return parseInt(r[0] + r[1], 10)
  })
  // console.log(rndVals)
  return rndVals
}

module.exports = getRandomVars
