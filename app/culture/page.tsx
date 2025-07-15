'use client'

import { motion } from 'framer-motion'
import { Heart, Users, BookOpen, Dumbbell, GraduationCap, HeartHandshake, Coffee, Rocket, Zap, Award, Globe, Smile, Gift, DollarSign, Clock, Shield, Lightbulb, CheckCircle } from 'lucide-react'

const CulturePage = () => {
  const activities = [
    {
      category: "Thể chất",
      icon: Dumbbell,
      description: "Chăm sóc sức khỏe thể chất của đội ngũ",
      image: "/thể chất.jpg",
      activities: [
        "Team building outdoor hàng quý",
        "Giải thể thao nội bộ",
        "Yoga và meditation buổi sáng",
        "Hiking và camping cuối tuần",
        "Gym membership hỗ trợ"
      ],
      color: "from-green-400 to-emerald-600"
    },
    {
      category: "Học tập",
      icon: GraduationCap,
      description: "Phát triển kỹ năng và kiến thức chuyên môn",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      activities: [
        "Workshop hàng tuần",
        "Khóa học online miễn phí",
        "Hội thảo chuyên ngành",
        "Mentoring 1-on-1",
        "Chứng chỉ quốc tế hỗ trợ"
      ],
      color: "from-blue-400 to-indigo-600"
    },
    {
      category: "Thiện nguyện",
      icon: HeartHandshake,
      description: "Đóng góp cho cộng đồng và xã hội",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      activities: [
        "Từ thiện hàng tháng",
        "Volunteer tại trại trẻ mồ côi",
        "Quyên góp sách vở",
        "Hỗ trợ startup trẻ",
        "Bảo vệ môi trường"
      ],
      color: "from-pink-400 to-rose-600"
    },
    {
      category: "Giải trí",
      icon: Coffee,
      description: "Tạo không gian thư giãn và kết nối",
      image: "/giao lưu.jpg",
      activities: [
        "Happy Hour thứ 6 hàng tuần",
        "Game night hàng tháng",
        "Tiệc sinh nhật nhân viên",
        "Câu lạc bộ sở thích",
        "Không gian làm việc sáng tạo"
      ],
      color: "from-amber-400 to-orange-600"
    },
    {
      category: "Sáng tạo",
      icon: Rocket,
      description: "Khuyến khích đổi mới và sáng tạo",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      activities: [
        "Hackathon nội bộ",
        "Innovation day",
        "Chia sẻ ý tưởng mới",
        "Phát triển sản phẩm cá nhân",
        "Thưởng cho sáng kiến xuất sắc"
      ],
      color: "from-purple-400 to-violet-600"
    },
    {
      category: "Toàn cầu",
      icon: Globe,
      description: "Kết nối và học hỏi từ toàn cầu",
      image: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      activities: [
        "Cơ hội làm việc quốc tế",
        "Trao đổi văn hóa",
        "Học ngoại ngữ",
        "Tham dự hội nghị quốc tế",
        "Hợp tác với đối tác nước ngoài"
      ],
      color: "from-cyan-400 to-teal-600"
    }
  ]

  const coreValues = [
    {
      title: "TIN",
      icon: Shield,
      content: "Tin tưởng là nền tảng của mọi mối quan hệ. Chúng tôi xây dựng niềm tin thông qua sự minh bạch, chân thành và cam kết thực hiện những gì đã hứa. Tin tưởng không chỉ là từ ngữ mà là hành động cụ thể trong từng dự án, từng giao dịch.",
      color: "from-yellow-400 to-yellow-600"
    },
    {
      title: "TRỌNG",
      icon: Heart,
      content: "Trọng bản thân, trọng đồng nghiệp, trọng khách hàng. Chúng tôi tin rằng sự tôn trọng lẫn nhau tạo nên môi trường làm việc tích cực, nơi mọi người đều có thể phát huy tối đa năng lực và đóng góp vào thành công chung.",
      color: "from-red-400 to-pink-600"
    },
    {
      title: "TRÍ",
      icon: Lightbulb,
      content: "Trí tuệ là sức mạnh dẫn dắt chúng tôi vượt qua mọi thách thức. Chúng tôi không ngừng học hỏi, sáng tạo và ứng dụng công nghệ tiên tiến để mang lại giải pháp tối ưu cho khách hàng và đối tác.",
      color: "from-blue-400 to-indigo-600"
    },
    {
      title: "TÍN",
      icon: CheckCircle,
      content: "Tín nhiệm là kết quả của sự nhất quán giữa lời nói và hành động. Chúng tôi cam kết thực hiện đúng những gì đã hứa, đảm bảo chất lượng dịch vụ và luôn đặt lợi ích của khách hàng lên hàng đầu.",
      color: "from-green-400 to-emerald-600"
    }
  ]

  const benefits = [
    "Lương thưởng cạnh tranh + Bonus theo hiệu suất",
    "Bảo hiểm sức khỏe cao cấp cho cả gia đình",
    "Du lịch công ty hàng năm",
    "Flexible working time",
    "Môi trường làm việc hiện đại",
    "Cơ hội thăng tiến rõ ràng",
    "Training và phát triển kỹ năng",
    "Team building định kỳ"
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/giao lưu.jpg"
            alt="Hoạt động âm nhạc văn phòng"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/90"></div>
        </div>
        
        {/* Content Container */}
        <div className="relative z-10 h-full flex flex-col justify-end">
          {/* Bottom Section - Titles */}
          <div className="pb-32 pt-20">
            <motion.div 
              className="text-center text-white px-4 max-w-5xl mx-auto"
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.h1 
                 className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 tracking-tight"
                 style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                 initial={{ scale: 0.8, opacity: 0 }}
                 animate={{ scale: 1, opacity: 1 }}
                 transition={{ duration: 1.2, delay: 0.2 }}
               >
                 <span className="text-white drop-shadow-2xl">Văn hóa </span>
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-400 drop-shadow-lg">
                   Joy
                 </span>
               </motion.h1>
               
               <motion.h2 
                 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-amber-200 mb-6 tracking-wide"
                 style={{ fontFamily: 'Playfair Display, serif' }}
                 initial={{ y: 30, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 transition={{ duration: 1, delay: 0.6 }}
               >
                 Nơi tài năng toả sáng
               </motion.h2>
               
               <motion.div
                   className="flex flex-col sm:flex-row gap-3 justify-center items-center"
                   initial={{ y: 30, opacity: 0 }}
                   animate={{ y: 0, opacity: 1 }}
                   transition={{ duration: 1, delay: 1 }}
                 >
                   <button className="bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 hover:from-amber-500 hover:via-yellow-600 hover:to-orange-600 text-white font-medium px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-md text-sm">
                     Khám phá văn hóa
                   </button>
                   <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-medium px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 text-sm">
                     Tham gia với chúng tôi
                   </button>
                 </motion.div>
            </motion.div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="pb-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2 }}
              className="flex justify-center"
            >
              <a href="#values" className="text-white/60 hover:text-white/90 transition-colors duration-300 animate-bounce">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section id="values" className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 bg-primary-50 text-primary-600 rounded-full text-sm font-medium mb-4">Nền tảng của chúng tôi</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">
              Giá trị cốt lõi 4T
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Bốn giá trị cốt lõi định hướng mọi hoạt động của Joy, tạo nên văn hóa doanh nghiệp 
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

      {/* Activities Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">
              Hoạt động văn hóa
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Chúng tôi tổ chức nhiều hoạt động đa dạng để phát triển toàn diện cho đội ngũ
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => {
              const Icon = activity.icon
              return (
                <motion.div
                  key={activity.category}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={activity.image}
                      alt={activity.category}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:opacity-80 transition-all duration-300" />
                    <div className="absolute top-4 right-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${activity.color} rounded-full flex items-center justify-center shadow-lg transform rotate-0 group-hover:rotate-12 transition-all duration-300`}>
                        <Icon className="text-white" size={24} />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white mb-2 transform translate-y-0 group-hover:-translate-y-1 transition-transform duration-300">
                        {activity.category}
                      </h3>
                      <p className="text-white/90 text-sm transform translate-y-0 group-hover:-translate-y-1 transition-transform duration-300 delay-75">
                        {activity.description}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <ul className="space-y-3">
                      {activity.activities.map((item, itemIndex) => (
                        <motion.li 
                          key={itemIndex} 
                          className="flex items-start group/item hover:bg-gray-50 p-2 rounded-lg transition-colors duration-300"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.3 + itemIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className={`w-3 h-3 bg-gradient-to-r ${activity.color} rounded-full mt-1.5 mr-3 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300`}></div>
                          <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors duration-300">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">
              Quyền lợi thành viên
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Chúng tôi luôn đảm bảo các thành viên được hưởng những quyền lợi tốt nhất
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              // Rotate through different icons for benefits
              const icons = [Award, Heart, Coffee, Gift, DollarSign, Clock, Smile, Zap];
              const BenefitIcon = icons[index % icons.length];
              
              // Rotate through different gradient colors
              const gradients = [
                "from-primary-500 to-secondary-500",
                "from-purple-500 to-pink-500",
                "from-blue-500 to-cyan-500",
                "from-amber-500 to-orange-500",
                "from-emerald-500 to-green-500",
                "from-rose-500 to-red-500",
                "from-indigo-500 to-blue-500",
                "from-teal-500 to-green-500"
              ];
              const gradient = gradients[index % gradients.length];
              
              return (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group"
                >
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${gradient} rounded-lg flex items-center justify-center mr-4 shadow-md transform transition-transform duration-300 group-hover:rotate-6`}>
                      <BenefitIcon className="text-white" size={22} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">{benefit}</h3>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Photos Section */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 bg-secondary-50 text-secondary-600 rounded-full text-sm font-medium mb-4">Những khoảnh khắc đẹp</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">
              Khoảnh khắc đáng nhớ
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Những khoảnh khắc đẹp trong hành trình phát triển của chúng tôi
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl aspect-square shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <img
                src="/giao lưu.jpg"
                alt="Hoạt động âm nhạc văn phòng"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-all duration-300" />
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium mb-3">
                    Hoạt động văn phòng
                  </span>
                  <h3 className="text-xl font-bold mb-2">Buổi biểu diễn âm nhạc</h3>
                  <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    Những giây phút thư giãn và gắn kết qua âm nhạc
                  </p>
                </div>
              </div>
              
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform rotate-0 group-hover:rotate-90">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </motion.div>
            
            {/* Thêm các khoảnh khắc khác với hình ảnh có sẵn */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl aspect-square shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <img
                src="/thể chất.jpg"
                alt="Team Building"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-all duration-300" />
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium mb-3">
                    Team Building
                  </span>
                  <h3 className="text-xl font-bold mb-2">Hoạt động ngoài trời</h3>
                  <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    Gắn kết đội ngũ qua các hoạt động ngoài trời
                  </p>
                </div>
              </div>
              
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform rotate-0 group-hover:rotate-90">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl aspect-square shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <img
                src="/workshop.jpg"
                alt="Workshop chuyên môn"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-all duration-300" />
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium mb-3">
                    Đào tạo
                  </span>
                  <h3 className="text-xl font-bold mb-2">Workshop chuyên môn</h3>
                  <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    Nâng cao kỹ năng qua các buổi workshop chuyên sâu
                  </p>
                </div>
              </div>
              
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform rotate-0 group-hover:rotate-90">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a href="#" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors duration-300">
              <span>Xem thêm hình ảnh</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>



      {/* Phần tuyển dụng đã được xóa theo yêu cầu */}
    </div>
  )
}

export default CulturePage