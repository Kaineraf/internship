(async function lottery() {
    try {
        console.log("Вы начали игру");
        await new Promise(function (resolve, reject) {
            setTimeout(() => {
                Math.random(0) > 0.5 ? resolve() : reject()
            }, 3000);
        });

        console.log("Вы выиграли");
        console.log("Вам заплатили");
    } catch(error) {
        console.log("Вы промахнулись");
        console.log("Вы проиграли");
    } finally {
        console.log("Игра закончена");
    }
})();