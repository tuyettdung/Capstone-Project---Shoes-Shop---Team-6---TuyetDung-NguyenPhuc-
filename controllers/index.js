function getProductApi() {
    //Kết nối với api(đường dẫn backend cung cấp)
    var promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Product',
        method: 'GET'
    })
    //xỬ lý thành công:
    promise.then(function (result) {
        console.log('result', result.data);
        //gọi hàm hiển thị sản phẩm
        renderProduct(result.data.content);
        renderBanner(result.data.content);
    })
    //Xử lý thất bại:
    promise.catch(function (err) {
        console.log('result', err.respose.data);
    })
}

//gọi hàm khi page vừa load:
window.onload = function () {
    getProductApi();
}

function renderBanner(arrProduct) {
    let html = '';
    let itemActive = arrProduct[11];
    html += `
                <div class="carousel-item active ">
                    <div class="carousel__wrap">
                        <img src=${itemActive.image} alt="...">
                        <div class="carousel__content" >
                            <h3>${itemActive.name}</h3>
                             <p>${itemActive.description.length > 90 ? itemActive.description.slice(0, 90) + '...' : itemActive.description}</p>
                            <button>Buy now</button>
                        </div>
                    </div>
                </div>
            `;
    for (let i = 9; i < 11; i++) {
        let item = arrProduct[i];
        html += `
                <div class="carousel-item ">
                    <div class="carousel__wrap">
                        <img src=${item.image} alt="...">
                        <div class="carousel__content">
                            <h3>${item.name}</h3>
                            <p>${item.description.length > 90 ? item.description.slice(0, 90) + '...' : item.description}</p>
                            <button>Buy now</button>
                        </div>
                    </div>
                </div>
                `
    }
    document.querySelector('#banner__content').innerHTML = html;
}


function renderProduct(arrProduct) {
    let html = '';
    for (let i = 0; i < arrProduct.length; i++) {
        let prod = arrProduct[i];
        html += `
                 <div class="product__item col-lg-4 col-md-6 col-sm-12">
                    <div class="card__wrap" >
                       <div class="card__body" style="height:350px">
                             <img src=${prod.image} alt="">
                             <h4>${prod.name}</h4>
                             <p>${prod.description.length > 51 ? prod.description.slice(0, 51) + '...' : prod.description}</p>
                      </div>
                      <div class="card__footer">
                             <span class="card__left">Buy Now</span>
                             <span class="card__right">${prod.price}</span>
                     </div>
                  </div>
                 </div>
        `
    }
    document.querySelector('#product__list').innerHTML = html;
}