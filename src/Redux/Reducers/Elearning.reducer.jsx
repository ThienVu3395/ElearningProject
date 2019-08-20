import * as types from '../Constants/Eleaning.constant';
import Swal from 'sweetalert2';

let stateElearning = {
    TuKhoa: "",
    danhSachKhoaHoc: [],
    danhSachTimKiem: [],
    khoaHocChiTiet: {},
    danhSachDanhMuc: [],
    danhSachKhoaHocTheoDanhMuc: [],
    ThongTinCaNhan : {},
    trangThaiDangNhap : "",
    DanhSachKhoaHocDaDangKy : [],
    DanhSachNguoiDung : [],
    ThongTinCanSua : {}
}

const ElearningReducer = (state = stateElearning, action) => {
    switch (action.type) {
        // ------------------------------- KHÓA HỌC -------------------------------------
        //Lấy danh sách khóa hoc
        case types.LAY_DANH_SACH_KHOA_HOC: {
            state.danhSachKhoaHoc = action.dsKhoaHoc;
            return { ...state }
        }

        //Tìm kiếm khóa học
        case types.TIM_KIEM_KHOA_HOC: {
            state.danhSachTimKiem = action.dsTimKiem;
            state.TuKhoa = action.tuKhoa;
            return { ...state }
        }

        //Lấy chi tiết khóa học
        case types.LAY_CHI_TIET_KHOA_HOC: {
            state.khoaHocChiTiet = action.chiTietKhoaHoc;
            let ds = [...state.DanhSachKhoaHocDaDangKy];
            let maKhoaHoc = state.khoaHocChiTiet.maKhoaHoc;
            for(let i = 0;i< ds.length ; i++){
                if(maKhoaHoc === ds[i].maKhoaHoc){
                    let i = document.getElementById("dk");
                    i.innerHTML = "<b><i class='fas fa-check mr-2'></i>ĐÃ ĐĂNG KÝ</b>";
                    i.className = "btn container btn-success";
                }
            }
            return { ...state }
        }

        //Lấy danh mục khóa học
        case types.LAY_DANH_MUC_KHOA_HOC: {
            state.danhSachDanhMuc = action.danhMucKhoaHoc;
            return { ...state }
        }

        //Lấy Khóa học theo danh mục
        case types.LAY_KHOA_HOC_THEO_DANH_MUC: {
            state.danhSachKhoaHocTheoDanhMuc = action.khoaHocDanhMuc;
            return { ...state }
        }

        //Đăng ký học
        case types.DANG_KY_HOC : {
            var i = document.getElementById("dk");
            i.innerHTML = "<b><i class='fas fa-check mr-2'></i>ĐÃ ĐĂNG KÝ</b>";
            i.className = "btn container btn-success";
            return {...state}
        }

        //Hủy đăng ký học
        case types.HUY_DANG_KY_HOC : {
            let ttdk = action.thongtindangky;
            let ds = [...state.DanhSachKhoaHocDaDangKy];
            for(let i = 0;i<ds.length;i++){
                if(ttdk.maKhoaHoc === ds[i].maKhoaHoc){
                    ds.splice(i,1);
                }
            }
            state.DanhSachKhoaHocDaDangKy = ds;
            return {...state};
        }

        // ------------------------------ NGƯỜI DÙNG --------------------------
        //Đăng ký
        case types.DANG_KY: {
            document.getElementById('close').click();
            return { ...state }
        }

        // Đăng Nhập
        case types.DANG_NHAP: {
            state.trangThaiDangNhap = 1;
            return { ...state }
        }

        // Đăng Xuất
        case types.DANG_XUAT: {
            let cf = window.confirm("Bạn Chắc Chắn Muốn Đăng Xuất Chứ ?");
            if (cf) {
                localStorage.clear();
                state.trangThaiDangNhap = "";
                Swal.fire("Đăng Xuất Thành Công", "Bạn Sẽ Được Điều Hướng Về Trang Chủ", 'success');
            }
            return { ...state }
        }

        // Xem thông tin cá nhân
        case types.XEM_THONG_TIN_CA_NHAN : {
            state.ThongTinCaNhan = action.thongTinCaNhan;
            state.DanhSachKhoaHocDaDangKy = action.thongTinCaNhan.chiTietKhoaHocGhiDanh;
            return {...state}
        }

        // Sửa thông tin cá nhân
        case types.SUA_THONG_TIN_CA_NHAN : {
            state.ThongTinCaNhan = action.thongTinSua;
            state.ThongTinCaNhan.chiTietKhoaHocGhiDanh = state.DanhSachKhoaHocDaDangKy;
            return {...state}
        }

        // ------------------------------------- QUẢN TRỊ --------------------------------
        // Quản trị người dùng
        case types.LAY_DANH_SACH_NGUOI_DUNG : {
            state.DanhSachNguoiDung = action.danhSachNguoiDung;
            return {...state}
        }

        case types.THEM_NGUOI_DUNG : {
            document.getElementById('thoatne').click();
            let ds = [...state.DanhSachNguoiDung];
            let User = action.User;
            User.chiTietKhoaHocGhiDanh = [];
            ds.push(User);
            state.DanhSachNguoiDung = ds;
            return {...state};
        }

        case types.XOA_NGUOI_DUNG : {
            let ds = [...state.DanhSachNguoiDung];
            for(let i = 0;i<ds.length;i++){
                if(action.taiKhoan === ds[i].taiKhoan){
                    ds.splice(i,1);
                }
            }
            state.DanhSachNguoiDung = ds;
            return {...state};
        }

        case types.XEM_THONG_TIN_SUA : {
            state.ThongTinCanSua = action.thongTinCanSua;
            console.log(state.ThongTinCanSua)
            return {...state}
        }
        //Quản trị Khóa học
        case types.THEM_KHOA_HOC : {
            let ls = JSON.parse(localStorage.getItem('userLogin'));
            let them = [...state.danhSachKhoaHoc];
            let objThem = {
                biDanh : action.objThem.biDanh,
                danhMucKhoaHoc : {maDanhMucKhoaHoc : action.objThem.maDanhMucKhoaHoc , tenDanhMucKhoaHoc : ""},
                hinhAnh : action.objThem.hinhAnh,
                luotXem : action.objThem.luotXem,
                maKhoaHoc : action.objThem.maKhoaHoc,
                maNhom : action.objThem.maNhom,
                moTa : action.objThem.moTa,
                ngayTao : action.objThem.ngayTao,
                nguoiTao : {hoTen:ls.hoTen,maLoaiNguoiDung:ls.maLoaiNguoiDung,taiKhoan:ls.taiKhoan,tenLoaiNguoiDung:"GV"},
                soLuongHocVien : 0,
                tenKhoaHoc : action.objThem.tenKhoaHoc,
            }
            them.push(objThem);
            state.danhSachKhoaHoc = them
            return {...state}
        }

        case types.XOA_KHOA_HOC :{
            let ma = action.maKhoaHoc;
            let ds = [...state.danhSachKhoaHoc];
            for(let i = 0;i<ds.length;i++){
                if(ds[i].maKhoaHoc === ma){
                    ds.splice(i,1);
                    break;
                }
            }
            state.danhSachKhoaHoc = ds;
            return {...state};
        }

        ////////////Mặc định
        default: {
            return { ...state };
        }
    }
}

export default ElearningReducer;