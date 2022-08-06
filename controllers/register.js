//Chức năng người dùng đăng kí tài khoản gửi về API:
document.querySelector('#btnSubmit').onclick = function () {
    let account = new NguoiDung();
    account.email = document.querySelector('#email').value;
    account.password = document.querySelector('#password').value;
    account.name = document.querySelector('#name').value;
    account.gender =  document.querySelector('#gender').value;
    account.phone = document.querySelector('#phone').value;

    
    let promise = axios({
        url : 'https://shop.cyberlearn.vn/api/Users/signup',
        method: 'POST',
        data: account
    })
    promise.then (function(result){
        console.log('result',result.data.content)
    })
    promise.catch (function(error){
        console.log('error',error.response.data)
    })

    
}







