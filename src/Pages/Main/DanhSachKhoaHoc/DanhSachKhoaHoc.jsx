import React, { Component } from 'react';
import '../../css/DanhSachKhoaHoc.css';
import KhoaHoc from '../DanhSachKhoaHoc/KhoaHoc';
import { connect } from 'react-redux';
import { layDanhSachKhoaHoc } from '../../../Redux/Actions/Elearning.action';
import { NavLink } from 'react-router-dom';

class DanhSachKhoaHoc extends Component {
    renderKhoaHoc = () => {
        let content = this.props.dsKhoaHoc.map((item, key) => {
            return <KhoaHoc KH={item} index={key} key={key} />
        })
        return content;
    }

    componentDidMount() {
        this.props.layDanhSach("GP01");
    }
    render() {

        return (
            <div className="container">
                <h2 style={{ textAlign: "center" }}>Ưu Đãi Hot Trong Ngày</h2>
                <div className="row">
                    <div className="one col-lg-6 col-md-9 mb-3">
                        <NavLink to={`/chi-tiet-khoa-hoc/${"asdasd"}`}>
                            <img className="card-img-top w-100 h-100 img-fluid" src="https://static.unica.vn/upload/images/2019/04/dot-pha-thu-nhap-6-kenh-marketing-online_1555569994.jpg" alt="Card" />
                        </NavLink>
                    </div>
                    {this.renderKhoaHoc()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dsKhoaHoc: state.ElearningReducer.danhSachKhoaHoc
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        layDanhSach: (maNhom) => {
            dispatch(layDanhSachKhoaHoc(maNhom))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DanhSachKhoaHoc)
