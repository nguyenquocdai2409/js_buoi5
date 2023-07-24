/**
 * 
 * trúng tuyển => điểm tổng kết >= điểm chuẩn và ko có môn nào 0 điểm
 * điểm tổng kết = tổng điểm 3 môn + điểm ưu tiên
 * điểm ưu tiên : theo khu vực, theo đối tượng
 * 
 * nhập : điểm chuẩn của hội đồng
 *        điểm 3 môn của thí sinh
 *        điểm khu vực ( X nếu ko thuộc khu vực ưu tiên)
 *        điểm đối tượng ( 0 nếu ko thuộc đối tượng ưu tiên)
 *       
 * => cho biết thí sinh đó đậu hay rớt và tổng điểm đạt được ?
 * 
 */

function kiemTra() {
    var diemChuan = document.getElementById("diem-chuan").value * 1;
    var diemToan = document.getElementById("toan").value * 1;
    var diemVan = document.getElementById("van").value * 1;
    var diemAnh = document.getElementById("anh").value * 1;
    var khuVuc = document.getElementById("khu-vuc");
    var valueKhuVuc = khuVuc.value;
    var textKhuVuc = khuVuc.options[khuVuc.selectedIndex].value*1;
    var doiTuong = document.getElementById("doi-tuong");
    var valueDoiTuong = doiTuong.value;
    var textDoiTuong = doiTuong.options[doiTuong.selectedIndex].value*1;
    var diemTongKet = diemToan + diemVan + diemAnh + textKhuVuc + textDoiTuong;
    if (diemToan == 0 || diemVan ==0 || diemAnh == 0) {
        document.getElementById("result").innerHTML = `Bạn đã không trúng tuyển, tổng điểm của bạn là : ${diemTongKet}`;
    } else if (diemTongKet >= diemChuan) {
        document.getElementById("result").innerHTML = `Bạn đã trúng tuyển, tổng điểm của bạn là : ${diemTongKet}`;

    } else {
        document.getElementById("result").innerHTML = `Bạn đã không trúng tuyển, tổng điểm của bạn là : ${diemTongKet}`;

    }
}