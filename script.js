function circleAnimation() {
    var circlefollow = document.querySelector("#circle");
    var hero = document.querySelector("#hero")

    hero.addEventListener("mouseenter", function () {
        circlefollow.style.opacity = 1;
        circlefollow.style.scale = 1.5;
    })
    hero.addEventListener("mouseleave", function () {
        circlefollow.style.opacity = 0;
        circlefollow.style.scale = 0;
    })

    hero.addEventListener("mousemove", function (dets) {
        circlefollow.style.left = dets.clientX + "px";
        circlefollow.style.top = dets.clientY + "px";
    })
};
circleAnimation();

function coursesecCreation(){
    const codingCourses = [
        {
        image: "https://media.licdn.com/dms/image/D4E12AQFAnM7JNyFDQg/article-cover_image-shrink_720_1280/0/1708148800306?e=2147483647&v=beta&t=YVyEgQPbE7DUjDtMEQ5DBs_NUxWX_z6mWn72IqCH03Q",
        title: "Web Development",
        description: "Learn the fundamentals of web development using React. This course covers everything from basic HTML, CSS, and JavaScript to advanced React concepts.",
        Price: "799/-",
        duration: "30days"
    },
    {
        image: "https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F4anecy5mdl4pho8w7519.jpg",
        title: "Backend Development",
        description: "Master backend development with Node.js. This course teaches you how to build scalable server-side applications.",
        Price: "999/-",
        duration: "45days"
    },
    {
        image: "https://static.javatpoint.com/blog/images/how-to-be-a-full-stack-developer.png",
        title: "Full Stack Development",
        description: "Become proficient in full stack development using the MERN stack. Learn how to build complete web applications.",
        Price: "1499/-",
        duration: "60days"
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm0I0J-HV1yNISHsxTwc_TFjTxQkVCp85tRA&s",
        title: "Database Management",
        description: "Learn to manage databases using MongoDB. course covers database design, CRUD operations, and more to master MongoDB.",
        Price: "699/-",
        duration: "25days"
    }];
    
    const businessCourses = [
        {
            image:"https://i.ytimg.com/vi/XdAMRDBpZv4/maxresdefault.jpg",
            title: "Digital Marketing Basics",
            description: "Learn the fundamentals of digital marketing, including SEO, social media, and email marketing.",
            price: "499/-",
            duration: "30days"
        },
        {
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDzNNp3ivHV-nwEwfWM7mQKqoCh-Vv40i_oQ&s",
            title: "Advanced SEO Techniques",
            description: "Deep dive into advanced SEO strategies, keyword research, and on-page and off-page optimization.",
            price: "699/-",
            duration: "45days"
        },
        {
            image:"https://cdn.educba.com/academy/wp-content/uploads/2016/09/Ecommerce-Strategy.jpg",
            title: "E-commerce Strategies",
            description: "Master the strategies for setting up and running a successful e-commerce business, from product listing to customer engagement.",
            price: "799/-",
            duration: "40days"
        },
        {
            image:"https://risingkashmir.com/wp-content/uploads/2024/03/bda2e888-4357-4f3b-8fea-689df9d99318.jpeg",
            title: "Startup Entrepreneurship",
            description: "Gain insights into starting and scaling a startup, including business planning, fundraising, and market analysis.",
            price: "999/-",
            duration: "60days"
        }
    ];
    
    const uiuxcourses = [
        {
            image: "https://i.ytimg.com/vi/GQS7wPujL2k/maxresdefault.jpg",
            title: "Graphic Design Basics",
            description: "Learn the principles of graphic design, including typography, color theory, and layout.",
            price: "599/-",
            duration: "30days"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBp9mYPOaDWOJJtkMuzX_sgjMOVcQgeRPEJw&s",
            title: "UI Design for Beginners",
            description: "Understand the fundamentals of user interface design, including wireframing, prototyping, and design tools.",
            price: "699/-",
            duration: "40days"
        },
        {
            image: "https://miro.medium.com/v2/resize:fit:1400/1*Ly6eqzxyRfcSu786yso7VQ.png",
            title: "UX Research Methods",
            description: "Explore various user experience research methods to understand user behavior and improve product design.",
            price: "799/-",
            duration: "45days"
        },
        {
            image: "https://i.ytimg.com/vi/B-ytMSuwbf8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBaZqfhf4UpUEqKsNepU9r1NhL-jA",
            title: "Web Design Essentials",
            description: "Learn how to design aesthetically pleasing and functional websites using modern design techniques and tools.",
            price: "899/-",
            duration: "50days"
        }
    ];

    var courseSection1 = document.querySelector("#course-container");
    codingCourses.map((item) => {
    
        var courseinfo = document.createElement("div");
        courseinfo.classList.add("course-sec1");
    

        var img = document.createElement("img");
        img.src = item.image;
        courseinfo.appendChild(img);

        var title = document.createElement("h2");
        title.textContent = item.title;
        courseinfo.appendChild(title)
    
        var description = document.createElement("p");
        description.textContent = item.description;
        courseinfo.appendChild(description);
    
        var price = document.createElement("p");
        price.textContent = `Price : ${item.Price}`;
        courseinfo.appendChild(price);
    
        var duration = document.createElement("p");
        duration.textContent = ` Duration : ${item.duration}`;
        courseinfo.appendChild(duration);

        var addtocartbtn = document.createElement("button");
        addtocartbtn.textContent = "Add to Cart";
        addtocartbtn.classList.add("add-to-cart-btn");
        addtocartbtn.addEventListener("click",function(){
            alert(item.title + "added to cart");
        });
        courseinfo.appendChild(addtocartbtn);
    
        courseSection1.appendChild(courseinfo);
    });
    
    var courseSection2 = document.querySelector("#course-container2");
    businessCourses.map((item) => {
        var courseinfo2 = document.createElement("div");
        courseinfo2.classList.add("course-sec2");

        var img = document.createElement("img");
        img.src = item.image;
        courseinfo2.appendChild(img);

        var title = document.createElement("h2");
        title.textContent = item.title;
        courseinfo2.appendChild(title);

        var description = document.createElement("p");
        description.textContent = item.description;
        courseinfo2.appendChild(description);

        var price = document.createElement("p");
        price.textContent = `Price: ${item.price}`;
        courseinfo2.appendChild(price);

        var duration = document.createElement("p");
        duration.textContent = `Duration: ${item.duration}`;
        courseinfo2.appendChild(duration);

        var addtocartbtn = document.createElement("button");
        addtocartbtn.textContent = "Add to Cart";
        addtocartbtn.classList.add("add-to-cart-btn");
        addtocartbtn.addEventListener("click", function () {
            alert(item.title + " added to cart");
        });
        courseinfo2.appendChild(addtocartbtn);

        courseSection2.appendChild(courseinfo2);
    });

    var courseSection3 = document.querySelector("#course-container3");
    uiuxcourses.map((item) => {
        
        var courseinfo3 = document.createElement("div")
        courseinfo3.classList.add("course-sec3");

        var img = document.createElement("img")
        img.src= item.image;
        courseinfo3.appendChild(img);

        var title = document.createElement("h2")
        title.textContent = item.title;
        courseinfo3.appendChild(title);

        var description = document.createElement("p")
        description.textContent = item.description;
        courseinfo3.appendChild(description);

        var price = document.createElement("p")
        price.textContent = `Price: ${item.price}`;
        courseinfo3.appendChild(price);

        var duration = document.createElement("p")
        duration.textContent = `Duration: ${item.duration}`;
        courseinfo3.appendChild(duration);

        var addtocartbtn = document.createElement("button");
        addtocartbtn.textContent = "Add to Cart";
        addtocartbtn.classList.add("add-to-cart-btn");
        addtocartbtn.addEventListener("click", function () {
            alert(item.title + " added to cart");
        });
        courseinfo3.appendChild(addtocartbtn);

        courseSection3.appendChild(courseinfo3);
    });
}
coursesecCreation();

