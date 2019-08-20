import React, { Component } from 'react';
import Slider from "react-slick";

export default class SubFooter extends Component {
    render() {
        const settings = {
            // className: "center",
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 4,
            speed: 500,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        }
        return (
            <div>
                {/* Logos */}
                <section className="why">
                    <div className="container p-4">
                        <h2 className="text-center mb-3">Tại Sao Bạn Nên Học Cùng Chúng Tôi ?</h2>
                        <div className="row">
                            <div className="logo-item col-lg-3 col-md-6">
                                <div>
                                    <img className="img-responsive rounded-circle w-100 h-100" style={{ borderRadius: "50%" }} src="https://www.wcfcu.com/wp-content/uploads/2016/08/Bill-Pay.png" alt="" />
                                </div>

                                <div>
                                    <h4 className="text-center">Học Trực Tuyến</h4>
                                    <p className="text-center">Mọi lúc,mọi nơi</p>
                                </div>
                            </div>

                            <div className="logo-item col-lg-3 col-md-6">
                                <div>
                                    <img className="img-responsive rounded-circle w-100 h-100" style={{ borderRadius: "50%" }} src="https://www.wcfcu.com/wp-content/uploads/2016/08/Bill-Pay.png" alt="" />
                                </div>

                                <div>
                                    <h4 className="text-center">Hoàn Tiền</h4>
                                    <p className="text-center">Nếu không hài lòng</p>
                                </div>
                            </div>

                            <div className="logo-item col-lg-3 col-md-6">
                                <div>
                                    <img className="img-responsive rounded-circle w-100 h-100" style={{ borderRadius: "50%" }} src="https://www.wcfcu.com/wp-content/uploads/2016/08/Bill-Pay.png" alt="" />
                                </div>

                                <div>
                                    <h4 className="text-center">Thanh Toán 1 Lần</h4>
                                    <p className="text-center">Học mãi mãi</p>
                                </div>
                            </div>

                            <div className="logo-item col-lg-3 col-md-6">
                                <div>
                                    <img className="img-responsive rounded-circle w-100 h-100" style={{ borderRadius: "50%" }} src="https://www.wcfcu.com/wp-content/uploads/2016/08/Bill-Pay.png" alt="" />
                                </div>

                                <div>
                                    <h4 className="text-center">Giao Miễn Phí</h4>
                                    <p className="text-center">Khóa học tới tận nhà</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Close Logos */}

                {/* Top Teacher */}
                <section className="top-teacher p-4">
                    <h2 className="text-center mb-3">GIẢNG VIÊN TIÊU BIỂU</h2>
                    <div className="container">
                        <Slider {...settings}>
                            <div className="teacher-item">
                                <div className="mr-2 p-4" style={{ backgroundColor: "white", borderRadius: "15px" }}>
                                    <div className="teacher-img mb-2" style={{ height: "200px" }}>
                                        <img src="https://unica.vn/uploads/Thaoptt/August52016354pm_ho-ngoc-cuong_thumb.jpg" className="rounded-circle" alt="Cinque Terre" width="100%" height="100%" />
                                    </div>

                                    <div className="teacher-info text-center">
                                        <h4>Hồ Ngọc Cương</h4>
                                        <p style={{ minHeight: "75px" }}>Freelancer Facebook Marketing</p>
                                    </div>
                                </div>
                            </div>

                            <div className="teacher-item">
                                <div className="mr-2 p-4" style={{ backgroundColor: "white", borderRadius: "15px" }}>
                                    <div className="teacher-img mb-2" style={{ height: "200px" }}>
                                        <img src="https://unica.vn/uploads/Thaoptt/August52016431pm_nguyen-hieu_thumb.jpg" className="rounded-circle" alt="Cinque Terre" width="100%" height="100%" />
                                    </div>
                                    <div className="teacher-info text-center">
                                        <h4>Nguyễn Hiếu</h4>
                                        <p style={{ minHeight: "75px" }}>Đại sứ Yoga Việt Nam - CEO Zenlife Yoga</p>
                                    </div>
                                </div>
                            </div>


                            <div className="teacher-item">
                                <div className="mr-2 p-4" style={{ backgroundColor: "white", borderRadius: "15px" }}>
                                    <div className="teacher-img mb-2" style={{ height: "200px" }}>
                                        <img src="https://unica.vn/uploads/Thaoptt/August52016431pm_nguyen-hieu_thumb.jpg" className="rounded-circle" alt="Cinque Terre" width="100%" height="100%" />
                                    </div>

                                    <div className="teacher-info text-center">
                                        <h4>Nguyễn Hiếu</h4>
                                        <p style={{ minHeight: "75px" }}>Giảng viên Guitar - Youtuber nổi tiếng cộng đồng guitar Việt Nam</p>
                                    </div>
                                </div>
                            </div>

                            <div className="teacher-item">
                                <div className="mr-2 p-4" style={{ backgroundColor: "white", borderRadius: "15px" }}>
                                    <div className="teacher-img mb-2" style={{ height: "200px" }}>
                                        <img src="https://static.unica.vn/uploads/thaoptt09@gmail.com/February282018936am_ts-le-tham-duong_thumb.jpg" className="rounded-circle" alt="Cinque Terre" width="100%" height="100%" />
                                    </div>

                                    <div className="teacher-info text-center">
                                        <h4>Ts. Lê Thẩm Dương</h4>
                                        <p style={{ minHeight: "75px" }}>Tiến sĩ - Diễn giả chuyên nghiệp - Chuyên gia Tài chính, Lãnh đạo, Nhân sự.....</p>
                                    </div>
                                </div>
                            </div>

                            <div className="teacher-item">
                                <div className="mr-2 p-4" style={{ backgroundColor: "white", borderRadius: "15px" }}>
                                    <div className="teacher-img mb-2" style={{ height: "200px" }}>
                                        <img src="https://static.unica.vn/uploads/thaoptt09@gmail.com/February282018936am_ts-le-tham-duong_thumb.jpg" className="rounded-circle" alt="Cinque Terre" width="100%" height="100%" />
                                    </div>

                                    <div className="teacher-info text-center">
                                        <h4>Ts. Lê Thẩm Dương</h4>
                                        <p style={{ minHeight: "75px" }}>Tiến sĩ - Diễn giả chuyên nghiệp - Chuyên gia Tài chính, Lãnh đạo, Nhân sự.....</p>
                                    </div>
                                </div>
                            </div>

                            <div className="teacher-item">
                                <div className="mr-2 p-4" style={{ backgroundColor: "white", borderRadius: "15px" }}>
                                    <div className="teacher-img mb-2" style={{ height: "200px" }}>
                                        <img src="https://static.unica.vn/uploads/thaoptt09@gmail.com/February282018936am_ts-le-tham-duong_thumb.jpg" className="rounded-circle" alt="Cinque Terre" width="100%" height="100%" />
                                    </div>

                                    <div className="teacher-info text-center">
                                        <h4>Ts. Lê Thẩm Dương</h4>
                                        <p style={{ minHeight: "75px" }}>Tiến sĩ - Diễn giả chuyên nghiệp - Chuyên gia Tài chính, Lãnh đạo, Nhân sự.....</p>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </section>
                {/* Close Top Teacher */}
            </div>
        )
    }
}
