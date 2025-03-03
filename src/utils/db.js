export const store = [
    {
      "id": 1,
      "imgSrc": "https://source.unsplash.com/300x200/?skirt",
      "category": "Skirts",
      "name": "Pleated Midi Skirt",
      "size": "M",
      "color": "Black",
      "discounted_price": "45.99",
      "actual_price": "65.00",
      "quantity": 1
    },
    {
      "id": 2,
      "imgSrc": "https://source.unsplash.com/300x200/?blouse",
      "category": "Blouse",
      "name": "Silk Button-Up Blouse",
      "size": "S",
      "color": "White",
      "discounted_price": "39.99",
      "actual_price": "55.00",
      "quantity": 1
    },
    {
      "id": 3,
      "imgSrc": "https://source.unsplash.com/300x200/?slippers",
      "category": "Slippers",
      "name": "Comfy Home Slippers",
      "size": "L",
      "color": "Gray",
      "discounted_price": "19.99",
      "actual_price": "29.99",
      "quantity": 1
    },
    {
      "id": 4,
      "imgSrc": "https://source.unsplash.com/300x200/?denim+skirt",
      "category": "Skirts",
      "name": "Denim A-Line Skirt",
      "size": "L",
      "color": "Blue",
      "discounted_price": "49.99",
      "actual_price": "70.00",
      "quantity": 1
    },
    {
      "id": 5,
      "imgSrc": "https://source.unsplash.com/300x200/?lace+blouse",
      "category": "Blouse",
      "name": "Lace Trim Blouse",
      "size": "M",
      "color": "Beige",
      "discounted_price": "34.99",
      "actual_price": "50.00",
      "quantity": 1
    },
    {
      "id": 6,
      "imgSrc": "https://source.unsplash.com/300x200/?fluffy+slippers",
      "category": "Slippers",
      "name": "Fluffy Bunny Slippers",
      "size": "M",
      "color": "Pink",
      "discounted_price": "24.99",
      "actual_price": "35.00",
      "quantity": 1
    }
  ]

  export const listProducts = () =>{
    return store;
  }

  export const places = [
    {
      id: 1,
      name: "BluCabana Restaurant & Cafe",
      img: "https://media-cdn.tripadvisor.com/media/photo-s/1c/1e/7e/4a/new-menu.jpg",
      tags: ["restaurant", "cafe", "Mediterranean cuisine", "bar", "outdoor seating"],
      address: "1322 Shehu Yar'adua Way, Mabushi, Abuja, Nigeria",
      rating: 4.0,
      category: "restaurant",
      description: "BluCabana offers a blend of Mediterranean dishes and a relaxing ambiance, featuring both indoor and outdoor seating areas. It's an ideal spot for family outings, with amenities like a swimming pool and a children's play area."
    },
    {
      id: 2,
      name: "Cilantro Abuja",
      img: "https://th.bing.com/th/id/OIP.EvDXFWMefbLHu3P1Kphc5gHaEK?rs=1&pid=ImgDetMain",
      tags: ["restaurant", "Indian cuisine", "Asian cuisine", "fine dining", "outdoor seating"],
      address: "12 Amazon Street, Maitama, Abuja, Nigeria",
      rating: 4.5,
      category: "restaurant",
      featured: true,
      description: "Cilantro is renowned for its authentic Indian and Asian dishes, served in an elegant setting. The restaurant boasts a beautiful outdoor seating area, perfect for evening dinners."
    },
    {
      id: 3,
      name: "Serendib Restaurant & Bar",
      img: "https://media-cdn.tripadvisor.com/media/photo-s/19/60/d8/2d/serendib.jpg",
      tags: ["restaurant", "bar", "Indian cuisine", "Asian cuisine", "rooftop seating"],
      address: "No. 6, Asa Street, Maitama, Abuja, Nigeria",
      rating: 4.5,
      category: "restaurant",
      description: "Serendib offers a fusion of Indian and Asian cuisines, complemented by a well-stocked bar. Its rooftop seating provides a panoramic view of the city, making it a popular choice for evening hangouts."
    },
    {
      id: 4,
      name: "The Secret Garden",
      img: "https://media-cdn.tripadvisor.com/media/photo-s/1b/29/c6/16/secret-garden.jpg",
      tags: ["restaurant", "pizzeria", "outdoor seating", "live music"],
      address: "Riverplate Park, Ahmadu Bello Way, Wuse II, Abuja, Nigeria",
      rating: 4.3,
      category: "hangout",
      description: "Nestled within Riverplate Park, The Secret Garden is known for its delicious pizzas and serene outdoor ambiance. Occasionally, guests can enjoy live band performances and karaoke nights."
    },
    {
      id: 5,
      name: "Nkoyo Restaurant",
      img: "https://media-cdn.tripadvisor.com/media/photo-s/0e/1e/85/3e/nkoyo.jpg",
      tags: ["restaurant", "Nigerian cuisine", "traditional decor", "fine dining"],
      address: "1 Bathurst Street, K-City Plaza, Abuja, Nigeria",
      rating: 4.4,
      category: "restaurant",
      description: "Nkoyo celebrates Nigerian culinary heritage, offering traditional dishes in a setting adorned with local art and decor. It's a go-to place for those seeking an authentic Nigerian dining experience."
    },
    {
      id: 6,
      name: "The Pasha",
      img: "https://media-cdn.tripadvisor.com/media/photo-s/17/ef/c2/d5/the-pasha.jpg",
      tags: ["restaurant", "Mediterranean cuisine", "lounge", "outdoor seating"],
      address: "11 Cassandra Crescent, Off Usuma Street, Maitama, Abuja, Nigeria",
      rating: 4.2,
      category: "restaurant",
      description: "The Pasha serves Mediterranean dishes in a cozy environment, featuring both indoor and outdoor seating. It's a favored spot for casual hangouts and intimate gatherings."
    }
];


