import { Form, Input, Button, Checkbox, Typography, Layout, message } from "antd";
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios'
import 'antd/dist/antd.min.css';
import React, { useState } from 'react';
import get from "lodash/get";
import styles from '../../styles/components/Auth/login.module.css';
import { useRouter } from 'next/router';
const { Title } = Typography;

export default function Login() {
  const router = useRouter()
  const [form] = Form.useForm();
  const [Recc, setRecc] = useState('');
  const numbers = /[0-9]/g;
  const upperCaseLetters = /[A-Z]/g;
  const lowerCaseLetters = /[a-z]/g;
  const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
  const check_mail = [
    {
      required: true,
      message: "Please input your email.",
    },
    {
      type: "email",
      message: "Your email is invalid.",
    },
  ]
  const check_pass = [
    {
      required: true,
      message: "Please input your password.",
    },
    {
      min: 6,
      message: "Password must be minimum 6 characters.",
    },
    {
      pattern: numbers ,
      message: "Please enter your number.",
    },
    {
      pattern: lowerCaseLetters,
      message: "Please enter lowercase characters (abc).",
    },
    {
      pattern: upperCaseLetters,
      message: "Please enter uppercase characters (ABC).",
    },
    {
      pattern: format,
      message: "Your password is not have special character.",
    },
  ]

  //Hàm Captcha
  var Recaptcha = (value) => {
    // console.log('Captcha : ', value);
    setRecc(value);
  }

  //btn Login
  const onFinish = async (values) => {
    let key = 'check_key';
    if (Recc === '' || Recc === undefined || Recc === null) {  //Check captcha
      message.error({
        content: 'No captchas yet .',
        key,
        duration: 1,   //time
      });
      return;
    } else {
      const Account = {
        email: get(values, "email"),
        password: get(values, "password"),
        captcha: Recc,
      };

      //Gắn mockAPI
      const Url = 'https://jsonplaceholder.typicode.com/posts';
      axios({
        method: 'post',
        url: Url,
        data: {
          Account
        }
      })

      //Lấy data gắn vào firebase
        .then(data => {
          //nếu tài khoản = admin@gmail.com thì vào href contact/danhsach 
          if(data.data.Account.email === 'admin@gmail.com'){
            message.loading({
              content: 'Loading...',
              key,
            });
            setTimeout(() => {
              message.success({
                content: 'Loading...!',
                key,
                duration: 2,
              });
              router.push('/contact/danhsach')
            }, 1000);
           }else{
            message.loading({
              content: 'Loading...',
              key,
            });
            setTimeout(() => {
              message.error({
                content: 'Tài khoản hoặc mật khẩu không chính xác!',
                key,
                duration: 2,
              });
            }, 1000);
           }
        })
        .catch(err => console.error(err));
    }
  };

  return (
    <Layout className={styles.fullbg}>
      <Form className={styles.form_login1}
        name="signin"
        form={form}
        initialValues={{
          remember: false,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <div className={styles.zzz}>
          <Title level={2} className="text-center" style={{ color: '#284D66', fontWeight: "bold", }}>
            Sign in
          </Title>
          <div className={styles.social_container}>
            <div className={styles.icon}>
              <i className="bi bi-facebook"></i>
            </div>
            <div className={styles.icon}>
              <i className="bi bi-google" style={{ color: 'red' }}></i>
            </div>
            <div className={styles.icon}>
              <i className="bi bi-github" style={{ color: 'black' }}></i>
            </div>

          </div>

          <div className={styles.option_text}>or use your account</div>

          <Form.Item
            name="email"
            hasFeedback
            label="Email address"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            rules={check_mail}
          >
            <Input placeholder="Email" size="large" />
          </Form.Item>

          <Form.Item
            name="password"
            hasFeedback
            label="Password"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            rules={check_pass}
          >
            <Input.Password placeholder="Password" size="large" />
          </Form.Item>

          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="/#">
              Forgot password?
            </a>
          </Form.Item>

          <ReCAPTCHA className={styles.ReCAPTCHA}
            sitekey="6LdmoUEhAAAAACqtptaVuYqUJ-mV7_vDEk-VKMIP"
            onChange={Recaptcha}
          />

          <Button
            className={styles.buttonn}
            htmlType="submit"
            type="primary"
            size="large"
            style={{ backgroundColor: '#1478E7' }}>
            Sign In
          </Button>
        </div>
      </Form>
    </Layout>
  );
}