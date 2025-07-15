'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { MapPin, Clock, DollarSign, Users, TrendingUp, Heart, Award, Coffee, Briefcase, Send, Upload, X } from 'lucide-react'
import Image from 'next/image'

interface Job {
  id: number
  title: string
  department: string
  location: string
  type: string
  salary: string
  experience: string
  description: string
  requirements: string[]
  benefits: string[]
}

const CareersPage = () => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null)
  const [filter, setFilter] = useState('all')
  const [showApplicationForm, setShowApplicationForm] = useState(false)
  const [applicationData, setApplicationData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    coverLetter: '',
    resume: null as File | null
  })

  const jobs: Job[] = [
    {
      id: 1,
      title: "Amazon Account Manager",
      department: "E-commerce",
      location: "TP. Hồ Chí Minh",
      type: "Full-time",
      salary: "15-25 triệu VNĐ",
      experience: "2-3 năm",
      description: "Quản lý và phát triển các tài khoản Amazon, tối ưu hóa listing sản phẩm, và tăng trưởng doanh số bán hàng.",
      requirements: [
        "Kinh nghiệm 2+ năm làm việc với Amazon Seller Central",
        "Hiểu biết về Amazon SEO và PPC",
        "Kỹ năng phân tích dữ liệu tốt",
        "Tiếng Anh giao tiếp tốt",
        "Tư duy logic và giải quyết vấn đề"
      ],
      benefits: [
        "Lương cạnh tranh + thưởng KPI",
        "Bảo hiểm sức khỏe cao cấp",
        "Đào tạo chuyên sâu về Amazon",
        "Cơ hội thăng tiến rõ ràng"
      ]
    },
    {
      id: 2,
      title: "TikTok Shop Specialist",
      department: "Social Commerce",
      location: "TP. Hồ Chí Minh",
      type: "Full-time",
      salary: "12-20 triệu VNĐ",
      experience: "1-2 năm",
      description: "Phát triển và quản lý các shop trên TikTok, tạo content marketing và tối ưu hóa chiến lược bán hàng.",
      requirements: [
        "Kinh nghiệm với TikTok Shop hoặc social commerce",
        "Kỹ năng tạo content và video marketing",
        "Hiểu biết về xu hướng social media",
        "Khả năng làm việc nhóm tốt",
        "Sáng tạo và năng động"
      ],
      benefits: [
        "Môi trường trẻ trung, năng động",
        "Học hỏi xu hướng mới nhất",
        "Thưởng hiệu suất hấp dẫn",
        "Team building thường xuyên"
      ]
    },
    {
      id: 3,
      title: "Digital Marketing Executive",
      department: "Marketing",
      location: "TP. Hồ Chí Minh",
      type: "Full-time",
      salary: "10-18 triệu VNĐ",
      experience: "1-3 năm",
      description: "Thực hiện các chiến dịch marketing digital, quản lý quảng cáo online và phân tích hiệu quả marketing.",
      requirements: [
        "Kinh nghiệm Facebook Ads, Google Ads",
        "Kỹ năng phân tích dữ liệu marketing",
        "Hiểu biết về SEO/SEM",
        "Tư duy sáng tạo trong content",
        "Tiếng Anh tốt"
      ],
      benefits: [
        "Được đào tạo các tool marketing mới nhất",
        "Môi trường sáng tạo",
        "Cơ hội thăng tiến nhanh",
        "Bonus theo dự án"
      ]
    },
    {
      id: 4,
      title: "Business Development Manager",
      department: "Business",
      location: "TP. Hồ Chí Minh",
      type: "Full-time",
      salary: "20-35 triệu VNĐ",
      experience: "3-5 năm",
      description: "Phát triển kinh doanh, tìm kiếm đối tác mới và mở rộng thị trường cho các dịch vụ của công ty.",
      requirements: [
        "Kinh nghiệm 3+ năm trong BD hoặc Sales B2B",
        "Mạng lưới quan hệ rộng",
        "Kỹ năng đàm phán và thuyết phục",
        "Tiếng Anh thành thạo",
        "Tư duy chiến lược"
      ],
      benefits: [
        "Lương cao + hoa hồng hấp dẫn",
        "Thưởng theo target",
        "Du lịch công ty",
        "Cơ hội networking rộng"
      ]
    },
    {
      id: 5,
      title: "Data Analyst",
      department: "Technology",
      location: "TP. Hồ Chí Minh",
      type: "Full-time",
      salary: "15-25 triệu VNĐ",
      experience: "2-4 năm",
      description: "Phân tích dữ liệu kinh doanh, tạo báo cáo insights và hỗ trợ ra quyết định chiến lược.",
      requirements: [
        "Thành thạo SQL, Python/R",
        "Kinh nghiệm với BI tools (Tableau, Power BI)",
        "Kỹ năng thống kê và machine learning cơ bản",
        "Tư duy logic và phân tích",
        "Tiếng Anh đọc hiểu tốt"
      ],
      benefits: [
        "Môi trường tech hiện đại",
        "Đào tạo công nghệ mới",
        "Flexible working time",
        "Cơ hội học hỏi AI/ML"
      ]
    },
    {
      id: 6,
      title: "Customer Success Manager",
      department: "Customer Service",
      location: "TP. Hồ Chí Minh",
      type: "Full-time",
      salary: "12-20 triệu VNĐ",
      experience: "1-3 năm",
      description: "Đảm bảo sự hài lòng của khách hàng, hỗ trợ giải quyết vấn đề và phát triển mối quan hệ dài hạn.",
      requirements: [
        "Kinh nghiệm customer service hoặc account management",
        "Kỹ năng giao tiếp xuất sắc",
        "Kiên nhẫn và empathy cao",
        "Tiếng Anh giao tiếp tốt",
        "Tư duy giải quyết vấn đề"
      ],
      benefits: [
        "Môi trường làm việc tích cực",
        "Đào tạo soft skills",
        "Cơ hội phát triển leadership",
        "Work-life balance tốt"
      ]
    }
  ]

  const benefits = [
    {
      icon: DollarSign,
      title: "Lương thưởng hấp dẫn",
      description: "Mức lương cạnh tranh + thưởng KPI + thưởng dự án",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Heart,
      title: "Bảo hiểm toàn diện",
      description: "BHXH + BHYT + Bảo hiểm sức khỏe cao cấp cho cả gia đình",
      color: "from-red-500 to-red-600"
    },
    {
      icon: TrendingUp,
      title: "Phát triển sự nghiệp",
      description: "Lộ trình thăng tiến rõ ràng + đào tạo chuyên sâu",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Users,
      title: "Môi trường năng động",
      description: "Team trẻ, sáng tạo + văn hóa học hỏi không ngừng",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Coffee,
      title: "Work-life balance",
      description: "Flexible time + remote work + team building thường xuyên",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Award,
      title: "Công nhận & vinh danh",
      description: "Chương trình nhân viên xuất sắc + thưởng thành tích",
      color: "from-yellow-500 to-yellow-600"
    }
  ]

  const departments = ['all', 'E-commerce', 'Social Commerce', 'Marketing', 'Business', 'Technology', 'Customer Service']

  const filteredJobs = filter === 'all' ? jobs : jobs.filter(job => job.department === filter)

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Application submitted:', applicationData)
    setShowApplicationForm(false)
    // Reset form
    setApplicationData({
      name: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      coverLetter: '',
      resume: null
    })
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setApplicationData(prev => ({ ...prev, resume: file }))
    }
  }

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
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <Image
                src="/LOGO.png"
                alt="Joy Company Logo"
                width={120}
                height={120}
                className="w-30 h-30 object-contain mx-auto mb-4"
              />
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Tuyển dụng tại Joy
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Gia nhập đội ngũ Joy - nơi tài năng được tôn vinh và sự nghiệp được phát triển
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setShowApplicationForm(true)}
                className="btn-secondary"
              >
                Ứng tuyển ngay
              </button>
              <a href="#jobs" className="btn-outline border-white text-white hover:bg-white hover:text-primary-600">
                Xem vị trí tuyển dụng
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Benefits */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              Tại sao chọn Joy?
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Chúng tôi cam kết tạo ra môi trường làm việc tốt nhất cho sự phát triển của bạn
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-all duration-300 card-hover"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section id="jobs" className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              Vị trí đang tuyển dụng
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-8">
              Khám phá các cơ hội nghề nghiệp hấp dẫn tại Joy
            </p>

            {/* Department Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setFilter(dept)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    filter === dept
                      ? 'bg-primary-500 text-white'
                      : 'bg-white text-gray-600 hover:bg-primary-100'
                  }`}
                >
                  {dept === 'all' ? 'Tất cả' : dept}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 card-hover"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {job.title}
                    </h3>
                    <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                      {job.department}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedJob(job)}
                    className="text-primary-500 hover:text-primary-600 font-medium"
                  >
                    Chi tiết →
                  </button>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <MapPin size={16} className="mr-2" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock size={16} className="mr-2" />
                    <span>{job.type} • {job.experience}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <DollarSign size={16} className="mr-2" />
                    <span>{job.salary}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-2">
                  {job.description}
                </p>

                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setApplicationData(prev => ({ ...prev, position: job.title }))
                      setShowApplicationForm(true)
                    }}
                    className="btn-primary flex-1"
                  >
                    Ứng tuyển
                  </button>
                  <button
                    onClick={() => setSelectedJob(job)}
                    className="btn-outline flex-1"
                  >
                    Xem chi tiết
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Detail Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {selectedJob.title}
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
                      {selectedJob.department}
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                      {selectedJob.type}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="flex items-center">
                  <MapPin className="mr-2 text-gray-400" size={20} />
                  <span>{selectedJob.location}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-2 text-gray-400" size={20} />
                  <span>{selectedJob.experience}</span>
                </div>
                <div className="flex items-center">
                  <DollarSign className="mr-2 text-gray-400" size={20} />
                  <span>{selectedJob.salary}</span>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Mô tả công việc</h3>
                  <p className="text-gray-600 leading-relaxed">{selectedJob.description}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Yêu cầu</h3>
                  <ul className="space-y-2">
                    {selectedJob.requirements.map((req, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-600">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Quyền lợi</h3>
                  <ul className="space-y-2">
                    {selectedJob.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <button
                  onClick={() => {
                    setApplicationData(prev => ({ ...prev, position: selectedJob.title }))
                    setShowApplicationForm(true)
                    setSelectedJob(null)
                  }}
                  className="btn-primary flex-1"
                >
                  Ứng tuyển ngay
                </button>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="btn-outline flex-1"
                >
                  Đóng
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Application Form Modal */}
      {showApplicationForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold gradient-text">
                  Đơn ứng tuyển
                </h2>
                <button
                  onClick={() => setShowApplicationForm(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X size={24} />
                </button>
              </div>

              <form onSubmit={handleApplicationSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Họ tên *
                    </label>
                    <input
                      type="text"
                      required
                      value={applicationData.name}
                      onChange={(e) => setApplicationData(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Nhập họ tên"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={applicationData.email}
                      onChange={(e) => setApplicationData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Nhập email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Số điện thoại *
                    </label>
                    <input
                      type="tel"
                      required
                      value={applicationData.phone}
                      onChange={(e) => setApplicationData(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Nhập số điện thoại"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Vị trí ứng tuyển *
                    </label>
                    <select
                      required
                      value={applicationData.position}
                      onChange={(e) => setApplicationData(prev => ({ ...prev, position: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Chọn vị trí</option>
                      {jobs.map(job => (
                        <option key={job.id} value={job.title}>{job.title}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Kinh nghiệm làm việc *
                  </label>
                  <select
                    required
                    value={applicationData.experience}
                    onChange={(e) => setApplicationData(prev => ({ ...prev, experience: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Chọn kinh nghiệm</option>
                    <option value="Chưa có kinh nghiệm">Chưa có kinh nghiệm</option>
                    <option value="Dưới 1 năm">Dưới 1 năm</option>
                    <option value="1-2 năm">1-2 năm</option>
                    <option value="2-3 năm">2-3 năm</option>
                    <option value="3-5 năm">3-5 năm</option>
                    <option value="Trên 5 năm">Trên 5 năm</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    CV/Resume *
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary-500 transition-colors duration-300">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileUpload}
                      className="hidden"
                      id="resume-upload"
                      required
                    />
                    <label htmlFor="resume-upload" className="cursor-pointer">
                      <Upload className="mx-auto mb-2 text-gray-400" size={32} />
                      <p className="text-gray-600">
                        {applicationData.resume ? applicationData.resume.name : 'Tải lên CV/Resume (PDF, DOC, DOCX)'}
                      </p>
                      <p className="text-sm text-gray-400 mt-1">Tối đa 5MB</p>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Thư xin việc
                  </label>
                  <textarea
                    rows={4}
                    value={applicationData.coverLetter}
                    onChange={(e) => setApplicationData(prev => ({ ...prev, coverLetter: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                    placeholder="Giới thiệu bản thân và lý do ứng tuyển..."
                  />
                </div>

                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="btn-primary flex-1 inline-flex items-center justify-center"
                  >
                    Gửi đơn ứng tuyển
                    <Send className="ml-2" size={20} />
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowApplicationForm(false)}
                    className="btn-outline flex-1"
                  >
                    Hủy
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}

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
              Không tìm thấy vị trí phù hợp?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Hãy gửi CV cho chúng tôi! Joy luôn tìm kiếm những tài năng xuất sắc để gia nhập đội ngũ.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setShowApplicationForm(true)}
                className="btn-secondary"
              >
                Gửi CV tự do
              </button>
              <a href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-primary-600">
                Liên hệ HR
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default CareersPage