/**
 * 
 * Nhập : tên, số kw
 * 
 * tính và xuất tiền trả theo quy tắc
 * 500d = 1kw
 * 
 */

function tinhtien(){
    var tenKH = document.getElementById("ten").value;
    var soKw = document.getElementById("kw").value * 1 ;
    var giaTien50KwDau = 500;
    var giaTien50KwKe = 650;
    var giaTien100KwKe = 850;
    var giaTien150KwKe = 1100;
    var giaTienConLai = 1300;
    var giaTienDien = 0;
    if(0 < soKw && soKw <=50){
        giaTienDien = soKw * giaTien50KwDau;
    } else if (50 < soKw && soKw <=100) {
        giaTienDien = giaTien50KwDau * 50 + (soKw - 50) * giaTien50KwKe;
    } else if (100 < soKw && soKw <=200) {
        giaTienDien = giaTien50KwDau * 50 + giaTien50KwKe * 50 + (soKw - 100) * giaTien100KwKe;
    } else if (200 < soKw && soKw <= 350){
        giaTienDien = giaTien50KwDau * 50 + giaTien50KwKe * 50 + giaTien100KwKe * 100 + (soKw - 200) * giaTien150KwKe;
    } else {
        giaTienDien = giaTien50KwDau * 50 + giaTien50KwKe * 50 + giaTien100KwKe * 100 + giaTien150KwKe * 150 + (soKw - 350) *  giaTienConLai;
    }
    console.log(giaTienDien);
    document.getElementById("result").innerText = `Tên khách hàng : ${tenKH} , Số tiền điện phải trả : ${giaTienDien.toLocaleString()} VND `
}