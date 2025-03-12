import { Form, Input, Button, notification } from "antd";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import grid from "../../assets/dot-grid.png";

import { IoIosSend } from "react-icons/io";
import ContactInfo from "../../components/ContactInfo/ContactInfo";
const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const formRef = useRef(null);
  const service_id = import.meta.env.VITE_EMAIL_SERVICE_ID;
  const template_id = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
  const public_key = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

  const onFinish = async (values) => {
    try {
      setLoading(true);
      const res = await emailjs.send(
        service_id,
        template_id,
        values,
        public_key
      );

      if (res.status === 200) {
        console.log(res);
        notification.success({
          message: "Success",
          description: "Thank you for your message!",
        });
      }
    } catch {
      notification.error({
        message: "Failed!",
        description: "Failed to send message.",
      });
    } finally {
      setLoading(false);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Form failed:", errorInfo);
  };

  return (
    <section
      id="contact"
      className="mt-14 py-16 dark:bg-darkGray relative bg-lightGray"
    >
      <div className="absolute top-0 right-0 hidden sm:block">
        <img src={grid} alt="shape" />
      </div>
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-primaryColor">Get in Touch</h2>
          <p className="text-darkGray dark:text-lightGray">
            Feel free to reach out anytime!
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* contact form */}
          <div className="w-full ">
            <Form
              ref={formRef}
              name="contact-form"
              layout="vertical"
              form={form}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              className="bg-offWhite dark:bg-muted lg:max-w-lg w-full ring-2 ring-primaryColor shadow-lg rounded-tr-badge rounded-bl-badge p-8  "
            >
              <Form.Item
                label={<span className="dark:text-white">Name</span>}
                name="name"
                className="text-white"
                rules={[{ required: true, message: "Please enter your name!" }]}
              >
                <Input
                  className="hover:border-primaryColor focus:border-primaryColor focus:shadow-md placeholder-gray-500 dark:placeholder-gray-400"
                  size="large"
                  placeholder="Your Name"
                />
              </Form.Item>

              <Form.Item
                label={<span className="dark:text-white">Email</span>}
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
                  className="hover:border-primaryColor focus:border-primaryColor focus:shadow-md placeholder-gray-500 dark:placeholder-gray-400"
                  size="large"
                  placeholder="Your Email"
                />
              </Form.Item>
              <Form.Item
                label={<span className="dark:text-white">Subject</span>}
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
                  className="hover:border-primaryColor focus:border-primaryColor focus:shadow-md placeholder-gray-500 dark:placeholder-gray-400"
                  size="large"
                  placeholder="Your Subject"
                />
              </Form.Item>

              <Form.Item
                label={<span className="dark:text-white">Message</span>}
                name="message"
                rules={[
                  { required: true, message: "Please enter your message!" },
                ]}
              >
                <Input.TextArea
                  className="hover:border-primaryColor focus:shadow-md placeholder-gray-500 dark:placeholder-gray-400"
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
          <ContactInfo />
        </div>
      </div>
    </section>
  );
};

export default Contact;
