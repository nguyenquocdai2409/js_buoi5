function tinhThue() {
    var ten = document.getElementById("ten").value;
    var tongThuNhap = document.getElementById("tong-thu-nhap").value * 1;
    var soNguoiPhuThuoc = document.getElementById("so-nguoi-phu-thuoc").value * 1;
    var thuNhapChiuThue = tongThuNhap - 4000000 - soNguoiPhuThuoc * 1600000;
    if (0 < thuNhapChiuThue && thuNhapChiuThue <= 60000000) {
        thuNhapChiuThue = thuNhapChiuThue * 0.05;
    } else if (60000000 < thuNhapChiuThue && thuNhapChiuThue <= 120000000) {
        thuNhapChiuThue = thuNhapChiuThue * 0.1;
    } else if (120000000 < thuNhapChiuThue && thuNhapChiuThue <= 210000000) {
        thuNhapChiuThue = thuNhapChiuThue * 0.15;
    }
    else if (210000000 < thuNhapChiuThue && thuNhapChiuThue <= 384000000) {
        thuNhapChiuThue = thuNhapChiuThue * 0.2;

    } else if (384000000 < thuNhapChiuThue && thuNhapChiuThue <= 624000000) {
        thuNhapChiuThue = thuNhapChiuThue * 0.25;

    } else if (624000000 < thuNhapChiuThue && thuNhapChiuThue <= 960000000) {
        thuNhapChiuThue = thuNhapChiuThue * 0.3;

    }
    else {
        thuNhapChiuThue = thuNhapChiuThue * 0.35;

    }
    document.getElementById("result").innerText = `Họ tên : ${ten} , Thuế thu nhập cá nhân : ${thuNhapChiuThue.toLocaleString()} VND`
}
