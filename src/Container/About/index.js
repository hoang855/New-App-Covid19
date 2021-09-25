import React, { Component } from "react";
import "./About.css";
class About extends Component {
  render() {
    return (
      <div className="about-container">
        <div className="about-header">
          <h3>THÔNG ĐIỆP 5K - TRONG PHÒNG CHỐNG ĐẠI DỊCH COVID-19</h3>
        </div>
        <div className="about-mian">
          <div className="about-mian-con">
            <div className="about-mian-con-text">
              <h2>- KHẨU TRANG</h2>
              <p>
                Đeo khẩu trang vải thường xuyên tại nơi công cộng, nơi tập trung
                đông người; đeo khẩu trang y tế tại các cơ sở y tế, khu cách ly.
              </p>
            </div>
          </div>

          <div className="about-mian-con about-felx">
            <div className="about-mian-con-text">
              <h2>- KHỬ KHUẨN</h2>
              <p>
                Rửa tay thường xuyên bằng xà phòng hoặc dung dịch sát khuẩn tay.
                Vệ sinh các bề mặt/vật dụng thường xuyên tiếp xúc (tay nắm cửa,
                điện thoại, máy tính bảng, mặt bàn, ghế...). Giữ vệ sinh, lau
                rửa và để nhà cửa thông thoáng.
              </p>
            </div>
          </div>

          <div className="about-mian-con">
            <div className="about-mian-con-text">
              <h2>- KHOẢNG CÁCH</h2>
              <p>Giữ khoảng cách khi tiếp xúc với người khác.</p>
            </div>
          </div>

          <div className="about-mian-con about-felx">
            <div className="about-mian-con-text">
              <h2>- KHÔNG TẬP TRUNG</h2>
              <p>không tập trung đông người.</p>
            </div>
          </div>

          <div className="about-mian-con">
            <div className="about-mian-con-text">
              <h2>- KHAI BÁO Y TẾ</h2>
              <p>
                Thực hiện khai báo Y tế trên App NCOVI; cài đặt ứng dụng
                Bluezone tại địa chỉ https://www.bluezone.gov.vn để được cảnh
                báo nguy cơ lây nhiễm dịch COVID-19. Khi có dấu hiệu sốt, ho,
                khó thở hãy gọi điện cho đường dây nóng của Bộ Y tế 19009095,
                hoặc đường dây nóng của y tế địa phương để được tư vấn, hỗ trợ,
                hướng dẫn đi khám bệnh đảm bảo an toàn.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
