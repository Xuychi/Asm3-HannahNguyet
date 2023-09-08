'use strict';

//ẩn thông tin cá nhân
function handleSubmit(){

    // lấy giá trị của input email và chuyển sang in thường
    document.getElementById('email').value=document.getElementById('email').value.toLowerCase();
    const emailValue = document.getElementById('email').value;

    // Lấy element của thẻ p hiển thị lỗi
    const errorEmail = document.getElementById('error-email');

    //điều kiện là 1 email
    const checkMail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    // dùng match để check với email vừa nhập
    const check = emailValue.match(checkMail);

    // lấy phần tử chứa thông tin user vừa nhập
    const sectionContent = document.querySelector('#info .section-content')

    // lấy element để kiểm soát submit
    const submitControl = document.querySelector('.submit-email')
    if (check) {
        sectionContent.style.display = 'block';
        errorEmail.innerHTML = '';
        if (sectionContent.style.display = 'block' ) {
            submitControl.style.display = 'none';
        }
    } else {
        errorEmail.innerHTML = 'Vui lòng nhập đúng email';
    }

}

//hiện button khi chuột đi vào
function handleOnMouseOver(element){
    const viewMore = element.querySelector('.control-view');
    viewMore.style.display = 'inline-block';
}

//ẩn nút button khi chuột đi ra
function handleOnMouseOut(element){
    const viewMore = element.querySelector('.control-view');
    if (!viewMore.classList.value.includes ('less-more')) {
        viewMore.style.display = 'none';
    }
}

// xử lý view-more
function handleViewMore(element) {
    const parentElement = element.closest('.parent');
    const viewMore = parentElement.querySelector ('.control-view');

    const sectionContent = parentElement.querySelectorAll('.section-content');
    if (viewMore.classList.value.includes ('view-more')){
        sectionContent.forEach((element) => {
            element.style.display = 'block';
        });
        viewMore.classList.remove ('view-more');
        viewMore.classList.add ('less-more');
        viewMore.innerHTML = 'Less more';

    } else {
        sectionContent.forEach((element) => {
            element.style.display = 'none';
        });
        viewMore.classList.remove ('less-more');
        viewMore.classList.add ('view-more');
        viewMore.innerHTML = 'View more';

    }
    
}