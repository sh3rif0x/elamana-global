"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { GALLERY } from "../../data/gallery";
import styles from "./HomeGallery.module.css";

export default function HomeGallery() {
  return (
    <section className={styles.wrap}>
      <div className={styles.head} dir="rtl">
        <h2>نظافة في كل تفصيلة</h2>
        <i className={styles.line} />
      </div>

      <div className={styles.slider}>
        <Swiper
          watchSlidesProgress
          dir="rtl"
          modules={[Autoplay, Navigation, Pagination]}
          loop
          loopAdditionalSlides={6}
          grabCursor
          navigation
          pagination={{ clickable: true }}
          speed={800}
          autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          spaceBetween={14}
          slidesPerView={2}
          breakpoints={{
            600: { slidesPerView: 3 },
            900: { slidesPerView: 4 },
            1200: { slidesPerView: 5 },
            1500: { slidesPerView: 6 },
          }}
        >
          {GALLERY.map((img, i) => (
            <SwiperSlide key={img}>
              <div className={styles.item}>
                <Image
                  src={`/images/gallery/${img}`}
                  alt={`صورة ${i + 1}`}
                  fill
                  unoptimized
                  priority={i < 6}
                  sizes="(max-width:600px) 50vw, (max-width:900px) 33vw, 20vw"
                  className={styles.img}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
