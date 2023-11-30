const Adds = () => {
  return (
    <div className="carousel-container overflow-hidden relative w-full">
      <div className="carousel-wrapper flex">
        {advertisements.map((item) => {
          <div className="carousel-item w-full flex-shrink-0" key={item.key}>
            <img
              src={item.link}
              alt="Carousel Item 1"
              className="w-full h-auto"
            />
            <h1 className="text-black">{item.title}</h1>
            <span className="text-black">{item.description}</span>
          </div>;
        })}
      </div>
      <h1>TEST</h1>
    </div>
  );
};

export default Adds;

const advertisements = [
  {
    id: 1,
    title: "Exclusive Deals!",
    image: "url-to-image-1.jpg",
    description: "Shop now and get exclusive discounts on our latest products.",
    link: "https://www.shutterstock.com/image-vector/mega-sale-advertiving-banner-3d-illustration-2000590271?irclickid=Sru3YBU9jxyPWfrxAQ2SGw%3AWUkFX5RVmUR5mxw0&irgwc=1&pl=4061861-42119&utm_campaign=Hypeee&utm_content=42119&utm_medium=Affiliate&utm_source=4061861&utm_term=",
  },
  {
    id: 2,
    title: "New Arrivals!",
    image: "url-to-image-2.jpg",
    description: "Check out our latest arrivals. Limited stock available!",
    link: "https://www.shutterstock.com/image-vector/wireless-ear-headphones-ad-3d-illustration-2130630650?irclickid=Sru3YBU9jxyPWfrxAQ2SGw%3AWUkFX5RSfUR5mxw0&irgwc=1&pl=4061861-42119&utm_campaign=Hypeee&utm_content=42119&utm_medium=Affiliate&utm_source=4061861&utm_term=",
  },
  {
    id: 3,
    title: "Summer Sale!",
    image: "url-to-image-3.jpg",
    description:
      "Beat the heat with our summer sale. Up to 50% off on selected items.",
    link: "https://www.shutterstock.com/shutterstock/photos/1537955021/display_1500/stock-vector-modern-banner-of-gadgets-sale-products-vector-illustration-of-a-business-poster-with-different-d-1537955021.jpg",
  },
  // Add more advertisement objects as needed
];
