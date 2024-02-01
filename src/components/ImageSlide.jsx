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

  return (
    <>
      <style>{styleSheet}</style>
      <div className="relative w-full flex gap-4 py-6 px-3 hide-scrollbar">
        <img
          className="h-48 w-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQge7SXurYBXZ6j42LA9_tlybw9UXiacWlaIg&usqp=CAU"
          alt="Image 1"
        />
        <img
          className="h-48 w-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500"
          src="https://abisarrangements.co.uk/cdn/shop/products/C15521ZF.jpg?v=1659309761"
          alt="Image 2"
        />
        <img
          className="h-48 w-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500"
          src="https://thecuriousspirit.net/cdn/shop/products/LautusSparklingroseandGorgeousSparkling_600x600_crop_center.png?v=1666083394"
          alt="Image 3"
        />
        <img
          className="h-48 w-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500"
          src="https://hips.hearstapps.com/hmg-prod/images/best-rose-wine-elle1-1625733782.jpg?crop=0.502xw:1.00xh;0.147xw,0&resize=640:*"
          alt="Image 4"
        />
        <img
          className="h-48 w-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500"
          src="https://www.drinksupermarket.com/media/catalog/product/cache/8b581ff15af3d0f5c66f4d11bd96034e/m/a/mateus_rose_wine_75cl.jpg"
          alt="Image 5"
        />
        <img
          className="h-48 w-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHOraGegFo17vr82IHxzfNO6cofGAgBe8OWA&usqp=CAU"
          alt="Image 5"
        />
        <img
          className="h-48 w-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHuvM3NfbZpz5rszHjWOsa7Sh5giSfJtoIjQ&usqp=CAU"
          alt="Image 5"
        />
        <img
          className="h-48 w-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnNSRte_FxnUrKMYUz2yg_g741yPJ8cBCj6Q&usqp=CAU"
          alt="Image 5"
        />
        <img
          className="h-48 w-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500"
          src="https://popupwine.com.sg/cdn/shop/files/salin-domaine-de-tamary-cotes-de-provence-rose-2021-provence-france-6-pack-value-pop-up-wine-2.jpg?v=1698056830"
          alt="Image 5"
        />
        <img
          className="h-48 w-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500"
          src="https://images.ctfassets.net/zpx0hfp3jryq/4Us8nGMda8vJSWpTuvxxsI/069f297aaafa479b1c5cf8004df72aa8/sweet-rose-wine-1999-andre-beaufort-a-ambonnay-grand-cru-doux-rose.jpg?fm=jpg&fl=progressive"
          alt="Image 5"
        />
      </div>
    </>
  );
}

export default ImageSlide;
