import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import Modal from './../../../../components/Modal';
import { LayDanhSachNguoiDung, XoaNguoiDung, XemThongTin, LayDanhSachKhoaHocChuaGhiDanh, LayDanhSachKhoaHocDaGhiDanh } from '../../../../Redux/Actions/Elearning.action';

class QuanLyNguoiDung extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            chiTietKhoaHocGhiDanh: [],
            email: "",
            hoTen: "",
            maLoaiNguoiDung: "HV",
            maNhom: "GP01",
            matKhau: "123",
            soDT: "",
            taiKhoan: "",
            popoverOpen: false
        }
    }

    toggle() {
        this.setState({
            popoverOpen: !this.state.popoverOpen
        });
    }

    componentDidMount() {
        this.props.layDanhSachNguoiDung();
    }

    sua = (taiKhoan) => {
        this.setState({
            tieuDe: "Sửa Người Dùng",
            trangThai: "sua"
        })
        this.props.XemThongTinCanSua(taiKhoan)
    }

    them = () => {
        this.setState({
            tieuDe: "Thêm Người Dùng Mới",
            trangThai: "them"
        })
    }

    layDanhSachKhoaHocNguoiDungChuaGhiDanh = (taiKhoan) => {
        this.props.LayDanhSachKhoaHocChuaGhiDanh(taiKhoan)
    }

    layDanhSachKhoaHocNguoiDungDaGhiDanh = (taiKhoan) => {
        this.props.LayDanhSachKhoaHocDaGhiDanh(taiKhoan)
    }


    layDanhSachKhoaHocNguoiDungChoXetDuyet = (taiKhoan) => {

    }

    renderUsers = () => {
        let content = this.props.DanhSachNguoiDung.map((item, key) => {
            return (
                <div className="col-lg-4 mb-3" key={key}>
                    <div className="card p-3">
                        <img className="card-img-top" src="https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1" alt="Card" style={{ width: '100%' }} />
                        <div className="card-body text-center">
                            <h4 className="card-title text-info">{item.hoTen}</h4>
                            <p className="card-text" style={{ minWidth: "300px" }}><i className="fas fa-envelope mr-2"></i><a href="mailto:{item.email}" className="text-success">{item.email}</a></p>
                            <p className="card-text"><i className="fas fa-phone mr-2"></i><a href="tel:{item.soDt}" className="text-success">{item.soDt}</a></p>
                            <div className="form-group">
                                <Button id="Popover1" type="button">
                                    Khóa Học Đã Ghi Danh : 5 Khóa
                                    </Button>
                                <Popover placement="right" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
                                    <PopoverHeader><span className="badge badge-pill badge-primary">Lập Trình Frontend</span></PopoverHeader>
                                    <PopoverBody>
                                        <button className="btn btn-success">Ghi Danh</button>
                                        <button className="btn btn-danger">Hủy Ghi Danh</button>
                                    </PopoverBody>
                                </Popover>
                            </div>
                            {this.layDanhSachKhoaHocNguoiDungDaGhiDanh(item.taiKhoan)}
                            <div className="row">
                                <button className="btn btn-info col-lg-6" data-toggle="modal" data-target="#myModal" onClick={() => this.sua(item.taiKhoan)}>Sửa</button>
                                <button className="btn btn-danger col-lg-6" onClick={() => this.props.xoaUser(item.taiKhoan)}>Xóa</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        return content;
    }
    render() {
        return (
            <div className="container">
                <h2 className="text-center">Trang Quản Lý Người Dùng</h2>
                <input type="text" className="form-control mb-3" placeholder="Tìm người dùng theo tên..." />
                <button className="btn btn-success mb-3" data-toggle="modal" data-target="#myModal" onClick={() => this.them()}>Thêm Mới</button>
                <div className="row">
                    {this.renderUsers()}
                </div>
                <Modal objThem={this.state} trangThai={this.state.trangThai} tieuDe={this.state.tieuDe} />
            </div>
        )
    }
}

const MapStateToProps = (state) => {
    return {
        DanhSachNguoiDung: state.ElearningReducer.DanhSachNguoiDung
    }
}

const DispatchStateToProps = (dispatch) => {
    return {
        layDanhSachNguoiDung: () => {
            dispatch(LayDanhSachNguoiDung())
        },

        xoaUser: (tk) => {
            let cf = window.confirm('Bạn chắc chắn xoá người dùng này chứ ?')
            if (cf) {
                dispatch(XoaNguoiDung(tk))
            }
            return;
        },

        XemThongTinCanSua: (taiKhoan) => {
            dispatch(XemThongTin(taiKhoan))
        },

        LayDanhSachKhoaHocChuaGhiDanh: (taiKhoan) => {
            dispatch(LayDanhSachKhoaHocChuaGhiDanh(taiKhoan))
        },

        LayDanhSachKhoaHocDaGhiDanh: (taiKhoan) => {
            dispatch(LayDanhSachKhoaHocDaGhiDanh(taiKhoan))
        }
    }
}

export default connect(MapStateToProps, DispatchStateToProps)(QuanLyNguoiDung)
