import React, { Component } from 'react';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';

export default class ThongTinCaNhan extends Component {
    render() {
        return (
            <>
                <Header />
                <div className="container p-3">
                    <div className="text-center">
                        <h3 className="p-3">NẠP THẺ THÀNH VIÊN</h3>
                        <p>Lưu ý: Mỗi mã thẻ chỉ được sử dụng 1 lần. Thẻ không sử dụng được khi đã hết hạn.</p>
                        <form action="" className="was-validated">
                            <div className="form-group">
                                <label>Nhập mã thẻ của bạn</label>
                                <input type="text" className="form-control" placeholder="XXXX-XXXX-XXXX-XXXX" name="uname" required />
                                <div className="invalid-feedback">Mã Coupon Không Được Trống</div>
                                <button className="btn btn-danger mt-3">NẠP THẺ</button>
                            </div>
                        </form>
                        <p>Hỗ trợ: <a href="tel:12345">012345</a> - <a href="tel:12345">067896</a></p>
                        <a href="asda.html">MUA THẺ THÀNH VIÊN</a>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}
