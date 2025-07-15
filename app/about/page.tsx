'use client'

import { motion } from 'framer-motion'
import { Shield, Heart, Lightbulb, CheckCircle } from 'lucide-react'
import Image from 'next/image'

const AboutPage = () => {
  const coreValues = [
    {
      title: 'Chính trực',
      content: 'Luôn hành động với sự trung thực, minh bạch và có trách nhiệm trong mọi quyết định và hành động của mình.',
      icon: Shield,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Tận tâm',
      content: 'Đặt khách hàng và đồng nghiệp lên hàng đầu, luôn nỗ lực hết mình để mang lại giá trị tốt nhất.',
      icon: Heart,
      color: 'from-red-500 to-pink-600'
    },
    {
      title: 'Sáng tạo',
      content: 'Không ngừng đổi mới, tìm kiếm những giải pháp độc đáo và hiệu quả để vượt qua mọi thử thách.',
      icon: Lightbulb,
      color: 'from-yellow-500 to-orange-600'
    },
    {
      title: 'Xuất sắc',
      content: 'Cam kết đạt được những tiêu chuẩn cao nhất trong mọi công việc, không ngừng học hỏi và phát triển.',
      icon: CheckCircle,
      color: 'from-green-500 to-emerald-600'
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Vision Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/vp1.jpg"
            alt="Global vision"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-secondary-900/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 container-custom text-center text-white">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-2xl md:text-3xl font-light mb-8 text-yellow-300">
              TẦM NHÌN
            </h1>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-shadow">
              Xây dựng một công ty kiểu mới
            </h2>
            <p className="text-xl md:text-2xl lg:text-3xl mb-12 leading-relaxed max-w-5xl mx-auto text-shadow">
              Lớn mạnh, hiệu quả, đóng góp vào kỷ nguyên vươn mình của dân tộc. 
              Đưa sản phẩm và trí tuệ của con người Việt Nam ra toàn cầu.
            </p>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="inline-flex items-center justify-center w-32 h-32 bg-white/20 backdrop-blur-md rounded-full p-4"
            >
              <Image
                src="/LOGO.png"
                alt="Company Logo"
                width={96}
                height={96}
                className="w-24 h-24 object-contain"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Core Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Giá trị cốt lõi
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Các giá trị cốt lõi định hướng mọi hoạt động của Joy, tạo nên văn hóa doanh nghiệp 
              mạnh mẽ và bền vững, là kim chỉ nam cho sự phát triển của công ty.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {coreValues.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 h-full">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="text-white" size={32} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                      {value.title}
                    </h3>

                    {/* Content */}
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {value.content}
                    </p>

                    {/* Decorative Element */}
                    <div className={`mt-6 h-1 bg-gradient-to-r ${value.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Office Gallery Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container-custom">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Không gian làm việc
            </h2>
            <p className="text-gray-600 text-xl max-w-4xl mx-auto leading-relaxed font-light">
              Môi trường làm việc hiện đại và chuyên nghiệp, được thiết kế để khuyến khích sự sáng tạo, 
              hợp tác và phát triển bền vững của đội ngũ.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {[
              { 
                src: './vp1.jpg', 
                title: 'Không gian làm việc chính',
                description: 'Khu vực làm việc mở với thiết kế hiện đại, tối ưu hóa năng suất và sự tương tác.',
                features: ['Thiết kế mở', 'Ánh sáng tự nhiên', 'Công nghệ hiện đại']
              },
              { 
                src: './vp2.jpg', 
                title: 'Phòng họp & Hội thảo',
                description: 'Không gian họp được trang bị đầy đủ công nghệ cho các cuộc họp hiệu quả.',
                features: ['Hệ thống AV', 'Whiteboard thông minh', 'Video conference']
              },
              { 
                src: './vp3.jpg', 
                title: 'Khu vực sáng tạo',
                description: 'Không gian linh hoạt dành cho brainstorming và các hoạt động sáng tạo.',
                features: ['Thiết kế linh hoạt', 'Màu sắc tươi sáng', 'Không gian mở']
              },
              { 
                src: './vp4.jpg', 
                title: 'Khu vực thư giãn',
                description: 'Không gian nghỉ ngơi thoải mái giúp nhân viên tái tạo năng lượng.',
                features: ['Ghế sofa thoải mái', 'Khu vực coffee', 'Không gian yên tĩnh']
              }
            ].map((office, index) => (
              <motion.div
                key={index}
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={office.src}
                    alt={office.title}
                    className="w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute top-6 right-6">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                    {office.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                    {office.description}
                  </p>
                  
                  <div className="space-y-3">
                    {office.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mr-3 flex-shrink-0" />
                        <span className="text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 font-medium">Khám phá không gian</span>
                      <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Stats Section */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-20 bg-white rounded-3xl p-8 md:p-12 shadow-xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-4xl font-bold gradient-text">1,200m²</div>
                <div className="text-gray-600 font-medium">Tổng diện tích văn phòng</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold gradient-text">50+</div>
                <div className="text-gray-600 font-medium">Vị trí làm việc</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold gradient-text">24/7</div>
                <div className="text-gray-600 font-medium">Hỗ trợ kỹ thuật</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                Câu chuyện của Joy
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Joy được thành lập với sứ mệnh đưa thương mại điện tử Việt Nam vươn ra thế giới. 
                Chúng tôi bắt đầu từ những ước mơ nhỏ bé nhưng với quyết tâm lớn lao - tạo ra 
                cầu nối giúp các doanh nghiệp Việt Nam tiếp cận thị trường quốc tế.
              </p>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Qua những năm phát triển, Joy đã trở thành đối tác tin cậy của hàng trăm doanh nghiệp, 
                giúp họ thành công trên các nền tảng thương mại điện tử hàng đầu thế giới như Amazon, 
                TikTok Shop, và nhiều kênh khác.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Hôm nay, Joy không chỉ là một công ty dịch vụ mà còn là người bạn đồng hành, 
                là nguồn cảm hứng cho những ai muốn chinh phục thị trường toàn cầu với sản phẩm 
                Made-in-Vietnam.
              </p>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="/workshop.jpg"
                alt="Team collaboration"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-primary-500 to-secondary-500 p-6 rounded-lg shadow-xl text-white">
                <h4 className="font-bold text-2xl mb-2">2019</h4>
                <p className="text-sm">Năm thành lập</p>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl">
                <h4 className="font-bold text-2xl mb-2 text-gray-900">500+</h4>
                <p className="text-gray-600 text-sm">Khách hàng tin tưởng</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage