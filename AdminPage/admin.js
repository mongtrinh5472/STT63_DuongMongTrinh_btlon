var signin_wrapper = document.getElementById('signin-wrapper');
var login_wrapper = document.getElementById('login-wrapper');
var modal_signin = document.getElementById('modal-signin');
var modal_login = document.getElementById('modal-login');
var modal_search = document.getElementById('modal-search');
var modal_user_search = document.getElementById('user-page-modal-search');
var modal_product_detail = document.getElementById('user-page-modal-product-detail');
var modal_bill_detail = document.getElementById('modal-billDetail');
var sectionStranger = document.getElementById('stranger-page');
var sectionUser = document.getElementById('user-page')
var sectionCart = document.getElementById('user-cart-page');
function showSectionStranger() {
      localStorage.removeItem('userlogin');
      sectionCart.style.display = 'none';
      sectionUser.style.display = 'none';
      sectionStranger.style.display = 'block';
      scrollToTop()
}
function showSectionUser() {
      sectionCart.style.display = 'none';
      sectionStranger.style.display = 'none';
      sectionUser.style.display = 'block';
      createAdmin();
      createProduct();
      showProductUser(0);
      helloUser('user-page-helloUser');
      showQuantityOfCart('user-page-cart-quantity');
      createSlideShowArray();
      moveSlideShow('user_page_slideShow_img');
      scrollToTop()
}
function showSectionCart() {
      sectionUser.style.display = 'none';
      sectionStranger.style.display = 'none';
      sectionCart.style.display = 'block';
      createAdmin();
      createProduct();
      showCart();
      helloUser('user-cart-page-helloUser');
      showQuantityOfCart('user-cart-page-cart-quantity');
      scrollToTop();
}
function showTimeNow() {
      let time_now = document.getElementById('time-now');
      let date = new Date();

      let date_hour = date.getHours();
      if(date_hour < 10) {
            date_hour = date_hour.toString();
            date_hour = 0 + date_hour
      } else {
            date_hour = date_hour.toString();
      }
      let date_minute = date.getMinutes();
      if(date_minute < 10) {
            date_minute = date_minute.toString();
            date_minute = 0 + date_minute
      } else {
            date_minute = date_minute.toString();
      }
      let date_second = date.getSeconds();
      if(date_second < 10) {
            date_second = date_second.toString();
            date_second = 0 + date_second
      } else {
            date_second = date_second.toString();
      }
      let timeNowTemp = `${date_hour}:${date_minute}:${date_second}`;
      time_now.innerHTML = timeNowTemp;
}
setInterval(showTimeNow,1000);
function showSignin() {
      modal_login.style.display = 'none';
      login_wrapper.style.display = 'none';
      modal_signin.style.display = 'block';
      signin_wrapper.style.display = 'block';
}
function showLogin() {
      modal_signin.style.display = 'none';
      signin_wrapper.style.display = 'none';
      modal_login.style.display = 'block';
      login_wrapper.style.display = 'block';
}
function closeLogin() {
      modal_login.style.display = 'none';
      login_wrapper.style.display = 'none';
}
function closeSignin() {
      modal_signin.style.display = 'none';
      signin_wrapper.style.display = 'none';
}
/*-----------------------------------------------------------------------------------------------------  */

function logoutAdmin() {
      var ans = confirm('Bạn có chắc muốn đăng xuất không ?');
      if (ans == true) {
            localStorage.removeItem('userlogin');
            customAlert('Bạn đã đăng xuất thành công !','success');
            setTimeout(function(){
                  window.location.href = '/index.html'; 
            }, 500);
      } 
}

function createProduct() {
      if (localStorage.getItem('product') == null) {
            var productArray = [
                  
                  { productID: 100, img: 'img/iphone/ip11.png', name: 'IPHONE 11', price: 9900000},
                  { productID: 101, img: 'img/iphone/ip11Pro.png', name: 'IPHONE 11 Pro', price: 10900000},
                  { productID: 102, img: 'img/iphone/ip11ProM.png', name: 'IPHONE 11 Pro Max', price: 11900000},
                  { productID: 103, img: 'img/iphone/ip12.png', name: 'IPHONE 12', price: 12099000},
                  { productID: 104, img: 'img/iphone/ip12Pro.png', name: 'IPHONE 12 Pro', price: 13900000},
                  { productID: 105, img: 'img/iphone/ip12ProM.png', name: 'IPHONE 12 Pro Max', price: 14000000},
                  { productID: 106, img: 'img/iphone/ip13.png', name: 'IPHONE 13', price: 15900000},
                  { productID: 107, img: 'img/iphone/ip13Pro.png', name: 'IPHONE 13 Pro', price: 16000000},
                  { productID: 108, img: 'img/iphone/ip13ProM.png', name: 'IPHONE 13 Max', price: 17500000},
                  { productID: 109, img: 'img/iphone/ip14.png', name: 'IPHONE 14 ', price: 18000000},
                  { productID: 110, img: 'img/iphone/ip14Plus.png', name: 'IPHONE 14 Plus', price: 19500000},
                  { productID: 111, img: 'img/iphone/ip14Pro.png', name: 'IPHONE 14 Pro', price: 20000000},
                  { productID: 112, img: 'img/iphone/ip14ProM.png', name: 'IPHONE 14 Pro Max', price: 21500000},

                  //samsum
                  { productID: 113, img: 'img/samsum/SS_GLX_A04.png', name: 'SAMSUM GALAXY A04', price: 3999000},
                  { productID: 114, img: 'img/samsum/SS_GLX_A04s.png', name: 'SAMSUM GALAXY A04s', price: 2999000},
                  { productID: 115, img: 'img/samsum/SS_GLX_A14_4G.png', name: 'SAMSUM GALAXY A14 4G', price: 4990000},
                  { productID: 116, img: 'img/samsum/SS_GLX_A14_5G.png', name: 'SAMSUM GALAXY A14 5G', price: 5500000},
                  { productID: 117, img: 'img/samsum/SS_GLX_A24.png', name: 'SAMSUM GALAXY A24', price: 6500000},
                  { productID: 118, img: 'img/samsum/SS_GLX_S22_Ultra_5G_128G.png', name: 'SAMSUM GALAXY S22 ULTRA 5G', price: 22900000},
                  { productID: 119, img: 'img/samsum/SS_GLX_S23_5G_128G.png', name: 'SAMSUM GALAXY S23 5G', price: 8500000},
                  { productID: 120, img: 'img/samsum/SS_GLX_S23_FE_5G.png', name: 'SAMSUM GALAXY S23 FE 5G', price: 11490000},
                  { productID: 121, img: 'img/samsum/SS_GLX_S23_Ultra_5G.png', name: 'SAMSUM GALAXY S23 ULTRA 5G', price: 15900000},
                  { productID: 122, img: 'img/samsum/SS_GLX_S23+_5G.png', name: 'SAMSUM GALAXY S23+ 5G', price: 15000000},
                  { productID: 123, img: 'img/samsum/SS_GLX_Z_Flip4_5G.png', name: 'SAMSUM GALAXY Z FLIP4 5G', price: 18500000},
                  { productID: 124, img: 'img/samsum/SS_GLX_Z_Fold5_5G.png', name: 'SAMSUM GALAXY X FOLD5 5G', price: 19000000},


                  //oppo
                  { productID: 125, img: 'img/oppo/oppo-a38.png', name: 'OPPO A38', price: 2300000},
                  { productID: 126, img: 'img/oppo/oppo-a78.png', name: 'OPPO A78', price: 2500000},
                  { productID: 127, img: 'img/oppo/oppo-find-n2-flip.png', name: 'OPPO FIND N2 FLIP', price: 5700000},
                  { productID: 128, img: 'img/oppo/oppo-find-n3.png', name: 'OPPO FIND N3', price: 4900000},
                  { productID: 129, img: 'img/oppo/oppo-reno8t-4g.png', name: 'OPPO RENO8T 4G', price: 10090000},
                  { productID: 130, img: 'img/oppo/oppo-reno10-pro.png', name: 'OPPO RENO10 PRO', price: 13490000},
                  


                  //xiaomi
                  { productID: 131, img: 'img/xiaomi/xiaomi_redmi_k50s.png', name: 'XIAOMI REDMI K50s', price: 2100000},
                  { productID: 132, img: 'img/xiaomi/Xiaomi12_5G.png', name: 'XIAOMI 12 5G', price: 3990000},
                  { productID: 133, img: 'img/xiaomi/xiaomi13tpro_5G.png', name: 'XIAOMI 13PRO 5G', price: 5600000},
                  { productID: 134, img: 'img/xiaomi/xiaomi14pro.png', name: 'XIAOMU 14PRO', price: 8990000},
                  { productID: 135, img: 'img/xiaomi/xiaomi-black-shark-4.png', name: 'XIAOMI BLACK SHARK 4', price: 7999000},
                  { productID: 136, img: 'img/xiaomi/xiaomi-mixfold-3.png', name: 'XIAOMI MIXFOLD 3', price: 11900000},
            ]
            localStorage.setItem('product',JSON.stringify(productArray));
            // console.log('da luu tao duoc san pham')
      }
}

function helloUser(helloUserId) {
      let helloUser = document.getElementById(helloUserId);
      let userlogin = JSON.parse(localStorage.getItem('userlogin'))
      if(userlogin.value == 100) {
            helloUser.innerHTML += userlogin.fullname;
      }else {
            helloUser.innerHTML = userlogin.fullname;
      }
}
//! USER

var content = document.getElementById('content');
var PageProduct = document.getElementById('numberOfPageProduct')       //! khai báo Stranger
var content_user = document.getElementById('user-page-content');
var PageProduct_user = document.getElementById('user-page-numberOfPageProduct')       //! khai báo User
//! đổi màu button khi nhấn vào 
function scrollToTop() {
      window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth' // Điều này làm cho cuộn mượt hơn
          });
}

function showProductUser(i) {
      
      showListPageProductUser();
      let productArray = JSON.parse(localStorage.getItem('product'));
      let pageOfProduct = divideProductPage(productArray);
      let contentTemp = '';
      for(let j = 0; j < pageOfProduct[i].length; j++) {
            contentTemp += '<div class="product" onclick="productDetail('+pageOfProduct[i][j].productID+')"><img src="'+pageOfProduct[i][j].img+'" alt="" class="product-img"><p class="product-name">'+pageOfProduct[i][j].name+'</p><p class="product-price">'+currency(pageOfProduct[i][j].price)+'</p></div>';
      }
      content_user.innerHTML = contentTemp;
}
//! ADMIN 
var content_product_table = document.getElementById('content-product-table');
var addProductContainer = document.getElementById('addProduct-container-img');
function addProductAdmin_showIMG() {
      let addProductIMG = document.getElementById('addproduct-img');
      if(addProductIMG.value !== "") {
            addProductContainer.innerHTML = '<img id="showIMGNow"src="'+addProductIMG.value+'" alt="">';
      } else {
            addProductContainer.innerHTML = '';
      }
}
function showListPageProductAdmin() {
      let productArray = JSON.parse(localStorage.getItem('product'));
      let pageOfProduct = divideProductPageAdmin(productArray).length //? = 5
      let PageProductTemp = '';
      for(let i = 0; i < pageOfProduct; i++) {
            PageProductTemp += '<button onclick="showProductAdmin('+i+'),scrollToTop()" class="numberPage">'+(i+1)+'</button>'
      }
      PageProduct.innerHTML = PageProductTemp;
}
function showProductAdmin(i) {
      showListPageProductAdmin();
      let productArray = JSON.parse(localStorage.getItem('product'));
      let pageOfProduct = divideProductPageAdmin(productArray);
      var tableProduct = '<tr><th>ID</th> <th>Ảnh</th> <th>Tên sản phẩm</th> <th>Giá</th> <th>Option</th></tr>';
      for(let j = 0; j < pageOfProduct[i].length; j++) {      
            tableProduct += '<tr><td>'+pageOfProduct[i][j].productID+'</td><td><img src="'+pageOfProduct[i][j].img+'" alt=""></td><td class="table-name">'+pageOfProduct[i][j].name+'</td><td class="table-price">'+currency(pageOfProduct[i][j].price)+'</td><td><button class="option-btn-admin" onclick="deleteProduct('+pageOfProduct[i][j].productID+')">Xóa</button><br><button class="option-btn-admin" onclick="changeProductAdmin('+pageOfProduct[i][j].productID+')">Sửa</button></td></tr>';
      }
      content_product_table.innerHTML = tableProduct;
      /* ------ */
}
function changeProductAdmin(id) {
      let productArray = JSON.parse(localStorage.getItem('product'));

      var addProductName = document.getElementById('addproduct-name');
      var addProductImg = document.getElementById('addproduct-img');
      var addProductPrice = document.getElementById('addproduct-price');
      var i;
      for (i = 0; i < productArray.length; i++) {
            if(productArray[i].productID == id) {
                  break;
            }
      }
      addProductName.value = productArray[i].name;
      addProductPrice.value = productArray[i].price;
      addProductImg.value = productArray[i].img;
      addProductAdmin_showIMG()
}
//! chú ý -----------------------------------------------------------------------------------------------------------------------------
function addProductAdmin() {
      let flag = false;
      let productArray = JSON.parse(localStorage.getItem('product'));
      
      var productID = productArray[(productArray.length) - 1].productID + 1;
      var addProductName = document.getElementById('addproduct-name');
      var addProductImg = document.getElementById('addproduct-img');
      var addProductPrice = document.getElementById('addproduct-price');
      
            if (addProductName.value == '' || addProductPrice.value == '') {
                  customAlert('Thông tin sản phẩm không hợp lệ','warning')
            } else {
                  customAlert('Thêm sản phẩm thành công','success')
                  var productTemp = {
                        productID:productID,
                        img:addProductImg.value,
                        name:addProductName.value,
                        price:parseInt(addProductPrice.value),
                  }
                  for(let i = 0; i < productArray.length; i++) {
                        if(productArray[i].img == addProductImg.value) {
                              flag = true;
                              productArray[i] = productTemp;
                              
                              localStorage.setItem('product',JSON.stringify(productArray));
                              let pageOfProduct = divideProductPageAdmin(productArray);
                              addProductAdmin_format();
                              showProductAdmin(pageOfProduct.length-1);
                        }
                  }
                  if(flag == false) {
                        productArray.push(productTemp);
                        localStorage.setItem('product',JSON.stringify(productArray));
                        let pageOfProduct = divideProductPageAdmin(productArray);
                        addProductAdmin_format();
                        showProductAdmin(pageOfProduct.length-1);
                  }
            }
}
function addProductAdmin_format() {
      var addProductName = document.getElementById('addproduct-name');
      var addProductImg = document.getElementById('addproduct-img');
      var addProductPrice = document.getElementById('addproduct-price');

      addProductName.value = '';
      addProductImg.value = '';
      addProductPrice.value = '';
      addProductAdmin_showIMG()
}
function deleteProduct(ProductIdDelete) {
      let ans = confirm("Bạn có muốn xóa sản phẩm này ?");
      if(ans == true) {
            let productArray = JSON.parse(localStorage.getItem('product'));
            for (let i = 0; i < productArray.length; i++) {
                  if(productArray[i].productID == ProductIdDelete) {
                        productArray.splice(i,1);
                  }
            }
            localStorage.setItem('product',JSON.stringify(productArray));
            customAlert('Bạn đã xóa sản phẩm thành công','success');
            showProductAdmin(0);
      }
}

function customAlert(message,type) {
	if (type =='success') {
		document.getElementById("customalert").style.backgroundColor = '#4CAF50';
	}
	if (type =='warning') {
		document.getElementById("customalert").style.backgroundColor = '#f44336';
	}
	document.getElementById("customalert").innerHTML = message;
    var x = document.getElementById("customalert");
    x.className = "show";
    setTimeout(function(){ x.className = x.classList.remove("show"); }, 500);
}




function opencontent(id) {
      closecontent();
      var temp = document.getElementById(id);
      temp.style.display = 'block';
}
function closecontent() {
      let product = document.getElementById('content-product-admin');
      let order = document.getElementById('content-order-admin');
      let user = document.getElementById('content-user-admin');
      product.style.display = 'none';
      order.style.display = 'none';
      user.style.display = 'none';

}
//? Đơn hàng
// function showBillAdmin() { // phú
//       if(JSON.parse(localStorage.getItem('bill')) == null) {
//             let billContent = document.getElementById('content-order-admin')
//             billContent.innerHTML = '<h1 style="margin: 30px auto;">Danh sách đơn hàng</h1><h4>Không có đơn hàng</h4>'
//       } else {
//             let billArray = JSON.parse(localStorage.getItem('bill'));
//             var billTableTemp = '<tr><th>Ngày Đặt Hàng</th><th>Khách Hàng</th><th>Số Điện Thoại</th><th>Giá</th><th>Trạng Thái</th><th>Quản lý</th></tr>';

//             for (let i = 0; i < billArray.length; i++) {
//                   billTableTemp += '<tr onclick="onclickTagTr(event,'+billArray[i].id+')"><td class="table-td">'+billArray[i].time+'</td><td class="table-name table-td">'+billArray[i].customer.fullname+'</td><td class="table-phone table-td">'+billArray[i].customer.phone+'</td><td class="table-price table-td">'+currency(billArray[i].totalprice)+'</td>'
//                   if(billArray[i].status == "Chưa xử lý") {
//                         billTableTemp +='<td style="color:red;" class="table-td">'+billArray[i].status+'</td>'
//                   } else {
//                         billTableTemp +='<td style="color:blue;" class="table-td">'+billArray[i].status+'</td>'
//                   }
//                   billTableTemp += '<td class="delete-bill-btn">Xóa</td></tr>';
//             }
//             let billContent = document.getElementById('content-order-admin')
//             billContent.innerHTML = '<h1 style="margin: 30px auto;">Danh sách đơn hàng</h1><table border="1" id="content-order-table">'+billTableTemp+'</table>';
//       }
// }
// function onclickTagTr(event,id) {
//       if(event.target.tagName == "TD" && event.target.classList.contains('delete-bill-btn')) {
//             removeItemBill(id);
//       } else {
//             showBillDetail(id);
//       }
// }
// function removeItemBill(id) {
//       let ans = confirm("Bạn có muốn xóa đơn hàng này ?");
//       if(ans == true) {
//             let billArray = JSON.parse(localStorage.getItem('bill'));
//             let i ;
//             for (i = 0; i < billArray.length; i++) {
//                   if(billArray[i].id == id) 
//                         billArray.splice(i,1);
//             }
//             localStorage.setItem('bill',JSON.stringify(billArray));
//             showBillAdmin();
//       }
// }
// function billAdmincolorStatus(i) {
//       let billArray = JSON.parse(localStorage.getItem('bill'));
//       let billAdminStatus = document.getElementById('billAdmin-status');
//       if(billArray[i].status == "Chưa xử lý") {
//             billAdminStatus.style.color = "red"; 
//       } else {
//             billAdminStatus.style.color = 'blue'; 
//       }
// }
// function showBillDetail(id) {
//       let billArray = JSON.parse(localStorage.getItem('bill'));
//       let billDetail = document.getElementById('billDetail');

//       /* let heightPage = document.body.offsetHeight;
//       modal_bill_detail.style.height = (heightPage+1)+ 'px'; */

