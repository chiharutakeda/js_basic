import fetch from 'node-fetch';
//非同期処理を行う関数を宣言
//asyncがあったらこの中で順序が大事な処理があるのだなと考える。（非同期処理がある）
const getGitUsername = async () => {
    console.log('開始');
    const url = 'https://api.github.com/users/deatiger'
    //awaitがあるので
    const json = await fetch(url)
        .then(res =>{
            console.log('これは非同期処理成功時のメッセージです。')
            return res.json()
        }).catch(error => {
            console.log('これは非同期処理失敗時のメッセージです。')
            return null
        })
    //ちなみに同期処理にもawaitつけることできる（意味はないけど）
    await console.log("aaaa")
    
    console.log('ユーザー名は' + json.login)
}
//結果としてpromiseオブジェクトを考えなくてよくなった。awaitで止まるから。

getGitUsername();