function towerOfHanoi(n,source,target,auxiliary){
    if(n>0){
        towerOfHanoi(n-1,source,auxiliary,target);
        console.log('Move disk'+n+'from'+source+'to'+target);
        towerOfHanoi(n-1,auxiliary,target,source);
    }
}
towerOfHanoi(3,'A','C','B'); //'A','B','C' are the names of the rods
