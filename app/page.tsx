'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play, Users, ShoppingBag, TrendingUp, Award } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [counters, setCounters] = useState({
    shops: 0,
    items: 0,
    orders: 0,
    years: 0
  })

  const heroSlides = [
    {
      title: "JOY - Journey of You",
      subtitle: "Chuyên gia thương mại điện tử hàng đầu Việt Nam",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
    },
    {
      title: "Amazon Global Selling",
      subtitle: "Đưa sản phẩm Việt Nam ra thế giới",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
    },
    {
      title: "TikTok Shop Success",
      subtitle: "Chinh phục thị trường trẻ năng động",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
    }
  ]

  const partners = [
    { name: "JOY Vietnam", logo: "https://example.com/joy-logo.png" },
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "TikTok Shop", logo: "https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tiktok/webapp/main/webapp-desktop/8152caf0c8e8bc67ae0d.png" }
  ]

  const stats = [
    { icon: ShoppingBag, label: "Shop Online", value: 15, suffix: "+" },
    { icon: TrendingUp, label: "Items", value: 50000, suffix: "+" },
    { icon: Users, label: "Orders", value: 100000, suffix: "+" },
    { icon: Award, label: "Years Experience", value: 5, suffix: "" }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const animateCounters = () => {
      stats.forEach((stat, index) => {
        let start = 0
        const end = stat.value
        const duration = 2000
        const increment = end / (duration / 16)
        
        const timer = setInterval(() => {
          start += increment
          if (start >= end) {
            start = end
            clearInterval(timer)
          }
          
          setCounters(prev => ({
            ...prev,
            [index === 0 ? 'shops' : index === 1 ? 'items' : index === 2 ? 'orders' : 'years']: Math.floor(start)
          }))
        }, 16)
      })
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounters()
        }
      },
      { threshold: 0.5 }
    )

    const statsSection = document.getElementById('stats-section')
    if (statsSection) {
      observer.observe(statsSection)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Slider */}
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <motion.div
              key={index}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
              initial={{ opacity: 0 }}
              animate={{ opacity: currentSlide === index ? 1 : 0 }}
              transition={{ duration: 1 }}
            />
          ))}
          <div className="absolute inset-0 bg-overlay" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-shadow"
          >
            {heroSlides[currentSlide].title}
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-shadow"
          >
            {heroSlides[currentSlide].subtitle}
          </motion.p>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/about" className="btn-primary inline-flex items-center">
              Khám phá ngay
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link href="/contact" className="btn-outline inline-flex items-center">
              Liên hệ tư vấn
              <Play className="ml-2" size={20} />
            </Link>
          </motion.div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <Image
                  src="/LOGO.png"
                  alt="Company Logo"
                  width={64}
                  height={64}
                  className="w-16 h-16 object-contain mr-4"
                />
                <h2 className="text-3xl md:text-4xl font-bold gradient-text">
                  Chuyên gia thương mại điện tử hàng đầu Việt Nam
                </h2>
              </div>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Joy là công ty tiên phong trong lĩnh vực thương mại điện tử tại Việt Nam, 
                chuyên sâu về Amazon Global Selling . Chúng tôi cam kết đồng hành 
                cùng doanh nghiệp Việt Nam chinh phục thị trường quốc tế, đưa sản phẩm 
                Made-in-Vietnam đến với hàng triệu khách hàng trên toàn thế giới.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Với đội ngũ chuyên gia giàu kinh nghiệm và công nghệ hiện đại, Joy không chỉ 
                là đối tác kinh doanh mà còn là người bạn đồng hành tin cậy trong hành trình 
                phát triển bền vững của doanh nghiệp.
              </p>
              <Link href="/about" className="btn-primary inline-flex items-center">
                Tìm hiểu thêm
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://vinaconex25.com.vn/wp-content/uploads/2024/08/z5711418477074_e568d1746cfc0304f5b40726e8c9ad38-scaled.jpg"
                alt="Company Building"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl">
                <div className="flex items-center space-x-4">
                  <Image
                    src="/LOGO.png"
                    alt="Company Logo"
                    width={48}
                    height={48}
                    className="w-12 h-12 object-contain"
                  />
                  <div>
                    <p className="font-bold text-2xl text-gray-900">98%</p>
                    <p className="text-gray-600 text-sm">Success Rate</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Đối tác tin cậy
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Chúng tôi tự hào hợp tác với những nền tảng thương mại điện tử hàng đầu thế giới
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats-section" className="section-padding bg-gradient-to-r from-primary-500 to-secondary-500">
        <div className="container-custom">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Thành tựu của chúng tôi
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Những con số ấn tượng khẳng định uy tín và chất lượng dịch vụ của Joy
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              const counterValue = index === 0 ? counters.shops : 
                                 index === 1 ? counters.items : 
                                 index === 2 ? counters.orders : counters.years
              return (
                <motion.div
                  key={stat.label}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-md p-8 rounded-lg text-center hover:bg-white/20 transition-all duration-300"
                >
                  <Icon className="mx-auto mb-4 text-white" size={48} />
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {counterValue.toLocaleString()}{stat.suffix}
                  </h3>
                  <p className="text-white/90">{stat.label}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
    </div>
  )
}

export default HomePage