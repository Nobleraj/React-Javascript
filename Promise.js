//PromiseAll - it takes bunch of promises and resolves all of them 
//once all of the promises got resolved it returs an array with all of the resolved results
//if one of the promises got failed then all of the promise would fail

function showText(text,time){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("Hi " + text );
        },time)
    })
}

const prom1 = Promise.resolve("Hello");

Promise.all([showText("Noble",1000), prom1, Promise.resolve("Demo")]).then(promise=>{
    console.log('result', promise);
});

//implement Promise.all custom

function myPromiseAll(promises){
    let result = [];
    return new Promise((res,rej)=>{
        promises.forEach((promise,index)=>{
            promise.then((val)=>{
                result.push(val);
                if(index == promises.length-1){
                    res(result);
                }
            }).catch((err)=>{
                rej(err);
            });
        })
    })
}
myPromiseAll([showText("Noble",1000), prom1, Promise.resolve("Demo")]).then((res)=>{
    console.log("myPromise",res);
})