export const events =[
  {
    "id": 1,
    "name": "Abuja Food Fest 2025",
    "image": "https://tse3.mm.bing.net/th?id=OIP.gq-z19cM6K1P4MJVUkE-mwHaHa&pid=Api",
    "tags": ["Food", "Festival", "Culinary"],
    "excerpt": "Experience the best of Abuja’s culinary scene at the biggest food festival of the year!",
    "description": "The Abuja Food Fest 2025 brings together top chefs, food lovers, and culinary artists to celebrate diverse flavors. Enjoy tasting sessions, cooking demos, and food competitions in a lively atmosphere.",
    "date": "2025-05-18",
    "location": "Jabi Lake Park, Abuja",
    "isUpcoming": true,
    "isFeatured": false
  },
  {
    "id": 2,
    "name": "Made in Nigeria Fashion Expo",
    "image": "https://tse2.mm.bing.net/th?id=OIP.fystaqpzmfpLXUedcFHK7QHaHa&pid=Api",
    "tags": ["Fashion", "Exhibition", "Shopping"],
    "excerpt": "A showcase of Nigeria’s finest fashion and craftsmanship from top designers.",
    "description": "This fashion expo celebrates local designers and manufacturers, bringing together brands and buyers. Discover the latest trends, shop exclusive collections, and network with industry professionals.",
    "date": "2025-06-10",
    "location": "International Conference Centre, Abuja",
    "isUpcoming": true,
    "isFeatured": false
  },
  {
    "id": 3,
    "name": "Abuja Music Festival",
    "image": "https://tse2.mm.bing.net/th?id=OIP.isKlZGCrksCNjPbv5ZNLpgHaK5&pid=Api",
    "tags": ["Music", "Entertainment", "Concert"],
    "excerpt": "A thrilling night of live performances from Nigeria’s hottest artists.",
    "description": "The Abuja Music Festival brings together top artists and upcoming talents for an electrifying night of entertainment. Enjoy live bands, DJ sets, and amazing performances.",
    "date": "2024-12-15",
    "location": "Eagle Square, Abuja",
    "isUpcoming": false,
    "isFeatured": true
  },
  {
    "id": 4,
    "name": "Abuja International Film Festival",
    "image": "https://tse1.mm.bing.net/th?id=OIP.KJC-3ZNfBmdNC8qzDVPxLwHaCd&pid=Api",
    "tags": ["Film", "Cinema", "Arts"],
    "excerpt": "An annual celebration of global and Nigerian cinema.",
    "description": "The Abuja International Film Festival showcases films from Nigeria and beyond. Join industry experts, filmmakers, and enthusiasts for screenings, workshops, and networking events.",
    "date": "2024-10-20",
    "location": "Silverbird Cinemas, Abuja",
    "isUpcoming": false,
    "isFeatured": false
  },
  {
    "id": 5,
    "name": "Tech Connect Abuja",
    "image": "https://tse4.mm.bing.net/th?id=OIP.UQbtogHUYb0qXrTDwQFdnwHaE7&pid=Api",
    "tags": ["Technology", "Networking", "Conference"],
    "excerpt": "Bringing together innovators and entrepreneurs to shape the future of tech.",
    "description": "Tech Connect Abuja is the premier technology event that gathers startups, investors, and developers. Learn from industry leaders, explore new innovations, and connect with tech enthusiasts.",
    "date": "2024-09-25",
    "location": "Transcorp Hilton, Abuja",
    "isUpcoming": false,
    "isFeatured": false
  },
  {
    "id": 6,
    "name": "Abuja Art & Culture Exhibition",
    "image": "https://tse2.mm.bing.net/th?id=OIP.4WdFiyTYx2GJ9sq5IRGJjQHaE7&pid=Api",
    "tags": ["Art", "Culture", "Exhibition"],
    "excerpt": "An inspiring event showcasing Nigeria’s rich cultural heritage through art.",
    "description": "The Abuja Art & Culture Exhibition presents traditional and contemporary artworks from talented Nigerian artists. Enjoy live painting, sculpture displays, and interactive art sessions.",
    "date": "2024-08-12",
    "location": "National Museum, Abuja",
    "isUpcoming": false,
    "isFeatured": false
  }
];
  