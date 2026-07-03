export interface Book {
    id: string;
    slug?: string;
    title: string;
    subtitle?: string;
    author: string;
    illustrator: string;
    description: string;
    shortDescription?: string;
    imageSrc: string;
    retailerName: string;
    purchaseUrl: string;
    featured: boolean;
    newRelease?: boolean;
    themes?: string[];
}

export const featuredBooks: Book[] = [
    {
        id: "amazing-friends",
        title: "Zoila the Zebra Meets Amazing Friends of All Abilities",
        subtitle: "A Story About Special Needs",
        author: "Juanita Quiñones Gándara, M.Ed.",
        illustrator: "Charlote Ellie",
        description: "Have you ever wished for a world where everyone is accepted just as they are? Zoila has. Inspired by her mama's golden rule, Zoila sets out to make her school a kinder and more inclusive place. With help from Armando the Armadillo and her teacher, Mrs. C. Yañez, she begins a classroom pen-pal project that brings everyone closer together.",
        shortDescription: "Zoila sets out to make her school a kinder and more inclusive place. With help from Armando the Armadillo and her teacher, Mrs. C. Yañez, she begins a classroom pen-pal project that brings everyone closer together.",
        imageSrc: "/images/7422.png",
        retailerName: "Amazon",
        purchaseUrl: "https://www.amazon.com/Zoila-Amazing-Friends-Abilities-Special/dp/B0H6WZJS7Q/ref=sr_1_1?crid=PGKW3KBM0PHK&dib=eyJ2IjoiMSJ9.TyIZyAsJHvzS3GlfZyNmSQ.Rwy-9_ZAEwtGjHJajv1fpuQ1-LgNlOpNXbFUtwK7mGw&dib_tag=se&keywords=zoila+meets+amazing+friends&qid=1783119830&s=digital-text&sprefix=zoila+meets+amazing+friend%2Cdigital-text%2C163&sr=1-1",
        featured: true,
        newRelease: true,
        themes: [
            "Respect and celebrate differences",
            "Every voice matters",
            "One idea can build community"
        ]
    },
    {
        id: "wow-words",
        title: "Zoila the Zebra’s WOW Words of Wisdom",
        subtitle: "Words of Wisdom",
        author: "Juanita Quiñones Gándara, M.Ed. & Mark Bowles, Ph.D.",
        illustrator: "Christopher Dart",
        description: "Zoila's WOW message aligns with the CASEL evidence based model. Follow Zoila the Zebra as she tells her story about the journey from Mexico to the United States in her search of the American Dream. Through her acronym \"WOW,\" Zoila lovingly and joyfully expresses her Words of Wisdom. She inspires children to have the courage to do the right thing, treat others with respect, and live a bully-free life.",
        shortDescription: "Follow Zoila the Zebra as she tells her story about the journey from Mexico to the United States in her search of the American Dream. Through her acronym \"WOW,\" she inspires children to do the right thing, treat others with respect, and live a bully-free life.",
        imageSrc: "/images/book-wow.png",
        retailerName: "Amazon",
        purchaseUrl: "https://www.amazon.com/Zoila-Zebras-WOW-Words-Wisdom/dp/1984962310/ref=sr_1_1?keywords=zoila+the+zebra&qid=1569363314&sr=8-1",
        featured: false,
        newRelease: false,
        themes: [
            "Anti-Bullying",
            "Respect",
            "Courage to do the right thing"
        ]
    },
    {
        id: "armadillo-tears",
        title: "How to Stop Armadillo Tears",
        author: "Juanita Quiñones Gándara, M.Ed. & Mark Bowles, Ph.D.",
        illustrator: "Christopher Dart",
        description: "We have all experienced \"Armadillo Tears.\" This is the story about an armadillo named Armando who feels he has no friends and is being bullied. Zoila helps stop his tears and reveals the wonderfully special abilities that Armando has within him. This book teaches children the benefits of bringing new people (amigos) into their circle of friends and how to discover the uniqueness within everyone.",
        shortDescription: "Armando the armadillo feels he has no friends and is being bullied. Zoila helps stop his tears and reveals his special abilities, teaching kids the benefits of inclusivity.",
        imageSrc: "/images/book-armadillo.png",
        retailerName: "Amazon",
        purchaseUrl: "https://www.amazon.com/Stop-Armadillo-Tears-Mark-Bowles/dp/1650232810/ref=sr_1_1?dchild=1&keywords=how+to+stop+armadillo+tears&qid=1584581123&sr=8-1",
        featured: false,
        newRelease: false,
        themes: [
            "Inclusivity",
            "Friendship",
            "Celebrating differences"
        ]
    },
    {
        id: "avoid-getting-sick",
        title: "Zoila's Three Tricks to Help Avoid Getting Sick",
        author: "Juanita Quiñones Gándara, M.Ed. & Mark Bowles, Ph.D.",
        illustrator: "Christopher Dart",
        description: "What does Zoila do when she sees Armando not following basic prevention guidelines? She invents ways to make following health guidelines more fun! With her tricks, she helped her reluctant friend want to wear a mask, wash his hands, and keep a safe social distance. Zoila's tricks act as a guide for children during times when viruses spread through communities.",
        shortDescription: "Zoila invents fun tricks to help her friend Armando follow health guidelines like handwashing and social distancing, serving as an engaging guide for children.",
        imageSrc: "/images/book-sick.png",
        retailerName: "Amazon",
        purchaseUrl: "https://www.amazon.com/Zoilas-Three-Tricks-Avoid-Getting/dp/B08J5BHTVP/ref=sr_1_3?dchild=1&qid=1603156982&refinements=p_27%3AJuanita+Quinones+Gandara&s=books&sr=1-3&text=Juanita+Quinones+Gandara",
        featured: false,
        newRelease: false,
        themes: [
            "Health & Hygiene",
            "Safety Guidelines",
            "Healthy Habits"
        ]
    },
    {
        id: "raquel-courage",
        title: "The Magical Journey of Little Raquel La Churros' Courage of a Migrant Child",
        subtitle: "Courage of a Migrant Child",
        author: "Juanita Quiñones Gándara, M.Ed.",
        illustrator: "R.A. Monday",
        description: "Raquel is about to start a brand-new adventure in the United States! Moving from Cd. Juarez, Mexico, she is excited but nervous about her new school. As she struggles to find her voice, some classmates tease her. But with the love and encouragement of her family, Raquel works hard, embraces her heritage, and finds the courage to stand tall. A heartwarming story of resilience, family, and the beauty of diversity.",
        shortDescription: "Raquel moves from Cd. Juárez, Mexico, to the United States. She struggles to find her voice but with family support finds the courage to stand tall and embrace her heritage.",
        imageSrc: "/images/book-raquel.jpg",
        retailerName: "Barnes & Noble",
        purchaseUrl: "https://www.barnesandnoble.com/w/the-magical-journey-of-little-raquel-la-churros-courage-of-a-migrant-child-juanita-quii-ones-gandara/1147446693?ean=9798218529772",
        featured: false,
        newRelease: false,
        themes: [
            "Resilience",
            "Cultural Heritage",
            "Diversity & Inclusivity"
        ]
    }
];
