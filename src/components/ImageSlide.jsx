import { motion } from "framer-motion";

function ImageSlide() {
  const styleSheet = `
    .hide-scrollbar::-webkit-scrollbar {
      display: none;
    }
    .hide-scrollbar {
      -ms-overflow-style: none; 
      scrollbar-width: none; 
      overflow-x: auto;
    }
  `;

  // Array of image links
  const productDetails = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQge7SXurYBXZ6j42LA9_tlybw9UXiacWlaIg&usqp=CAU",
      name: "",
      description: "",
      price: "",
    },
    {
      image:
        "https://abisarrangements.co.uk/cdn/shop/products/C15521ZF.jpg?v=1659309761",
      name: "",
      description: "",
      price: "",
    },
    {
      image:
        "https://thecuriousspirit.net/cdn/shop/products/LautusSparklingroseandGorgeousSparkling_600x600_crop_center.png?v=1666083394",
      name: "",
      description: "",
      price: "",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmLyJ1Z-hwNRlzDlYHS7TTLdQwxR3kcOlGZ4itSu2vs9CgBLA8v1zT7gXLIa-oBz873Bg&usqp=CAU",
      name: "",
      description: "",
      price: "",
    },
    {
      image:
        "https://www.drinksupermarket.com/media/catalog/product/cache/8b581ff15af3d0f5c66f4d11bd96034e/m/a/mateus_rose_wine_75cl.jpg",
      name: "",
      description: "",
      price: "",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHOraGegFo17vr82IHxzfNO6cofGAgBe8OWA&usqp=CAU",
      name: "",
      description: "",
      price: "",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHuvM3NfbZpz5rszHjWOsa7Sh5giSfJtoIjQ&usqp=CAU",
      name: "",
      description: "",
      price: "",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnNSRte_FxnUrKMYUz2yg_g741yPJ8cBCj6Q&usqp=CAU",
      name: "",
      description: "",
      price: "",
    },
    {
      image:
        "https://images.ctfassets.net/zpx0hfp3jryq/4Us8nGMda8vJSWpTuvxxsI/069f297aaafa479b1c5cf8004df72aa8/sweet-rose-wine-1999-andre-beaufort-a-ambonnay-grand-cru-doux-rose.jpg?fm=jpg&fl=progressive",
      name: "",
      description: "",
      price: "",
    },
    {
      image:
        "https://popupwine.com.sg/cdn/shop/files/salin-domaine-de-tamary-cotes-de-provence-rose-2021-provence-france-6-pack-value-pop-up-wine-2.jpg?v=1698056830",
      name: "",
      description: "",
      price: "",
    },
  ];

  return (
    <>
      <style>{styleSheet}</style>
      <div className="relative w-full flex gap-4 py-6 px-28 hide-scrollbar">
        {productDetails.map(({ image }, index) => (
          <motion.img
            whileHover={{ scale: 1.05 }}
            key={index} // Key should be unique for each child in a list
            className="h-48 w-48 aspect-video cursor-pointer rounded-lg object-cover object-center dark:bg-gray-500"
            src={image}
            alt={`Image ${index + 1}`}
          />
        ))}
      </div>
    </>
  );
}

export default ImageSlide;