//       modal_bill_detail.style.display = 'block';
//       billDetail.style.display = 'block';
//       var i;
//       for (i = 0; i < billArray.length; i++) {
//             if(billArray[i].id == id) {
//                   break;
//             }
//       }
//       let billDetailTemp = '<button id="close_billdetail" onclick="closeBillDetail()" type="button"><i class="fa-solid fa-xmark"></i></button><h2>Chi tiết đơn hàng</h2><h5>Thông tin đơn hàng :</h5><p>'+billArray[i].info+'</p><h5>Tên khách hàng :</h5><p>'+billArray[i].customer.fullname+'</p><h5>Số điện thoại :</h5><p>'+billArray[i].customer.phone+'</p><h5>Tổng giá tiền :</h5><p>'+currency(billArray[i].totalprice)+'</p><h5>Tình trạng :</h5><p id="billdetail-status">'+billArray[i].status+'<button id="bill-complete" onclick="billComplete('+i+')">Đã xử lý</button></p>'
//       billDetail.innerHTML = billDetailTemp;
//       billDetailcolorStatus(i)
// }
// function billDetailcolorStatus(i) {
//       let billArray = JSON.parse(localStorage.getItem('bill'));
//       let billdetailStatus = document.getElementById('billdetail-status');
//       if(billArray[i].status == "Chưa xử lý") {
//             billdetailStatus.style.color = "red"; 
//       } else {
//             billdetailStatus.style.color = 'blue'; 
//       }
// }
// function billComplete(i) {
//       let billArray = JSON.parse(localStorage.getItem('bill'));
//       if(billArray[i].status == 'Chưa xử lý') {
//             billArray[i].status = "Đã xử lý";
//             localStorage.setItem('bill',JSON.stringify(billArray));
//             showBillAdmin();
//             let billdetailStatus = document.getElementById('billdetail-status');
//             billdetailStatus.innerHTML = '<p id="+billdetail-status+">'+billArray[i].status+'<button id="bill-complete" onclick="billComplete('+i+')">Chưa xử lý</button></p>'
//             billDetailcolorStatus(i)
//       } else {
//             billArray[i].status = "Chưa xử lý";
//             localStorage.setItem('bill',JSON.stringify(billArray));
//             showBillAdmin();
//             let billdetailStatus = document.getElementById('billdetail-status');
//             billdetailStatus.innerHTML = '<p id="+billdetail-status+">'+billArray[i].status+'<button id="bill-complete" onclick="billComplete('+i+')">Đã xử lý</button></p>'
//             billDetailcolorStatus(i)
//       }
// }
// function closeBillDetail() {
//       let billDetail = document.getElementById('billDetail');
//       billDetail.style.display = 'none';
//       modal_bill_detail.style.display = 'none';
// }
//? Đơn hàng // Phú
function showBillAdmin() { // hiện danh sách đơn hàng ( gọi trong removeItemBill / billComplete )
      if(JSON.parse(localStorage.getItem('bill')) == null) {// kiểm tra dữ liệu có trong localStorage ko
            let billContent = document.getElementById('content-order-admin')//in thong báo ko có dơn hàng nêú ko có dữ liệu hóa đơn
            billContent.innerHTML = '<h1 style="margin: 30px auto;">Danh sách đơn hàng</h1><h4>Không có đơn hàng</h4>'
      } else {// nếu có dữ liệu
            let billArray = JSON.parse(localStorage.getItem('bill'));// tạo chuỗi tạm để lưu các hóa đơn
            var billTableTemp = '<tr><th>Ngày Đặt Hàng</th><th>Khách Hàng</th><th>Giá</th><th>Trạng Thái</th><th>Quản lý</th></tr>';
            for (let i = 0; i < billArray.length; i++) {// thêm một hàng mới với mỗi hóa đơn trong billArray
                  billTableTemp += '<tr onclick="onclickTagTr(event,'+billArray[i].id+')"><td class="table-td">'+billArray[i].time+'</td><td class="table-name table-td">'+billArray[i].customer.fullname+'</td><td class="table-price table-td">'+currency(billArray[i].totalprice)+'</td>'
                  if(billArray[i].status == "Chưa xử lý") {//kiểm tra trạng thái hóa đơn, đặt màu 
                        billTableTemp +='<td style="color:red;" class="table-td">'+billArray[i].status+'</td>'// chưa xử lí : đỏ
                  } else {
                        billTableTemp +='<td style="color:blue;" class="table-td">'+billArray[i].status+'</td>'// đã xử lí : xanh
                  }
                  billTableTemp += '<td class="delete-bill-btn">Xóa</td></tr>';// nút xóa 1 đơn
            }// hiển thị bảng đơn hàng
            let billContent = document.getElementById('content-order-admin')
            billContent.innerHTML = '<h1 style="margin: 30px auto;">Danh sách đơn hàng</h1><table border="1" id="content-order-table">'+billTableTemp+'</table>';
      }
}
function onclickTagTr(event,id) { // onclick delete : kiểm tra phần tử nhấp vào có phải td và có btn có id='delete-bill-btn' ko
      if(event.target.tagName == "TD" && event.target.classList.contains('delete-bill-btn')) {
            removeItemBill(id);
      } else {
            showBillDetail(id);
      }
}
function removeItemBill(id) {// xóa hóa đơn
      let ans = confirm("Bạn có muốn xóa đơn hàng này ?");// gọi hàm confirm, chọn xóa nhấn ok, Ko nhấn cancel
      if(ans == true) {// chọn ok, billArray lấy dữ liệu
            let billArray = JSON.parse(localStorage.getItem('bill'));
            let i ;// for lọc tìm hóa đơn có id trùng id cần xóa
            for (i = 0; i < billArray.length; i++) {
                  if(billArray[i].id == id) // nếu có, dùng hàm splice để xóa 1 hóa đơn tại vị trí i
                        billArray.splice(i,1);
            }//cập nhật lại localStorage với hóa đơn đã xóa
            localStorage.setItem('bill',JSON.stringify(billArray));
            showBillAdmin();// cập nhật danh sách hóa đơn hiển thị
      }
}
function billAdmincolorStatus(i) {// đổi màu trạng thái hóa đơn
      let billArray = JSON.parse(localStorage.getItem('bill'));
      let billAdminStatus = document.getElementById('billAdmin-status');
      if(billArray[i].status == "Chưa xử lý") {
            billAdminStatus.style.color = "red"; 
      } else {
            billAdminStatus.style.color = 'blue'; 
      }
}
function showBillDetail(id) {// chi tiết hóa đơn
      let billArray = JSON.parse(localStorage.getItem('bill'));// lấy thông tin hóa đơn
      let billDetail = document.getElementById('billDetail');// lấy chi tiết hóa đơn
      /* let heightPage = document.body.offsetHeight;
      modal_bill_detail.style.height = (heightPage+1)+ 'px'; */
      modal_bill_detail.style.display = 'block';// hiện trang chi tiết sp
      billDetail.style.display = 'block';// hiện chi tiết sp
      var i;// for tìm hóa đơn có id chỉ định
      for (i = 0; i < billArray.length; i++) {
            if(billArray[i].id == id) {
                  break;
            }
      }// tạo chuỗi chứa thông tin chi tiết hóa đơn
      let billDetailTemp = '<button id="close_billdetail" onclick="closeBillDetail()" type="button"><i class="fa-solid fa-xmark"></i></button><h2>Chi tiết đơn hàng</h2><h5>Thông tin đơn hàng :</h5><p>'+billArray[i].info+'</p><h5>Tên khách hàng :</h5><p>'+billArray[i].customer.fullname+'</p><h5>Số điện thoại :</h5><p>'+billArray[i].customer.phone+'</p><h5>Tổng giá tiền :</h5><p>'+currency(billArray[i].totalprice)+'</p><h5>Tình trạng :</h5><p id="billdetail-status">'+billArray[i].status+'<button id="bill-complete" onclick="billComplete('+i+')">Đã xử lý</button></p>'
      billDetail.innerHTML = billDetailTemp;// cập nhật thông tin vào billDetail
      billDetailcolorStatus(i)// đổi màu của thông tin hóa đơn
}
function billDetailcolorStatus(i) {// màu thông tin chi tiết hóa đơn
      let billArray = JSON.parse(localStorage.getItem('bill'));
      let billdetailStatus = document.getElementById('billdetail-status');// lấy thông tin chi tiết hóa đơn
      if(billArray[i].status == "Chưa xử lý") {
            billdetailStatus.style.color = "red"; 
      } else {
            billdetailStatus.style.color = 'blue'; 
      }
}
function billComplete(i) {// cập nhật trạng thái 
      let billArray = JSON.parse(localStorage.getItem('bill'));
      if(billArray[i].status == 'Chưa xử lý') {
            billArray[i].status = "Đã xử lý";
            localStorage.setItem('bill',JSON.stringify(billArray));//cập nhật lại vào localStorage
            showBillAdmin();// gọi hàm để làm mới hiển thị hóa đơn 
            let billdetailStatus = document.getElementById('billdetail-status');//cập nhật xem hóa đơn chi tiết
            billdetailStatus.innerHTML = '<p id="+billdetail-status+">'+billArray[i].status+'<button id="bill-complete" onclick="billComplete('+i+')">Chưa xử lý</button></p>'
            billDetailcolorStatus(i);// cập nhật màu trạng thái
      } else {
            billArray[i].status = "Chưa xử lý";
            localStorage.setItem('bill',JSON.stringify(billArray));//cập nhật lại vào localStorage
            showBillAdmin();// gọi hàm để làm mới hiển thị hóa đơn 
            let billdetailStatus = document.getElementById('billdetail-status');//cập nhật xem hóa đơn chi tiết
            billdetailStatus.innerHTML = '<p id="+billdetail-status+">'+billArray[i].status+'<button id="bill-complete" onclick="billComplete('+i+')">Đã xử lý</button></p>'
            billDetailcolorStatus(i);// cập nhật màu trạng thái
      }
}
function closeBillDetail() {// đóng xem chi tiết
      let billDetail = document.getElementById('billDetail');
      billDetail.style.display = 'none';
      modal_bill_detail.style.display = 'none';
}     //                                                    END hóa đơn chi tiết
//? Quản lý Khách hàng
var manageUser = document.getElementById('content-user-admin');// vùng chứa danh sách hiển thị khách hàng
function showUserList() {// hiển thị danh sách người dùng
      let userlist = JSON.parse(localStorage.getItem('userlist'));
      let manageUser = document.getElementById('content-user-admin');// id bên html admin
      let manageUserTemp = '<tr><th>STT</th><th>Họ tên khách hàng</th><th>Tên đăng nhập</th><th>Mật khẩu</th><th>Ngày đăng ký</th><th>Xóa</th></tr>'
      for (let i = 1; i < userlist.length; i++) {// luu thong tin vào manageUser
            manageUserTemp += '<tr><td>'+(i)+'</td><td>'+userlist[i].fullname+'</td><td>'+userlist[i].username+'</td><td>'+userlist[i].password+'</td><td>'+userlist[i].date_create+'</td><td><button id="removeUser" onclick="removeUser('+i+')">Xóa</button></td></tr>'
      }// hiển thị
      manageUser.innerHTML = '<h1 style="margin: 30px auto;">Danh sách khách hàng</h1><table border="1" id="content-order-table">'+manageUserTemp+'</table>'
}
function removeUser(i) {// xóa người dùng
      let ans = confirm('Bạn có chắc muốn xóa người dùng này ?');
      if(ans == true) { // nhấn ok => true
            let userlist = JSON.parse(localStorage.getItem('userlist'));
            userlist.splice(i,1);// xóa người dùng tại vị trí i
            localStorage.setItem('userlist',JSON.stringify(userlist));// cập nhật localStorage
            customAlert('Bạn đã xóa sản phẩm thành công','success');
            showUserList();// gọi hàm để cập nhật danh sách người dùng
      }
}



