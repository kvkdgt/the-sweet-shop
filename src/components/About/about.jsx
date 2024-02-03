import React, { useState } from "react";

const About = () => {
  return (
    <div>
      <div class="container-about">
        <div class="about-us">
          <div
            className="img"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <img
              style={{ width: "95%" }}
              src="https://content3.jdmagicbox.com/comp/mehsana/t5/9999p2762.2762.180411193927.b7t5/catalogue/the-sweet-shop-malgodown-mehsana-sweet-shops-0n6v2olh53.jpg"
              alt="Team Photo"
            />
          </div>{" "}
          <div class="about-us-content" style={{ margin: "30px" }}>
            <p>
              Welcome to The Sweet Shop - a delightful haven for those with a
              sweet tooth and a penchant for savory treats! Nestled in the heart
              of Mehsana 2, at 38/39, Apna Bazaar, B.K. Cinema Road, our shop is
              a celebration of exquisite flavors, traditional recipes, and the
              joy that comes with indulging in the finest sweets and namkeen.
            </p>

            <p>
              At The Sweet Shop, we take pride in offering a diverse array of
              delectable treats that cater to every palate. From rich and creamy
              traditional sweets to spicy and crunchy namkeen, our menu is a
              reflection of the culinary diversity that defines the Indian
              subcontinent. Each item is crafted with precision, using authentic
              recipes passed down through generations, ensuring an authentic and
              unforgettable taste experience.
            </p>

            <p>
              Our commitment to quality is unwavering, as we source only the
              finest ingredients to create our sweets and namkeen. Whether
              you're a fan of the timeless classics like Gulab Jamun and Jalebi
              or crave the bold flavors of our special namkeen blends, The Sweet
              Shop is your go-to destination for a symphony of tastes that will
              leave you craving for more.
            </p>

            <p>
              Step into our welcoming store, where the aroma of freshly prepared
              sweets and the sight of vibrant colors will transport you to a
              world of pure bliss. Our friendly and knowledgeable staff are
              always ready to assist you in finding the perfect treat for any
              occasion, be it a festive celebration, a special family gathering,
              or a simple craving for something sweet.
            </p>

            <p>
              At The Sweet Shop, we not only sell sweets; we curate experiences
              and create memories. Join us on a journey of flavor, tradition,
              and sheer indulgence. Come, explore the world of sweetness at
              38/39, Apna Bazaar, B.K. Cinema Road, Mehsana 2 - because life is
              sweeter with The Sweet Shop!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
