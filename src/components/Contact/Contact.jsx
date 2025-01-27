import { Form, Input, Button, notification } from "antd";
import { useState } from "react";
import { FaLinkedin, FaGithub, FaPhone, FaEnvelope } from "react-icons/fa";
import grid from "../../assets/dot-grid.png";

import { IoIosSend } from "react-icons/io";
const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    setLoading(true);
    setTimeout(() => {
      notification.success({
        message: "Thank you for your message!",
      });
      setLoading(false);
      form.resetFields();
    }, 3000);
    console.log("Form values:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Form failed:", errorInfo);
  };

  return (
    <section className="py-16 dark:bg-darkGray relative bg-lightGray">
      <div className="absolute top-0 right-0 hidden sm:block">
        <img src={grid} alt="shape" />
      </div>
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-primaryColor">Get in Touch</h2>
          <p className="text-darkGray">Feel free to reach out anytime!</p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Contact Form */}
          <div className="w-full ">
            <Form
              name="contact-form"
              layout="vertical"
              form={form}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              className="bg-white lg:max-w-lg w-full border-2 border-primaryColor shadow-lg rounded-tr-badge rounded-bl-badge p-8"
            >
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: "Please enter your name!" }]}
              >
                <Input
                  className="hover:border-primaryColor focus:border-primaryColor focus:shadow-md"
                  size="large"
                  placeholder="Your Name"
                />
              </Form.Item>

              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please enter your email!",
                  },
                  {
                    type: "email",
                    message: "Please enter a valid email!",
                  },
                ]}
              >
                <Input
                  className="hover:border-primaryColor focus:border-primaryColor focus:shadow-md"
                  size="large"
                  placeholder="Your Email"
                />
              </Form.Item>
              <Form.Item
                label="Subject"
                name="subject"
                rules={[
                  {
                    required: true,
                    message: "Please enter your subject!",
                  },
                  {
                    type: "text",
                    message: "Please enter your subject!",
                  },
                ]}
              >
                <Input
                  className="hover:border-primaryColor focus:border-primaryColor focus:shadow-md"
                  size="large"
                  placeholder="Your Subject"
                />
              </Form.Item>

              <Form.Item
                label="Message"
                name="message"
                rules={[
                  { required: true, message: "Please enter your message!" },
                ]}
              >
                <Input.TextArea
                  className="hover:border-primaryColor focus:shadow-md"
                  showCount
                  placeholder="Your Message"
                  rows={4}
                  allowClear
                />
              </Form.Item>

              <Button
                type="primary"
                htmlType="submit"
                size="large"
                loading={loading}
                className="w-full mt-5 bg-primaryColor hover:!bg-secondaryColor"
              >
                {loading ? "Sending..." : "Send Message"}
                <IoIosSend
                  className={`${loading && "animate-ping"} text-xl mt-[3px]`}
                />
              </Button>
            </Form>
          </div>

          {/* Contact Info */}
          <div className="w-full space-y-6 ">
            <h3 className="text-2xl text-primaryColor font-semibold">
              Contact Info
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <FaPhone className="text-darkGray text-2xl" />
                <span>+880 1773 06 1332</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-darkGray text-2xl" />
                <span>hasinur.rahman1332@gmail.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-primaryColor">
                Follow Me
              </h4>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="text-blue-600 text-3xl hover:text-blue-800"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="#"
                  className="text-gray-800 text-3xl hover:text-gray-600"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
