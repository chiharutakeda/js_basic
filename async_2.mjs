import fetch from 'node-fetch';
//非同期処理を行う関数を宣言
const getGitUsername = () => {
    const url = 'https://api.github.com/users/deatiger'

    // github APIをfetchメソッドで実行(非同期処理なので実行を待たない)
    fetch(url).then(res => res.json())
        .then(json => {
            console.log('これは非同期処理成功時のメッセージです')
            return json.login
        }).catch(error => {
            console.error('これは非同期処理失敗時のメッセージです')
            return null
        })
}

const message = 'gitのユーザーIDは';
//getGitusername()は中身がfetchなので非同期処理になりusernameに値を入れる前に次の処理に進んでしまう。
const usename = getGitUsername()
console.log(message + usename)