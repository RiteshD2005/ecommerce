import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Clock, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CountdownTimer from '../components/CountdownTimer';

function Home() {
  const navigate = useNavigate();
  // Set sale end date to 7 days from now
  const saleEndDate = new Date();
  saleEndDate.setDate(saleEndDate.getDate() + 7);

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="h-screen relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-6xl font-bold mb-4"
            >
              LIENZO
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl mb-8"
            >
              Premium Streetwear Collection
            </motion.p>
            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              onClick={() => navigate('/shop')}
              className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-200 transition-colors"
            >
              Shop Now
            </motion.button>
          </div>
        </div>
      </div>

      {/* Limited Time Offer Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="relative py-16 bg-gradient-to-r from-gray-900 to-black"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
                  <h2 className="text-3xl font-bold mb-2">Limited Time Offer</h2>
                  <p className="text-gray-400 mb-4">Get 30% off on all premium hoodies</p>
                  <div className="mb-6">
                    <CountdownTimer targetDate={saleEndDate} />
                  </div>
                  <button
                    onClick={() => navigate('/shop')}
                    className="group flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    Shop the Deal
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                <div className="relative w-full md:w-1/2 aspect-square md:aspect-[4/3]">
                  <img
                    src="https://images.unsplash.com/photo-1556821840-5a7f7bf75d41?auto=format&fit=crop&q=80"
                    alt="Limited offer hoodie"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full">
                    -30%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Featured Categories */}
      <div className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Featured Categories
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Hoodies', 'Shirts', 'Accessories'].map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative aspect-[3/4] overflow-hidden rounded-lg cursor-pointer"
                onClick={() => navigate('/shop')}
              >
                <img
                  src={`https://images.unsplash.com/photo-${index + 1}?auto=format&fit=crop&q=80`}
                  alt={category}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-2xl font-bold mb-2">{category}</h3>
                  <p className="text-gray-300">Shop Now →</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;