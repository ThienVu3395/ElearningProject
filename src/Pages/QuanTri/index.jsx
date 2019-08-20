import React, { Component, Fragment } from 'react';
import Swal from 'sweetalert2';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './layout/Header';
import Main from './layout/Main';
import { Redirect } from 'react-router-dom';
import TrangChu from './../Main/main';
import { connect } from 'react-redux';
import QuanLyKhoaHoc from './pages/QuanLyKhoaHoc/QuanLyKhoaHoc';
import QuanLyNguoiDung from './pages/QuanLyNguoiDung/QuanLyNguoiDung';

class index extends Component {
    render() {
        if (localStorage.length === 0) {
            Swal.fire("Xin Lỗi", "Bạn Không Có Quyền Để Truy Cập Vào Trang Này", "error");
            return <Redirect to={TrangChu} />
        }
        return (
            <BrowserRouter>
                <Fragment>
                    <Header />
                    <Switch>
                        <Route exact path='/dashboard' component={Main} />
                        <Route exact path='/courses' component={QuanLyKhoaHoc} />
                        <Route exact path='/users' component={QuanLyNguoiDung} />
                        <Route path='/' component={Main} />
                    </Switch>
                </Fragment>
            </BrowserRouter >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        trangThaiDangNhap: state.ElearningReducer.trangThaiDangNhap
    }
}

export default connect(mapStateToProps, null)(index)
