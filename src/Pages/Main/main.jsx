import React, { Component } from 'react';
import '../css/main.css';
import Carousel from 'react-bootstrap/Carousel';
import Header from '../../Layout/Header';
import SubFooter from '../../Layout/SubFooter';
import Footer from '../../Layout/Footer';
import DanhSachKhoaHoc from './DanhSachKhoaHoc/DanhSachKhoaHoc';
import DanhSachKhoaHocDanhMuc from './DanhSachKhoaHocTheoDanhMuc/DanhSachKhoaHoc';
import DanhMuc from '../DanhMuc';

export default class main extends Component {
    render() {
        return (
            <div>
                <Header/>
                {/* Banner */}
                <Carousel className="bg-dark">
                    <Carousel.Item className="item">
                        <a href="asdasd.html">
                            <img
                                className="d-block w-100 h-100"
                                src="https://unica.vn/upload/images/101935_top-khoa-hoc-moi-nhat_thumb.png"
                                alt="Top khóa học mới nhất"
                            />
                        </a>
                    </Carousel.Item>

                    <Carousel.Item className="item">
                        <a href="asdasd.html">
                            <img
                                className="d-block w-100 h-100"
                                src="https://unica.vn/upload/images/110320_co-hoi-thang-tien-cho-dan-van-phong_thumb.png"
                                alt="Học thiết kế thỏa đam mê"
                            />
                        </a>
                    </Carousel.Item>

                    <Carousel.Item className="item">
                        <a href="asdasd.html">
                            <img
                                className="d-block w-100 h-100"
                                src="https://unica.vn/upload/images/025527_hoc-thiet-ke-thoa-dam-me_thumb.png"
                                alt="Cơ hội thăng tiến cho dân văn phòng"
                            />
                        </a>
                    </Carousel.Item>
                </Carousel>
                {/* Đóng Banner */}

                {/* Danh Mục */}
                <DanhMuc/>
                {/* Close Danh Mục */}

                {/* Danh Sách Khóa Học*/}
                <div className="bg-gray p-4">
                    <DanhSachKhoaHoc/>
                </div>
                {/* Đóng Danh Sách Khóa Học*/}

                {/* Danh Sách Khóa Học Theo Danh Mục*/}
                <div className="bg-gray p-4">
                    <DanhSachKhoaHocDanhMuc tenDanhMuc={"Khóa Học Được Mua Nhiều Nhất"}/>
                    
                    <DanhSachKhoaHocDanhMuc tenDanhMuc={"Khóa Học Mọi Người Quan Tâm"}/>
                </div>
                {/* Đóng Danh Sách Khóa Học Theo Danh Mục*/}
                <SubFooter/>
                <Footer/>
            </div >
        )
    }
}
