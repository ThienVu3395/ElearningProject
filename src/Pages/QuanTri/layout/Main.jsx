import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import { layDanhSachKhoaHoc } from './../../../Redux/Actions/Elearning.action'

class Main extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            popoverOpen: false
        }
    }

    toggle() {
        this.setState({
            popoverOpen: !this.state.popoverOpen
        });
    }

    componentWillMount() {
        this.props.layDanhSach('GP01');
    }

    renderKhoaHoc = () => {
        let content = this.props.danhSachKhoaHoc.map((item, key) => {
            return (
                <div className="col-lg-4" key={key}>
                    <div className="card">
                        <img className="card-img-top" src="img_avatar1.png" alt="Card" />
                        <div className="card-body">
                            <h4 className="card-title">John Doe</h4>
                            <p className="card-text">Some example text.</p>
                            <div className="form-group">
                                <label htmlFor="sel1">Danh Sách Người Dùng Đã Ghi Danh</label>
                                <Button id="Popover1" type="button">
                                    Tổng Cộng : 5 Khóa
                                </Button>
                                <Popover placement="right" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
                                    <PopoverHeader>hihihehe</PopoverHeader>
                                    <PopoverBody>Sed posuere consectetur est at lobortis.</PopoverBody>
                                </Popover>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        return content
    }

    render() {
        return (
            <div className="container mt-3">
                <div className="form-group col-lg-4">
                    <select className="form-control" defaultValue={1}>
                        <option value={1}>Đã Được Ghi Danh</option>
                        <option value={0}>Chưa Được Ghi Danh</option>
                    </select>
                </div>

                <div className="row">
                    {this.renderKhoaHoc()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        danhSachKhoaHoc: state.ElearningReducer.danhSachKhoaHoc
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        layDanhSach: (maNhom) => {
            dispatch(layDanhSachKhoaHoc(maNhom))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
