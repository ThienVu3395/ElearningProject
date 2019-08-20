import * as types from '../Constants/Eleaning.constant';
import axios from 'axios';
import Swal from 'sweetalert2';
import * as CauHinh from '../../common/CauHinh';

export const layDanhSachKhoaHoc = (maNhom) => {
    return (dispatch) => {
        // console.log(maNhom)
        axios({
            url: CauHinh.domain + `QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${maNhom}`,
            method: "GET"
        }).then((result) => {
            dispatch({
                type: types.LAY_DANH_SACH_KHOA_HOC,
                dsKhoaHoc: result.data,
            })
        }).catch((error) => {
            console.log(error )
        })
    }
}

export const timKiemKhoaHoc = (maNhom, tuKhoa) => {
    return (dispatch) => {
        axios({
            url: CauHinh.domain + `QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${tuKhoa}&MaNhom=${maNhom}`,
            method: "GET"
        }).then((result) => {
            dispatch({
                type: types.TIM_KIEM_KHOA_HOC,
                dsTimKiem: result.data,
                tuKhoa: tuKhoa,
                MaNhom: maNhom
            })
        }).catch((error) => {
            alert(error.response.data)
        })
    }
}

export const layChiTietKhoaHoc = (maKhoaHoc) => {
    return (dispatch) => {
        axios({
            url: CauHinh.domain + `QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`,
            method: "GET"
        }).then((result) => {
            dispatch({
                type: types.LAY_CHI_TIET_KHOA_HOC,
                chiTietKhoaHoc: result.data
            })
        }).catch((error) => {
            console.log(error.response.data);
        });
    }
}

export const layDanhMucKhoaHoc = () => {
    return (dispatch) => {
        axios({
            url: CauHinh.domain + `QuanLyKhoaHoc/LayDanhMucKhoaHoc`,
            method: "GET"
        }).then((result) => {
            dispatch({
                type: types.LAY_DANH_MUC_KHOA_HOC,
                danhMucKhoaHoc: result.data
            })
        }).catch((error) => {
            alert(error.response.data);
        })
    }
}

export const layKhoaHocTheoDanhMuc = (maDanhMuc, maNhom) => {
    return (dispatch) => {
        axios({
            url: CauHinh.domain + `QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${maDanhMuc}&MaNhom=${maNhom}`,
            method: "GET"
        }).then((result) => {
            dispatch({
                type: types.LAY_KHOA_HOC_THEO_DANH_MUC,
                khoaHocDanhMuc: result.data
            })
        }).catch((error) => {
            Swal.fire("Thông Báo", error.response.data, 'error');
        })
    }
}

export const dangKyHoc = (idKH) => {
    return (dispatch) => {
        let taiKhoan = JSON.parse(localStorage.getItem(CauHinh.userLogin));
        let ThongTinDangKy = {
            maKhoaHoc: idKH,
            taiKhoan: taiKhoan.taiKhoan
        }
        axios({
            url: CauHinh.domain + `QuanLyKhoaHoc/DangKyKhoaHoc`,
            method: "POST",
            data: ThongTinDangKy,
            headers: {
                "Authorization": "Bearer " + localStorage.getItem(CauHinh.token)
            }
        }).then((result) => {
            Swal.fire("Thông Báo", result.data, 'success');
            dispatch({
                type: types.DANG_KY_HOC,
            })
        }).catch((error) => {
            Swal.fire("Thông Báo", error.response.data, 'error');
        })
    }
}

export const huyDangKy = (idKH, tk) => {
    return (dispatch) => {
        let thongTin = {
            maKhoaHoc: idKH,
            taiKhoan: tk
        }
        axios({
            url: CauHinh.domain + `QuanLyKhoaHoc/HuyGhiDanh`,
            method: "POST",
            data: thongTin,
            headers: { "Authorization": "Bearer " + localStorage.getItem(CauHinh.token) }
        }).then((result) => {
            Swal.fire("Thông Báo", result.data, "success");
            dispatch({
                type: types.HUY_DANG_KY_HOC,
                thongtindangky: thongTin
            })
        }).catch((error) => {
            alert(error.response.data);
        })
    }
}


