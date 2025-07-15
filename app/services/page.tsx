'use client'

import { motion } from 'framer-motion'
import { Globe, TrendingUp, Users, ShoppingCart, BarChart3, Headphones, Package, Star } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const ServicesPage = () => {
  const amazonServices = [
    {
      icon: Globe,
      title: "Global Market Access",
      description: "Tiếp cận 300+ triệu khách hàng trên toàn thế giới qua 20+ marketplace của Amazon"
    },
    {
      icon: Package,
      title: "Store Setup & Optimization",
      description: "Thiết lập và tối ưu hóa store Amazon từ A-Z, đảm bảo tuân thủ chính sách"
    },
    {
      icon: BarChart3,
      title: "Listing Optimization",
      description: "Tối ưu hóa sản phẩm với SEO, hình ảnh chất lượng cao và mô tả hấp dẫn"
    },
    {
      icon: TrendingUp,
      title: "Marketing & Advertising",
      description: "Chiến lược quảng cáo PPC, Amazon DSP và các công cụ marketing hiệu quả"
    },
    {
      icon: Headphones,
      title: "Customer Service",
      description: "Dịch vụ chăm sóc khách hàng 24/7 bằng nhiều ngôn ngữ"
    },
    {
      icon: ShoppingCart,
      title: "Inventory Management",
      description: "Quản lý kho hàng thông minh, dự báo nhu cầu và tối ưu chi phí"
    }
  ]

  const tiktokServices = [
    {
      icon: Users,
      title: "Content Strategy",
      description: "Xây dựng chiến lược nội dung viral, phù hợp với xu hướng Gen Z"
    },
    {
      icon: Star,
      title: "Influencer Marketing",
      description: "Kết nối với KOLs và influencers hàng đầu để tăng độ nhận diện thương hiệu"
    },
    {
      icon: TrendingUp,
      title: "Live Commerce",
      description: "Tổ chức livestream bán hàng chuyên nghiệp với tỷ lệ chuyển đổi cao"
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Phân tích dữ liệu chi tiết để tối ưu hóa hiệu suất bán hàng"
    }
  ]

  const processSteps = [
    {
      step: "01",
      title: "Tư vấn & Phân tích",
      description: "Đánh giá sản phẩm, thị trường mục tiêu và xây dựng chiến lược phù hợp"
    },
    {
      step: "02",
      title: "Thiết lập & Tối ưu",
      description: "Tạo store, tối ưu listing và chuẩn bị mọi thứ để ra mắt sản phẩm"
    },
    {
      step: "03",
      title: "Launch & Marketing",
      description: "Ra mắt sản phẩm với chiến dịch marketing mạnh mẽ để tạo momentum"
    },
    {
      step: "04",
      title: "Quản lý & Phát triển",
      description: "Theo dõi, tối ưu và mở rộng quy mô kinh doanh bền vững"
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Dịch vụ của chúng tôi
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Giải pháp toàn diện cho thương mại điện tử, từ Amazon Global Selling đến TikTok Shop
            </p>
          </motion.div>
        </div>
      </section>

      {/* Amazon Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                  alt="Amazon"
                  className="h-12 mr-4"
                />
                <h2 className="text-3xl md:text-4xl font-bold gradient-text">
                  Global Selling
                </h2>
              </div>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Hỗ trợ doanh nghiệp Việt Nam bán hàng trên Amazon toàn cầu. Từ khởi tạo store, 
                tối ưu listing, quản lý inventory đến marketing và customer service. 
                Mang sản phẩm Made-in-Vietnam đến hàng trăm triệu khách hàng quốc tế.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
                  20+ Marketplaces
                </span>
                <span className="bg-secondary-100 text-secondary-700 px-4 py-2 rounded-full text-sm font-medium">
                  300M+ Customers
                </span>
                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                  24/7 Support
                </span>
              </div>
              <Link href="/contact" className="btn-primary inline-flex items-center">
                Tìm hiểu thêm
                <Globe className="ml-2" size={20} />
              </Link>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Amazon Global Selling"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>

          {/* Amazon Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amazonServices.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all duration-300 card-hover"
                >
                  <Icon className="text-primary-500 mb-4" size={40} />
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* TikTok Shop Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <img
                src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="TikTok Shop"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="flex items-center mb-6">
                <Image
                  src="/LOGO.png"
                  alt="Company Logo"
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain mr-4"
                />
                <h2 className="text-3xl md:text-4xl font-bold gradient-text">
                  TikTok Shop
                </h2>
              </div>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Chinh phục thế hệ Gen Z với TikTok Shop - nền tảng social commerce đang bùng nổ. 
                Chúng tôi giúp bạn tạo ra những chiến dịch viral, kết nối với influencers 
                và tối ưu hóa trải nghiệm mua sắm trực tiếp trên video.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-medium">
                  Viral Content
                </span>
                <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
                  Live Commerce
                </span>
                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                  Influencer Network
                </span>
              </div>
              <Link href="/contact" className="btn-secondary inline-flex items-center">
                Khám phá ngay
                <TrendingUp className="ml-2" size={20} />
              </Link>
            </motion.div>
          </div>

          {/* TikTok Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tiktokServices.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg hover:shadow-lg transition-all duration-300 card-hover"
                >
                  <Icon className="text-secondary-500 mb-4" size={40} />
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              Quy trình làm việc
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Quy trình 4 bước đã được chứng minh hiệu quả, đảm bảo thành công cho mọi dự án
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                {/* Step Number */}
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                  {step.step}
                </div>
                
                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary-200 to-secondary-200 transform translate-x-8"></div>
                )}
                
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Sẵn sàng bắt đầu hành trình?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Hãy để Joy đồng hành cùng bạn chinh phục thị trường thương mại điện tử toàn cầu
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Liên hệ tư vấn miễn phí
              </Link>
              <Link href="/about" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                Tìm hiểu về Joy
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage