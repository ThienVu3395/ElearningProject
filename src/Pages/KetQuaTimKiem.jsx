import React, { Component } from 'react';
import { connect } from 'react-redux';

class KetQuaTimKiem extends Component {
    renderItem = () => {
        let content = this.props.dsTimKiem.map((index, key) => {
            return (
                <div className="card col-lg-3 col-md-2" style={{width:"200px"}} ke={key} key={key}>
                    <img className="card-img-top w-100 pt-3" src="https://secure.img1-fg.wfcdn.com/im/53299221/compr-r85/4307/43074449/hanging-pug-puppy-statue.jpg" alt="Card" />
                    <div className="card-body">
                        <h4 className="card-title">{index.tenKhoaHoc}</h4>
                        <p className="card-text">Some example text some example text</p>
                    </div>
                </div>
            );
        })
        return content;
    }
    render() {
        return (
            <div className="bg-light">
                <h2 className="text-center">Đây Là Kết Quả Của Từ Khóa <span style={{"color":"red"}}>{this.props.tuTimKiem}</span></h2>
                <div className="container">
                    <div className="row">
                        {this.renderItem()}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dsTimKiem: state.ElearningReducer.danhSachTimKiem,
        tuTimKiem : state.ElearningReducer.TuKhoa
    }
}

export default connect(mapStateToProps, null)(KetQuaTimKiem)
