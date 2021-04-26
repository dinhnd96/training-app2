import celendar from '../assets/calendar-alt-solid.svg'

function AddValue() {
    return (
        <div className="addvalue-dashboard">
        <h1 className="addvalue-dashboard-title">THÊM MỚI ĐỒ VẬT</h1>
        <div className="addvalue-dashboard-left">
          <div className="addvalue-dashboard-left-input">
            <p>Tên sản phẩm</p>
            <input></input>
          </div>

          <div className="addvalue-dashboard-left-input">
            <p>Tên viết tắt</p>
            <input></input>
          </div>

          <div className="addvalue-dashboard-left-input">
            <p>Tên sản phẩm</p>
            <input></input>
          </div>

          <div className="addvalue-dashboard-left-input">
            <p>Vị trí đặt sản phẩm</p>
            <input></input>
          </div>

          <div className="addvalue-dashboard-left-input">
            <p>Hạn sử dung sản phẩm</p>
            <a className="addvalue-dashboard-left-input-icon" href="#"><img src={celendar}></img></a>
            <input></input>
          </div>

          <div className="addvalue-dashboard-left-input">
            <p>Lựa chọn công dụng</p>
            <input></input>
          </div>
        </div>
        <div className="addvalue-dashboard-right">

        </div>
        <div className="addvalue-dashboard-middle">
          <p>Mô tả đồ vật</p>
          <input></input>
        </div>
        <div className="addvalue-dashboard-bottom">
          <button>Hủy</button>
          <button>Lưu và thêm mới</button>
        </div>
      </div>
    );
}

export default AddValue;