//? Quản lý Khách hàng - phú
// var manageUser = document.getElementById('content-user-admin');
// function showUserList() {
//       let userlist = JSON.parse(localStorage.getItem('userlist'));
//       let manageUser = document.getElementById('content-user-admin');
      
//       let manageUserTemp = '<tr><th>STT</th><th>Họ tên khách hàng</th><th>Tên đăng nhập</th><th>Mật khẩu</th><th>Ngày đăng ký</th><th>Xóa</th></tr>'

//       for (let i = 1; i < userlist.length; i++) {
//             manageUserTemp += '<tr><td>'+(i)+'</td><td>'+userlist[i].fullname+'</td><td>'+userlist[i].username+'</td><td>'+userlist[i].password+'</td><td>'+userlist[i].date_create+'</td><td><button id="removeUser" onclick="removeUser('+i+')">Xóa</button></td></tr>'
//       }
//       manageUser.innerHTML = '<h1 style="margin: 30px auto;">Danh sách khách hàng</h1><table border="1" id="content-order-table">'+manageUserTemp+'</table>'
// }
// function removeUser(i) {
//       let ans = confirm('Bạn có chắc muốn xóa người dùng này ?');
//       if(ans == true) {
//             let userlist = JSON.parse(localStorage.getItem('userlist'));
//             userlist.splice(i,1);
//             localStorage.setItem('userlist',JSON.stringify(userlist));
//             customAlert('Bạn đã xóa sản phẩm thành công','success');
//             showUserList();
//       }
// }
function showSearch() {
      modal_search.style.display = 'block';
      let heightPage = document.body.offsetHeight;
      modal_search.style.height = heightPage+'px';
}
function showSearchUser() {
      modal_user_search.style.display = 'block';
      let heightPage = document.body.offsetHeight;
      modal_user_search.style.height = heightPage+'px';
}

