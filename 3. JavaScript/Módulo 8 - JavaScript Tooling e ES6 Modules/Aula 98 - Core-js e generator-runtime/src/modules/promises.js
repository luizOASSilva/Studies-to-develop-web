function promise() { 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Olá, eu sou a promise');
            resolve('acabou');
        }, 2000);
    });
}

export default async function () {
    await promise();
    console.log('acabou');
}