function sleep(millis){
    return new Promise((resolve)=>{
        setTimeout(resolve,millis);
    })
}

async function test() {
    console.log("start");
    await sleep(1000)
    console.log("End");
}

test();