export const themVaoGioHang = () => {
    return (dispatch) => {
        dispatch({
            type: types.THEM_VAO_GIO_HANG,
        })
    }
}

// Người dùng
export const DangKy = (tk, mk, ht, sdt, mn, mail) => {
    return (dispatch) => {
        let nd = {
            taiKhoan: tk,
            matKhau: mk,
            hoTen: ht,
            soDT: sdt,
            maNhom: mn,
            maLoaiNguoiDung: "HV",
            email: mail
        }
        axios({
            url: CauHinh.domain + 'QuanLyNguoiDung/DangKy',
            method: "POST",
            data: nd,
        }).then((result) => {
            Swal.fire("Thông Báo", "Đăng Ký Thành Viên " + result.data.taiKhoan + " Thành Công", 'success');
            dispatch({
                type: types.DANG_KY,
            })
        }).catch((error) => {
            Swal.fire("Thông Báo", error.response.data, "error");
        })
    }
}

export const DangNhap = (taiKhoan, matKhau) => {
    let objDN = {
        taiKhoan: taiKhoan,
        matKhau: matKhau
    }
    return (dispatch) => {
        axios({
            url: CauHinh.domain + `QuanLyNguoiDung/DangNhap`,
            method: "POST",
            data: objDN,
            headers: {
                "Authorization": "Bearer " + localStorage.getItem(CauHinh.token)
            }
        }).then((result) => {
            Swal.fire("Thông Báo", "Đăng Nhập Thành Công", 'success');
            localStorage.setItem(CauHinh.userLogin, JSON.stringify(result.data));
            localStorage.setItem(CauHinh.token, result.data.accessToken);
            dispatch({
                type: types.DANG_NHAP
            })
        }).catch((error) => {
            Swal.fire("Thông Báo", error.response.data, 'error');
        })
    }
}

export const DangXuat = () => {
    return (dispatch) => {
        dispatch({
            type: types.DANG_XUAT
        })
    }
}

export const XemThongTinCaNhan = () => {
    return (dispatch) => {
        let taiKhoan = JSON.parse(localStorage.getItem(CauHinh.userLogin));
        axios({
            url: CauHinh.domain + `QuanLyNguoiDung/ThongTinTaiKhoan`,
            method: "POST",
            data: { "Taikhoan": taiKhoan.taiKhoan },
            headers: {
                "Authorization": "Bearer " + localStorage.getItem(CauHinh.token)
            }
        }).then((result) => {
            console.log(result.data)
            dispatch({
                type: types.XEM_THONG_TIN_CA_NHAN,
                thongTinCaNhan: result.data
            })
        }).catch((error) => {
            console.log(error.response.data);
        })
    }
}

export const SuaThongTinCaNhan = (objSua) => {
    return (dispatch) => {
        axios({
            url: CauHinh.domain + `QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
            method: "PUT",
            data: objSua,
            headers: {
                "Authorization": "Bearer " + localStorage.getItem(CauHinh.token)
            }
        }).then((result) => {
            Swal.fire("Thông Báo", "Cập Nhật Thông Tin Thành Công", "success");
            console.log(result.data)
            dispatch({
                type: types.SUA_THONG_TIN_CA_NHAN,
                thongTinSua: objSua
            })
        }).catch((error) => {
            console.log(error.response.data);
        })
    }
}

////////////////////////////////////////////// Quản Trị
// Quản Trị người dùng
export const LayDanhSachNguoiDung = () => {
    return (dispatch) => {
        axios({
            url: CauHinh.domain + `QuanLyNguoiDung/LayDanhSachNguoiDung`,
            method: "GET"
        }).then((result) => {
            dispatch({
                type: types.LAY_DANH_SACH_NGUOI_DUNG,
                danhSachNguoiDung : result.data
            })
        }).catch((error) => {
            console.log(error.response.data);
        })
    }
}

export const ThemNguoiDung = (objThem) => {
    return (dispatch) => {
        axios({
            url: CauHinh.domain + `QuanLyNguoiDung/ThemNguoiDung`,
            method: "POST",
            data : objThem,
            headers: {
                "Authorization": "Bearer " + localStorage.getItem(CauHinh.token)
            }
        }).then((result) => {
            Swal.fire("Thông Báo", "Thêm Người Dùng Thành Công", "success");
            dispatch({
                type: types.THEM_NGUOI_DUNG,
                User : result.data
            })
        }).catch((error) => {
            Swal.fire("Thông Báo", error.response.data, "error");
        })
    }
}

export const XoaNguoiDung = (taiKhoan) => {
    return (dispatch) => {
        axios({
            url: CauHinh.domain + `QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
            method: "DELETE",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem(CauHinh.token)
            }
        }).then((result) => {
            Swal.fire("Thông Báo", result.data, "success");
            dispatch({
                type: types.XOA_NGUOI_DUNG,
                taiKhoan : taiKhoan
            })
        }).catch((error) => {
            Swal.fire("Thông Báo", error.response.data, "error");
        })
    }
}

