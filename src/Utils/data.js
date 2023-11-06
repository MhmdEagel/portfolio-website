const clients = () => {
    return [
        {
            id: 1,
            webImg: '/clients/1.jpg',
            name: "Amelia Watson",
            job: "Designer"
        },
        {
            id: 2,
            webImg: '/clients/2.jpg',
            name: "asep luther",
            job: "Mobile Developer"
        },
        {
            id: 3,
            webImg: '/clients/3.jpg',
            name: "bambang sugeni",
            job: "UI/UX Expert"
        },
        {
            id: 4,
            webImg: '/clients/4.jpg',
            name: "farhan kebab",
            job: "CEO Of Kebab Inc."
        },
        {
            id: 5,
            webImg: '/clients/5.jpg',
            name: "christine",
            job: "Team Lead Manager"
        },
        {
            id: 6,
            webImg: '/clients/6.jpg',
            name: "suci smith",
            job: "Data Analyst"
        },
    ]
}

const academicList = () => {
    return [
      {
        qualific: "Computer Science & Engineering",
        inst: "Cambridge University",
        year: "2016-2019",
      },
      {
        qualific: "Secondary School",
        inst: "St Paul's Girls' School, Hammersmith",
        year: "2013-2016",
      },
      {
        qualific: "Middle School",
        inst: "Malvern St James School",
        year: "2010-2013",
      },
    ];
}

const jobList = () => {
    return [
      {
        job: "Front-end Web Developer Internship",
        inst: "Google Inc.",
        year: "2021-2022",
      },
      {
        job: "Junior Front-end Web Developer",
        inst: "Gojek Indonesia",
        year: "2023-2026",
      },
      {
        job: "Senior Front-end Web Developer",
        inst: "Ma'sim",
        year: "2026-2030",
      },
    ];
}

const storeItems = () => {
  return [
    {
      id: 1,
      image: "/store/cap.jpg",
      name: "Official Cap",
      price: "99.9",
      desc: "Bring out your style with our official cap"
    },
    {
      id: 2,
      image: "/store/backpack.jpg",
      name: "Official Backpack",
      price: "99.9",
      desc: "Bring out your style with our official backpack"
    },
    {
      id: 3,
      image: "/store/headphones.jpg",
      name: "Official Headphones",
      price: "99.9",
      desc: "Enchance your audio needs with our official headphone"
    },
    {
      id: 4,
      image: "/store/hoodie.jpg",
      name: "Official Hoodie",
      price: "99.9",
      desc: "Bring your coding to a new experience with our official hoodie"
    },
    {
      id: 5,
      image: "/store/mug.jpg",
      name: "Official Mug",
      price: "99.9",
      desc: "A mug that will accompany you through your coding journey!"
    },
    {
      id: 6,
      image: "/store/t-shirt.jpg",
      name: "Official T-Shirt",
      price: "99.9",
      desc: "A nice t-shirt for your comfort!"
    },
  ]
}

export {clients, academicList, jobList, storeItems};