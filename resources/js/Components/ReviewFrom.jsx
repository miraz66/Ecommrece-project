import clsx from "clsx";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";

const ratings = [
    {
        value: 1,
        rating: [1],
    },
    {
        value: 2,
        rating: [1, 2],
    },
    {
        value: 3,
        rating: [1, 2, 3],
    },
    {
        value: 4,
        rating: [1, 2, 3, 4],
    },
    {
        value: 5,
        rating: [1, 2, 3, 4, 5],
    },
];

export default function ReviewFrom() {
    const [rating, setRating] = useState();
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [operator, setOperator] = useState("+");
    const [answer, setAnswer] = useState("");

    const handleRating = (value) => {
        setRating(value); // Set rating on click
    };

    useEffect(() => {
        generateCaptcha();
    }, []);

    const generateCaptcha = () => {
        const randomNum1 = Math.floor(Math.random() * 10) + 1; // 1-10
        const randomNum2 = Math.floor(Math.random() * 10) + 1; // 1-10
        const randomOperator =
            Math.random() > 0.5 ? "+" : Math.random() > 0.5 ? "-" : "*"; // Randomly choose + or ÷ - *

        setNum1(randomNum1);
        setNum2(randomNum2);
        setOperator(randomOperator);
    };

    return (
        <div>
            <form>
                <div>
                    <label htmlFor="rating">
                        Your rating <span className="text-red-600">*</span>
                    </label>
                    <div className="flex gap-6 mt-4">
                        {ratings.map((rate) => (
                            <div
                                key={rate.value}
                                className="flex gap-1.5"
                                onClick={() => handleRating(rate.value)}
                            >
                                {rate.rating.map((value) => (
                                    <Star
                                        key={value}
                                        size={18}
                                        className={clsx(
                                            "cursor-pointer transition-all duration-200",
                                            rating === rate.value
                                                ? "text-yellow-500"
                                                : "text-gray-300"
                                        )}
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-10">
                    <label htmlFor="review">
                        Your Review <span className="text-red-600">*</span>
                    </label>
                    <textarea
                        id="review"
                        name="review"
                        rows="5"
                        className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"
                    />
                </div>

                <div className="mt-4 flex gap-4">
                    <div className="w-1/2">
                        <label htmlFor="name">
                            Your Name <span className="text-red-600">*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"
                        />
                    </div>

                    <div className="w-1/2">
                        <label htmlFor="email">
                            Your Email <span className="text-red-600">*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"
                        />
                    </div>
                </div>

                <div className="mt-6 flex items-center">
                    <input
                        type="checkbox"
                        name="remember"
                        id="remember"
                        className="focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300 rounded"
                    />
                    <label
                        htmlFor="remember"
                        className="ml-2 text-sm text-gray-600 dark:text-gray-400"
                    >
                        Save my name, email, and website in this browser for the
                        next time I comment.
                    </label>
                </div>

                <div className="mt-8">
                    <p>Please enter an answer in digits:</p>
                    <div className="flex gap-4 mt-2 items-center">
                        <label
                            htmlFor="captcha"
                            className="mt-2 font-semibold text-gray-600"
                        >
                            {num1} {operator} {num2} =
                        </label>
                        <input
                            type="text"
                            name="captcha"
                            id="captcha"
                            onChange={(e) => setAnswer(e.target.value)}
                            value={answer}
                            className="mt-2 w-16 block rounded-md border-gray-300 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"
                        />
                    </div>
                </div>

                <div className="mt-6">
                    <button
                        type="submit"
                        className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}