function offersecCreation(){
    const offers = [
        {
            title:"Programming Combo",
            description:"Get all 4 programming course at flexible price, and updrade your skills",
            benefits:{
                cost:"low-cost",
                access:"life time accces",
                notes:"get notes",
            },
            price:"1998/-"
        },
        {
            title:"Marketing & Business Combo",
            description:"Get all 4 Marketing & Business course at low price.",
            benefits:{
                cost:"low-cost",
                access:"life time accces",
                notes:"get notes",
            },
            price:"1498/-"
        },
        {
            title:"Design & UX Combo",
            description:"Get all 4 Design & UX course at flexible price, and updrade your skills",
            benefits:{
                cost:"low-cost",
                access:"life time accces",
                notes:"get notes",
            },
            price:"1498/-"
        }
    ];

    var offerSection = document.querySelector("#offers");

    offers.map((item)=>{

        var offerinfo = document.createElement("div");
        offerinfo.classList.add("offers-section");
    
        var title = document.createElement("h2");
        title.textContent = item.title;
        offerinfo.appendChild(title);

        var description = document.createElement("p");
        description.textContent = item.description;
        offerinfo.appendChild(description);

        var cost = document.createElement("p");
        cost.textContent = item.benefits.cost;
        offerinfo.appendChild(cost);

        var access = document.createElement("p");
        access.textContent =item.benefits.access;
        offerinfo.appendChild(access);

        var notes = document.createElement("p");
        notes.textContent = item.benefits.notes;
        offerinfo.appendChild(notes)

        var price = document.createElement("p");
        price.textContent = `Price: ${item.price}`;
        price.classList.add("offer-price");
        offerinfo.appendChild(price);

        
        var addtocartbtn2 = document.createElement("button");
        addtocartbtn2.textContent = "Add to Cart";
        addtocartbtn2.classList.add("add-to-cart-btn2");
        addtocartbtn2.addEventListener("click", function () {
            alert(item.title + " added to cart");
        });
        offerinfo.appendChild(addtocartbtn2);

        offerSection.appendChild(offerinfo);
    });
   

}
offersecCreation();