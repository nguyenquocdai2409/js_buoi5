function change(){
    var x =  document.getElementById("chonLoaiKH").value ;
      if (x == 1){
          document.getElementById("soKetNoi").style.display = "block";
      }else{
          document.getElementById("soKetNoi").style.display = "none" ;
      }
  }
  function tinhtiencap(){
    var maKH = document.getElementById("maKH").value*1;
    var soKenh = document.getElementById("soKenh").value*1;
    var soKetNoi = document.getElementById("soKetNoi").value*1;
    var loaiKH = document.getElementById("chonLoaiKH").value;
    var tienCap = 0;
    if(loaiKH==0) { //nha dan
        tienCap = 4.5 + 20.5 + (soKenh * 7.5);
    }  else { //doanh nghiep
        tienCap = 15 + 75 + (soKetNoi - 10) * 5 + (50 * soKenh);

    }
    document.getElementById("result_tienCap").innerHTML = `Mã Khách Hàng : ${maKH} , Tiền cáp : ${tienCap.toLocaleString()} $`
  }