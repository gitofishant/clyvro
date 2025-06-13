import React from 'react';

const PartnerBrands = () => {
  const brands = [
    { id: 1, image: "/images/img_0b6b2ayysliusfpqbi6q0sv8ke8png.png", alt: "Partner Brand 1" },
    { id: 2, image: "/images/img_omukgavslib2bfv4e2bk8u5qnnspng.png", alt: "Partner Brand 2" },
    { id: 3, image: "/images/img_d7oifnvekooh0cwx99hwhj44aaipng.png", alt: "Partner Brand 3" },
    { id: 4, image: "/images/img_w6dc6rxsj4lvrp4hprgj4uatal0png.png", alt: "Partner Brand 4" },
    { id: 5, image: "/images/img_ux5imnjvwngbbyh5icow39bkzepng.png", alt: "Partner Brand 5" },
    { id: 6, image: "/images/img_75orltecrakx8yxq4eqddpx9uxwpng.png", alt: "Partner Brand 6" },
    { id: 7, image: "/images/img_fvzk5llmaqftwoo4ybqu2fp6oopng.png", alt: "Partner Brand 7" }
  ];

  // Duplicate the list to make the loop seamless
  const scrollingBrands = [...brands, ...brands];

  return (
    <section className="bg-white py-12 overflow-hidden border-t border-b border-black">
      <div className="relative w-full">
        <div className="animate-scroll flex w-max gap-12">
          {scrollingBrands.map((brand, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-md flex items-center justify-center"
              style={{ width: '200px', height: '140px' }}
            >
              <img
                src={brand.image}
                alt={brand.alt}
                className="w-[160px] h-[100px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerBrands;
