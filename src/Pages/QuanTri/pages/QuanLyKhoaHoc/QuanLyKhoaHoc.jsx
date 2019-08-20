import React, { Component } from 'react';
import { connect } from 'react-redux';
import { layDanhSachKhoaHoc, themKhoaHoc, layDanhMucKhoaHoc, xoaKhoaHoc } from '../../../../Redux/Actions/Elearning.action';

class QuanLyKhoaHoc extends Component {
    constructor(props) {
        super(props);
        let tk = JSON.parse(localStorage.getItem('userLogin'));
        this.state = {
            maKhoaHoc: (Math.floor(Math.random() * 1001)).toString(),
            biDanh: "",
            tenKhoaHoc: "",
            moTa: "",
            luotXem: 0,
            danhGia: 0,
            hinhAnh: "",
            maNhom: "GP01",
            ngayTao: "23/09/2019",
            maDanhMucKhoaHoc: "BackEnd",
            taiKhoanNguoiTao: tk.taiKhoan,
            trangThaiSua: 0
        };
    }

    layThongTinInput = (event) => {
        const input = event.target;
        this.setState({
            [input.name]: input.value,
        })
    }

    chonNhom = (event) => {
        const input = event.target;
        this.setState({
            [input.name]: input.value
        })
        console.log(this.state.maNhom);
        this.props.layDanhSachKhoaHoc(this.state.maNhom);
    }

    layHinhAnh = (event) => {
        const input = event.target;
        this.setState({
            [input.name]: input.files[0].name,
        })
    }

    sua = () => {
        this.setState({
            trangThaiSua: 1
        })
    }

    huySua = () => {
        this.setState({
            trangThaiSua: 0
        })
    }

    componentWillMount() {
        this.props.layDanhSachKhoaHoc(this.state.maNhom);
        this.props.layDanhMuc();
    }

    renderTenKhoaHoc = (maKhoaHoc) => {
        if (maKhoaHoc === "TuDuy") {
            return "Tư duy lập trình";
        }
        else if (maKhoaHoc === "FullStack") {
            return "Lập trình Full Stack";
        }
        else if (maKhoaHoc === "FrontEnd") {
            return "Lập trình Front end";
        }
        else if (maKhoaHoc === "DiDong") {
            return "Lập trình di động";
        }
        else if (maKhoaHoc === "Design") {
            return "Thiết kế Web";
        }
        else if (maKhoaHoc === "BackEnd") {
            return "Lập trình Backend";
        }
    }

    renderKhoaHoc = () => {
        let content = this.props.danhSachKhoaHoc.map((item, key) => {
            if (this.state.trangThaiSua === 0) {
                return (
                    <tr key={key}>
                        <td>{key + 1}</td>
                        <td>{item.tenKhoaHoc}</td>
                        <td>{this.renderTenKhoaHoc(item.danhMucKhoaHoc.maDanhMucKhoahoc)}</td>
                        <td>{item.ngayTao}</td>
                        <td>{item.moTa}</td>
                        <td>113</td>
                        <td><button type="button" className="btn btn-primary"><i className="fas fa-smile"></i> Đã Ghi Danh</button></td>
                        <td>
                            <button className="btn btn-info" onClick={() => this.sua()}>Sửa</button>
                            <button className="btn btn-danger" onClick={() => this.props.xoaKhoaHoc(item.maKhoaHoc)}>Xóa</button>
                        </td>
                    </tr>
                )
            }
            else {
                return (
                    <tr key={key}>
                        <td>{key + 1}</td>
                        <td><input type="text" defaultValue={item.tenKhoaHoc} /></td>
                        <td>{this.renderTenKhoaHoc(item.danhMucKhoaHoc.maDanhMucKhoahoc)}</td>
                        <td><input type="text" defaultValue={item.ngayTao} /></td>
                        <td>{item.moTa}</td>
                        <td>113</td>
                        <td><button type="button" className="btn btn-primary"><i className="fas fa-smile"></i> Đã Ghi Danh</button></td>
                        <td>
                            <button className="btn btn-info">Đồng Ý Sửa</button>
                            <button className="btn btn-danger" onClick={() => this.huySua()}>Hủy</button>
                        </td>
                    </tr>
                )
            }
        })
        return content;
    }

