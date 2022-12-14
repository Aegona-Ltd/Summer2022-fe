import 'antd/dist/antd.min.css';
import { Row, Col, Button } from "antd";
import { MailOutlined, PhoneOutlined, EnvironmentOutlined } from "@ant-design/icons";

import React from 'react';
import '../../../styles/Home.scss';

const Footer = () => {
  return (
    <div className='dev_Footer'>
      <div className='Footer_top'>
        <Row >
          <Col className='Footer_top_Col_1' md={12} sm={24} xs={24}>
            <div className='h1_1'></div>
            <div className='Footer_top_Col_1_text'>
              Giới thiệu chung
              <span> Website học tiếng anh</span>
            </div>
            <div className='Footer_top_Col_1_text1'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </div>
            <Button type="primary" className='Footer_top_Col_1_btn'>
              Đăng ký học ngay
            </Button>
            <Button type="primary" className='Footer_top_Col_1_btn1'>
              Dùng thử miễn phí
            </Button>
          </Col>
          <Col md={12} sm={24} xs={24}>
            <div className='background_Footer_top_Col_2_circle'>
              <div className='background_Footer_top_Col_2_circle1'></div>
            </div>
            <div className='background_Footer_top_Col_2'>
              <div className='background_Footer_top_Col_2_v1'></div>
            </div>
            <div className='background_Footer_top_Col_2_v2'>
              <div className='background_Footer_top_Col_2_v2_1'></div>
            </div>
            <div className='background_Footer_top_Col_2_v3'></div>
            <div className='background_Footer_top_Col_2_v5'></div>
            <div className='background_Footer_top_Col_2_v4'></div>
          </Col>
        </Row>
        <div className='res_test2'>
          <div className='background_Footer_top_Col_2_circle2'></div>
          <div className='background_Footer_top_Col_2_v2_2'></div>
          <div className='background_Footer_top_Rec_1'></div>
          <div className='Footer_top_Col_1_text_2'> Các vấn đề của người học & Giải pháp của AEGONA</div>
          <div className='background_Footer_top_Col_3_v2_1'></div>
        </div>
        <div className='cac_van_de_ng_hoc'></div>
        <div className='cac_van_de_ng_hoc_1'></div>
      </div>
      <div className='Footer_center'>
        <div className='Footer_center_dot'></div>
        <div className='Footer_center_dot2'></div>
        <Row className='Footer_center_Row'>
          <Col className='Footer_center_Col' xl={6} md={10} sm={24}>
            <div className='Footer_center_Col_Background_dot'></div>
            <div className='Footer_center_Col_Background_img_1'></div>
            <div className='Footer_center_Col_Background_text_1'>Học bài</div>
            <div className='Footer_center_Col_Background_text_1_v1'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </div>
          </Col>
          <Col className='Footer_center_Col' xl={6} md={10} sm={24}>
            <div className='Footer_center_Col_Background_dot'></div>
            <div className='Footer_center_Col_Background_img_2'></div>
            <div className='Footer_center_Col_Background_text_1'>Ôn bài</div>
            <div className='Footer_center_Col_Background_text_1_v1'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </div>
          </Col>
          <Col className='Footer_center_Col' xl={6} md={10} sm={24}>
            <div className='Footer_center_Col_Background_dot'></div>
            <div className='Footer_center_Col_Background_img_3'></div>
            <div className='Footer_center_Col_Background_text_1'>Tiến Độ</div>
            <div className='Footer_center_Col_Background_text_1_v1'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </div>
          </Col>
        </Row>
      </div>
      <div className='Footer_center2'>
        <div className='Footer_center2_text'>hình ảnh Về AEGONA
          <div className='Footer_center2_dot'></div>
        </div>
        <Row className='Footer_center2_Row'>
          <Col className='Footer_center2_Col' xl={5} md={10} sm={24}></Col>
          <Col className='Footer_center2_Col' xl={5} md={10} sm={24}></Col>
          <Col className='Footer_center2_Col' xl={5} md={10} sm={24}></Col>
          <Col className='Footer_center2_Col' xl={5} md={10} sm={24}></Col>
        </Row>
      </div>

      <div className='Footer_center2'>
        <div className='Footer_center2_text'>Liên hệ với AEGONA
          <div className='Footer_center2_dot'></div>
        </div>
        <Row className='Footer_center2_Row'>
          <Col className='Footer_center2_Col1' md={11} sm={24}>
            <div className='Footer_center2_BG_Full'>
              <div className='Footer_center2_Col_bg1'>
                <div className='Footer_center2_Col_bg1_icon'>
                  <div className='phone_1'>
                    <PhoneOutlined />
                  </div>
                </div>
                <div className='Footer_center2_Col_bg1_text'>
                  <div>HOTLINE</div>
                  <div className='Footer_center2_Col_bg1_text1'>028 7109 2939</div>
                </div>
              </div>
              <div className='Footer_center2_Col_bg1'>
                <div className='Footer_center2_Col_bg1_icon'>
                  <div className='phone_1'>
                    <MailOutlined />
                  </div>
                </div>
                <div className='Footer_center2_Col_bg1_text'>
                  <div>EMAIL</div>
                  <div className='Footer_center2_Col_bg1_text1'>contact@aegona.com</div>
                </div>
              </div>
              <div className='Footer_center2_Col_bg1'>
                <div className='Footer_center2_Col_bg1_icon'>
                  <div className='phone_1'>
                    <EnvironmentOutlined />
                  </div>
                </div>
                <div className='Footer_center2_Col_bg1_text'>
                  <div>ĐỊA CHỈ</div>
                  <div className='Footer_center2_Col_bg1_text1'>Tòa nhà QTSC 9, Khu Phần mềm Quang Trung, P. Tân Chánh Hiệp, Quận 12, TP.HCM</div>
                </div>
              </div>
            </div>
          </Col>
          <Col className='Footer_center2_Col1' md={11} sm={24}>
            <div className='Footer_center2_Col2_background_map1'>
              <div className='Footer_center2_Col2_background_map'></div>
              <div className='Footer_center2_Col2_background_map_icon'>
                <div className='phone_2'>
                  <EnvironmentOutlined />
                </div>
              </div>
              <div className='Footer_center2_Col2_background_map_icon1'>
                <div className='phone_2'>
                  <MailOutlined />
                </div>
              </div>
              <div className='Footer_center2_Col2_background_map_icon2'>
                <div className='phone_2'>
                  <PhoneOutlined />
                </div>
              </div>
              <div className='Footer_center2_Col2_background_map_icon3'></div>
              <div className='Footer_center2_Col2_background_map_icon4'></div>
            </div>
            <iframe className='Footer_center2_Col2_map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.442335757664!2d106.62410211477214!3d10.853922192268977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752963982e3445%3A0xff1227c46772895d!2sAegona%20Co.%2C%20Ltd!5e0!3m2!1svi!2s!4v1660705574741!5m2!1svi!2s"></iframe>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Footer;