export const XemThongTin = (tk) => {
    return (dispatch) => {
        axios({
            url: CauHinh.domain + `QuanLyNguoiDung/ThongTinTaiKhoan`,
            method: "POST",
            data: { "Taikhoan": tk },
            headers: {
                "Authorization": "Bearer " + localStorage.getItem(CauHinh.token)
            }
        }).then((result) => {
            dispatch({
                type: types.XEM_THONG_TIN_SUA,
                thongTinCanSua: result.data
            })
        }).catch((error) => {
            console.log(error.response.data);
        })
    }
}

export const LayDanhSachKhoaHocChuaGhiDanh = (tk) => {
    return (dispatch) => {
        // console.log(tk)
        axios({
            url: CauHinh.domain + `QuanLyNguoiDung/LayDanhSachKhoaHocChuaGhiDanh`,
            method: "POST",
            data: { "TaiKhoan": tk },
            headers: {
                "Authorization": "Bearer " + localStorage.getItem(CauHinh.token)
            }
        }).then((result) => {
            // console.log(result.data)
            // dispatch({
            //     type: types.XEM_THONG_TIN_SUA,
            //     thongTinCanSua: result.data
            // })
        }).catch((error) => {
            console.log(error.response.data);
        })
    }
}

export const LayDanhSachKhoaHocDaGhiDanh = (tk) => {
    return (dispatch) => {
        console.log(tk)
        axios({
            url: CauHinh.domain + `QuanLyNguoiDung/LayDanhSachKhoaHocDaXetDuyet`,
            method: "POST",
            data: { "TaiKhoan": tk },
            headers: {
                "Authorization": "Bearer " + localStorage.getItem(CauHinh.token)
            }
        }).then((result) => {
            console.log(result.data)
            // dispatch({
            //     type: types.XEM_THONG_TIN_SUA,
            //     thongTinCanSua: result.data
            // })
        }).catch((error) => {
            console.log(error.response.data);
        })
    }
}


// Quản trị khóa học
export const themKhoaHoc = (objThem) => {
    return (dispatch) => {
        axios({
            url: CauHinh.domain + `QuanLyKhoaHoc/ThemKhoaHoc`,
            method: "POST",
            data : objThem,
            headers: {
                "Authorization": "Bearer " + localStorage.getItem(CauHinh.token)
            }
        }).then((result) => {
            console.log(result.data)
            Swal.fire("Thông Báo", "Thêm Khóa Học Thành Công", "success");
            let thoat = document.getElementById("thoatne");
            thoat.click();
            dispatch({
                type: types.THEM_KHOA_HOC,
                objThem : result.data
            })
        }).catch((error) => {
            Swal.fire("Thông Báo", error.response.data, "error");
        })
    }
}

export const xoaKhoaHoc = (maKH) => {
    return (dispatch) => {
        axios({
            url: CauHinh.domain + `QuanLyKhoaHoc/XoaKhoaHoc?maKhoaHoc=${maKH}`,
            method: "DELETE",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem(CauHinh.token)
            }
        }).then((result) => {
            Swal.fire("Thông Báo", result.data, "success");
            dispatch({
                type: types.XOA_KHOA_HOC,
                maKhoaHoc : maKH
            })
        }).catch((error) => {
            Swal.fire("Thông Báo", error.response.data, "error");
        })
    }
}

export const suaKhoaHoc = (objSua) => {
    return (dispatch) => {
        console.log("ok")
    }
}
