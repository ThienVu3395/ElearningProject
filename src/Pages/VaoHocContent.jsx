import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { XemThongTinCaNhan } from './../Redux/Actions/Elearning.action';
import { huyDangKy } from './../Redux/Actions/Elearning.action';

class VaoHocContent extends Component {
    componentDidMount() {
        this.props.xemThongTin()
    }

    renderKhoaHoc = () => {
        let User = JSON.parse(localStorage.getItem("userLogin"));
        if (this.props.thongTinCaNhan.length !== 0) {
            let content = this.props.thongTinCaNhan.map((item, key) => {
                return (
                    <div className="card col-lg-4 col-md-6 mb-3" key={key} i={key}>
                        <img className="card-img-top pt-3" src="https://st.quantrimang.com/photos/image/2019/03/11/ly-do-hoc-csharp-1.jpg" alt="Card" style={{ width: '100%' }} />
                        <div className="card-body">
                            <h6 className="card-title">{item.tenKhoaHoc}</h6>
                            <p className="card-text">Giảng viên : Lê Hoàng Thiên Vũ</p>
                            <div className="alert alert-warning text-center">
                                Khóa Học Đang Chờ Ghi Danh
                            </div>

                            {/* <div className="progress mb-3">
                                <div className="progress-bar" style={{ width: '70%' }}>70%</div>
                            </div> */}
                            <NavLink to={`/chi-tiet-khoa-hoc/${item.maKhoaHoc}`} className="btn btn-success container mb-3"><i className="fas fa-info mr-2"></i>Xem Chi Tiết Khóa Học</NavLink>
                            <button className="btn btn-danger container" onClick={() => this.props.huyDangKy(item.maKhoaHoc, User.taiKhoan)}><i className="fas fa-window-close mr-2" ></i>Hủy Đăng Ký</button>
                        </div>
                    </div>
                )
            })
            return content;
        }
        else {
            return (
                <div className="card">
                    <img className="card-img-top" src="http://www.viaviewfiles.net/wp-content/uploads/2018/04/Opps.jpg" alt="Card" style={{ width: '100%' }} />
                    <div className="card-body">
                        <h4 className="card-title text-center text-danger">Xin Lỗi</h4>
                        <p className="card-text text-success">Có vẻ như bạn chưa ghi danh bất kỳ khóa học nào cả nè</p>
                        {/* <a href="#" className="btn btn-primary">See Profile</a> */}
                    </div>
                </div>
            )
        }
    }
    render() {
        return (
            <div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Tìm Kiếm Khóa Học..." />
                    <div className="input-group-append">
                        <button className="btn btn-success" type="submit">Tìm Kiếm</button>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        {this.renderKhoaHoc()}
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        thongTinCaNhan: state.ElearningReducer.DanhSachKhoaHocDaDangKy
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        xemThongTin: () => {
            dispatch(XemThongTinCaNhan())
        },

        huyDangKy: (mkh, tk) => {
            if (window.confirm("Bạn có chắc muốn hủy đăng ký khóa học này chứ ? ") === false) {
                return;
            }
            dispatch(huyDangKy(mkh, tk))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(VaoHocContent)
