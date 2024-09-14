function minimumBribes(q) {
    // Write your code here
    let countBribe = 0;
    
    for(let i = 0; i < q.length; i++){
        let idealPosition = q[i] - 1
        if(idealPosition !== i) {
          countBribe += idealPosition - i 
        };
    };
    
    console.log(q)
}
