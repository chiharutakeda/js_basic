import fetch from 'node-fetch';
//非同期処理を行う関数を宣言
const getGitUsername = () => {
    
    //非同期処理をPromiseでつつんでreturnではresolve,rejectを返すようにする。
    return new Promise((resolve,reject) =>{
        const url = 'https://api.github.com/users/deatiger'
        // github APIをfetchメソッドで実行(非同期処理なので実行を待たない)
        fetch(url).then(res => res.json())
            .then(json => {
                console.log('これは非同期処理成功時のメッセージです')
                // console.log(json)
                return resolve(json.login)
            }).catch(error => {
                console.error('これは非同期処理失敗時のメッセージです')
                return reject(null)
            })
    })
}

console.log("開始")
const message = 'gitのユーザーIDは';
//getGitUsername()はresolveかrejectが返ってきて、これは.thenでチェーンできる。
//Promiseのコールバック関数はそれだけで同期処理と化す
//ここはまだ非同期
const promiseObject_first = getGitUsername()

//promiseオブジェクトに.thenでチェーンさせたコールバック関数はpromiseオブジェクトがないと動作しない。つまりpromiseオブジェクトをどんどん引き継いでいく感じ。
//イベント管理みたいにしているのかな？
//pending状態のpromiseオブジェクトの.thenのコールバック関数は実行しない。
//ここは同期処理
const promiseObject_2 = promiseObject_first.then(username=>{
    console.log(message + username)
    return username
})
console.log(promiseObject_2);
//このタイムアウトの間にpromiseオブジェクトは完了状態になる。
setTimeout(()=>{console.log(promiseObject_2)},2000)
console.log("終了")