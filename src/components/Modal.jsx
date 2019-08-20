import React, { Component } from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import { connect } from 'react-redux';
import { ThemNguoiDung } from './../Redux/Actions/Elearning.action';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.toggle2 = this.toggle2.bind(this);
        this.toggle3 = this.toggle3.bind(this);
        this.state = {
            taiKhoan: this.props.objThem.taiKhoan,
            soDT: this.props.objThem.soDT,
            matKhau: this.props.objThem.matKhau,
            maNhom: this.props.objThem.maNhom,
            maLoaiNguoiDung: this.props.objThem.maLoaiNguoiDung,
            hoTen: this.props.objThem.hoTen,
            email: this.props.objThem.email,
            chiTietKhoaHocGhiDanh: this.props.objThem.chiTietKhoaHocGhiDanh,
            popoverOpen: false,
            popoverOpen2: false,
            popoverOpen3: false,
        }
    }

    layThongTinInput = (event) => {
        const input = event.target;
        this.setState({
            [input.name]: input.value
        })
        console.log(this.state)
    }

    toggle() {
        this.setState({
            popoverOpen: !this.state.popoverOpen
        });
    }

    toggle2() {
        this.setState({
            popoverOpen2: !this.state.popoverOpen2
        });
    }

    toggle3() {
        this.setState({
            popoverOpen3: !this.state.popoverOpen3
        });
    }

    renderDanhSachKhoaHocDaDangKy = () => {
        let content = this.props.dsKhoaHoc.map((item, key) => {
            return (
                <>
                    <PopoverHeader>hihihehe {key}</PopoverHeader>
                    <PopoverBody>Sed posuere consectetur est at lobortis.</PopoverBody>
                </>
            )
        })
        return content;
    }

    renderFormThaoTac = (trangThai) => {
        if (trangThai === "them") {
            return (
                <>
                    <div className="modal-body">
                        <div className="container">
                            <div className="form-group">
                                <label htmlFor="sel1">Loại Người Dùng :</label>
                                <select className="form-control" defaultValue={this.state.maLoaiNguoiDung} name="maLoaiNguoiDung" onChange={this.layThongTinInput} >
                                    <option value="HV">Học Viên</option>
                                    <option value="GV">Giáo Vụ</option>
                                </select>
                            </div>

                            <div className="row">
                                <div className="form-group col-lg-6">
                                    <label>Tài Khoản</label>
                                    <input type="text" className="form-control" name="taiKhoan" onChange={this.layThongTinInput} />
                                </div>

                                <div className="form-group col-lg-6">
                                    <label>Họ Tên</label>
                                    <input type="text" className="form-control" name="hoTen" onChange={this.layThongTinInput} />
                                </div>
                            </div>

                            <div className="row">
                                <div className="form-group col-lg-6">
                                    <label>Email</label>
                                    <input type="text" className="form-control" name="email" onChange={this.layThongTinInput} />
                                </div>

                                <div className="form-group col-lg-6">
                                    <label>Số Điện Thoại</label>
                                    <input type="text" className="form-control" name="soDT" onChange={this.layThongTinInput} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-info" onClick={() => this.props.themNguoiDung(this.state)}>Thêm</button>
                    </div>
                </>
            )
        }
        else if (trangThai === "sua") {
            // let t = this.props.ThongTinCanSua.chiTietKhoaHocGhiDanh;
            let t = [{}, {}, {}, {}]
            console.log(t);
            return (
                <>
                    <div className="modal-body">
                        <div className="container">
                            <div className="row">
                                <div className="form-group col-lg-6">
                                    <label>Tài Khoản</label>
                                    <input type="text" className="form-control" name="taiKhoan" defaultValue={this.props.ThongTinCanSua.taiKhoan} disabled />
                                </div>

                                <div className="form-group col-lg-6">
                                    <label>Họ Tên</label>
                                    <input type="text" className="form-control" name="hoTen" defaultValue={this.props.ThongTinCanSua.hoTen} onChange={this.layThongTinInput} />
                                </div>
                            </div>

                            <div className="row">
                                <div className="form-group col-lg-6">
                                    <label>Email</label>
                                    <input type="text" className="form-control" name="email" defaultValue={this.props.ThongTinCanSua.email} onChange={this.layThongTinInput} />
                                </div>

                                <div className="form-group col-lg-6">
                                    <label>Số Điện Thoại</label>
                                    <input type="text" className="form-control" name="soDT" defaultValue={this.props.ThongTinCanSua.soDT} onChange={this.layThongTinInput} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-lg-6">
                                    <label htmlFor="sel1">Loại Người Dùng</label>
                                    <select className="form-control" defaultValue={this.props.ThongTinCanSua.maLoaiNguoiDung} name="maLoaiNguoiDung" onChange={this.layThongTinInput}>
                                        <option value="HV">Học Viên</option>
                                        <option value="GV">Giáo Vụ</option>
                                    </select>
                                </div>

                                <div className="form-group col-lg-6">
                                    <label htmlFor="sel1">Khóa Học Đã Ghi Danh</label>
                                    <Button id="Popover1" type="button">
                                    {/* Tổng Cộng : {this.props.ThongTinCanSua.chiTietKhoaHocGhiDanh.length} Khóa */}
                                        Tổng Cộng : {t.length} Khóa
                                    </Button>
                                    <Popover placement="right" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
                                        <PopoverHeader><span className="badge badge-pill badge-primary">Lập Trình Frontend</span></PopoverHeader>
                                        <PopoverBody>
                                            <button className="btn btn-success">Ghi Danh</button>
                                            <button className="btn btn-danger">Hủy Ghi Danh</button>
                                        </PopoverBody>
                                    </Popover>
                                </div>
                            </div>

                            <div className="row">
                                <div className="form-group col-lg-6">
                                    <label htmlFor="sel1">Khóa Học Chờ Xét Duyệt</label>
                                    <Button id="Popover2" type="button">
                                        Tổng Cộng : {t.length} Khóa
                                    </Button>
                                    <Popover placement="left" isOpen={this.state.popoverOpen2} target="Popover2" toggle={this.toggle2}>
                                        <PopoverHeader><span className="badge badge-pill badge-primary">Lập Trình Frontend</span></PopoverHeader>
                                        <PopoverBody>
                                            <button className="btn btn-success">Ghi Danh</button>
                                            <button className="btn btn-danger">Hủy Ghi Danh</button>
                                        </PopoverBody>
                                    </Popover>
                                </div>

                                <div className="form-group col-lg-6">
                                    <label htmlFor="sel1">Khóa Học Chưa Ghi Danh</label>
                                    <Button id="Popover3" type="button">
                                        Tổng Cộng : {t.length} Khóa
                                    </Button>
                                    <Popover placement="right" isOpen={this.state.popoverOpen3} target="Popover3" toggle={this.toggle3}>
                                        <PopoverHeader><span className="badge badge-pill badge-primary">Lập Trình Frontend</span></PopoverHeader>
                                        <PopoverBody>
                                            <button className="btn btn-success">Ghi Danh</button>
                                        </PopoverBody>
                                    </Popover>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-success">Xác Nhận Sửa</button>
                    </div>
                </>
            )
        }
    }
    render() {
        return (
            <div className="modal fade" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        {/* Modal Header */}
                        <div className="modal-header">
                            <h4 className="modal-title">{this.props.tieuDe}</h4>
                            <button type="button" className="close" data-dismiss="modal" id="thoatne">×</button>
                        </div>
                        {this.renderFormThaoTac(this.props.trangThai)}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ThongTinCanSua: state.ElearningReducer.ThongTinCanSua
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        themNguoiDung: (objThem) => {
            let cf = window.confirm('Bạn chắc chắn thêm 1 người dùng mới với thông tin bên dưới chứ ?')
            if (cf) {
                dispatch(ThemNguoiDung(objThem))
            }
            return;
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