function closeSearch() {
      modal_search.style.display = 'none';
}
function closeSearchUser() {
      modal_user_search.style.display = 'none';
}
function searchUser() {
      
      let searchProductArray;
      
      let searchProductPriceFrom = document.getElementById('user-page-search-price-from');
      let searchProductPriceTo = document.getElementById('user-page-search-price-to');

      let search = document.getElementById('user-page-search-info').value.toLowerCase();
      let search_product = document.getElementById('user-page-search-product-wrapper');
      let searchProductTemp = '';
      
      searchProductArray = searchProductPriceUser();

      if(search == '') {
            if(searchProductPriceFrom.value == '' || searchProductPriceTo.value == '') {
                  search_product.innerHTML = '';
            } else {
                  for (let i = 0; i < searchProductArray.length; i++) {
                        searchProductTemp += '<div class="search-product" onclick="productDetail('+searchProductArray[i].productID+')"><img src="'+searchProductArray[i].img+'" alt="" class="search-product-img"><p class="search-product-name">'+searchProductArray[i].name+'</p><p class="search-product-price">'+currency(searchProductArray[i].price)+'</p></div>'
                  }
                  search_product.innerHTML = searchProductTemp;
            }
      } else {
            for (let i = 0; i < searchProductArray.length; i++) {
                  if(searchProductArray[i].name.toLowerCase().indexOf(search) !== -1) {
                  searchProductTemp += '<div class="search-product" onclick="productDetail('+searchProductArray[i].productID+')"><img src="'+searchProductArray[i].img+'" alt="" class="search-product-img"><p class="search-product-name">'+searchProductArray[i].name+'</p><p class="search-product-price">'+currency(searchProductArray[i].price)+'</p></div>'
                  }
            }
            search_product.innerHTML = searchProductTemp;
      }
}

function divideProductPageAdmin(array) {
      let pageOfProduct = [];
      let productArray = array;
      let pageOfProductTemp = []
      let dem = 0;
      for(let i = 0; i < productArray.length; i++) {
            pageOfProductTemp.push(productArray[i]);
            dem++;
            if(dem == 10) {
                  pageOfProduct.push(pageOfProductTemp);
                  pageOfProductTemp = [];
                  dem = 0;
            }
      }
      pageOfProduct.push(pageOfProductTemp); //? thêm những sản phẩm còn dư khi tạo trang (VD: 22sp : 10 = 2 dư 2)
      /* console.log(pageOfProduct); */
      return pageOfProduct;
}
function currency(num) {//? hàm tiền
      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ' đ';//? hiện kiểu tiền vd:curency(123): 123 đ
}

