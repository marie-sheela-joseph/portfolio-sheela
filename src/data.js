export const data = {
    skills: [
        "React",
        "JavaScript",
        "ES6+",
        "CSS 3",
        "HTML 5",
        "Redux Tool Kit",
        "Context API",
        "Nodejs",
        "Express",
        "MongoDB Atlas",
        "PostgreSQL",
        "Git",
        "GitHub",
        "Docker",
        "Github Actions",
        "Firebase Hosting",
        "Firebase Authentication",
        "Jira"
    ],
    projects: [
        {
            id: 1,
            title: "Inventory Filtering",
            link: "https://map-inventory-filter-sheela.web.app/",
            imgSrc: "./assets/inventory.png",
            details: {
                "skills": {
                    "Front End": "React, HTML 5, CSS 3, javascript, Responsive Web Design",
                    "Version Control": "Git, GitHub",
                },
                "description": "supermarket Inventory filtering to practice map data structure",
                "status": "completed"
            },
            gitHubLink: "https://github.com/marie-sheela-joseph/map-data-structure-practice",
            gitHubRepositoryStatus: "public"
        },
        {
            id: 2,
            title: "Agro Harvest",
            link: "https://agro-harvest-sheela.web.app/",
            imgSrc: "./assets/agroHarvest.png",
            details: {
                "skills": {
                    "Front End": "React, HTML 5, CSS 3, javascript, Responsive Web Design",
                    "Version Control": "Git, GitHub",
                    "Continuous Integration / Continuous Deployment": "Docker, Docker Hub, Github Actions",
                    "Docker Image": "docker pull mariesheela/agro-harvest-react:main",
                },
                "description": "Landing page of Agriculture website to practice thinking in react- components and jsx",
                "status": "completed"
            },
            gitHubLink: "https://github.com/marie-sheela-joseph/agro-harvest-react",
            gitHubRepositoryStatus: "public"
        },
        {
            id: 3,
            title: "Weather",
            link: "https://weather-ts-sheela.web.app/",
            imgSrc: "./assets/weather.png",
            details: {
                "skills": {
                    "Front End": "TypeScript, React, HTML 5, CSS 3, javascript, Responsive Web Design",
                    "Version Control": "Git, GitHub",
                    "Continuous Integration / Continuous Deployment": "Docker, Docker Hub, Github Actions",
                    "Docker Image": "docker pull mariesheela/weather-ts:main",
                },
                "description": "Access online weather API, get weather details of any city to practice adding Typescript with React",
                "status": "completed"
            },
            gitHubLink: "https://github.com/marie-sheela-joseph/weather-TS",
            gitHubRepositoryStatus: "public"
        },
        {
            id: 4,
            title: "Amazon clone",
            link: "https://ama-zon-clone-ts-sheela.web.app/",
            imgSrc: "./assets/amazon.png",
            details: {
                "skills": {
                    "Front End": "React, Typescript, HTML 5, CSS 3, javascript, Responsive Web Design",
                    "Version Control": "Git, GitHub",
                    "Continuous Integration / Continuous Deployment": "Docker, Docker Hub, Github Actions",
                    "Docker Image": "docker pull mariesheela/amazon-clone-ts:main",
                },
                "description": "A website resembling Amazon. It has authentication and can add items to cart. To practice ContextAPI , Typescript, Firebase authentication, docker",
                "status": "completed"
            },
            gitHubLink: "https://github.com/marie-sheela-joseph/amazon-clone-ts",
            gitHubRepositoryStatus: "public"
        },
        {
            id: 5,
            title: "Food",
            link: "https://food-chow-sheela.web.app/",
            imgSrc: "./assets/food.png",
            details: {
                "skills": {
                    "Front End": "React, HTML 5, CSS 3, javascript, Typescript, Responsive Web Design, react-router",
                    "Back End": "Node, Express",
                    "Database": "MongoDB Atlas",
                    "Testing": "Jest, React Testing Library",
                    "Version Control": "Git, GitHub",
                    "Project Management": "Jira",
                    "Continuous Integration / Continuous Deployment": "Docker, Docker Hub, Github Actions",
                    "Docker Image": "docker pull mariesheela/food-chow:main",
                },
                "description": `Full Stack Web application to place food delivery orders from Multi cuisine restaurants in Paris.`,
                "features": [`User can place orders from restaurants`,
                    `View list of past orders`,
                    `Submit rating of past orders`,
                    `Read blogs, filter blogs by category`,
                    `Filter Restaurants by cuisine`,
                    `Reorder any older order with one click`],
                "constraintsEnforced": [`User can add items from same restaurant only to the cart`,
                    `For each order user can select items from only one restaurant`,
                    `Minimum order amount for restaurant must satisfy to place order`],
                "technicalHighlights": `Includes image Carousel, accordion, owl Carousel, routing, paging and other features.`,
                "status": "in progress",
                "upcomingFeatures": [`Firebase authentication`, `Add map`, `Careers page`, `and many more...`]
            },
            gitHubLink: "https://github.com/marie-sheela-joseph/food-chow-react",
            gitHubRepositoryStatus: "private"
        }
    ]
}