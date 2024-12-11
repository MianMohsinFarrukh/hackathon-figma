import React from "react";

const LatestBlog: React.FC = () => {
    const blogs = [
        {
            id: 1,
            image: "/imges/bone.png",
            author: "SabarAli",
            date: "21 August 2020",
            title: "Top essential trends in 2021",
            description:
                "More off this less hello samlande lied much over tightly circa horse taped mighty.",
            link: "#",
        },
        {
            id: 2,
            image: "/imges/btwo.png",
            author: "Sufiawan",
            date: "21 August 2020",
            title: "Top essential trends in 2021",
            description:
                "More off this less hello samlande lied much over tightly circa horse taped mighty.",
            link: "#",
        },
        {
            id: 3,
            image: "/imges/bthree.png",
            author: "SabarAli",
            date: "21 August 2020",
            title: "Top essential trends in 2021",
            description:
                "More off this less hello samlande lied much over tightly circa horse taped mighty.",
            link: "#",
        },
    ];

    return (
        <section className="py-12 mb-12">
            <div className="container mx-auto text-center">
                <h1 className="text-center text-xl sm:text-xl md:text-2xl mt-4 font-bold text-purple-900 mb-10">
                    Leatest Blog
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {blogs.map((blog) => (
                        <div
                            key={blog.id}
                            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                        >
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6 text-left">
                                <div className="flex items-center text-sm text-gray-500 mb-2">
                                    <span className="mr-2 text-pink-500">{blog.author}</span>
                                    <span className="mx-2">|</span>
                                    <span>{blog.date}</span>
                                </div>
                                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                                    {blog.title}
                                </h3>
                                <p className="text-sm text-gray-600 mb-4">{blog.description}</p>
                                <a
                                    href={blog.link}
                                    className="text-pink-500 font-semibold text-sm hover:underline"
                                >
                                    Read More
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LatestBlog;