    renderDanhMuc = () => {
        let content = this.props.danhSachDanhMuc.map((item, key) => {
            return (
                <option key={key} value={item.maDanhMuc}>{item.tenDanhMuc}</option>
            )
        })
        return content;
    }

    render() {
        return (
            <div className="container">
                <h2 className="text-center">Trang Quản Lý Khóa Học</h2>
                <div className="form-group col-2">
                    <select className="form-control" name="maNhom" defaultValue={this.state.maNhom} onChange={this.chonNhom}>
                        <option value="GP01">GP01</option>
                        <option value="GP02">GP02</option>
                    </select>
                </div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên</th>
                            <th>Danh Mục</th>
                            <th>Ngày Tạo</th>
                            <th>Mô Tả</th>
                            <th>Học Viên</th>
                            <th>Trạng Thái</th>
                            <th><button className="btn btn-success" data-toggle="modal" data-target="#myModal">Thêm Mới</button></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderKhoaHoc()}
                    </tbody>
                </table>

                {/* The Modal */}
                <div className="modal fade" id="myModal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            {/* Modal Header */}
                            <div className="modal-header">
                                <h4 className="modal-title">Thêm Khóa Học Mới</h4>
                                <button type="button" className="close" data-dismiss="modal" id="thoatne">×</button>
                            </div>
                            {/* Modal body */}
                            <div className="modal-body">
                                <div className="container">
                                    <div className="row">
                                        <div className="form-group col-6">
                                            <label htmlFor="tenKH">Tên Khóa Học :</label>
                                            <input type="text" className="form-control" name="tenKhoaHoc" onChange={this.layThongTinInput} />
                                        </div>

                                        <div className="form-group col-6">
                                            <label htmlFor="tenKH">Bí Danh :</label>
                                            <input type="text" className="form-control" name="biDanh" onChange={this.layThongTinInput} />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="form-group col-6">
                                            <label htmlFor="sel1">Danh Mục :</label>
                                            <select className="form-control" name="maDanhMucKhoaHoc" defaultValue={this.state.maDanhMucKhoaHoc} onChange={this.layThongTinInput}>
                                                {this.renderDanhMuc()}
                                            </select>
                                        </div>

                                        <div className="form-group col-6">
                                            <label htmlFor="sel1">Mã Nhóm :</label>
                                            <select className="form-control" name="maNhom" defaultValue={this.state.maNhom} onChange={this.layThongTinInput}>
                                                <option value="GP01">GP01</option>
                                                <option value="GP02">GP02</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="pwd">Mô Tả :</label>
                                        <textarea className="form-control" name="moTa" onChange={this.layThongTinInput}></textarea>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="pwd">Hình Ảnh :</label>
                                        <input type="file" className="form-control-file border" name="hinhAnh" onChange={this.layHinhAnh}></input>
                                    </div>
                                </div>
                            </div>
                            {/* Modal footer */}
                            <div className="modal-footer">
                                <button type="button" className="btn btn-info" id="them" onClick={() => this.props.themKhoaHoc(this.state)}>Thêm</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        danhSachKhoaHoc: state.ElearningReducer.danhSachKhoaHoc,
        danhSachDanhMuc: state.ElearningReducer.danhSachDanhMuc
    }
}

const DispatchStateToProps = (dispatch) => {
    return {
        layDanhSachKhoaHoc: (maNhom) => {
            dispatch(layDanhSachKhoaHoc(maNhom))
        },

        layDanhMuc: () => {
            dispatch(layDanhMucKhoaHoc())
        },

        themKhoaHoc: (objThem) => {
            let cf = window.confirm("Bạn Chắc Chắn Thêm 1 Khóa Học Mới Với Các Thông Tin Bên Dưới Chứ ?");
            if (cf) {
                dispatch(themKhoaHoc(objThem));
            }
            return;
        },

        xoaKhoaHoc: (maKhoaHoc) => {
            let cf = window.confirm("Bạn Chắc Chắn Xóa Khóa Học Này Chứ ?");
            if (cf) {
                dispatch(xoaKhoaHoc(maKhoaHoc));
            }
            return;
        },
    }
}

export default connect(mapStateToProps, DispatchStateToProps)(QuanLyKhoaHoc)
