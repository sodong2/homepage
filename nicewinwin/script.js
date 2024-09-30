const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active'); // 메뉴 열기
    });
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active'); // 메뉴 닫기
    });
}



var MainImg=document.getElementById("MainImg");
var smallimg =document.getElementsByClassName("small-img");

smallimg[0].onclick=function(){
    MainImg.src = smallimg[0].src; 
}
smallimg[1].onclick=function(){
    MainImg.src = smallimg[1].src; 
}
smallimg[2].onclick=function(){
    MainImg.src = smallimg[2].src; 
}
smallimg[3].onclick=function(){
    MainImg.src = smallimg[3].src; 
}



    document.addEventListener('DOMContentLoaded', function() {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id'); // URL에서 id 가져오기

        // JSON 데이터 불러오기
        function fetchProductData() {
            fetch('products.json')
                .then(response => response.json())
                .then(data => {
                    const product = data.find(p => p.id === productId);
                    if (product) {
                        displayProduct(product);
                    } else {
                        document.querySelector('.single-pro-details').innerHTML = '<p>Product not found.</p>';
                    }
                })
                .catch(error => {
                    console.error('Error fetching product data:', error);
                });
        }

        // 데이터를 페이지에 표시
        function displayProduct(product) {
            document.getElementById('MainImg').src = product.mainImg;
            document.getElementById('smallImg1').src = product.images[0];
            document.getElementById('smallImg2').src = product.images[1];
            document.getElementById('smallImg3').src = product.images[2];
            document.getElementById('smallImg4').src = product.images[3];
            document.getElementById('product-name').textContent = product.name;
            document.getElementById('product-price').textContent = `$${product.price}`;
            document.getElementById('product-description').textContent = product.description;
            document.getElementById('product-category').textContent = `Home / ${product.category}`;
        }

        // JSON 데이터 불러오기 실행
        fetchProductData();
    });

